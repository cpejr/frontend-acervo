/* eslint-disable react-hooks/rules-of-hooks */
import {
  DataCollumn,
  Group,
  Image,
  ImageCollumn,
  KnowMore,
  Line,
  Row,
  Tag,
  TagsLine,
} from "./Styles";
import PropTypes from "prop-types";
//   import DOMPurify from "dompurify";
export default function Event({ data }) {
  let categories = [...data[0].id_categoryPrice, ...data[0].id_categoryType];
  return (
    <>
      {data?.map((eventData, index) => (
        <>
          <Row key={index}>
            <ImageCollumn>
              <Image>
                <img src={eventData?.eventUpload} alt={`EventImage ${index}`} />
              </Image>
              <TagsLine key={`line-${index}`}>
                {categories?.map((category, index) => (
                  <Tag key={index}>{category?.name}</Tag>
                ))}
              </TagsLine>
            </ImageCollumn>
            <DataCollumn>
              <Group>
                <Line>{eventData?.name}</Line>
              </Group>
              <Line></Line>
              <p>{eventData?.shortDescription}</p>
            </DataCollumn>
          </Row>

          <KnowMore>
            <h1>PARA SABER MAIS</h1>
            <p>{eventData?.longDescription}</p>
          </KnowMore>
        </>
      ))}
    </>
  );
}
Event.propTypes = {
  data: PropTypes.object,
  comments: PropTypes.object,
  cards: PropTypes.object,
};
