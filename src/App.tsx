import { StateEffectPanell } from "./components/level1/StateEffectPanell";
import { ChameleonButton } from "./components/level2/ChameleonButton";
import { InteractiveSquare } from "./components/level2/InteractiveSquare";

export function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <header>
          <h1 className="text-3xl font-extrabold text-white">
            Laboratorio: Hooks y Eventos en React + TS
          </h1>
          <p className="mt-1 text-slate-400">
            Arquitectura Clean Code dividida en tipos, datos y componentes por
            nivel
          </p>
        </header>
        {/* Nivel 1: sincroniza el estado de reaxt con el titulo del ,navegador */}
        <StateEffectPanell />
        {/* Nivel 2: Ejemplos de estado local y eventos del puntero */}
        <section className="grid gap-6 md:grid-cols-2">
          <ChameleonButton />
          <InteractiveSquare />
        </section>
      </div>
    </main>
  );
}

export default App;
