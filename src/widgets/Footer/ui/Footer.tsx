import { ContentContainer } from "@shared/ui/ContentContainer";
import cl from "./Footer.module.css";

export const Footer = ({}) => {
  return (
    <footer className={cl.footer}>
      <ContentContainer>
        <div className={cl.footerContent}>
          <div className={cl.footerInfo}>
            <h3 className={cl.footerTitle}>Кафе 87</h3>
            <p className={cl.footerText}>Средний счёт: 400–600 ₽</p>
            <p className={cl.footerText}>
              Кухня: европейская, итальянская, тайская, русская, японская,
              авторская
            </p>
            {/* <p className={cl.footerText}>Тип: ресторан при отеле</p> */}
          </div>
          <div className={cl.footerContact}>
            <p className={cl.footerPlaceholder}>Адрес: уточняется</p>
            <button className={cl.footerButton}>Связаться</button>
          </div>
        </div>
        <div className={cl.footerBottom}>
          {/* <p className={cl.footerCopy}>&copy; 2026 Кафе 87</p> */}
          <p className={cl.footerCopy}>Демо-лендинг, данные из Яндекс.Карт</p>
          <p className={cl.footerCopy}>
            Сайт будет удалён по первой просьбе правообладателя
          </p>
        </div>
      </ContentContainer>
    </footer>
  );
};
