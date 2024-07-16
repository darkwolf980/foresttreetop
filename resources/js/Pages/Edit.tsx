import { Head, router } from "@inertiajs/react"
import { useForm as useReactForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { EditSchema } from "@/Schema"
import { z } from "zod"
import { useState } from "react"

interface EditProps {
    mustVerifyEmail: boolean,
    status?: string,
    errors: { [key: string]: string },
    auth: { user: { [key: string]: string } }
}

const Edit = ({ mustVerifyEmail, status, errors, auth }: EditProps) => {
    const [processing, setProcessing] = useState(false)

    const form = useReactForm({
        resolver: zodResolver(EditSchema),
        defaultValues: {
            email: ""
        }
    })
    const submit = (data: z.infer<typeof EditSchema>) => {
        setProcessing(true)
        router.post(route("testform"), {
            ...data
        }, {
            onFinish: () => setProcessing(false)
        })
    }


    return (

        <>
            <Head title="Edit" />

        </>
    )
}

export default Edit
