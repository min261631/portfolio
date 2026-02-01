export function BackgroundEffects() {
  return (
    <>
      {/* Animated cloud-like light patches with green/blue gradients */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div className="cloud-light-1" />
        <div className="cloud-light-2" />
        <div className="cloud-light-3" />
        {/* Additional green/blue gradient glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-sky-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />
      </div>
    </>
  )
}

