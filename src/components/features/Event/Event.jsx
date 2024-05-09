/* eslint-disable react-hooks/rules-of-hooks */
import {
  BlueButton,
  DataCollumn,
  Group,
  Image,
  ImageCollumn,
  KnowMore,
  Line,
  LineSVG,
  RateDiv,
  Row,
  TabletTagsLine,
  Tag,
  TagsLine,
  VideoDiv,
  HtmlContainer,
  Icon,
  IconContainer,
} from "./Styles";
import {
  FaLinkedin,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaReddit,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import PropTypes from "prop-types";
//   import DOMPurify from "dompurify";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
export default function Event({ data }) {
  const { setToken, getUser, getToken } = useAuthStore();
  const [hoverValue, setHoverValue] = useState(0);
  const [userHasPrevRating, setUserHasPrevRating] = useState(false);
  const ID = data?.aiEvent?.[0]?._id;
  let categories = [
    ...data.aiEvent[0].id_categoryprices,
    ...data.aiEvent[0].id_categoryfeatures,
    ...data.aiEvent[0].id_categoryprofessions,
  ];

  //images
  const [image, setImage] = useState("");
  const getImage = async () => {
    try {
      if (data.aiEvent) {
        setImage(data?.aiEvent[0]?.imageURL);
        const azureImage = await useGetImage(data?.aiEvent[0]?.imageURL);
        setImage(azureImage.data.image);
      }
    } catch (error) {
      console.error("Erro ao buscar imagem de ferramenta", error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getImage();
    getIsFavorite();
  }, [data]);

  //avaliation and comments
  const userID = getUser()?._id;
  async function GetUserTrueOrFalse() {
    if (ID && userID) {
      const { result } = await useGetUserTrueOrFalse({
        userId: userID,
        iaId: ID,
      });
      setUserHasPrevRating(result);
    }
  }
  async function GetUserAvaliationID() {
    const { ai } = await useGetAvaliationID({ iaId: ID, userId: userID });
    setAvaliationID(ai);
  }

  const handleHoverChange = (value) => {
    setHoverValue(value);
  };

  //icons
  const iconOptions = {
    linkedIn: <FaLinkedin />,
    discord: <FaDiscord />,
    twitterX: <FaTwitter />,
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
    facebook: <FaFacebook />,
    reddit: <FaReddit />,
    pinterest: <FaPinterest />,
    youtube: <FaYoutube />,
  };

  //favorites
  //TODO->MOVE ALL OF THIS TO A COMPONENT

  const logGoogleUser = async () => {
    if (getToken() === null) {
      const response = await signInWithGooglePopup();
      const tokenObject = await usePostUser({
        name: response?.user?.displayName,
        email: response?.user?.email,
        imageURL: response?.user?.photoURL,
        type: "User",
      });

      setToken(tokenObject.token);

      window.location.reload();
    }
  };

  return (
    <>
      {data?.aiEvent?.map((eventData, index) => (
        <>
          <Row key={index}>
            <ImageCollumn>
              <Image>
                <img src={image} alt={`EventImage ${index}`} />
              </Image>
              <TagsLine key={`line-${index}`}>
                {categories?.map((category, index) => (
                  <Tag key={index}>{category?.name}</Tag>
                ))}
              </TagsLine>
            </ImageCollumn>
            <DataCollumn>
              <Group>
                <Line>{eventData.name}</Line>
                <LineSVG>
                  <Share url={window.location.href} />
                </LineSVG>
              </Group>
              <Line></Line>
              <p>{eventData?.shortDescription}</p>
              <TabletTagsLine key={`line-${index}`}>
                {categories?.map((category, index) => (
                  <Tag key={index}>{category?.name}</Tag>
                ))}
              </TabletTagsLine>
              <BlueButton
                type="primary"
                onClick={() => {
                  window.open(toolEvent?.link, "_blank");
                }}
              >
                ACESSE JÁ!
              </BlueButton>
              <IconContainer>
                {Object.entries(iconOptions)
                  .filter(([name]) => data.aiEvent[0][name])
                  .map(([name]) => (
                    <Icon
                      href={data.aiEvent[0][name]}
                      target="_blank"
                      rel="noreferrer"
                      key={name}
                    >
                      {iconOptions[name]}
                    </Icon>
                  ))}
              </IconContainer>
            </DataCollumn>
          </Row>
          <Row>
            <RateDiv>
              <p>Você recomendaria esse evento?</p>
              <Line></Line>
            </RateDiv>
          </Row>
          <KnowMore>
            <h1>PARA SABER MAIS</h1>
            <HtmlContainer
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(eventData.html, {
                  ADD_TAGS: ["iframe"],
                  ADD_ATTR: [
                    "allow",
                    "allowfullscreen",
                    "frameborder",
                    "scrolling",
                  ],
                }),
              }}
            />{" "}
            <VideoDiv>
              <iframe
                width="100%"
                height="100%"
                src={toolData?.youtubeVideoLink}
                title={"Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </VideoDiv>
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
