"use client";

import Image from "next/image";
import cl from "./Hero.module.css";
import { ContentContainer } from "@shared/ui/ContentContainer";
import { motion } from "@components/motion-client";

export const Hero = ({}) => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={cl.hero} aria-label="Главный экран">
      <div className={cl.heroImageWrap}>
        <Image
          src="https://avatars.mds.yandex.net/get-altay/19547275/2a0000019bdfa9e22a0fbb5abdd88c4ed319/XXXL"
          alt="Кафе 87 — уютное место для завтраков и кофе"
          fill
          priority
          className={cl.heroImage}
          sizes="100vw"
          unoptimized
        />
        <div className={cl.heroOverlay} />
      </div>

      <ContentContainer>
        <motion.div
          className={cl.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className={cl.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Кафе 87
          </motion.h1>
          <motion.p
            className={cl.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Уютное место для завтраков и кофе
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.button
              className={cl.heroButton}
              onClick={scrollToMenu}
              whileTap={{ scale: 0.95 }}
            >
              Посмотреть меню
            </motion.button>
          </motion.div>
        </motion.div>
      </ContentContainer>
    </section>
  );
};
