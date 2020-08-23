import modularscale from 'modularscale'
import postcssCustomUnit from 'postcss-custom-unit'

export default config => {
  // const shift = (fontSize, lineHeight) =>
  //  `${(parseFloat(lineHeight) - parseFloat(fontSize) * capHeight) / 2}rem`
  config = { fontSize: 16, verticalRhythm: 12, ...config }
  return postcssCustomUnit({
    units: [
      {
        convert: value => `${modularscale(value, config.modularScale)}rem`,
        from: 'ms',
      },
      {
        convert: value =>
          `${(value * config.verticalRhythm) / config.fontSize}rem`,
        from: 'vr',
      },
    ],
  })
}
/* return postcssFunctions({
    functions: {
      shift,
      negativeShift: (fontSize, lineHeight) =>
        `-${shift(fontSize, lineHeight)}`,
    },
  })(root, result) */
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
  ], */
