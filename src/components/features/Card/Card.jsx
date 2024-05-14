import { useQueryClient } from "@tanstack/react-query";
import { useUpdateFavoritesEvents } from "../../../hooks/querys/user";
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
import { toast } from "react-toastify";
import useAuthStore from "../../../Stores/auth";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useGetIsFavoritedEvent } from "../../../hooks/querys/events";
export default function Card({ data }) {
  let categories = [...data.id_categoryPrice, ...data.id_categoryType];
  const queryClient = useQueryClient();
  const userId = useAuthStore((state) => state?.auth?.user?._id);
  // BackEnd Calls

  const { data: isFavorited } = useGetIsFavoritedEvent({
    userId: userId,
    eventId: data?._id,
    enabled: !!userId,
    onError: (err) => {
      console.error(err);
    },
  });

  const { mutate: updateFavoriteEvent } = useUpdateFavoritesEvents({
    userId: userId,
    ids: [data?._id],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favoritesEvents"],
      });
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      toast.success("Evento Atualizado");
    },
    onError: (err) => {
      toast.err(err);
    },
  });

  const onSubmit = async (event) => {
    event.stopPropagation();
    if (userId) {
      updateFavoriteEvent({
        userId: userId,
        eventId: data?._id,
      });
    } else {
      toast.error("Você precisa estar logado para favoritar um evento");
    }
  };

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
        <Line>{data.name}</Line>
        <LineSVG>
          {isFavorited ? (
            <FaBookmark onClick={onSubmit} />
          ) : (
            <FaRegBookmark onClick={onSubmit} />
          )}
        </LineSVG>
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
