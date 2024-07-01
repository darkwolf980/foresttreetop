import { Head, Link, useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"
import StatusMessage from "@/Components/statusMessage"
import CardWrapper from "@/Components/cardWrapper"
import AuthLayout from "@/Layouts/authLayout"
import { Button } from "@/shadcn/Components/ui/button"

const VerifyEmail = ({ status }: { status: string }) => {
    const { post, processing } = useForm({})

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route("verification.send"))
    }
    return (
        <>
            <Head title={"Verify Email"} />
            <AuthLayout>
                <StatusMessage status={status} />
                <CardWrapper bLabel={"Submit"} title={"Verify Email"} backButtonLabel={"Home"}
                             backButtonHref={"/"}
                             backButtonMessage={"Go back to home page?"}>
                    <div className="mb-4 text-sm text-gray-400">
                        Thanks for signing up! Before getting started, could you verify your email address by
                        clicking on the
                        link we just emailed to you? If you didn't receive the email, we will gladly send you
                        another.
                    </div>
                    <form id={"Verify_email_form"} onSubmit={submit}>

                    </form>
                    <div className={"pt-6 flex justify-center flex-col w-full"}>
                        <Button disabled={processing} className={"w-full"}
                                type={"submit"} form={"Verify_email_form"}>Send Verify Link</Button>
                        <Button variant={"link"} disabled={processing} className={"mt-3"}
                                type={"submit"} form={"Verify_email_form"} asChild={true}><Link method={"post"}
                                                                                                href={route("logout")}>Logout</Link></Button>
                    </div>
                </CardWrapper>
            </AuthLayout>
        </>
    )
}

export default VerifyEmail
