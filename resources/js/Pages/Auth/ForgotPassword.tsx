import { Head, router } from "@inertiajs/react"
import { Input } from "@/shadcn/Components/ui/input"
import InputError from "@/Components/InputError"
import { Button } from "@/shadcn/Components/ui/button"
import { useForm as useReactForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ForgotPasswordSchema } from "@/Schema"
import { z } from "zod"
import { useState } from "react"
import StatusMessage from "@/Components/statusMessage"
import CardWrapper from "@/Components/cardWrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/Components/ui/form"
import AuthLayout from "@/Layouts/authLayout"

interface ForgotPasswordProps {
    status?: string
    errors: { [key: string]: string }
}

const ForgotPassword = ({ status, errors }: ForgotPasswordProps) => {
    const [processing, setProcessing] = useState(false)
    const form = useReactForm({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: ""
        }
    })
    const submit = (data: z.infer<typeof ForgotPasswordSchema>) => {
        setProcessing(true)
        router.post(route("password.email"), {
            ...data
        }, {
            onFinish: () => setProcessing(false)
        })
    }
    return (
        <>
            <Head title={"Login"} />
            <AuthLayout>
                <StatusMessage status={status} />
                <CardWrapper bLabel={"Submit"} title={"Forgot Password"} backButtonLabel={"Login"}
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

export default ForgotPassword
