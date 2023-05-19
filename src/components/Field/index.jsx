import React from "react";

export default function Field() {
  return (
    <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name} required />
  );
}
