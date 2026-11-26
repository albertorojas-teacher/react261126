import { useState } from "react";

// Ejemplo minimo de useState: el clic alterna entre dos estados y el render refleja ese
// estado tanto en el texto, como en las clases CSS del boton.
export const ChameleonButton = () => {
  // El booleano representa si el boton esta activo o no
  const [active, setActive] = useState<boolean>(false);

  //   Invertimos el valor conocido eni liugar de depender de una copia
  // potencialmente antigua capturada por el manejador
  const handleToggle = () => setActive((prev) => !prev);

  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <h3 className="font-semibold text-indigo-300">Boton Camaleon</h3>
      <button
        onClick={handleToggle}
        className={`rounded-lg px-5 py-2.5 font-semibold transition-all duration-300 ${active ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20" : "bg-indigo-600 text-white hover:bg-indigo-500"} `}
      >
        {active ? "Estado: Activado" : "Haz Clic para activar"}
      </button>
    </div>
  );
};
