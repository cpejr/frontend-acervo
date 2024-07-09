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
  LoadingStyles,
} from "./Styles";
import { useState, useEffect } from "react";
import { useGetArchives } from "../../../hooks/querys/archive";
import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Card({ data }) {
  let categories = [...data.id_categoryPrice, ...data.id_categoryType];
  const [image, setImage] = useState(null);
  const { data: archives, isLoading } = useGetArchives(
    data?.eventUpload?._id,
    data.name,
    {
      onError: (err) => {
        console.error("Erro ao pegar itens", err);
      },
    }
  );
  useEffect(() => {
    if (!isLoading) {
      setImage(archives);
    } else {
      setImage(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [archives]);

  return (
    <StyledCard>
      <Image>
        {isLoading ? (
          <LoadingStyles>
            <AiOutlineLoading3Quarters />
          </LoadingStyles>
        ) : (
          <img src={image} alt="Event" />
        )}
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
