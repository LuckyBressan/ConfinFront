import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";
import { CirclePlus } from "lucide-react"
import type React from "react"

export default function DialogForm({
    titleTrigger,
    dialog,
    submit,
    form,
} : {
    titleTrigger: string;
    dialog: {
        title: string;
        description: string;
    };
    submit: {
        title: string;
        action: () => void;
    };
    form: {
        label: React.ReactNode;
        input: React.ReactNode;
    }[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
            <CirclePlus />
            {titleTrigger}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialog.title}</DialogTitle>
          <DialogDescription>
            {dialog.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            {form.map((inputs, index) => (
                <div key={index} className="grid grid-cols-4 items-center gap-4">
                    {inputs.label}
                    {inputs.input}
                </div>
            ))}
        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button type="submit" onClick={submit.action}>{submit.title ?? 'Salvar'}</Button>
            </DialogClose>
            <DialogClose asChild>
                <Button variant="secondary">Cancelar</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
