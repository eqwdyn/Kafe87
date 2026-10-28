import type { FC, HTMLProps, PropsWithChildren } from "react";
import cl from "./Section.module.css";

export const Section: FC<PropsWithChildren & HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={`${cl.section} ${className || ""}`} {...props}>
      {children}
    </section>
  );
};
