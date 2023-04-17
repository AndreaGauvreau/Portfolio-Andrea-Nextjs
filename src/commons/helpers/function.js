export function rgbaToHex(rgbaColor) {
  const r = rgbaColor.r.toString(16).padStart(2, '0')
  const g = rgbaColor.g.toString(16).padStart(2, '0')
  const b = rgbaColor.b.toString(16).padStart(2, '0')
  return `#${r}${g}${b}`
}
export function hexToRgb(hexColor) {
  // Enlever le caractère "#" si présent
  if (hexColor[0] === '#') {
    hexColor = hexColor.substring(1)
  }

  // Convertir la couleur hex en valeurs RGB
  const red = parseInt(hexColor.substring(0, 2), 16)
  const green = parseInt(hexColor.substring(2, 4), 16)
  const blue = parseInt(hexColor.substring(4, 6), 16)

  return [red, green, blue]
}
export function isColorTooDark(hexColor) {
  // Enlever le caractère "#" si présent
  if (hexColor[0] === '#') {
    hexColor = hexColor.substring(1)
  }

  // Convertir la couleur hex en valeurs RGB
  const red = parseInt(hexColor.substring(0, 2), 16)
  const green = parseInt(hexColor.substring(2, 4), 16)
  const blue = parseInt(hexColor.substring(4, 6), 16)

  // Calculer la luminance de la couleur
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255

  // Si la luminance est inférieure à 0,5, la couleur est considérée comme trop foncée
  return luminance < 0.5
}

export function isValidHexColor(hex) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)
}
