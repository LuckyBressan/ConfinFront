import { useEffect, useState } from "react";
import Api from "../../services/Api";

export default function Listar() {

    const [estados, setEstados] = useState([])

    async function buscaEstados() {
        const res = await Api.get("Estado");
        return res.data;
    }

    useEffect(() => {
        setEstados(buscaEstados());
    }, [])

    return (
        <ul className="flex flex-col gap-3">
            {estados.map(estado => {
                return (
                    <li className="flex flex-row ">
                        {estado.sigla} - {estado.nome}
                    </li>
                )
            })}
        </ul>
    );
}