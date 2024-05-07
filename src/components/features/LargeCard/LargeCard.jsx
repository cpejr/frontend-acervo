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
      {archiveData && (
        <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
          {archiveData.map((file, index) => (
            <div key={index}>
              {file.startsWith("data:image") && (
                <img src={file} alt={`Imagem ${index}`} />
              )}
              {file.startsWith("data:video") && (
                <video controls width="100%" height="auto">
                  <source src={file} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              )}
              {file.startsWith("data:audio") && (
                <audio controls>
                  <source src={file} type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              )}
              {file.startsWith("data:application/pdf") && (
                <object
                  data={file}
                  type="application/pdf"
                  width="100%"
                  height="400px"
                >
                  Seu navegador não suporta visualização de PDF. Você pode{" "}
                  <a href={file}>baixá-lo aqui</a>.
                </object>
              )}
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
