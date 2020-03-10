const routes = require('next-routes')

module.exports = routes()
  .add('/', 'home')
  .add('/posts', 'posts')
  .add('/posts/:post', 'detail')
