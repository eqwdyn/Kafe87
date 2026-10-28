import type { FC, PropsWithChildren } from "react";
import cl from "./SectionTitle.module.css";

export const SectionTitle: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <h2 className={`${cl.sectionTitle} ${className || ""}`}>{children}</h2>
  );
};
