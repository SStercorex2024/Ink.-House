import postcssPxToRem from 'postcss-pxtorem'

export default ({env}) => {
  const isProd = env === 'prodaction'
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        propList: ['*'],
        mediaQuery: true,
      })
    )
  }
  return {
    plugins
  }
}