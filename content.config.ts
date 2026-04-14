import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        readingTime: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string())
      })
    })
  }
})
