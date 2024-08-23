import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function () {

  const [url, setUrl] = useState(); // initial: undefined

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(resp => resp.json())
      .then(obj => {
        console.log("Foto Atualizada");
        setUrl(obj.message)})
  }, [])

  return (
    <Pagina
      titulo="Requisição à API"
      subtitulo="Requerindo dados"
    >
      <img className="max-w-sm" src={url}></img>
    </Pagina>
  )
}