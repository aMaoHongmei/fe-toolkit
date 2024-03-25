export enum QRErrorCorrectLevel {
  L = 1,
  M = 0,
  Q = 3,
  H = 2,
}

export type IOps = Partial<{
  padding: number
  width: number
  height: number
  correctLevel: 0 | 1 | 2 | 3
  reverse: boolean
  background: string
  foreground: string
}>
