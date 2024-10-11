import { create } from 'zustand'; // Cambiamos la importación a "named import"
import { StateCreator } from 'zustand';

// Definir el tipo de estado
interface StoreState {
  accessToken: string | null;
  refreshToken: string | null;
  setToken: (accessToken: string, refreshToken: string) => void;
  clearToken: () => void;
}

// Crear el store con Zustand y el tipo definido
export const useStore = create<StoreState>((set) => ({
  accessToken: null,
  refreshToken: null,
  setToken: (accessToken: string, refreshToken: string) => set({ accessToken, refreshToken }),
  clearToken: () => set({ accessToken: null, refreshToken: null }),
}));
