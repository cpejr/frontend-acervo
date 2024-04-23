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
} from "./Styles";
import PropTypes from "prop-types";
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

  return (
    <StyledCard>
      <Image>
        <img src={data.eventUpload} />
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
