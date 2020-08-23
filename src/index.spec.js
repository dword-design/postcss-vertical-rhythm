import { property } from '@dword-design/functions'
import postcss from 'postcss'

import plugin from '.'

export default {
  'modular scale': async () => {
    const processor = postcss([plugin({ modularScale: 'minor second' })])
    const css =
      processor.process('body { padding: 2vr; font-size: 1ms }')
      |> await
      |> property('css')
    expect(css).toEqual(
      'body { padding: 1.5rem; font-size: 1.0666666666666667rem }'
    )
  },
  /* rhythm: () => withLocalTmpDir(async () => {
    await outputFile('pages/index.js', endent`
      export default {
        render: () => <div class="R(0ms,2vr)">Hello world</div>,
      }
    `)
    const nuxt = new Nuxt({
      modules: [atomizerModule],
      atomizer: {
        plugins: [verticalRhythmPlugin()],
      },
      dev: false,
    })
    await new Builder(nuxt).build()
    try {
      await nuxt.server.listen()
      expect(axios.get('http://localhost:3000/acss.css') |> await |> property('data'))
        .toEqual('.R\\(0ms\\,2vr\\){font-size:1rem;line-height:1.5rem;padding-top:.41rem;margin-bottom:-.41rem}')
    } finally {
      nuxt.close()
    }
  }),
  units: () => withLocalTmpDir(__dirname, async () => {
    await outputFile('pages/index.js', endent`
      export default {
        render: () => <div class="P(2vr) Fz(1ms)">Hello world</div>,
      }
    `)
    const nuxt = new Nuxt({
      modules: [atomizerModule],
      atomizer: {
        plugins: [verticalRhythmPlugin()],
      },
      dev: false,
    })
    await new Builder(nuxt).build()
    try {
      await nuxt.server.listen()
      expect(axios.get('http://localhost:3000/acss.css') |> await |> property('data'))
        .toEqual('.Fz\\(1ms\\){font-size:1.61803398875rem}.P\\(2vr\\){padding:1.5rem}')
    } finally {
      nuxt.close()
    }
  }), */
}
