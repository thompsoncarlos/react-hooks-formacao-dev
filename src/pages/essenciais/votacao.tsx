import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function () {

  const [dados, setDados] = useState({ votosRoxo: 0, votosVerde: 0 });

  function votoRoxo() {
    // Pode ser que a variável dados tenha algum membro alterado durante a alteração do botão
    // setDados({ votosRoxo: dados.votosRoxo + 1, votosVerde: dados.votosVerde});
    setDados((dadosAtuais) => {
      return {
        votosRoxo: dadosAtuais.votosRoxo + 1,
        votosVerde: dadosAtuais.votosVerde
      }
    })
  }

  function votoVerde() {
    setDados((dadosAtuais) => {
      return {
        votosRoxo: dadosAtuais.votosRoxo,
        votosVerde: dadosAtuais.votosVerde + 1
      }
    })
  }

  function zerar() {
    setDados(() => {
      return { votosRoxo: 0, votosVerde: 0}
    })
  }

  return (
    <Pagina
      titulo="Votação"
      subtitulo="Usando estado com objeto"
    >
      <Flex col center>
        <Display texto="Qual a melhor cor?" textoComplementar={`Verde ${dados.votosVerde} | Roxo: ${dados.votosRoxo}`} />
        <Flex gap={5}>
          <Botao cor="bg-green-600" onClick={votoVerde} redondo tamanho="2xl" />
          <Botao cor="bg-purple-600" onClick={votoRoxo} redondo tamanho="2xl" />
        </Flex>
        <Botao texto="Zerar" cor="bg-gray-700" tamanho="lg" onClick={zerar}/>
      </Flex>
    </Pagina>
  )
}