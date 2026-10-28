import type { FC, PropsWithChildren } from "react";
import cl from "./ContentContainer.module.css";

export const ContentContainer: FC<
  PropsWithChildren & { className?: string }
> = ({ children, className }) => {
  return <div className={`${cl.container} ${className || ""}`}>{children}</div>;
};
