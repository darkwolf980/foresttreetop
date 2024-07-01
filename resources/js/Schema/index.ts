import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string()
        .email({
            message: "Please enter a valid email address"
        }),
    password: z.string()
        .min(8, { message: "Your password must be at least 8 characters long." })
})
export const RegisterSchema = z.object({
    email: z.string()
        .max(255, {
            message: "Email address is too long. Please keep it under 255 characters."
        })
        .email({
            message: "Please enter a valid email address"
        }),
    password: z.string()
        .min(8, { message: "Your password must be at least 8 characters long." }),
    password_confirmation: z.string()
        .min(8, { message: "Your password must be at least 8 characters long." }),
    name: z.string().min(1, {
        message: "Your name must be at least 1 characters long."
    })
}).superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ["password_confirmation"]
        })
    }
})

export const ForgotPasswordSchema = z.object({
    email: z.string()
        .email({
            message: "Please enter a valid email address"
        })
})
export const ResetPasswordSchema = z.object({
    email: z.string()
        .email({
            message: "Please enter a valid email address"
        }),
    password: z.string()
        .min(8, { message: "Your password must be at least 8 characters long." }),
    password_confirmation: z.string()
        .min(8, { message: "Your password must be at least 8 characters long." })

}).superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ["password_confirmation"]
        })
    }
})
