const demoRoutes = []

if (process.env.NODE_ENV !== 'production') {
  const createRoute = require('vue-book').createRoute
  demoRoutes.push(createRoute({
    requireContext: require.context('./components', true, /.demo.vue$/),
    path: '/demo',
    hideFileExtensions: true
  }))
}

export default demoRoutes
