import dayjs from 'dayjs'
import { defineConfig } from 'dumi'

export default defineConfig({
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  logo: '/logo.png',
  favicons: ['/logo.png'],
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: 'fe-toolkit',
    footer: `Copyright © ${dayjs().format('YYYY')} | Powered by <a>hongmei.mao</a>`,
  },
})
