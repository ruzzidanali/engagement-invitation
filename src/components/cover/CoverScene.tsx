import { motion, useScroll, useTransform } from "framer-motion";

import SkyLayer from "./SkyLayer";
import MountainLayer from "./MountainLayer";
import MosqueLayer from "./MosqueLayer";
import FlowerLayer from "./FlowerLayer";
import BirdLayer from "./BirdLayer";
import LeafLayer from "./LeafLayer";
import CloudLayer from "./CloudLayer";
import SparkleLayer from "./SparkleLayer";
import LightRaysLayer from "./LightRaysLayer";
import SparkleParticles from "./SparkleParticles";

export default function CoverScene() {
  const { scrollY } = useScroll();

  const skyY = useTransform(scrollY, [0, 1000], [0, 50]);

  const cloudY = useTransform(scrollY, [0, 1000], [0, 80]);

  const mountainY = useTransform(scrollY, [0, 1000], [0, 120]);

  const mosqueY = useTransform(scrollY, [0, 1000], [0, 180]);

  const flowerY = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <motion.div
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-[40px]
      "
      animate={{
        scale: [1, 1.01, 1],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <SkyLayer y={skyY} />

      <CloudLayer y={cloudY} />

      <LightRaysLayer />

      <SparkleLayer />

      <MountainLayer y={mountainY} />

      <MosqueLayer y={mosqueY} />

      <SparkleParticles />

      <BirdLayer />

      <FlowerLayer y={flowerY} />

      <LeafLayer />
    </motion.div>
  );
}
