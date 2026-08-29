/**
 * Fio de luz no topo que mede o quanto da página já foi lida.
 *
 * Não tem estado nem JS próprio: lê `--scroll-progress` do <ScrollField> e
 * escala em X. Como é só `transform`, a barra acompanha a rolagem sem custo.
 */
export function ScrollProgress() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <span className="scroll-progress-bar" />
    </div>
  )
}
