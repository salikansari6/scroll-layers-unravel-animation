import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import Layer from "../Layer/Layer";
import "./Layers.css";

const Layers = () => {
  const { scrollYProgress } = useViewportScroll();

  const rotateX = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], ["0deg", "20deg"]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], ["0deg", "-25deg"]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0px", "35px"]);
  const translateZ = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);

  return (
    <div className="layers">
      <motion.div
        transition={{
          duration: 0,
        }}
        style={{
          perspective: 2000,
          rotateX,
          rotateY,
          rotateZ,
          translateX,
          z: translateZ,
        }}
        class="background"
      ></motion.div>
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/legs.png"
        upLift={60}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/right arm.png"
        upLift={90}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/left arm.png"
        upLift={90}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/pants.png"
        upLift={120}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/body.png"
        upLift={150}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/jacket.png"
        upLift={180}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/head.png"
        upLift={200}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/eyes.png"
        upLift={200}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/mouth.png"
        upLift={200}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/hair.png"
        upLift={210}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/hat.png"
        upLift={230}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/board.png"
        upLift={240}
      />
      <Layer
        scrollYProgress={scrollYProgress}
        imagePath="/images/earrings.png"
        upLift={220}
      />
    </div>
  );
};

export default Layers;
