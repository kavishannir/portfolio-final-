import { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  PerspectiveCamera,
  Text,
  useTexture,
  Stars,
  Environment,
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Users, Award } from "lucide-react";
import * as THREE from "three";

interface Workshop {
  id: string;
  title: string;
  organizer: string;
  date: string;
  location: string;
  attendees: number | string;
  description: string;
  color: string;
  image: string;
  certificate?: string;
}

interface GlassCubeProps {
  workshop: Workshop;
  position: [number, number, number];
  index: number;
  onCubeClick: (workshop: Workshop, position: [number, number, number]) => void;
  isSelected: boolean;
  isHovered: boolean;
  onHover: (workshopId: string | null) => void;
}

// Texture Loader Component
const CubeWithTexture = ({
  workshop,
  position,
  index,
  onCubeClick,
  isSelected,
  isHovered,
  onHover,
}: GlassCubeProps) => {
  const texture = useTexture(workshop.image);
  return (
    <GlassCubeInner
      workshop={workshop}
      position={position}
      index={index}
      onCubeClick={onCubeClick}
      isSelected={isSelected}
      isHovered={isHovered}
      onHover={onHover}
      texture={texture}
    />
  );
};

// Individual Glass Cube Component
const GlassCubeInner = ({
  workshop,
  position,
  index,
  onCubeClick,
  isSelected,
  isHovered,
  onHover,
  texture,
}: GlassCubeProps & { texture: THREE.Texture }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const labelRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame(() => {
    // Make week label always face camera
    if (labelRef.current) {
      labelRef.current.lookAt(camera.position);
    }
  });

  const glowIntensity = isHovered || isSelected ? 2.5 : 1;
  const scale = isHovered || isSelected ? 1.15 : 1;
  const borderGlow = isHovered || isSelected ? "#00FFFF" : workshop.color;

  return (
    <Float
      speed={isHovered || isSelected ? 0 : 1.2}
      rotationIntensity={0}
      floatIntensity={isHovered || isSelected ? 0 : 0.25}
    >
      <group
        ref={groupRef}
        position={position}
        scale={scale}
        onPointerOver={() => onHover(workshop.id)}
        onPointerOut={() => onHover(null)}
        onClick={() => onCubeClick(workshop, position)}
      >
        {/* Outer glow aura */}
        <mesh>
          <boxGeometry args={[1.55, 1.55, 1.55]} />
          <meshStandardMaterial
            color={borderGlow}
            emissive={borderGlow}
            emissiveIntensity={glowIntensity * 0.3}
            transparent
            opacity={0.15}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Neon border wireframe on hover */}
        {(isHovered || isSelected) && (
          <mesh>
            <boxGeometry args={[1.48, 1.48, 1.48]} />
            <meshStandardMaterial
              color="#00FFFF"
              emissive="#00FFFF"
              emissiveIntensity={1.5}
              transparent
              opacity={0.6}
              wireframe
              wireframeLinewidth={2}
            />
          </mesh>
        )}

        {/* Main glass cube */}
        <mesh ref={meshRef}>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.15}
            roughness={0.1}
            metalness={0.95}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.9}
            thickness={0.5}
            ior={1.5}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Front face - Title */}
        <mesh position={[0, 0, 0.7]}>
          <planeGeometry args={[1.33, 1.33]} />
          <meshStandardMaterial
            color="#0B0C10"
            transparent
            opacity={0.85}
            emissive={workshop.color}
            emissiveIntensity={isHovered ? 0.4 : 0.15}
          />
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.105}
            color={isHovered ? "#EAEAEA" : workshop.color}
            anchorX="center"
            anchorY="middle"
            maxWidth={1.0}
            textAlign="center"
            outlineWidth={0.015}
            outlineColor="#000000"
            fontWeight="bold"
          >
            {workshop.title}
          </Text>
        </mesh>

        {/* Right face - Image */}
        <mesh position={[0.7, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[1.33, 1.33]} />
          <meshStandardMaterial
            map={texture}
            color="#ffffff"
            transparent
            opacity={0.9}
            emissive={workshop.color}
            emissiveIntensity={0.05}
          />
        </mesh>

        {/* Left face - Date */}
        <mesh position={[-0.7, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[1.33, 1.33]} />
          <meshStandardMaterial
            color="#0B0C10"
            transparent
            opacity={0.85}
            emissive={workshop.color}
            emissiveIntensity={0.15}
          />
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.125}
            color={workshop.color}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.015}
            outlineColor="#000000"
          >
            {workshop.date}
          </Text>
        </mesh>

        {/* Top face - Location */}
        <mesh position={[0, 0.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.33, 1.33]} />
          <meshStandardMaterial
            color="#0B0C10"
            transparent
            opacity={0.8}
            emissive={workshop.color}
            emissiveIntensity={0.15}
          />
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.095}
            color={workshop.color}
            anchorX="center"
            anchorY="middle"
            maxWidth={1.0}
            textAlign="center"
            outlineWidth={0.015}
            outlineColor="#000000"
          >
            {workshop.location}
          </Text>
        </mesh>

        {/* Bottom face - Organizer (subtle) */}
        <mesh position={[0, -0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.33, 1.33]} />
          <meshStandardMaterial
            color="#0B0C10"
            transparent
            opacity={0.6}
            emissive={workshop.color}
            emissiveIntensity={0.1}
          />
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.085}
            color={workshop.color}
            anchorX="center"
            anchorY="middle"
            maxWidth={1.0}
            textAlign="center"
            outlineWidth={0.01}
            outlineColor="#000000"
          >
            {workshop.organizer}
          </Text>
        </mesh>

        {/* Session Label on Top - Small Frame */}
        <group ref={labelRef} position={[0, 1.4, 0]}>
          {/* Small frame background */}
          <mesh>
            <planeGeometry args={[1.6, 0.7]} />
            <meshStandardMaterial
              color="#0B0C10"
              transparent
              opacity={0.9}
              emissive={workshop.color}
              emissiveIntensity={0.2}
            />
          </mesh>
          {/* Frame border - Top */}
          <mesh position={[0, 0.35, 0.001]}>
            <planeGeometry args={[1.6, 0.028]} />
            <meshStandardMaterial color={workshop.color} emissive={workshop.color} emissiveIntensity={0.7} />
          </mesh>
          {/* Frame border - Bottom */}
          <mesh position={[0, -0.35, 0.001]}>
            <planeGeometry args={[1.6, 0.028]} />
            <meshStandardMaterial color={workshop.color} emissive={workshop.color} emissiveIntensity={0.7} />
          </mesh>
          {/* Frame border - Left */}
          <mesh position={[-0.8, 0, 0.001]}>
            <planeGeometry args={[0.028, 0.7]} />
            <meshStandardMaterial color={workshop.color} emissive={workshop.color} emissiveIntensity={0.7} />
          </mesh>
          {/* Frame border - Right */}
          <mesh position={[0.8, 0, 0.001]}>
            <planeGeometry args={[0.028, 0.7]} />
            <meshStandardMaterial color={workshop.color} emissive={workshop.color} emissiveIntensity={0.7} />
          </mesh>
          {/* Session text */}
          <Text
            position={[0, 0, 0.002]}
            fontSize={0.35}
            color={workshop.color}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.045}
            outlineColor="#000000"
            fontWeight="bold"
          >
            Session {index + 1}
          </Text>
        </group>
      </group>
    </Float>
  );
};

