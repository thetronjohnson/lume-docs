import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <b>Lume</b>,
  project: {
    link: 'https://github.com/luminous-devs/lume',
  },
  docsRepositoryBase: 'https://github.com/luminous-devs/docs',
  footer: {
    text: 'Lume Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Lume'
    }
  }
}

export default config
