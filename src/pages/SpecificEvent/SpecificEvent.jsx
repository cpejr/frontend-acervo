import { Container, EventCollumn } from "./Styles";
import { Event } from "../../components";
import { useParams } from "react-router-dom";
import { useGetReadByName } from "../../hooks/querys/events";
import { toast } from "react-toastify";

export default function SpecificEvent() {
  const { name } = useParams();
  const { data: event } = useGetReadByName({
    name: name,
    onError: (err) => {
      toast.error(err);
    },
  });
  return (
    <Container>
      <EventCollumn>{event && <Event data={event} />}</EventCollumn>
    </Container>
  );
}
