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

export default function LargeCard({ data }) {
  const { title, description, shortDescription, archive } = data;
  const archiveIDs = archive.map((file) => file._id);
  const formatedArchives = archiveIDs.join(", ");
  const { data: archiveData, isLoading } = useGetArchives(
    formatedArchives,
    title,
    {
      onError: (err) => {
        console.error("Erro ao pegar itens", err);
      },
    }
  );
  console.log(archiveData);

  return (
    <StyledCard>
      {isLoading && <p>Carregando...</p>}
      {/* {isError && <p>Ocorreu um erro ao carregar os arquivos.</p>} */}
      {archiveData && (
        <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
          {archiveData.map((file, index) => (
            <div key={index}>
              <img src={file} />
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
