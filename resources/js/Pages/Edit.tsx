import { Head, router } from "@inertiajs/react"
import { useForm as useReactForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchema } from "@/Schema"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/shadcn/Components/ui/form"
import { Input } from "@/shadcn/Components/ui/input"
import { Button } from "@/shadcn/Components/ui/button"
import { z } from "zod"
import InputError from "@/Components/InputError"
import { useEffect, useState } from "react"

interface EditProps {
    mustVerifyEmail: boolean,
    status?: string,
    errors: { [key: string]: string },
}

const Edit = ({ mustVerifyEmail, status, errors }: EditProps) => {
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        setProcessing(false)
    }, [])
    console.log(processing)
    const form = useReactForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: ""
        }
    })
    const submit = (data: z.infer<typeof FormSchema>) => {
        setProcessing(true)
        router.post(route("testform"), {
            ...data
        })
    }


    return (

        <>
            <Head title="Edit" />
            <div className="flex items-center justify-between">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submit)}>
                        <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} type={"email"} />
                                        </FormControl>
                                        <FormDescription>This is your public display name.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button disabled={processing} type={"submit"}>Submit</Button>
                        <Button onClick={clearForm} disabled={processing} type={"button"}>Clear Form</Button>
                    </form>
                </Form>
                <InputError message={errors.email} />
            </div>
        </>
    )
}

export default Edit
