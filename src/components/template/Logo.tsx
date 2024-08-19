import { IconFishHook } from "@tabler/icons";
import Link from "next/link";
import Flex from "./Flex";

interface LogoProps {
    subtitulo?: string;
    grande?: boolean;
    col?: boolean;
    className?: string;
}

export default function Logo(props: LogoProps) {
    return (
        <Link href="/" className="cursor-pointer">
            <Flex col={props.col} centerCross className={props.className}>
                <div
                    className={`
                    flex justify-center items-center
                    bg-blue-500 rounded-lg 
                    ${props.grande ? "w-[150px] h-[150px]" : "w-[50px] h-[50px]"}
                `}
                >
                    <IconFishHook size={props.grande ? 100 : 30} />
                </div>
                <Flex col centerCross gap={0}>
                    <div
                        className={`
                        ${props.grande ? "text-4xl" : "text-2xl"}
                        font-black
                    `}
                    >
                        React Hooks
                    </div>
                    {props.subtitulo && <div className="text-zinc-500 text-sm">{props.subtitulo}</div>}
                </Flex>
            </Flex>
        </Link>
    );
}
