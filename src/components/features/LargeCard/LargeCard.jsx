import {
  StyledCard,
  Image,
  Group,
  LineSVG,
  CardLine,
  ButtonDiv,
  OrangeButton,
} from "./Styles";

export default function LargeCard() {
  return (
    <StyledCard>
      <Image>
        <img
          src={
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1"
          }
        />
      </Image>
      <Group>
        <LineSVG></LineSVG>
        <CardLine>EVENTO</CardLine>
      </Group>
      <CardLine>
        <p>
          Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer sit amet est mauris.
        </p>
      </CardLine>

      <ButtonDiv>
        <OrangeButton>Botão</OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}
