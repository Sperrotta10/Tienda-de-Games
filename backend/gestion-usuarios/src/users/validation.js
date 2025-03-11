import { z } from "zod";

const userSchema = z.object({
    username: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(8).max(50),
});

const passwordSchema = z.object({
    currrentPassword: z.string().min(8).max(50),
    newPassword: z.string().min(8).max(50).optional(),
})

export function validate(userData) {
    return userSchema.safeParse(userData);
};

export function validatePassword(data) {
    return passwordSchema.safeParse(data);
};