import { useState } from "react";

export default function useToggle(valor?: boolean) {
  // Uma especialização do hook useState, alternando o valor de uma variável
  const [ativo, setAtivo] = useState(valor ?? false);

  function toggleAtivo() {
    setAtivo(!ativo);
  }

  const r: [boolean, ()=> void]  = [ativo, toggleAtivo]
  return r // Retorno semelhando ao useState, um array com uma variavel e uma função.
}