// Floating Particles with Trails
const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 150 }).map(() => ({
        position: [
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
        ] as [number, number, number],
        speed: 0.05 + Math.random() * 0.15,
        size: 0.02 + Math.random() * 0.04,
        color: Math.random() > 0.5 ? "#6C63FF" : "#00FFFF",
      })),
    []
  );

  return (
    <>
      {particles.map((particle, i) => (
        <FloatingParticle
          key={i}
          position={particle.position}
          speed={particle.speed}
          size={particle.size}
          color={particle.color}
        />
      ))}
    </>
  );
};

const FloatingParticle = ({
  position,
  speed,
  size,
  color,
}: {
  position: [number, number, number];
  speed: number;
  size: number;
  color: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const trailRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        initialY + Math.sin(state.clock.elapsedTime * speed) * 3;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 12, 12]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* Glowing trail */}
      <mesh position={[0, -size * 2, 0]}>
        <sphereGeometry args={[size * 0.5, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};

// Asteroids
const Asteroids = () => {
  const asteroids = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        position: [
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
        ] as [number, number, number],
        size: 0.3 + Math.random() * 0.5,
        speed: 0.01 + Math.random() * 0.02,
      })),
    []
  );

  return (
    <>
      {asteroids.map((asteroid, i) => (
        <Asteroid
          key={`asteroid-${i}`}
          position={asteroid.position}
          rotation={asteroid.rotation}
          size={asteroid.size}
          speed={asteroid.speed}
        />
      ))}
    </>
  );
};

