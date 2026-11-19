import { MetadataRoute } from 'next';
import { initialArticles } from '@/data/initial-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bhaarathi.com';

  const routes = [
    '',
    '/#about',
    '/#capabilities',
    '/#portfolio',
    '/#ecosystem',
    '/#impact-observatory',
    '/#journey',
    '/#venture-radar',
    '/#thought-leadership',
    '/#credentials',
    '/#engagement-desk'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  return [...routes];
}
