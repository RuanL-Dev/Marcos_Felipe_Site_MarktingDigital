import Image from "next/image";

export function Footer() {
  return (
    <footer className="px-4 py-8 text-muted sm:px-6 sm:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-border-soft/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            alt="Marca Marcos Felipe"
            className="h-12 w-12 rounded-xl border border-border-soft/70 bg-surface object-cover p-1"
            height={100}
            src="/brand/logo-lipe.jpeg"
            width={100}
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-ink">Marcos Felipe</p>
            <p className="text-muted">Eventos, material grafico e design.</p>
          </div>
        </div>
        <p className="max-w-xl text-sm leading-6">
          Marcos Felipe. Solucoes visuais para eventos, materiais e marcas.
        </p>
      </div>
    </footer>
  );
}
