import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Text, Sphere, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import * as THREE from "three";

interface Workshop {
  id: string;
  title: string;
  organizer: string;
  date: string;
  location: string;
  attendees: number;
  description: string;
  color: string;
  image: string;
}

interface PlanetProps {
  workshop: Workshop;
  position: [number, number, number];
  index: number;
  onPlanetClick: (workshop: Workshop, position: [number, number, number]) => void;
  isSelected: boolean;
}

// Individual Planet Component
const Planet = ({ workshop, position, index, onPlanetClick, isSelected }: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const labelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
    if (labelRef.current) {
      // Make label face camera
      labelRef.current.lookAt(state.camera.position);
    }
  });

  const glowIntensity = hovered || isSelected ? 1.5 : 1;
  const scale = hovered || isSelected ? 1.2 : 1;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        {/* Glowing aura */}
        <Sphere args={[0.8, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={workshop.color}
            emissive={workshop.color}
            emissiveIntensity={glowIntensity * 0.3}
            transparent
            opacity={0.3}
          />
        </Sphere>

        {/* Main planet */}
        <Sphere
          ref={meshRef}
          args={[0.6, 32, 32]}
          onClick={() => onPlanetClick(workshop, position)}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={scale}
        >
          <MeshDistortMaterial
            color={workshop.color}
            emissive={workshop.color}
            emissiveIntensity={glowIntensity * 0.5}
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>

        {/* Floating label */}
        {(hovered || isSelected) && (
          <group ref={labelRef} position={[0, 1.2, 0]}>
            <Text
              fontSize={0.15}
              color={workshop.color}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#000000"
            >
              {workshop.title}
            </Text>
          </group>
        )}
      </group>
    </Float>
  );
};

// Nebula Clouds
const NebulaClouds = () => {
  const clouds = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ] as [number, number, number],
        color: i % 2 === 0 ? "#6C63FF" : "#00FFFF",
        scale: 2 + Math.random() * 3,
      })),
    []
  );

  return (
    <>
      {clouds.map((cloud, i) => (
        <Float key={i} speed={0.5 + Math.random() * 0.5} floatIntensity={0.5}>
          <Sphere args={[cloud.scale, 32, 32]} position={cloud.position}>
            <meshStandardMaterial
              color={cloud.color}
              transparent
              opacity={0.1}
              emissive={cloud.color}
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </>
  );
};

// Shooting Stars
const ShootingStars = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, i) => ({
        start: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
        ] as [number, number, number],
        end: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
        ] as [number, number, number],
        speed: 0.5 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <>
      {stars.map((star, i) => (
        <ShootingStar key={i} start={star.start} end={star.end} speed={star.speed} />
      ))}
    </>
  );
};

const ShootingStar = ({
  start,
  end,
  speed,
}: {
  start: [number, number, number];
  end: [number, number, number];
  speed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef(0);

  useFrame((_, delta) => {
    if (meshRef.current) {
      progressRef.current = (progressRef.current + delta * speed) % 1;
      const currentPos = [
        start[0] + (end[0] - start[0]) * progressRef.current,
        start[1] + (end[1] - start[1]) * progressRef.current,
        start[2] + (end[2] - start[2]) * progressRef.current,
      ];
      meshRef.current.position.set(currentPos[0], currentPos[1], currentPos[2]);
    }
  });

  return (
    <mesh ref={meshRef} position={start}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={2} />
    </mesh>
  );
};

// Camera Controller
const CameraController = ({
  targetPlanet,
  planetPosition,
}: {
  targetPlanet: Workshop | null;
  planetPosition: [number, number, number] | null;
}) => {
  const { camera } = useThree();
  const targetPosition = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 15));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    if (targetPlanet && planetPosition) {
      const planetPos = new THREE.Vector3(...planetPosition);
      targetPosition.current.lerp(planetPos.clone().add(new THREE.Vector3(0, 0, 3)), 0.05);
      targetLookAt.current.lerp(planetPos, 0.05);
    } else {
      targetPosition.current.lerp(new THREE.Vector3(0, 0, 15), 0.05);
      targetLookAt.current.lerp(new THREE.Vector3(0, 0, 0), 0.05);
    }

    camera.position.lerp(targetPosition.current, 0.05);
    camera.lookAt(targetLookAt.current);
  });

  return null;
};

interface LearningUniverseProps {
  workshops: Workshop[];
}

const LearningUniverse = ({ workshops }: LearningUniverseProps) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedPlanetPosition, setSelectedPlanetPosition] = useState<[number, number, number] | null>(null);

  // Distribute planets in a 3D space
  const planetPositions = useMemo(() => {
    const radius = 8;
    return workshops.map((_, index) => {
      const angle = (index / workshops.length) * Math.PI * 2;
      const height = (Math.random() - 0.5) * 4;
      return [
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, [workshops.length]);

  const handlePlanetClick = (workshop: Workshop, position: [number, number, number]) => {
    setSelectedWorkshop(workshop);
    setSelectedPlanetPosition(position);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
    setTimeout(() => {
      setSelectedWorkshop(null);
      setSelectedPlanetPosition(null);
    }, 500);
  };

  return (
    <div className="relative w-full h-[800px] bg-[#0B0C10] rounded-2xl overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={75} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6C63FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00FFFF" />
        <pointLight position={[0, 10, 0]} intensity={0.5} color="#FFFFFF" />

        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

        <NebulaClouds />
        <ShootingStars />

        {workshops.map((workshop, index) => (
          <Planet
            key={workshop.id}
            workshop={workshop}
            position={planetPositions[index]}
            index={index}
            onPlanetClick={(w) => handlePlanetClick(w, planetPositions[index])}
            isSelected={selectedWorkshop?.id === workshop.id}
          />
        ))}

        <OrbitControls
          enableZoom={!isZoomed}
          enablePan={!isZoomed}
          enableRotate={!isZoomed}
          minDistance={5}
          maxDistance={30}
          autoRotate={!isZoomed}
          autoRotateSpeed={0.5}
        />

        <CameraController
          targetPlanet={selectedWorkshop}
          planetPosition={selectedPlanetPosition}
        />
      </Canvas>

      {/* Glassmorphism Info Card */}
      <AnimatePresence>
        {selectedWorkshop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          >
            <div className="pointer-events-auto">
              <motion.div
                className="glass-premium rounded-3xl p-8 max-w-md w-full mx-4 glow-hover relative"
                style={{
                  background: "rgba(11, 12, 16, 0.8)",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${selectedWorkshop.color}40`,
                }}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Date Badge */}
                <div className="mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm"
                    style={{
                      background: `${selectedWorkshop.color}20`,
                      border: `1px solid ${selectedWorkshop.color}40`,
                      color: selectedWorkshop.color,
                    }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{selectedWorkshop.date}</span>
                  </div>
                </div>

                {/* Event Image */}
                <img
                  src={selectedWorkshop.image}
                  alt={selectedWorkshop.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />

                {/* Title & Organizer */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: selectedWorkshop.color }}
                  >
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{selectedWorkshop.title}</h3>
                    <p className="text-sm text-primary">{selectedWorkshop.organizer}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {selectedWorkshop.description}
                </p>

                {/* Details */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="font-medium">{selectedWorkshop.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="font-medium">{selectedWorkshop.attendees}+ Participants</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title Overlay */}
      <div className="absolute top-8 left-8 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-gradient-animate">My Learning Universe</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every planet tells a story of growth
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningUniverse;

