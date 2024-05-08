import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import useAuthStore from "../../../Stores/auth";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateFavoritesMemorials } from "../../../hooks/querys/user";
import { useGetIsFavoritedMemorial } from "../../../hooks/querys/memorial";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import {
  StyledCard,
  Group,
  LineSVG,
  CardLine,
  CardTitle,
  FavoriteIcon,
} from "./Styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
];

export default function LargeCard({ data }) {
  const queryClient = useQueryClient();
  const userId = useAuthStore((state) => state?.auth?.user?._id);
  const { title, description } = data;

  const { data: isFavorited } = useGetIsFavoritedMemorial({
    userId: userId,
    eventId: data?._id,
    enabled: !!userId,
    onError: (err) => {
      console.error(err);
    },
  });
  const { mutate: updateFavoriteMemorial } = useUpdateFavoritesMemorials({
    userId: userId,
    ids: [data?._id],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favoritesMemorials"],
      });
      queryClient.invalidateQueries({
        queryKey: ["memorial"],
      });
      toast.success("Memorial Atualizado");
    },
    onError: (err) => {
      toast.err(err);
    },
  });
  const onSubmit = async (event) => {
    event.stopPropagation();
    if (userId) {
      updateFavoriteMemorial({
        userId: userId,
        eventId: data?._id,
      });
    } else {
      toast.error("Você precisa estar logado para favoritar um evento");
    }
  };

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
        <CardTitle>
          {title}
          <FavoriteIcon>
            {isFavorited ? (
              <FaBookmark onClick={onSubmit} />
            ) : (
              <FaRegBookmark onClick={onSubmit} />
            )}{" "}
          </FavoriteIcon>
        </CardTitle>
      </Group>
      <CardLine>
        <p>{description}</p>
      </CardLine>
    </StyledCard>
  );
}

LargeCard.propTypes = {
  data: PropTypes.object.isRequired,
};
