import dayjs from 'dayjs'
import { defineConfig } from 'dumi'

const defaultPath = '/fe-toolkit-doc'
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : ''

export default defineConfig({
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  logo: `${baseUrl}/logo.png`,
  favicons: [`${baseUrl}/logo.png`],
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: 'fe-toolkit',
    footer: `Copyright © ${dayjs().format('YYYY')} | Powered by <a>hongmei.mao</a>`,
  },

  base: `${baseUrl}/`,
  publicPath: `${baseUrl}/`,
})
