import * as zod from 'zod';

const phoneRegex = /^(\+?\d{10,14})$/;

export const schema = zod.object({
  name: zod.string().trim().min(3),
  phone: zod.string().regex(phoneRegex).min(10).max(14),
  email: zod.string().email(),
  details: zod.string().max(500).optional(),
  terms: zod.boolean().refine(value => value),
});
