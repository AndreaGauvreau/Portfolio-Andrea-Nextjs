/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, {isServer}) => {
    // Ajoutez la configuration du chargeur de fichier pour les fichiers .md
    config.module.rules.push({
      test: /\.md$/,
      use: 'file-loader',
      exclude: /node_modules/,
    })

    return config
  },
}

module.exports = nextConfig
