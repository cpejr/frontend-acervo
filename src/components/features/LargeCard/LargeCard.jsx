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

// Exemplo de dados de entrada
const mediaItems = [
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1",
    type: "image",
  },
  {
    url: "https://example.com/video.mp4",
    type: "video",
  },
  {
    url: "https://example.com/audio.mp3",
    type: "audio",
  },
];

export default function LargeCard({ data }) {
  const title = data.title;
  const shortDescription = data.shortDescription;

  const renderMedia = (media) => {
    switch (media.type) {
      case "image":
        return <img src={media.url} alt="Media content" />;
      case "video":
        return (
          <video controls>
            <source src={media.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "audio":
        return (
          <audio controls>
            <source src={media.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      default:
        return <p>Unsupported media format</p>;
    }
  };

  return (
    <StyledCard>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
        {mediaItems.map((media, index) => (
          <div key={index}>{renderMedia(media)}</div>
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
