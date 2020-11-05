export default function (value: number) {
  if (!value) return 0
  return Math.round((value / 8e+6) * 100) / 100
}
