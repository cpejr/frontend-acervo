import {
  StyledCard,
  Group,
  LineSVG,
  CardLine,
  ButtonDiv,
  OrangeButton,
} from "./Styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
];

export default function LargeCard({ data }) {
  const { title, description } = data;

  return (
    <StyledCard>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img alt={`carousel-img-${index}`} src={image} />
          </div>
        ))}
      </Carousel>
      <Group>
        <LineSVG></LineSVG>
        <CardLine>{title}</CardLine>
      </Group>
      <CardLine>
        <p>{description}</p>
      </CardLine>

      <ButtonDiv>
        <OrangeButton>Botão</OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}
