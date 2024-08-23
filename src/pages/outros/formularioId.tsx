import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId } from "react";

export default function() {
  let id = useId();

  return (
    <Pagina titulo="Cocnhecendo o hook useId" subtitulo="Usando o useId">
      <Flex center>
        <label htmlFor={`nome-${id}`} className="m-1">Nome:</label>
        <input id={`nome-${id}`} className="m-2 text-gray-600 p-2 rounded-md" type="text"></input>
      </Flex>
      <Flex center>
        <label htmlFor={`sobrenome-${id}`} className="m-1" >Sobrenome:</label>
        <input id={`sobrenome-${id}`} className="m-2 text-gray-600 p-2 rounded-md" type="text"></input>
      </Flex>
    </Pagina>
  )
}