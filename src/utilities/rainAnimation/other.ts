export function random (min: number, max: number): number {
  return Math.random() * (max - min + 1) + min
}

export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>> (
  f: F,
  ms: number
): (...args: Parameters<F>) => void {
  let timeout: null | NodeJS.Timeout = null

  return function (...args: Parameters<F>) {
    if (timeout !== null) return

    f(...args)

    timeout = setTimeout(() => (timeout = null), ms)
  }
}
