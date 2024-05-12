import PropTypes from "prop-types";
import {
  StyledCard,
  ShortDescription,
  LongDescription,
  Title,
  FavoriteIcon,
  CarouselStyles,
  LoadingContainer,
  TitleContainer,
  Content,
} from "./Styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGetArchives } from "../../../hooks/querys/archive";
import { LoadingOutlined } from "@ant-design/icons";
import Button from "../../common/Button/Button";

export default function LargeCard({ data, imagesLoading }) {
  const { title, shortDescription, longDescription, link, archive } = data;
  const archiveIDs = archive.map((file) => file._id);
  const formatedArchives = archiveIDs.join(", ");
  const { data: archiveData, isLoading } = useGetArchives(formatedArchives, title, {
    onError: (err) => {
      console.error("Erro ao pegar itens", err);
    },
  });

  return (
    <StyledCard>
      {isLoading || imagesLoading || !archiveData ? (
        <LoadingContainer>
          <LoadingOutlined style={{ fontSize: 30, color: "#000102" }} />
        </LoadingContainer>
      ) : (
        <>
          {archiveData && (
            <CarouselStyles>
              <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
                {archiveData.map((file, index) => (
                  <div key={index}>
                    {file.startsWith("data:image") && <img src={file} alt={`Imagem ${index}`} />}
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
                      <object data={file} type="application/pdf" width="100%" height="400px">
                        Seu navegador não suporta visualização de PDF. Você pode{" "}
                        <a href={file}>baixá-lo aqui</a>.
                      </object>
                    )}
                  </div>
                ))}
              </Carousel>
            </CarouselStyles>
          )}
          <Content>
            <TitleContainer>
              <Title>{title}</Title>
              <FavoriteIcon />
            </TitleContainer>
            <ShortDescription>{shortDescription}</ShortDescription>
            <LongDescription>{longDescription}</LongDescription>
            <Button onClick={() => window.open(link, "_blank")} width="10rem" marginLeft="auto">
              Navegar
            </Button>
          </Content>
        </>
      )}
    </StyledCard>
  );
}

LargeCard.propTypes = {
  data: PropTypes.object,
  imagesLoading: PropTypes.bool,
};
