import { useState } from "react";

// Nos va a enseñar dos interacciones independientes sobre el mismo elemento:
// entrar/salir con el puntero cambia el fondo, y hacer clic alterna el borde

export const InteractiveSquare = () => {
  // Estado que sigue si el puntero esta dentro del cuadrado
  const [onTop, setOnTop] = useState<boolean>(false);
  // Estado persiste despues de hacer clic, hasta el siguiente clic
  const [activeBorder, setActiveBorder] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <h3 className="font-semibold text-indigo-300">Cuadrado Interactivo</h3>
      {/* Los eventos y las clases de este elemento combinan los dos estados:
        el puntero controla el fondo y el clic controla el borde */}
      <div
        onMouseEnter={() => setOnTop(true)}
        onMouseLeave={() => setOnTop(false)}
        onClick={() => setActiveBorder((prev) => !prev)}
        className={`flex h-36 w-36 cursor-pointer select-none items-center justify-center rounded-xl p-3 text-center text-xs font-semibold transition-all duration-300 ${onTop ? "bg-amber-400 text-slate-950" : "bg-slate-700 text-slate-200"} ${activeBorder ? "border-4 border-rose-500" : "border-4 border-transparent"} `}
      >
        {/* El contendido informa visualmente de cada interaccion */}
        {onTop ? "Raton dentro" : "Pasa el raton"}
        <br />
        {activeBorder ? "(Con borde" : "(Haz Clic"}
      </div>
    </div>
  );
};
