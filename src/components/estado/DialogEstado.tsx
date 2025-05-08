import DialogForm from "../DialogForm";
import api from "@/services/api";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function DialogEstado() {
  return (
    <DialogForm
      titleTrigger="Novo Estado"
      dialog={{
        title: "Incluir Estado",
        description: "Informe os dados do estado.",
      }}
      submit={{
        title: "Salvar",
        action: async () => {
          const sigla = document.getElementById("sigla") as HTMLInputElement;
          const nome = document.getElementById("nome") as HTMLInputElement;
          const estado = {
            sigla: sigla.value,
            nome: nome.value,
          };
          await api.post("Estado", estado);
          //Alterar o estado da tabela para atualizar os dados
          // setEstados(await buscaEstados());
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
              onChange={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.toUpperCase();
                const regex = /\d/;
                if (regex.test(input.value)) {
                  input.classList.add("border-red-500");
                } else {
                  input.classList.remove("border-red-500");
                }
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
          input: <Input id="nome" required className="col-span-3" />,
        },
      ]}
    />
  );
}
