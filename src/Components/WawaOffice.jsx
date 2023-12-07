/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/WawaOffice.glb 
*/

import React, { useLayoutEffect, useRef } from "react";
import { ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export const FloorHeight = 2.3;
export const NB_Floors = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF("/WawaOffice.glb");

  const group = useRef();
  const t1 = useRef();
  const libreryRef = useRef();
  const atticRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    if (t1.current) {
      t1.current.seek(scroll.offset * t1.current.duration());
    }

    console.log(t1.current.duration());
  });

  useLayoutEffect(() => {
    t1.current = gsap.timeline();

    t1.current.to(
      group.current.position,
      {
        duration: 1.5,
        y: -FloorHeight * (NB_Floors - 1),
      },
      0
    );

    //librery floor
    t1.current.from(
      libreryRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    t1.current.from(
      libreryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    //attic floor
    t1.current.from(
      atticRef.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0
    );
    t1.current.from(
      atticRef.current.position,
      {
        duration: 0.5,
        z: -2,
      },
      1.5
    );
    t1.current.from(
      atticRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      1
    );

    //office rotation
    t1.current.to(
      group.current.rotation,
      {
        duration: 1,
        y: Math.PI / 6,
      },
      0
    );
    t1.current.to(
      group.current.rotation,
      {
        duration: 1,
        y: -Math.PI / 6,
      },
      1
    );

    //office position
    t1.current.to(
      group.current.position,
      {
        duration: 1,
        x: -1.5,
        z: 2,
      },
      0
    );
    t1.current.to(
      group.current.position,
      {
        duration: 1,
        x: 1.5,
        z: -2,
      },
      1
    );
  }, []);

  // position={[1.5, -1, -1]}

  return (
    <group {...props} position={[1.5, -1, -1]} dispose={null} ref={group}>
      <mesh geometry={nodes["01_office"].geometry} material={materials["01"]} />
      <group position={[0, 2.114, -2.23]}>
        <group ref={libreryRef}>
          <mesh
            geometry={nodes["02_library"].geometry}
            material={materials["02"]}
          />
        </group>
      </group>
      <group position={[-1.97, 4.227, -2.199]}>
        <group ref={atticRef}>
          <mesh
            geometry={nodes["03_attic"].geometry}
            material={materials["03"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/WawaOffice.glb");
