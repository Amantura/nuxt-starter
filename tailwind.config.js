// import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.js',
    'plugins/**/*.js',
    'services/*.js',
    'App.{js,vue}',
    'app.{js,vue}',
    'Error.{js,vue}',
    'error.{js,vue}',
    'content/**/*.md'
  ]
}