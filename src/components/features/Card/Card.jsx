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
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Card({ data, base64 }) {
  let categories = [...data.id_categoryPrice, ...data.id_categoryType];
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (base64) {
      setImage(base64);
    } else {
      setImage(null);
    }
  }, [base64]);

  return (
    <StyledCard>
      <Image>
        {image ? <img src={image} /> : <AiOutlineLoading3Quarters />}
      </Image>
      <Group>
        <LineSVG></LineSVG>
        <Line>{data.name}</Line>
      </Group>
      <Line>
        <p>{data.shortDescription}</p>
      </Line>

      <Tags>
        {categories?.map((category, index) => (
          <Tag key={index}>{category?.name}</Tag>
        ))}
      </Tags>

      <ButtonDiv>
        <OrangeButton
          onClick={(event) => {
            event.stopPropagation();
            window.open(data?.link, "_blank");
          }}
        >
          Link
        </OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
