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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGetArchives } from "../../../hooks/querys/archive";

// const images = [
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
// ];

export default function LargeCard({ data }) {
  const { title, description, shortDescription, archive } = data;
  const archiveIDs = archive.map((file) => file._id);
  const formatedArchives = archiveIDs.join(", ");
  console.log(formatedArchives);

  const {
    data: archiveData,
    isLoading,
    isError,
  } = useGetArchives(archiveIDs, "archives");

  return (
    <StyledCard>
      {isLoading && <p>Carregando...</p>}
      {isError && <p>Ocorreu um erro ao carregar os arquivos.</p>}
      {archiveData && (
        <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
          {archiveData.map((file, index) => (
            <div key={index}>
              <img alt={file.name} src={file.url} />
            </div>
          ))}
        </Carousel>
      )}
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
        <p>{description}</p>
      </CardLine>
      <CardLine>
        <p>{shortDescription}</p>
      </CardLine>
    </StyledCard>
  );
}
