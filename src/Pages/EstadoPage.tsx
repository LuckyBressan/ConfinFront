import DataTableEstado from "@/components/estado/DataTableEstado";
import { EstadoProvider } from "@/components/estado/EstadoProvider";

export default function EstadoPage() {
  return (
    <EstadoProvider>
      <div className="">
        {/* <SectionCards /> */}
        {/* <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div> */}
        <DataTableEstado />
      </div>
    </EstadoProvider>
  );
}
