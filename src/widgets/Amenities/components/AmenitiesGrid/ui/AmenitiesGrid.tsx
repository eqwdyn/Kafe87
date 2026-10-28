import cl from "./AmenitiesGrid.module.css";
import { motion } from "@components/motion-client";

const amenities = [
  { label: "Парковка", icon: "🚗" },
  { label: "Можно с собакой", icon: "🐕" },
  { label: "Доставка", icon: "🚚" },
  { label: "Еда навынос", icon: "📦" },
  { label: "Оплата картой", icon: "💳" },
  { label: "Wi-Fi", icon: "📶" },
  { label: "Кофе с собой", icon: "☕" },
  { label: "Завтрак", icon: "🍳" },
  { label: "Предзаказ онлайн", icon: "📱" },
];

export const AmenitiesGrid = ({}) => {
  return (
    <div className={cl.amenitiesGrid}>
      {amenities.map((item, idx) => (
        <motion.div
          key={idx}
          className={cl.amenityCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
        >
          <span className={cl.amenityIcon}>{item.icon}</span>
          <span className={cl.amenityLabel}>{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
};
