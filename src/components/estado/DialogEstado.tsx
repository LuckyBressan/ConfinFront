import DialogForm from "../DialogForm";
import api from "@/services/api";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CircleCheck } from "lucide-react";

export default function DialogEstado({
  carregaEstados
} : {
  carregaEstados : () => Promise<void>
}) {

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if(!isNaN(Number(e.key))) {
      e.target.value = e.target.value.replace(/\d/g, "");
    }
  }

  return (
    <DialogForm
      trigger={{
        info: {
          icon: (<CircleCheck />),
          title: "Novo Estado"  
        }
      }}
      dialog={{
        title: "Incluir Estado",
        description: "Informe os dados do estado.",
      }}
      submit={{
        title: "Salvar",
        action: async (data) => {
          const estado = data as { sigla: string, nome: string }
          await api.post("Estado", estado);
          carregaEstados();
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
              className="col-span-3"
              onKeyUp={handleKeyUp}
            />
          ),
        },
      ]}
    />
  );
}
