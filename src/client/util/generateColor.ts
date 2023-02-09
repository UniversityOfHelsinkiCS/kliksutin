const generateColor = (string: string) => {
  const stringUniqueHash = [...string].reduce(
    (acc, char) => char.charCodeAt(0) + ((acc << 30) - acc), // eslint-disable-line no-bitwise
    0
  )
  return `hsl(${stringUniqueHash % 360}, 90%, 70%)`
}

export default generateColor
