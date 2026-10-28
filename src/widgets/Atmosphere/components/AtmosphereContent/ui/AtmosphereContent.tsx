import { motion } from "@components/motion-client";
import Image from "next/image";
import cl from "./AtmosphereContent.module.css";

export const AtmosphereContent = ({}) => {
  return (
    <div className={cl.atmosphereContent}>
      <motion.p
        className={cl.atmosphereText}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Домашняя атмосфера, мягкий свет и душевное тепло — именно то, что делает
        Кафе 87 особенным местом для встреч, завтраков и спокойного отдыха.
      </motion.p>

      <div className={cl.atmosphereImages}>
        <motion.div
          className={cl.atmosphereImageWrap}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src="https://avatars.mds.yandex.net/get-altay/14112077/2a0000019135c8340319d2316247c046ebed/XXXL"
            alt="Интерьер кафе 87"
            fill
            className={cl.atmosphereImage}
            sizes="(max-width: 900px) 100vw, 50vw"
            unoptimized
          />
        </motion.div>
        <motion.div
          className={cl.atmosphereImageWrap}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="https://avatars.mds.yandex.net/get-altay/16329243/2a0000019ed583e4702d0f0cc2c48ab519d0/XXXL"
            alt="Атмосфера кафе 87"
            fill
            className={cl.atmosphereImage}
            sizes="(max-width: 900px) 100vw, 50vw"
            unoptimized
          />
        </motion.div>
      </div>
    </div>
  );
};
