import React, { useState } from "react";
import Field from "../Field";
import InputMask from "@mona-health/react-input-mask";
import { styled } from "styled-components";
import Title from "../Title";

const SectionContact = styled.section`
  padding-top: var(--padding-top-header);
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: center;

  div {
    background-color: var(--dark-blue);
    padding: 2rem 0 5rem 0;
    margin: 0 10rem 5rem 10rem;
    border: 1px solid var(--dark-blue);
    box-shadow: 10px -8px var(--green);
    width: 700px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  width: 100%;
  background-color: var(--dark-blue);

  .tell {
    height: 2rem;
    padding: 1rem;
    border: none;
  }

  .message {
    resize: none;
    height: 120px;
    padding: 1rem;
    border: none;
  }
`;

export default function FormContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(name, phone, email, message);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <SectionContact>
      <DivContainer>
        <div>
          <Title actionTitle="contact">Contato</Title>
          <Form onSubmit={sendEmail}>
            <Field
              type="text"
              placeholder="Nome"
              required={true}
              valueInput={name}
              change={(valueInput) => setName(valueInput)}
            />
            <InputMask
              className="tell"
              mask="(99) 99999-9999"
              placeholder="Telefone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Field
              classStyle="email"
              type="email"
              placeholder="Email"
              required={true}
              valueInput={email}
              change={(valueInput) => setEmail(valueInput)}
            />
            <textarea
              className="message"
              placeholder="Digite usa mensagem aqui"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Field classStyle="button" type="submit" valueInput="Enviar" />
          </Form>
        </div>
      </DivContainer>
    </SectionContact>
  );
}
