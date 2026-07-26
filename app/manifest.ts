import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Priyansh Kakkad Portfolio',
    short_name: 'Priyansh',
    description: 'Portfolio of Priyansh Kakkad, a Full-Stack Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/myphoto.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/images/myphoto.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
