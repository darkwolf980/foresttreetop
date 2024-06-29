import { Head, Link, useForm } from "@inertiajs/react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shadcn/Components/ui/card"
import { Label } from "@/shadcn/Components/ui/label"
import { Input } from "@/shadcn/Components/ui/input"
import { Checkbox } from "@/shadcn/Components/ui/checkbox"
import { Button } from "@/shadcn/Components/ui/button"
import ApplicationLogo from "@/Components/ApplicationLogo"
import InputError from "@/Components/InputError"
import { FormEventHandler, useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/Components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const Login = ({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) => {
    const { data, setData, processing, post, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
        authFailed: ""
    })
    useEffect(() => {
        reset("password")
    }, [])
    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route("login"))
    }
    const resetInputFields: FormEventHandler = () => {
        reset("email", "password")
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
                        <CardTitle>Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form id={"login-form"} onSubmit={submit}>
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
                                <div>
                                    <div className={"mb-1"}>
                                        <Label htmlFor={"password"}>Password</Label>
                                    </div>
                                    <Input id={"password"} name={"password"} type={"password"} value={data.password}
                                           autoComplete={"current-password"}
                                           onChange={(e) => (setData("password", e.target.value))} />
                                    <InputError message={errors.password} />
                                </div>
                                <div>
                                    <div className={"flex gap-1 mb-1"}>
                                        <Checkbox id={"remember"}
                                                  onCheckedChange={(e) => (setData("remember", Boolean(e)))} />
                                        <Label htmlFor={"remember"}>Remember</Label>
                                    </div>

                                </div>
                                <InputError message={errors.authFailed} />
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <div className={"flex w-full justify-between"}>
                            <div>
                                <Button disabled={processing} variant={"outline"}
                                        onClick={resetInputFields}>Cancel</Button>
                            </div>
                            <div className={"flex justify-center items-center gap-3"}>
                                <div>
                                    {canResetPassword && (<Link
                                        className="underline text-sm text-gray-600 hover:text-gray-100  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:focus:ring-offset-gray-800"
                                        href={route("password.request")}>Forgot your password?</Link>)}
                                </div>
                                <Button disabled={processing} className={"bg-primary gap-1"} form={"login-form"}
                                        type={"submit"}>Login</Button>
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

export default Login
