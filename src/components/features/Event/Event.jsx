/* eslint-disable react-hooks/rules-of-hooks */
import {
  DataCollumn,
  Group,
  ImageCollumn,
  KnowMore,
  Line,
  Row,
  Tag,
  TagsLine,
  LinkLine,
} from "./Styles";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useGetArchives } from "../../../hooks/querys/archive";
import { format } from "date-fns";

//   import DOMPurify from "dompurify";
export default function Event({ data }) {
  let categories = [...data[0].id_categoryPrice, ...data[0].id_categoryType];
  const [image, setImage] = useState(null);
  const { data: archives, isLoading } = useGetArchives(
    data[0].eventUpload,
    data[0].name,
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
  }, [data, archives]);

  return (
    <>
      {data?.map((eventData, index) => (
        <>
          <Row key={index}>
            <ImageCollumn>
              <img src={image} alt={`EventImage ${index}`} />
            </ImageCollumn>
            <DataCollumn>
              <Group>
                <Line>{eventData?.name}</Line>
                <LinkLine
                  onClick={() => {
                    const url = eventData?.link;
                    if (url) {
                      const isAbsolute =
                        url.startsWith("https://") ||
                        url.startsWith("https://");
                      window.location.replace(
                        isAbsolute ? url : `https://${url}`
                      );
                    }
                  }}
                >
                  {eventData?.link}
                </LinkLine>
              </Group>
              <TagsLine key={`line-${index}`}>
                {categories?.map((category, index) => (
                  <Tag key={index}>{category?.name}</Tag>
                ))}
              </TagsLine>
              <p>{eventData?.shortDescription}</p>
              <p>{format(new Date(eventData?.date), "dd/MM/yyyy")}</p>
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
