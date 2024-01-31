// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   OrbitControls,
//   TorusKnot,
//   MeshReflectorMaterial,
// } from "@react-three/drei";
// import { NeedleScene } from "@needle-tools/react-three-fiber";
// import GridLayoutContainer from "@/components/GridLayoutContainer";

// export default function NeedleEngine() {
//   return (
//     <Canvas
//       className="absolute top-0 z-10"
//       onCreated={(ctx) => {
//         ctx.gl.physicallyCorrectLights = true;
//       }}
//       camera={{ position: [-4, 3, 5], fov: 30 }}
//       shadows
//     >
//       <color attach="background" args={["black"]} />

//       <OrbitControls />

//       <NeedleScene />
//       <RotatingTorusKnot />
//       <ReflectiveFloor />
//     </Canvas>
//   );
// }

// function RotatingTorusKnot() {
//   const ref = useRef<THREE.Mesh>();
//   useFrame(() => {
//     if (ref.current) ref.current.rotation.y += 0.01;
//   });
//   return (
//     <TorusKnot ref={ref} args={[0.3, 0.1, 128, 16]} position={[0, 1, 0]}>
//       <meshNormalMaterial />
//     </TorusKnot>
//   );
// }

// function ReflectiveFloor() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.005, 0]}>
//       <planeGeometry args={[10, 10]} />
//       <MeshReflectorMaterial
//         blur={[300, 100]}
//         resolution={2048}
//         mixBlur={1}
//         mixStrength={40}
//         roughness={1}
//         depthScale={1.2}
//         minDepthThreshold={0.4}
//         maxDepthThreshold={1.4}
//         color="#101010"
//         metalness={0.5}
//         mirror={0}
//       />
//     </mesh>
//   );
// }
