const { VercelAdapter } = require('@sveltejs/adapter-vercel')

module.exports = {
  kit: {
    adapter: VercelAdapter(),
    // ...
  },
}
