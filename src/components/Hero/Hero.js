import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a full stack web developer with a passion for creating beautiful
        and functional websites. I am currently looking for a full time position
        as a web developer.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/cmitch06/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;