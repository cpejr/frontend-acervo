import React, { useEffect, useState } from "react";
import { FormInput } from "../../components";
import { Container, Title, Form, Section } from "./Styles";

export default function ManageEvents() {
  return (
    <Container>
      <Title>SUBMETER NOVO ITEM</Title>

      <Form>
        <Section>
          <FormInput></FormInput>
          <FormInput></FormInput>
          <FormInput></FormInput>
        </Section>
      </Form>
    </Container>
  );
}
