"use client";

import cl from "./Atmosphere.module.css";
import { Section } from "@shared/ui/Section";
import { SectionTitle } from "@shared/ui/SectionTitle";
import { ContentContainer } from "@shared/ui/ContentContainer";
import { AtmosphereContent } from "../components/AtmosphereContent";

export const Atmosphere = ({}) => {
  return (
    <Section aria-label="Атмосфера">
      <ContentContainer>
        <header className={cl.atmosphereHeader}>
          <SectionTitle>Атмосфера</SectionTitle>
        </header>

        <AtmosphereContent />
      </ContentContainer>
    </Section>
  );
};
