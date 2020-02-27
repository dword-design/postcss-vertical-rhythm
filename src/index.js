import postcssCustomUnit from 'postcss-custom-unit'
import modularscale from 'modularscale'

export default ({ verticalRhythm = 12, fontSize = 16, /*capHeight = .68, */modularScale } = {}) => {

  //const shift = (fontSize, lineHeight) =>
  //  `${(parseFloat(lineHeight) - parseFloat(fontSize) * capHeight) / 2}rem`

  return postcssCustomUnit({
    units: [
      {
        from: 'ms',
        convert: value => `${modularscale(value, modularScale)}rem`,
      },
      {
        from: 'vr',
        convert: value => `${value * verticalRhythm / fontSize}rem`,
      },
    ],
  })
  /*return postcssFunctions({
    functions: {
      shift,
      negativeShift: (fontSize, lineHeight) =>
        `-${shift(fontSize, lineHeight)}`,
    },
  })(root, result)*/
  /*
  rules: [
    {
      type: 'helper',
      name: 'R',
      matcher: 'R',
      styles: {
        'font-size': '$0',
        'line-height': '$1',
        'padding-top': 'shift($0, $1)',
        'margin-bottom': 'negativeShift($0, $1)',
      },
    },
  ],*/
}
