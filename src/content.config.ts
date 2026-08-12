import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Selected work. The homepage orders these by `rank` — lowest first — so the
 * 01 / 02 / 03 markers in the UI carry real meaning: they are your own
 * ordering of the work by impact, not decoration.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /** One sentence. What it is and who it was for. */
    summary: z.string(),
    /** Your ordering by impact. 1 is the strongest piece of work you have. */
    rank: z.number().int().positive(),
    /** e.g. "2025" or "2023—2025". Shown in the meta line. */
    period: z.string(),
    /** Your part in it, in plain words: "Built and shipped solo". */
    role: z.string().optional(),
    /** Tools, shown as a mono meta line. Keep to 4 or fewer. */
    stack: z.array(z.string()).default([]),
    /**
     * The outcome, as a measurement. This is the single highest-value field
     * on the page — it is what turns a list of projects into evidence.
     *   metric: { value: '+312%', label: 'organic sessions, 6mo' }
     * Leave it off entirely and the row falls back to the role line.
     */
    metric: z
      .object({
        value: z.string(),
        label: z.string(),
        /** true renders the value in the "gain" green. Only for real gains. */
        positive: z.boolean().default(false),
      })
      .optional(),
    /** External link (live site, repo). Omit for a local case-study page. */
    href: z.string().url().optional(),
    /** Hidden from the site until you flip this to false. */
    draft: z.boolean().default(false),
  }),
});

/**
 * Employment history for /resume. Kept as content rather than a hardcoded
 * page so it can be regenerated straight from the files in /resumes.
 */
const roles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/roles' }),
  schema: z.object({
    company: z.string(),
    title: z.string(),
    start: z.string(),
    /** Omit for a current role; renders as "Present". */
    end: z.string().optional(),
    location: z.string().optional(),
    /**
     * Context that identifies the engagement, or the other name the same job
     * went by — the division, the account, the scope of a management remit:
     *   title: 'Senior Software Engineer & Technical Manager'
     *   note:  'Technical manager of Professional Services and DevOps'
     *
     * Use it whenever two records name the same job differently, so the site
     * and the profile can't read as two different jobs. It is not for parking
     * a title nobody actually held — a wrong title belongs deleted, not noted.
     */
    note: z.string().optional(),
    /** Sort key, descending. Highest number is the most recent role. */
    order: z.number().int(),
    /**
     * Industry the role sat in. Drives the colour of the span in the career
     * trace, so it encodes real information rather than decorating the bar.
     * Keep to these five — a sixth colour makes the legend unreadable.
     */
    domain: z
      .enum(['ai', 'telecom', 'finance', 'commerce', 'public'])
      .default('public'),
    /** Bullet points. Lead each with a verb; put the measurement in it. */
    highlights: z.array(z.string()).default([]),
    /**
     * The named systems worked on inside the role. The older résumé is
     * organised this way — one project block per system — and it's the level
     * at which the early work actually reads as engineering rather than a
     * tenure. Rendered as a nested list on /resume.
     */
    projects: z
      .array(
        z.object({
          name: z.string(),
          /** One or two sentences: what the system was and who used it. */
          summary: z.string(),
        })
      )
      .default([]),
    /**
     * The stack the role ran on, verbatim from the résumé's "Environment"
     * lines. Drives the filterable grid, so spelling matters — 'Spring Boot'
     * and 'SpringBoot' become two chips.
     */
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { work, roles };
