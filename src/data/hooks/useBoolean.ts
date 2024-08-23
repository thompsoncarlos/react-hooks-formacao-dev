import { useState } from "react";

export default function useBoolean(valor?: boolean) {
  // Uma especialização do hook useState, alternando o valor de uma variável
  const [ativo, setAtivo] = useState(valor ?? false);

  function toggleAtivo() {
    setAtivo(!ativo);
  }

  function ativoTrue() {
    setAtivo(true)
  }

  function ativoFalse() {
    setAtivo(false)
  }

  const r: [boolean, ()=> void, ()=> void, ()=> void]  = [ativo, toggleAtivo, ativoTrue, ativoFalse]
  return r // Retorno semelhando ao useState, um array com uma variavel e uma função.
}