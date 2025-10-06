import { motion, useScroll, useTransform } from "framer-motion";


function ScrollProgress() {
  const {scrollYProgress} = useScroll();

  const scaleX = useTransform(scrollYProgress, [0,1],[0,1])

  return (
    
      <motion.div
        className="scroll-progress-bar"
        style={{ 
          scaleX,
          transformOrigin: "0%",
         }}
      />
  );
}

export default ScrollProgress;
