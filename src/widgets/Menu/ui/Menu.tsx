"use client";

import { useState } from "react";
import cl from "./Menu.module.css";
import { Section } from "@shared/ui/Section";
import { SectionTitle } from "@shared/ui/SectionTitle";
import { SectionSubTitle } from "@shared/ui/SectionSubTitle";
import { ContentContainer } from "@shared/ui/ContentContainer";
import { MenuCard } from "@shared/ui/MenuCard";
import { motion } from "@components/motion-client";

const menuData = {
  drinks: [
    { name: "Клубничный мохито", price: 290 },
    { name: "Лаванда лимонад", price: 290 },
    { name: "Бамбл-кофе", price: 280 },
    { name: "Мохито", price: 280 },
    { name: "Эспрессо-тоник", price: 280 },
    { name: "Манго-апельсин лимонад", price: 290 },
    { name: "Айс-латте", price: 250 },
  ],
  breakfast: [
    { name: "Глазунья классическая", price: 310 },
    { name: "Омлет", price: 310 },
    { name: "Скрэмбл", price: 310 },
    { name: "Каша овсяная", price: 300 },
  ],
  hot: [
    { name: "WOK с креветкой", price: 370 },
    { name: "WOK с курицей", price: 350 },
  ],
  desserts: [
    { name: "Блины с клубникой", price: 270 },
    { name: "Сырники", price: 270 },
  ],
  sandwiches: [
    { name: "Сэндвич с курицей", price: 270 },
    { name: "Сэндвич с ветчиной", price: 290 },
  ],
  snacks: [{ name: "Креветки в чесночном соусе", price: 360 }],
};

const categories = [
  { id: "drinks", label: "Напитки" },
  { id: "breakfast", label: "Завтраки" },
  { id: "hot", label: "Горячие вторые блюда" },
  { id: "desserts", label: "Десерты" },
  { id: "sandwiches", label: "Сэндвичи" },
  { id: "snacks", label: "Закуски" },
];

export const Menu = ({}) => {
  const [activeCategory, setActiveCategory] = useState("drinks");

  return (
    <Section id="menu" aria-label="Меню">
      <ContentContainer>
        <header className={cl.menuHeader}>
          <SectionTitle>Меню</SectionTitle>
          <SectionSubTitle>Выбери то, что хочется</SectionSubTitle>
        </header>

        <div className={cl.menuTabs}>
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`${cl.menuTab} ${activeCategory === cat.id ? cl.menuTabActive : ""}`}
              onClick={() => setActiveCategory(cat.id)}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          className={cl.menuGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <MenuCard
            title={categories.find((c) => c.id === activeCategory)?.label || ""}
            items={menuData[activeCategory as keyof typeof menuData]}
          />
        </motion.div>
      </ContentContainer>
    </Section>
  );
};
