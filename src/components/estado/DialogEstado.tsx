import DialogForm from "../DialogForm";
import api from "@/services/api";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CirclePlus } from "lucide-react";
import type { Estado } from "@/@types/Estado";

import { useEstadoContext } from "./EstadoProvider";
import { useAlert } from "../AlertProvider";
import { AlertEnum } from "@/enums/AlertEnum";


export default function DialogEstado({
  alterar
} : {
  alterar?: {
    trigger: React.ReactNode;
    dados  : Estado;
  }
}) {

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if(!isNaN(Number(e.key))) {
      e.target.value = e.target.value.replace(/\d/g, "");
    }
  }

  const { carregaEstados } = useEstadoContext();
  const { showAlert } = useAlert();

  const title = alterar ? "Alterar" : "Incluir"

  return (
    <DialogForm
      trigger={{
        obj: alterar?.trigger,
        info: {
          icon: (<CirclePlus />),
          title: `${title} Estado`
        }
      }}
      dialog={{
        title: `${title} Estado`,
        description: "Informe os dados...",
      }}
      submit={{
        title: alterar ? "Alterar" : "Salvar",
        action: async (data) => {
          const estado = data as Estado
          await api[alterar ? "put" : "post"]("Estado", estado)
          showAlert({
            title: alterar ? "Alterado com sucesso!" : "Incluído com sucesso!",
            description: `O estado foi ${alterar ? 'alterado' : 'incluído'} com sucesso.`
          }, AlertEnum.SUCCESS)
          carregaEstados()
        },
      }}
      form={[
        {
          label: (
            <Label htmlFor="sigla" className="text-right">
              Sigla
            </Label>
          ),
          input: (
            <Input
              id="sigla"
              maxLength={2}
              required
              disabled={alterar ? true : false}
              value={alterar?.dados.sigla}
              onKeyUp={handleKeyUp}
              onChange={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.toUpperCase();
              }}
            />
          ),
        },
        {
          label: (
            <Label htmlFor="nome" className="text-right">
              Nome
            </Label>
          ),
          input: (
            <Input
              id="nome"
              required
              defaultValue={alterar?.dados.nome}
              className="col-span-3"
              onKeyUp={handleKeyUp}
            />
          ),
        },
      ]}
    />
  );
}
