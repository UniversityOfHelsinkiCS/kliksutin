import {
  amber,
  blue,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors'

const colors = [
  amber,
  blue,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
]
const N = colors.length

const getColorFromOptions = (hash: number, minShade = 1, maxShade = 3) => {
  const shade = ((hash % (maxShade - minShade)) + minShade) * 100
  const hue = hash % N
  return colors[hue][shade]
}

const generateColor = (string: string) => {
  const stringUniqueHash = [...string].reduce(
    (acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), // eslint-disable-line no-bitwise
    0
  )
  return getColorFromOptions(Math.abs(stringUniqueHash))
}

export default generateColor
