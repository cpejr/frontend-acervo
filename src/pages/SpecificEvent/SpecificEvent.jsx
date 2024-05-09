import {
    Container,
    DivLine,
    LetComment,
    Line,
    OtherEvents,
    EventCollumn,
  } from "./Styles";

import { Card, Event } from "../../components";
import { useState, useEffect } from "react";
import { useGetCategoryTypeByName } from "../../hooks/querys/categoryType";
import { useParams } from "react-router-dom";
import useAuthStore from "../../Stores/auth";
  
export default function SpecificEvent() {
    const { getUser } = useAuthStore();
    const { name } = useParams();
    const [eventData, setEventData] = useState({});
    const [eventByName, setEventByName] = useState({});
 
    async function gettingEventDataByName() {
      const aiEvent = await useGetCategoryTypeByName({ name });
      setEventByName(aiEvent);
    }
    
    useEffect(() => {
      gettingEventDataByName();
    }, [name]);

    useEffect(() => {
      setEventData(eventByName);
    }, [eventByName]);

    return (
      <Container>
        <EventCollumn>{eventData.Event && <Event data={eventData} />}</EventCollumn>
        <LetComment>
          <h2>Deixe seu comentário</h2>
        </LetComment>
        <OtherEvents>
          <h1>OUTROS EVENTOS SIMILARES:</h1>
          {eventData.Event && eventData.Event.length > 0 ? (
            <div>
              <DivLine>
                <Line>
                  {eventData.Event.slice(0, 8).map((content, index) => (
                    <Card
                      data={{
                        ...content,
                      }}
                      key={index}
                    />
                  ))}
                </Line>
              </DivLine>
            </div>
          ) : (
            <h2>Nenhum evento semelhante encontrado</h2>
          )}
        </OtherEvents>
      </Container>
    );
}
