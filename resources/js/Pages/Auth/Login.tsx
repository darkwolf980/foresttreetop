import { Head, Link, router } from "@inertiajs/react"
import AuthLayout from "@/Layouts/authLayout"
import StatusMessage from "@/Components/statusMessage"
import CardWrapper from "@/Components/cardWrapper"
import { useForm as useReactForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/Schema"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/Components/ui/form"
import { Input } from "@/shadcn/Components/ui/input"
import { Button } from "@/shadcn/Components/ui/button"
import { useState } from "react"
import { Checkbox } from "@/shadcn/Components/ui/checkbox"
import InputError from "@/Components/InputError"
import { z } from "zod"

interface LoginProps {
    status: string,
    canResetPassword: boolean,
    errors: { [key: string]: string }
}

const Login = ({ status, canResetPassword, errors }: LoginProps) => {
    const [processing, setProcessing] = useState(false)
    const form = useReactForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false
        }
    })
    const submit = () => {
        const formData = form.getValues() as z.infer<typeof LoginSchema>
        console.log({ ...formData })
        setProcessing(true)
        router.post(route("login"), {
            ...formData
        }, {
            onFinish: () => setProcessing(false)
        })
    }
    return (
        <>
            <Head title={"Login"} />
            <AuthLayout>
                <StatusMessage status={status} />
                <CardWrapper bLabel={"Submit"} title={"LOGIN"} backButtonLabel={"Register"} backButtonHref={"/register"}
                             backButtonMessage={"Don't have an account?"}>
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
                                <FormField control={form.control} name={"remember"} render={({ field }) => (
                                    <FormItem>
                                        <div className={"flex items-center space-x-2"}>
                                            <FormControl>
                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
                                            <FormLabel>Remember</FormLabel>
                                        </div>
                                        <FormMessage className={"text-red-500"} />
                                    </FormItem>
                                )} />
                            </div>
                            <InputError message={errors.authFailed} />
                            <div className={"pt-6 flex justify-center flex-col w-full"}>
                                <Button disabled={processing} className={"w-full"}
                                        type={"submit"}>Login</Button>
                                {canResetPassword &&
                                    <div className={"mt-4 hover:underline"}>
                                        <Link href={route("password.request")}>Forgot password?</Link>
                                    </div>
                                }
                            </div>
                        </form>
                    </Form>

                </CardWrapper>
            </AuthLayout>
        </>
    )
}

export default Login
