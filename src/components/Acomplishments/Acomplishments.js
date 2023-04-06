import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxText } from "./AcomplishmentsStyles";

const data = [
  { text: "NATIONAL SOCIETY OF HIGH SCHOOL SCHOLARS" },
  { text: "Certification In Full Stack Development" },
  { text: "Earned “Employee of the Month” recognition" },
  { text: "Successfully upsold customers on 23% of transactions." },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
