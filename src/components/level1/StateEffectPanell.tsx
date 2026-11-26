import { useState, useEffect } from "react";

export const StateEffectPanell = () => {
  // interactiosn es el dato que se muestra como un contador
  // tipo number, hace explicito que clase de valor guardara el estado
  const [interactions, setInteractions] = useState<number>(0);

  //   Se mantiene un mensaje independiente para mostrar cuando hubo actividad
  const [lastRegistry, setLastRegistry] = useState<string>("Sin actividad aun");

  useEffect(() => {
    // Este efecto se ejecuta despues de renderizar y cada vez que cambia "interactions"
    // Sincronice el titulo de la pestaña con ese estado
    document.title = `Interaciones: ${interactions}`;

    return () => {
      // Limpiamos el efecto: restaura el titulo generico antes de que el efecto vuelva
      //a ejecutarse o cuando el componente se desmonte
      document.title = "Laboratorio React + TS";
    };
    // La dependencia hace que React vuelva a sincronizar el titulo cuando cambie el contador;
    // No se ejecuta por cambios del lastaRegistry
  }, [interactions]);

  const handleAdd = () => {
    // Esta funcion: React la llama y le pasa el valor mas reciente del estado.
    // prev es solo un nombre de ese parametro(pueden llamarlo de cualquier forma);
    // devolvermos ese valor mas 1 para incrementarlo
    // Asi no usamos un valor antiguo si React agrupa varias actualizaciones
    setInteractions((prev) => prev + 1);

    // La hora se calcula en el momento del clic y se guarda como otro estado.
    const hour = new Date().toLocaleTimeString();
    setLastRegistry(`Ultima actualizacion a las ${hour}`);
  };

  const handleReset = () => {
    setInteractions(0);
    setLastRegistry("Contador Reiniciado");
  };

  return (
    <section className="rounded-xl border boder-slate-700 bg-slate-800 p-6">
      <h2 className="mb-2 text-lg font-bold text-sky-400">
        Nivel 1: useState + useEffect
      </h2>
      <p className="mb-4 text-sm text-slate-300">
        Observa como cambia el titulo de la pestaña del navegador al modificar
        el estado
      </p>
      {/* El valor se deriva directamente del estado del contador */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="rounded-lg bg-slate-900 px-4 font-mono text-xl font-bold text-white">
          {interactions}
        </span>
        {/* En React se pasa la funcion al evento; no se invoca durante el render */}
        <button
          onClick={handleAdd}
          className="rounded-lg bg-sky-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          +1 Interaccion
        </button>
        <button
          onClick={handleReset}
          className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-700"
        >
          Reiniciar
        </button>
      </div>
      {/* El mensaje se actualiza junto con el contador, es estado separado */}
      <p className="mt-3 text-xs text-slate-400">{lastRegistry}</p>
    </section>
  );
};
