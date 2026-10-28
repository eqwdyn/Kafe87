"use client";

import cl from "./Amenities.module.css";
import { Section } from "@shared/ui/Section";
import { SectionTitle } from "@shared/ui/SectionTitle";
import { ContentContainer } from "@shared/ui/ContentContainer";
import { AmenitiesGrid } from "../components/AmenitiesGrid";

export const Amenities = ({}) => {
  return (
    <Section aria-label="Удобства">
      <ContentContainer>
        <header className={cl.amenitiesHeader}>
          <SectionTitle>Удобства</SectionTitle>
        </header>

        <AmenitiesGrid />
      </ContentContainer>
    </Section>
  );
};
