// Forma de un elemento de la lista qie cambia al hacer clic
// id permite identificarlo de manera estable;
// los textos y "activo" determinan que contenido debe renderizar o mostrar en la interfaz.
export interface InteractiveItem {
  id: number;
  initialText: string;
  activeText: string;
  active: boolean;
}

// Forma de cada tecnologia mostrada en una lista.
export interface TecnologyItem {
  id: number;
  name: string;
  category: string;
}
