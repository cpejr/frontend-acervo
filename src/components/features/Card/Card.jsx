import {
  StyledCard,
  OrangeButton,
  Line,
  Tags,
  Tag,
  Image,
  LineSVG,
  Group,
  ButtonDiv,
} from "./Styles";
import { imageCard } from "../../../assets/index";
export default function Card() {
  return (
    <StyledCard>
      <Image>
        <img src={imageCard} />
      </Image>
      <Group>
        <LineSVG></LineSVG>
        <Line>EVENTO</Line>
      </Group>
      <Line>
        <p>
          Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer sit amet est mauris.
        </p>
      </Line>

      <Tags>
        <Tag>arroz</Tag>
        <Tag>feijão</Tag>
        <Tag>batata</Tag>
        <Tag>batata</Tag>
      </Tags>

      <ButtonDiv>
        <OrangeButton>Botão</OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}
