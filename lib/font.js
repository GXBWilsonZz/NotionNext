/**
 * 在此处配置字体
 */
const BLOG = require('../blog.config')

// const { fontFamily } = require('tailwindcss/defaultTheme')

function CJK() {
  switch (BLOG.LANG.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return 'SC'
    case 'zh':
    case 'zh-hk':
    case 'zh-tw':
      return 'TC'
    case 'ja':
    case 'ja-jp':
      return 'JP'
    case 'ko':
    case 'ko-kr':
      return 'KR'
    default:
      return null
  }
}

const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`]
const fontSerifCJK = !CJK()
  ? []
  : [`"Noto Serif CJK ${CJK()}"`, `"Noto Serif ${CJK()}"`]

const fontFamilies = {
  sans: [...(BLOG.CUSTOM_FONT ? BLOG.CUSTOM_FONT_SANS : []),
    '-apple-system', '"Microsoft YaHei"', '"Noto Sans SC"', '"PingFang SC"', 'BlinkMacSystemFont', '"Hiragino Sans GB"',
    '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Segoe UI"',
    'HarmonyOS_Regular', '"Helvetica Neue"',
    'Helvetica', '"Source Han Sans SC"',
    'Arial', 'sans-serif', ...fontSansCJK],
  serif: [...(BLOG.CUSTOM_FONT ? BLOG.CUSTOM_FONT_SERIF : []),
    '-apple-system', '"Noto Serif SC"', 'SimSun', '"Times New Roman"', 'Times', 'serif',
    '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', ...fontSerifCJK],
  noEmoji: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'sans-serif'
  ]
}
module.exports = { fontFamilies }
