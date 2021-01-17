import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import DesktopLayout from "../../components/DesktopLayout";
import Container from "../../components/Container";
import Card from "../../components/Card";
import {Spacer} from "../../components/Spacer";

export const School = () => {
  const cardItems = [
    { title: 'Escola', icon: '', link: '/school'},
    { title: 'Especialistas', icon: '', link: '/experts'},
    { title: 'Meu Negócio', icon: '', link: '/business'},
  ]

  return (
    <Container style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Spacer size={32} />
        
        <div style={{ paddingLeft: 140 }}>
          <i class="fas fa-long-arrow-alt-left"></i>
        </div>

        <Spacer size={32} />
        
        <CarouselProvider
          naturalSlideWidth={1000}
          naturalSlideHeight={1000}
          totalSlides={3}
          visibleSlides={4}
          style={{ width: "100%", paddingLeft: 140 }}
        >
          <Slider>
            {cardItems.map((item, index) => (
              <>
                <Slide index={0}>
                  <Card>I am the first Slide.</Card>
                  <h2>Head</h2>
                  <h3>Subtitle</h3>
                  <h4>Duração: 00hs</h4>
                </Slide>
              </>
            ))}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </Container>
  );
};

export default School;
