import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import DialogEstado from "./DialogEstado";
import api from "@/services/api";
import DialogForm from "../DialogForm";

import flags from "@/data/flags.json";
import type { Estado } from "@/@types/Estado";
import { useEstadoContext } from "./EstadoProvider";
import DataTable from "../DataTable";

const columns: ColumnDef<Estado>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "sigla",
    header: "Sigla",
    cell: ({ row }) => <div className="uppercase">{row.getValue("sigla")}</div>,
  },
  {
    accessorKey: "nome",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nome
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("nome")}</div>,
  },
  {
    accessorKey: "bandeira",
    header: "Bandeira",
    cell: ({ row }) => (
      <div>
        <img
          className="size-15"
          src={flags[row.getValue("sigla")]}
          alt={`Bandeira do estado: ${row.getValue("nome")}`}
          title={`Bandeira do estado: ${row.getValue("nome")}`}
        />
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const estado = row.original;
      const { carregaEstados } = useEstadoContext();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            {/* Fazer abrir o dialog de edição */}
            <DialogEstado 
              alterar={{
                dados: estado,
                trigger: (<DropdownMenuItem>Alterar</DropdownMenuItem>)
              }} 
            />
            <DialogForm
              dialog={{
                title: "Excluir Estado",
                description: "Você tem certeza que deseja excluir o registro?"
              }}
              trigger={{
                obj: (<DropdownMenuItem>Excluir</DropdownMenuItem>)
              }}
              submit={{
                title: "Excluir",
                action: () => {
                  console.log('delete')
                  api.delete(`Estado/${estado.sigla}`).then(() => {
                    carregaEstados(); // Recarrega os estados após a exclusão 
                  }).catch((error) => {
                    console.error("Erro ao excluir o estado:", error);
                  });
                },
              }}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableEstado() {

  const { estados } = useEstadoContext();

  return (
    <>
      <DataTable 
        columns={columns}
        data={estados}
        filters={[
          (
            <Input
              name="nome"
              placeholder="Filtrar por nome..."
              className="max-w-sm"
            />
          )
        ]}
        actions={[
          (<DialogEstado />)
        ]}
      />
    </>
  );
}