const Asteroid = ({
  position,
  rotation,
  size,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
  speed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 0.7;
      meshRef.current.rotation.z += speed * 0.5;
    }
  });

  return (
    <Float speed={0.5} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <dodecahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color="#4A4A4A"
          emissive="#2A2A2A"
          emissiveIntensity={0.2}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
};

// Nebula Clouds
const NebulaClouds = () => {
  const nebulas = useMemo(
    () =>
      Array.from({ length: 8 }).map(() => ({
        position: [
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 60,
        ] as [number, number, number],
        color: Math.random() > 0.5 ? "#6C63FF" : "#00FFFF",
        scale: 3 + Math.random() * 4,
        opacity: 0.08 + Math.random() * 0.12,
      })),
    []
  );

  return (
    <>
      {nebulas.map((nebula, i) => (
        <NebulaCloud
          key={`nebula-${i}`}
          position={nebula.position}
          color={nebula.color}
          scale={nebula.scale}
          opacity={nebula.opacity}
        />
      ))}
    </>
  );
};

const NebulaCloud = ({
  position,
  color,
  scale,
  opacity,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  opacity: number;
}) => {
  return (
    <Float speed={0.3} floatIntensity={0.2}>
      <mesh position={position}>
        <sphereGeometry args={[scale, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={opacity}
        />
      </mesh>
    </Float>
  );
};

// Comets
const Comets = () => {
  const comets = useMemo(
    () =>
      Array.from({ length: 3 }).map(() => ({
        start: [
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80,
        ] as [number, number, number],
        end: [
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80,
        ] as [number, number, number],
        speed: 0.3 + Math.random() * 0.4,
        size: 0.15 + Math.random() * 0.2,
      })),
    []
  );

  return (
    <>
      {comets.map((comet, i) => (
        <Comet
          key={`comet-${i}`}
          start={comet.start}
          end={comet.end}
          speed={comet.speed}
          size={comet.size}
        />
      ))}
    </>
  );
};

const Comet = ({
  start,
  end,
  speed,
  size,
}: {
  start: [number, number, number];
  end: [number, number, number];
  speed: number;
  size: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const trailRefs = useRef<(THREE.Mesh | null)[]>([]);
  const progressRef = useRef(0);

  useFrame((state, delta) => {
    if (meshRef.current) {
      progressRef.current = (progressRef.current + delta * speed) % 1;
      const currentPos = [
        start[0] + (end[0] - start[0]) * progressRef.current,
        start[1] + (end[1] - start[1]) * progressRef.current,
        start[2] + (end[2] - start[2]) * progressRef.current,
      ];
      meshRef.current.position.set(currentPos[0], currentPos[1], currentPos[2]);

      // Update trail positions
      trailRefs.current.forEach((trail, i) => {
        if (trail) {
          const trailProgress = progressRef.current - (i + 1) * 0.15;
          const adjustedProgress = trailProgress < 0 ? trailProgress + 1 : trailProgress;
          const trailPos = [
            start[0] + (end[0] - start[0]) * adjustedProgress,
            start[1] + (end[1] - start[1]) * adjustedProgress,
            start[2] + (end[2] - start[2]) * adjustedProgress,
          ];
          trail.position.set(trailPos[0], trailPos[1], trailPos[2]);
        }
      });
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={start}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#00FFFF"
          emissiveIntensity={2}
        />
      </mesh>
      {/* Comet trail */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          position={start}
        >
          <sphereGeometry args={[size * (0.6 - i * 0.12), 8, 8]} />
          <meshStandardMaterial
            color="#00FFFF"
            emissive="#00FFFF"
            emissiveIntensity={1.2 - i * 0.2}
            transparent
            opacity={0.7 - i * 0.12}
          />
        </mesh>
      ))}
    </group>
  );
};

// Space Debris
const SpaceDebris = () => {
  const debris = useMemo(
    () =>
      Array.from({ length: 30 }).map(() => ({
        position: [
          (Math.random() - 0.5) * 45,
          (Math.random() - 0.5) * 45,
          (Math.random() - 0.5) * 45,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
        ] as [number, number, number],
        size: 0.1 + Math.random() * 0.2,
        speed: 0.02 + Math.random() * 0.03,
      })),
    []
  );

  return (
    <>
      {debris.map((item, i) => (
        <Debris
          key={`debris-${i}`}
          position={item.position}
          rotation={item.rotation}
          size={item.size}
          speed={item.speed}
        />
      ))}
    </>
  );
};

const Debris = ({
  position,
  rotation,
  size,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
  speed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 1.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color="#5A5A5A"
        emissive="#3A3A3A"
        emissiveIntensity={0.3}
        roughness={0.8}
      />
    </mesh>
  );
};

// Camera Controller with Smooth Orbit
const CameraController = ({
  targetCube,
  cubePosition,
  isZoomed,
}: {
  targetCube: Workshop | null;
  cubePosition: [number, number, number] | null;
  isZoomed: boolean;
}) => {
  const { camera } = useThree();
  const targetPosition = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 14));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const orbitTime = useRef(0);

  useFrame((state, delta) => {
    if (targetCube && cubePosition && isZoomed) {
      // Zoom to cube - less zoomed in
      const cubePos = new THREE.Vector3(...cubePosition);
      targetPosition.current.lerp(
        cubePos.clone().add(new THREE.Vector3(0, 3, 25)),
        0.08
      );
      targetLookAt.current.lerp(cubePos, 0.08);
    } else {
      // Auto-orbit camera
      orbitTime.current += delta * 0.2;
      const radius = 14;
      const height = Math.sin(orbitTime.current * 0.3) * 2;
      targetPosition.current.lerp(
        new THREE.Vector3(
          Math.sin(orbitTime.current) * radius,
          height,
          Math.cos(orbitTime.current) * radius
        ),
        0.05
      );
      targetLookAt.current.lerp(new THREE.Vector3(0, 0, 0), 0.05);
    }

    camera.position.lerp(targetPosition.current, 0.05);
    camera.lookAt(targetLookAt.current);
  });

  return null;
};

interface GlassCubesGalleryProps {
  workshops: Workshop[];
}

const GlassCubesGallery = ({ workshops }: GlassCubesGalleryProps) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [selectedCubePosition, setSelectedCubePosition] =
    useState<[number, number, number] | null>(null);
  const [hoveredCubeId, setHoveredCubeId] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Distribute cubes in 3D space with natural layout
  const cubePositions = useMemo(() => {
    const gridSize = Math.ceil(Math.sqrt(workshops.length));
    const spacing = 3.5;
    return workshops.map((_, index) => {
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      const centerOffset = (gridSize - 1) * spacing * 0.5;
      return [
        (col * spacing - centerOffset) + (Math.random() - 0.5) * 0.8,
        (row * spacing - centerOffset) + (Math.random() - 0.5) * 0.8,
        (Math.random() - 0.5) * 3,
      ] as [number, number, number];
    });
  }, [workshops.length]);

  const handleCubeClick = (
    workshop: Workshop,
    position: [number, number, number]
  ) => {
    setSelectedWorkshop(workshop);
    setSelectedCubePosition(position);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
    setTimeout(() => {
      setSelectedWorkshop(null);
      setSelectedCubePosition(null);
    }, 500);
  };

  return (
    <div className="relative w-full">
      {/* Decorative Frame */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{
          border: "2px solid rgba(108, 99, 255, 0.3)",
          boxShadow: `
            inset 0 0 25px rgba(108, 99, 255, 0.15),
            inset 0 0 50px rgba(108, 99, 255, 0.08),
            0 0 15px rgba(108, 99, 255, 0.2),
            0 0 30px rgba(0, 255, 255, 0.08)
          `,
        }}
      />
      {/* Corner decorations */}
      <div
        className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 pointer-events-none z-10"
        style={{
          borderColor: "#6C63FF",
          boxShadow: "0 0 8px rgba(108, 99, 255, 0.4)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 pointer-events-none z-10"
        style={{
          borderColor: "#6C63FF",
          boxShadow: "0 0 8px rgba(108, 99, 255, 0.4)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 pointer-events-none z-10"
        style={{
          borderColor: "#6C63FF",
          boxShadow: "0 0 8px rgba(108, 99, 255, 0.4)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 pointer-events-none z-10"
        style={{
          borderColor: "#6C63FF",
          boxShadow: "0 0 8px rgba(108, 99, 255, 0.4)",
        }}
      />

      <div className="relative w-full h-[550px] bg-[#0B0C10] rounded-2xl overflow-hidden">
        <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={75} />

        {/* Ambient Lighting */}
        <ambientLight intensity={0.4} color="#6C63FF" />
        <ambientLight intensity={0.2} color="#00FFFF" />

        {/* Dynamic Point Lights */}
        <pointLight position={[15, 10, 10]} intensity={2} color="#6C63FF" />
        <pointLight position={[-15, -10, -10]} intensity={1.8} color="#00FFFF" />
        <pointLight position={[0, 15, 0]} intensity={1.2} color="#FFFFFF" />
        <pointLight position={[10, -10, 15]} intensity={1.5} color="#6C63FF" />

        {/* Spotlight for dramatic effect */}
        <spotLight
          position={[0, 20, 10]}
          angle={0.4}
          penumbra={1.5}
          intensity={2}
          color="#6C63FF"
          castShadow
        />

        {/* Environment for reflections */}
        <Environment preset="night" />

        {/* Stars background */}
        <Stars
          radius={150}
          depth={80}
          count={8000}
          factor={6}
          fade
          speed={0.5}
        />

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Space Elements */}
        <Asteroids />
        <NebulaClouds />
        <Comets />
        <SpaceDebris />

        {/* Glass Cubes */}
        <Suspense fallback={null}>
          {workshops.map((workshop, index) => (
            <CubeWithTexture
              key={workshop.id}
              workshop={workshop}
              position={cubePositions[index]}
              index={index}
              onCubeClick={handleCubeClick}
              isSelected={selectedWorkshop?.id === workshop.id}
              isHovered={hoveredCubeId === workshop.id}
              onHover={setHoveredCubeId}
            />
          ))}
        </Suspense>

        <OrbitControls
          enableZoom={!isZoomed}
          enablePan={!isZoomed}
          enableRotate={!isZoomed}
          minDistance={6}
          maxDistance={30}
          autoRotate={!isZoomed}
          autoRotateSpeed={0.3}
        />

        <CameraController
          targetCube={selectedWorkshop}
          cubePosition={selectedCubePosition}
          isZoomed={isZoomed}
        />
      </Canvas>

        {/* Glassmorphism Modal */}
        <AnimatePresence>
        {selectedWorkshop && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md z-20"
              onClick={handleClose}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 50, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 50, rotateX: 15 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 100,
              }}
              className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
            >
              <div
                className="pointer-events-auto glass-premium rounded-3xl p-6 max-w-lg w-full mx-4 relative overflow-visible"
                onClick={(e) => e.stopPropagation()}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(11, 12, 16, 0.98) 0%, rgba(11, 12, 16, 0.95) 100%)",
                  backdropFilter: "blur(30px)",
                  border: `2px solid ${selectedWorkshop.color}60`,
                  boxShadow: `0 0 60px ${selectedWorkshop.color}50, 0 0 120px ${selectedWorkshop.color}30, inset 0 0 40px ${selectedWorkshop.color}10`,
                }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${selectedWorkshop.color}20, transparent, ${selectedWorkshop.color}20)`,
                    opacity: 0.5,
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group z-50 cursor-pointer"
                  style={{
                    boxShadow: `0 0 20px ${selectedWorkshop.color}40`,
                  }}
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Date Badge */}
                <div className="mb-4 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm"
                    style={{
                      background: `${selectedWorkshop.color}25`,
                      border: `1.5px solid ${selectedWorkshop.color}70`,
                      color: selectedWorkshop.color,
                      boxShadow: `0 0 25px ${selectedWorkshop.color}40`,
                    }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{selectedWorkshop.date}</span>
                  </motion.div>
                </div>

                {/* Event Image */}
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  src={selectedWorkshop.image}
                  alt={selectedWorkshop.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 relative z-10"
                  style={{
                    boxShadow: `0 0 40px ${selectedWorkshop.color}40`,
                    border: `1px solid ${selectedWorkshop.color}30`,
                  }}
                />

                {/* Title & Organizer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3 mb-4 relative z-10"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${selectedWorkshop.color}, ${selectedWorkshop.color}dd)`,
                      boxShadow: `0 0 30px ${selectedWorkshop.color}60`,
                    }}
                  >
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold mb-1"
                      style={{
                        color: "#EAEAEA",
                        fontFamily: "Orbitron, sans-serif",
                      }}
                    >
                      {selectedWorkshop.title}
                    </h3>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: selectedWorkshop.color }}
                    >
                      {selectedWorkshop.organizer}
                    </p>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-foreground/80 mb-4 leading-relaxed text-sm relative z-10"
                >
                  {selectedWorkshop.description}
                </motion.p>

                {/* Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-2 pt-4 border-t border-white/10 relative z-10"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin
                      className="w-4 h-4"
                      style={{ color: "#00FFFF" }}
                    />
                    <span className="font-medium" style={{ color: "#EAEAEA" }}>
                      {selectedWorkshop.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users
                      className="w-4 h-4"
                      style={{ color: "#00FFFF" }}
                    />
                    <span className="font-medium" style={{ color: "#EAEAEA" }}>
                      {typeof selectedWorkshop.attendees === 'number' 
                        ? `${selectedWorkshop.attendees}+ Participants`
                        : selectedWorkshop.attendees}
                    </span>
                  </div>
                  {selectedWorkshop.certificate && (
                    <a
                      href={selectedWorkshop.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm group cursor-pointer"
                    >
                      <Award
                        className="w-4 h-4 group-hover:scale-110 transition-transform"
                        style={{ color: "#00FFFF" }}
                      />
                      <span
                        className="font-medium group-hover:underline transition-all"
                        style={{ color: "#00FFFF" }}
                      >
                        View Certificate
                      </span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

        {/* Title Overlay */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-3"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              <span className="text-gradient-animate">My Workshop Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground font-semibold">
              A Museum of Education & Empower Floating in Futuristic Space of Mine
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default GlassCubesGallery;

