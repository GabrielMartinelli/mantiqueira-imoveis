import React, { useState } from "react";

export default function FormContact() {
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <div>
      <h2>Contato</h2>
      <form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={fields.name}
          required
        />
        <input />
        <input />
        <textarea />
        <input />
      </form>
    </div>
  );
}
