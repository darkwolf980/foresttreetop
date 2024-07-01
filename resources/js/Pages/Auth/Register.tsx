import { Head, router } from "@inertiajs/react"
import CardWrapper from "@/Components/cardWrapper"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/shadcn/Components/ui/form"
import { useForm as useReactForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/Schema"
import { Input } from "@/shadcn/Components/ui/input"
import AuthLayout from "@/Layouts/authLayout"
import { z } from "zod"
import InputError from "@/Components/InputError"
import { Button } from "@/shadcn/Components/ui/button"
import { useState } from "react"


interface RegisterProps {
    errors: { [key: string]: string }
}

const Register = ({ errors }: RegisterProps) => {
    const [processing, setProcessing] = useState(false)

    const form = useReactForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            role: 0
        }
    })
    const submit = (data: z.infer<typeof RegisterSchema>) => {
        setProcessing(true)
        router.post(route("register"), {
            role: form.getValues("role"),
            ...data
        }, {
            onFinish: () => setProcessing(false)
        })
    }

    return (
        <>
            <Head title={"Register"} />
            <AuthLayout>
                <CardWrapper title={"Register"} bLabel={"Register"} backButtonLabel={"Login"} backButtonHref={"/login"}
                             backButtonMessage={"Do you already have an account?"}>
                    <Form {...form}>
                        <form className={"space-y-6"} onSubmit={form.handleSubmit(submit)}>
                            <div className={"space-y-2"}>
                                <FormField control={form.control} name={"name"} render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input type={"text"} placeholder={"Jon Doe"} {...field} />
                                        </FormControl>
                                        <FormDescription>This is the display name</FormDescription>
                                        <InputError message={errors.name} />
                                        <FormMessage className={"text-red-500"} />
                                    </FormItem>
                                )} />
                            </div>
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
                                            <Input type={"password"} placeholder={"*******"} {...field} />
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
                                                       <Input type={"password"} placeholder={"*******"} {...field} />
                                                   </FormControl>
                                                   <InputError message={errors.password_confirmation} />
                                                   <FormMessage className={"text-red-500"} />
                                               </FormItem>
                                           )} />
                            </div>
                            <div className={"pt-6"}>
                                <Button disabled={processing} className={"w-full"} type={"submit"}>Register</Button>
                            </div>
                        </form>
                    </Form>
                </CardWrapper>
            </AuthLayout>
        </>
    )
}

export default Register
