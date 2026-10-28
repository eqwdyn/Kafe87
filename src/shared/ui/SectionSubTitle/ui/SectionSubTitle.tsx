import type { FC, PropsWithChildren } from "react";
import cl from "./SectionSubTitle.module.css";

export const SectionSubTitle: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <p className={`${cl.sectionSubTitle} ${className || ""}`}>{children}</p>
  );
};
