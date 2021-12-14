import React from "react";
import { motion, useTransform } from "framer-motion";

const Layer = ({ upLift, imagePath, scrollYProgress }) => {
  const rotateX = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], ["0deg", "20deg"]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], ["0deg", "-25deg"]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0px", "35px"]);
  const translateZ = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${upLift}px`]
  );

  function template({ rotateX, rotateY, rotateZ, x, y, z }) {
    return `rotateX(${rotateX}) rotateY(${rotateY}) rotateZ(${rotateZ})  translateX(${x}) translateY(${y}) translateZ(${z})`;
  }

  return (
    <motion.img
      transformTemplate={template}
      style={{
        perspective: 2000,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        rotateZ,
        x: translateX,
        y: " 0px",
        z: translateZ,
      }}
      class="head"
      src={imagePath}
      alt=""
    />
  );
};

export default Layer;
