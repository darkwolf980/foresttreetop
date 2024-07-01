import { Head, router } from "@inertiajs/react"
import { useState } from "react"
import { useForm as useReactForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, ResetPasswordSchema } from "@/Schema"
import { z } from "zod"
import CardWrapper from "@/Components/cardWrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/Components/ui/form"
import { Input } from "@/shadcn/Components/ui/input"
import InputError from "@/Components/InputError"
import { Button } from "@/shadcn/Components/ui/button"
import AuthLayout from "@/Layouts/authLayout"

interface ResetPasswordProps {
    email: string,
    token: string
    errors: { [key: string]: string }
}

const ResetPassword = ({ email, token, errors }: ResetPasswordProps) => {
    const [processing, setProcessing] = useState(false)

    const form = useReactForm({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            token: token,
            email: email,
            password: "",
            password_confirmation: ""
        }
    })

    const submit = (data: z.infer<typeof LoginSchema>) => {
        setProcessing(true)
        router.post("/reset-password", {
            token: form.getValues("token"),
            ...data
        }, {
            onFinish: () => setProcessing(false)
        })
    }
    return (
        <>
            <Head title={"Reset Password"} />
            <AuthLayout>
                <CardWrapper bLabel={"Submit"} title={"Password Reset"} backButtonLabel={"Login"}
                             backButtonHref={"/login"}
                             backButtonMessage={"Already have an account?"}>
                    <Form {...form}>
                        <form className={"space-y-6"} onSubmit={form.handleSubmit(submit)}>
                            <div className={"space-y-2"}>
                                <FormField control={form.control} name={"email"} render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type={"email"} placeholder={"Jon@gmail.com"} {...field} />
                                        </FormControl>
                                        <InputError message={errors.email} />
                                        <FormMessage className={"text-red-500"} />
                                    </FormItem>
                                )} />
                            </div>
                            <div className={"space-y-2"}>
                                <FormField control={form.control} name={"password"} render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type={"password"} placeholder={"********"} {...field} />
                                        </FormControl>
                                        <InputError message={errors.password} />
                                        <FormMessage className={"text-red-500"} />
                                    </FormItem>
                                )} />
                            </div>
                            <div className={"space-y-2"}>
                                <FormField control={form.control} name={"password_confirmation"}
                                           render={({ field }) => (
                                               <FormItem>
                                                   <FormLabel>Password Confirm</FormLabel>
                                                   <FormControl>
                                                       <Input type={"password"} placeholder={"********"} {...field} />
                                                   </FormControl>
                                                   <InputError message={errors.password} />
                                                   <FormMessage className={"text-red-500"} />
                                               </FormItem>
                                           )} />
                            </div>
                            <InputError message={errors.invalidToken} />
                            <InputError message={errors.token} />
                            <div className={"pt-6"}>
                                <Button disabled={processing} className={"w-full"} type={"submit"}>Reset
                                    Password</Button>
                            </div>
                        </form>
                    </Form>
                </CardWrapper>
            </AuthLayout>
        </>
    )
}
export default ResetPassword
