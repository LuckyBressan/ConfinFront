import type { Estado } from "@/@types/Estado";
import api from "@/services/api";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type EstadoContextType = {
  estados: Estado[];
  carregaEstados: () => void;
};

const EstadoContext = createContext<EstadoContextType | undefined>(undefined);

export function useEstadoContext() {
  const context = useContext(EstadoContext);
  if (!context) {
    throw new Error("useEstadoContext deve ser usado dentro do EstadoProvider");
  }
  return context;
}

export function EstadoProvider({ children }: { children: ReactNode }) {
  const [estados, setEstados] = useState<Estado[]>([]);

  const carregaEstados = () => {
    api.get("Estado")
      .then((res) => setEstados(res.data))
      .catch((err) => {
        console.error("Erro ao carregar estados:", err);
      });
  };

  // Carrega ao montar
  useEffect(() => {
    carregaEstados();
  }, []);

  return (
    <EstadoContext.Provider value={{ estados, carregaEstados }}>
      {children}
    </EstadoContext.Provider>
  );
}
