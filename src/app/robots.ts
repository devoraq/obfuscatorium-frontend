import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
//   const baseUrl 
  
  return {
    rules: {
      userAgent: '*',
   
      allow: ['/', '/register', '/login'],
      
      disallow: [
        '/admin/',
        '/dashboard/',
        '/profile/',
        '/api/',
        '/_next/',
        '/private/',
        '/settings/',
      ],
    },
    
    // sitemap: `${baseUrl}/sitemap.xml`,

    // host: baseUrl,
  }
}