import { useId } from "react";
import Flex from "../template/Flex";


export default function InputComId (props) {
  const id = useId();
  return (
    <Flex center>
    <label htmlFor={id} className="m-1" >{props.label}</label>
    <input id={id} className="m-2 text-gray-600 p-2 rounded-md" type="text"></input>
  </Flex>
  )
}