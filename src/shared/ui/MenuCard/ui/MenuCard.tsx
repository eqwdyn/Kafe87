import type { FC } from "react";
import cl from "./MenuCard.module.css";
import { motion } from "@components/motion-client";

type MenuItem = {
  name: string;
  price: number;
};

type Props = {
  title: string;
  items: MenuItem[];
};

export const MenuCard: FC<Props> = ({ title, items }) => {
  return (
    <motion.article
      className={cl.menuCard}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className={cl.menuCardTitle}>{title}</h3>
      <ul className={cl.menuList}>
        {items.map((item, idx) => (
          <li key={idx}>
            <span>{item.name}</span>
            <span>{item.price} ₽</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};
