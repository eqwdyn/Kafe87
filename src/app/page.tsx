import cl from "./page.module.css";
import { Hero } from "@widgets/Hero";
import { Atmosphere } from "@widgets/Atmosphere";
import { Menu } from "@widgets/Menu";
import { Amenities } from "@widgets/Amenities";

export default function Cafe87Landing() {
  return (
    <div className={cl.root}>
      <Hero />
      <Atmosphere />
      <Menu />
      <Amenities />
    </div>
  );
}
