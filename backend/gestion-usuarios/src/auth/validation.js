import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(50),
})

export function validate(userData) {
    return loginSchema.safeParse(userData);
};