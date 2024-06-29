import { Alert, AlertDescription, AlertTitle } from "@/shadcn/Components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import ApplicationLogo from "@/Components/ApplicationLogo"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shadcn/Components/ui/card"
import { Button } from "@/shadcn/Components/ui/button"
import { Head, Link, useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

const VerifyEmail = ({ status }: { status: string }) => {
    const { post, processing } = useForm({})

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route("verification.send"))
    }
    return (
        <>
            <Head title={"Verify Email"} />
            <div className={"flex mt-4 justify-center"}>
                {status &&
                    <Alert variant={"default"}
                           className={"border-green-600 w-[350px] sm:w-[400px] md:w-[500px] text-green-600"}>
                        <ExclamationTriangleIcon color={"green"} className="h-4 w-4" />
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>A new verification link has been sent to the email address you provided during
                            registration.</AlertDescription>
                    </Alert>
                }
            </div>
            <div
                className={"flex flex-col bg-background text-foreground justify-center items-center min-h-screen"}>
                <ApplicationLogo className={"w-36 fill-current text-green-400"} />
                <Card className={"px-4 w-[350px] sm:w-[400px] md:w-[500px] bg-card text-card-foreground"}>
                    <CardHeader>
                        <CardTitle>Verify Email</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-4 text-sm text-gray-400">
                            Thanks for signing up! Before getting started, could you verify your email address by
                            clicking on the
                            link we just emailed to you? If you didn't receive the email, we will gladly send you
                            another.
                        </div>
                        <form id={"Verify_email_form"} onSubmit={submit}>

                        </form>
                    </CardContent>
                    <CardFooter>
                        <div className={"flex w-full justify-between"}>
                            <Link method={"post"} href={route("logout")} as={"button"}><Button
                                variant={"outline"}>Logout</Button></Link>
                            <div className={"flex justify-center items-center gap-3"}>
                                <Button disabled={processing} className={"bg-primary gap-1"} form={"Verify_email_form"}
                                        type={"submit"}>Send Verify Link</Button>
                            </div>
                        </div>

                    </CardFooter>
                    <div
                        className={" border-t border-b-gray-900 py-4 gap-2 text-foreground flex justify-center items-center"}>
                        <span>Go back to home page</span>
                        <Link
                            className="underline text-sm text-gray-600 hover:text-gray-100  rounded-md focus:outline-none  focus:ring-offset-2 focus:focus:ring-offset-gray-800"
                            href={route("home")}>Home</Link>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default VerifyEmail
