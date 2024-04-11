import { CiBookmark } from "react-icons/ci";
import {
  StyledCard,
  Group,
  LineSVG,
  CardLine,
  CardTitle,
  FavoriteIcon,
} from "./Styles";

import { Carousel } from "react-responsive-carousel";
import { useGetArchives } from "../../../hooks/querys/archive";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function LargeCard({ data }) {
  const { title, shortDescription, archive } = data;

  const archiveIds = archive.map((id) => id.toString()).join(", ");

  const { data: archives, isLoading } = useGetArchives(archiveIds, {
    onError: (err) => {
      toast.error("Erro ao pegar itens", err);
    },
  });

  console.log(title, archives);
  return (
    <StyledCard>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
        {archives?.map((image, index) => (
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
            <CiBookmark />
          </FavoriteIcon>
        </CardTitle>
      </Group>
      <CardLine>
        <p>{shortDescription}</p>
      </CardLine>
    </StyledCard>
  );
}
LargeCard.propTypes = {
  data: PropTypes.object.isRequired,
};
