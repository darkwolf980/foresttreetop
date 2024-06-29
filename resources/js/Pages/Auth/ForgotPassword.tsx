import { Head, Link, useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"
import ApplicationLogo from "@/Components/ApplicationLogo"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shadcn/Components/ui/card"
import { Label } from "@/shadcn/Components/ui/label"
import { Input } from "@/shadcn/Components/ui/input"
import InputError from "@/Components/InputError"
import { Button } from "@/shadcn/Components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/Components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const ForgotPassword = ({ status }: { status?: string }) => {
    const { data, setData, processing, reset, post, errors } = useForm({
        email: ""
    })
    useEffect(() => {
        reset("email")
    }, [])
    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route("password.email"))
    }
    return (
        <>
            <Head title={"Login"} />
            <div className={"flex mt-4 justify-center"}>
                {status &&
                    <Alert variant={"default"}
                           className={"border-green-600 w-[350px] sm:w-[400px] md:w-[500px] text-green-600"}>
                        <ExclamationTriangleIcon color={"green"} className="h-4 w-4" />
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>{status}</AlertDescription>
                    </Alert>
                }
            </div>

            <div
                className={"flex flex-col bg-background text-foreground justify-center items-center min-h-screen"}>
                <ApplicationLogo className={"w-36 fill-current text-green-400"} />
                <Card className={"px-4 w-[350px] sm:w-[400px] md:w-[500px] bg-card text-card-foreground"}>
                    <CardHeader>
                        <CardTitle>Forgot Password</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form id={"password-reset-form"} onSubmit={submit}>
                            <div className={"space-y-6"}>
                                <div>
                                    <div className={"mb-1"}>
                                        <Label htmlFor={"email"}>Email</Label>
                                    </div>
                                    <Input id={"email"} name={"email"} type={"email"} value={data.email}
                                           autoComplete={"username"}
                                           onChange={(e) => (setData("email", e.target.value))} />
                                    <InputError message={errors.email} />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <div className={"flex w-full justify-between"}>
                            <div></div>
                            <div className={"flex justify-center items-center gap-3"}>
                                <Button disabled={processing} className={"bg-primary gap-1"}
                                        form={"password-reset-form"}
                                        type={"submit"}>Reset Password</Button>
                            </div>
                        </div>

                    </CardFooter>
                    <div
                        className={" border-t border-b-gray-900 py-4 gap-2 text-foreground flex justify-center items-center"}>
                        <span>Don't have an account?</span>
                        <Link
                            className="underline text-sm text-gray-600 hover:text-gray-100  rounded-md focus:outline-none  focus:ring-offset-2 focus:focus:ring-offset-gray-800"
                            href={route("register")}>Signup</Link>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default ForgotPassword
