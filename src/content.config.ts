import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIE = {
  'gestione-e-numeri': 'Gestione e numeri',
  'presenza-online': 'Presenza online',
  vendite: 'Vendite',
  'dietro-le-quinte': 'Dietro le quinte',
} as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    categoria: z.enum(['gestione-e-numeri', 'presenza-online', 'vendite', 'dietro-le-quinte']),
    /** Area dell'analisi a cui porta il bottone finale */
    porta: z.enum(['gestione', 'online', 'vendite']),
    /** Le bozze non vengono pubblicate */
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog };
