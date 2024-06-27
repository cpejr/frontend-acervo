import useAuthStore from "../../Stores/auth";
import Card from "../../components/features/Card/Card";
import LargeCard from "../../components/features/LargeCard/LargeCard";
import {
  useGetFavoritesEvents,
  useGetFavoritesMemorials,
} from "../../hooks/querys/user";
import {
  Container,
  DivLine,
  Line,
  NotFound,
  Spinner,
  TrendingEvents,
} from "./Styles";

export default function Favorites() {
  // States and Varialbes
  const userId = useAuthStore((state) => state?.auth?.user?._id);

  // BackEnd Calls

  const { data: favoritesEvents, isLoading: isLoadingEvent } =
    useGetFavoritesEvents({
      userId: userId,
      onError: (err) => {
        console.error(err);
      },
    });

  const { data: favoritesMemorials, isLoading: isLoadingMemorial } =
    useGetFavoritesMemorials({
      userId: userId,
      onError: (err) => {
        console.error(err);
      },
    });
  return (
    <Container>
      <TrendingEvents>
        <h1>Eventos</h1>
        {isLoadingEvent ? (
          <Spinner />
        ) : (
          <DivLine>
            {favoritesEvents?.length === 0 && (
              <NotFound>Nenhum Evento Encontrado</NotFound>
            )}
            <Line>
              {favoritesEvents?.map((event) => (
                <Card key={event?._id} data={event} />
              ))}
            </Line>
          </DivLine>
        )}
      </TrendingEvents>
      <TrendingEvents>
        <h1>Memoriais</h1>
        {isLoadingMemorial ? (
          <Spinner />
        ) : (
          <DivLine>
            {favoritesMemorials?.length === 0 && (
              <NotFound>Nenhum Memorial Encontrado</NotFound>
            )}
            {favoritesMemorials?.map((card) => (
              <Line key={card?.title}>
                <LargeCard
                  aria-label="Cartão de memorial"
                  data={card}
                  imagesLoading={isLoadingMemorial}
                />
              </Line>
            ))}
          </DivLine>
        )}
      </TrendingEvents>
    </Container>
  );
}
