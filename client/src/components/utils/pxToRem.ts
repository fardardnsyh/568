export function pxToRem(pxValue: number, baseFontSize = 16) {
  return `${pxValue / baseFontSize}rem`;
}

