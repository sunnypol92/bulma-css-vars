export interface BulmaCssVarsOptions {
  themeFile: string
  sassOutputFile: string
  sassEntryFile: string
  colorDefs: { [colorName: string]: ColorDef }
  derivedColorDefs: { [colorName: string]: derivedColorDef }
}

export interface Hsl {
  h: number
  s: number
  l: number
  a?: number
}
export interface Rgb {
  r: number
  g: number
  b: number
  a?: number
}
export type Hex = string

export type ColorDef = Hsl | Rgb | Hex

export type derivedColorDef = [string]

export type ColorFn =
  | 'rgba'
  | 'adjusthue'
  | 'saturate'
  | 'desaturate'
  | 'lighten'
  | 'darken'
  | 'color-invert'
  | 'dark-color'
  | 'light-color'
  | 'transparentize'

export interface ColorFnCall {
  fn: ColorFn
  fnArg: string
  composeArg?: ColorFnCall
}

export interface ColorCallSet {
  [color: string]: {
    calls: ColorFnCall[]
    value?: Hsl
  }
}

export interface NameValueColor {
  name: string
  value: string
}
