import type {
  InteractiveItem,
  TecnologyItem,
} from "../types/interactive.types";

// Datos iniciales para el ejemplo del clic
// Cada elemento conversa un texto para cada estado visual y una bandera "activo", que
// el componente cambia sin modificar este arreglo original.
export const INITIAL_ITEMS_CLICKS: InteractiveItem[] = [
  {
    id: 1,
    initialText: "Revisar Pull Request",
    activeText: "PR Aprobado ✓",
    active: false,
  },
  {
    id: 2,
    initialText: "Configurar Tailwind",
    activeText: "Estilos listos ✓",
    active: false,
  },
  {
    id: 3,
    initialText: "Desplegar en Vercel",
    activeText: "En Produccion ✓",
    active: false,
  },
];

// Datos que la lista de hover solo presenta, no necesita estado propio porque la interaccion de este ejemplo se resuleve con los estilos css :hover.
export const HOVER_TECNOLOGIES: TecnologyItem[] = [
  {
    id: 1,
    name: "React 19",
    category: "Libreria UI",
  },
  {
    id: 2,
    name: "Typescript",
    category: "Tipado Estatico",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    category: "Estilos utilitarios",
  },
];

// Pasos de texto usados por el ejemplo que cambia el tamaño de toda la lista
export const ZOOM_STEPS: string[] = [
  "1. Definir interfaces en /types",
  "2. Separar datos iniciales en /data",
  "3. Crear componentes con responsabilidad única",
];
