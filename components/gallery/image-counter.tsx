interface ImageCounterProps {
  current: number
  total: number
}

export function ImageCounter({ current, total }: ImageCounterProps) {
  return (
    <div className="text-sm px-4 py-1.5 rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-400/20 to-sky-500/20">
      <span className="bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent font-semibold">
        {current} / {total}
      </span>
    </div>
  )
}






