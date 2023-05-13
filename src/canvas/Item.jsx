import * as THREE from "three";
import { useRef, useState } from "react";
import { Image, useScroll } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { damp } from "three/src/math/MathUtils";

import store from "../store/index";
const centeredOffset = [
  0, 0.13822435547837197, 0.27644871095674395, 0.414673066435116,
  0.5528974219134879, 0.6911217773918599, 0.829346132870232, 0.9675704883486039,
  1.0005316645847058,
];
const Item = ({ index, position, scale, c = new THREE.Color(), ...props }) => {
  const ref = useRef();
  const scroll = useScroll();

  const { clicked, urls } = useSnapshot(store);
  const [hovered, hover] = useState(false);

  const click = () => (store.clicked = index === clicked ? null : index);
  const over = () => hover(true);
  const out = () => hover(false);

  // Use the useFrame hook from Fiber to run a function on every frame

  useFrame((state, delta) => {
    // Calculate a value for "y" using the "curve" method from the useScroll hook
    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length
    );

    // Update the scale of the material and the component based on "y" and "clicked"
    ref.current.material.scale[1] = ref.current.scale.y = damp(
      ref.current.scale.y,
      clicked === index ? 5 : 4 + y,
      8,
      delta
    );
    ref.current.material.scale[0] = ref.current.scale.x = damp(
      ref.current.scale.x,
      clicked === index ? 4.7 : scale[0],
      6,
      delta
    );

    // Move the component to the left or right if it is not clicked and is before or after the clicked index
    if (clicked !== null && index < clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] - 2,
        6,
        delta
      );
    if (clicked !== null && index > clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] + 2,
        6,
        delta
      );
    if (clicked === null || clicked === index)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0],
        6,
        delta
      );
    if (clicked !== null && clicked === index) {
      // get image to position.x = center

      centeredOffset.map((targetOffset, i) => {
        if (i === index) {
          console.log(ref.current.position, position);

          scroll.offset = damp(scroll.offset, targetOffset, 6, delta)
          scroll.offset = targetOffset;
        }
      });
    }
    // Move the component back to its original position if it is clicked or if nothing is clicked
    ref.current.material.grayscale = damp(
      ref.current.material.grayscale,
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      6,
      delta
    );

    // Update the grayscale of the material based on "hovered", "clicked", and "y"
    ref.current.material.color.lerp(
      c.set(hovered || clicked === index ? "white" : "#aaa"),
      hovered ? 0.3 : 0.1
    );
  });
  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
      className="overflow-hidden"
    />
  );
};

export default Item;
