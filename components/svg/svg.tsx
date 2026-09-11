"use client";

import { motion } from "framer-motion";

const pathShape1 =
  "M100,20 C140,20 175,50 175,100 C175,150 140,180 100,180 C60,180 25,150 25,100 C25,50 60,20 100,20 Z";

const pathShape2 =
  "M100,20 C150,20 180,60 170,100 C160,140 145,165 100,180 C55,195 25,155 30,100 C35,55 50,20 100,20 Z";

const variants = {
  rest: {
    d: pathShape1,
  },
  hover: {
    d: pathShape2,
  },
};

export default function BlobMorph({width, height, marginTop}: {width: number, height: number, marginTop?: number}) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      initial="rest"
      whileHover="hover"
      style={{ marginTop: marginTop, maxWidth: width, maxHeight: height }}
    >
      <defs>
        <clipPath id="blobClip">
          <motion.path
            variants={variants}
            transition={{
              d: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          />
        </clipPath>
      </defs>
      <image
        href="/fotoperfil.png"
        width={200}
        height={200}
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#blobClip)"
      />
    </motion.svg>
  );
}