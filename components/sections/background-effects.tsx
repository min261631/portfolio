export function BackgroundEffects() {
  return (
    <>
      {/* Animated cloud-like light patches */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div className="cloud-light-1" />
        <div className="cloud-light-2" />
        <div className="cloud-light-3" />
      </div>
    </>
  )
}

