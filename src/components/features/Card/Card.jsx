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
export default function Card({ data }) {
  const tagData = [
    { _id: 1, title: "Tag 1", description: "Descrição do Card 1" },
    { _id: 2, title: "Tag 2", description: "Descrição do Card 2" },
    { _id: 3, title: "Tag 3", description: "Descrição do Card 3" },
    { _id: 4, title: "Tag 4", description: "Descrição do Card 4" },
    { _id: 5, title: "Tag 5", description: "Descrição do Card 5" },
  ];
  return (
    <StyledCard>
      <Image>
        <img src={imageCard} />
      </Image>
      <Group>
        <LineSVG></LineSVG>
        <Line>{data.name}</Line>
      </Group>
      <Line>
        <p>{data.shortDescription}</p>
      </Line>

      <Tags>
        {tagData.map((tag, index) => (
          <Tag key={index}>{tag.title}</Tag>
        ))}
      </Tags>

      <ButtonDiv>
        <OrangeButton>Botão</OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}
