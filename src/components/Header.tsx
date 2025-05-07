import React from "react";
import { FaReact } from "react-icons/fa6";


export default function Header({
    userName,
    userImage
} : {
    userName?: string,
    userImage?: string,
}) {
    userName  = userName   || 'Não Logado!';
    userImage = userImage  || './user.svg';

    return (
        <header className="flex flex-row justify-between shadow shadow-zinc-300 p-4">
            <span className="header-logo flex flex-row items-center gap-3">
                <FaReact className="text-4xl"></FaReact>
                <p className="text-2xl">Confin Front</p>
            </span>
            <span className="flex flex-row gap-3 items-center">
                <span className="header-user-image rounded-full bg-zinc-400 w-12 h-12 flex items-center justify-center">
                    <img className="w-6 text-zinc-100" src={userImage} alt="" />
                </span>
                <span className="">
                    {userName}
                </span>
            </span>
        </header>
    );
}