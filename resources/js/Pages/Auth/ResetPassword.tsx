import { Head, Link, useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"
import ApplicationLogo from "@/Components/ApplicationLogo"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shadcn/Components/ui/card"
import { Label } from "@/shadcn/Components/ui/label"
import { Input } from "@/shadcn/Components/ui/input"
import InputError from "@/Components/InputError"
import { Button } from "@/shadcn/Components/ui/button"

const ResetPassword = ({ email, token }: { email: string, token: string }) => {
    const { data, setData, processing, errors, post, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
        invalidToken: ""
    })
    useEffect(() => {
        reset("password", "email")
    }, [])

    const resetInputFields = () => {
        reset("password", "email")
    }
    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route("password.store"))
    }
    return (
        <>
            <Head title={"Reset Password"} />
            <div
                className={"flex flex-col bg-background text-foreground justify-center items-center min-h-screen"}>
                <ApplicationLogo className={"w-36 fill-current text-green-400"} />
                <Card className={"px-4 w-[350px] sm:w-[400px] md:w-[500px] bg-card text-card-foreground"}>
                    <CardHeader>
                        <CardTitle>Change Password</CardTitle>
                    </CardHeader>
                    <CardContent className={"space-y-3"}>
                        <form id={"login-form"} onSubmit={submit}>
                            <div className={"space-y-6"}>
                                <div>
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
                                <div>
                                    <div>
                                        <div className={"mb-1"}>
                                            <Label htmlFor={"password"}>Password</Label>
                                        </div>
                                        <Input id={"password"} name={"password"} type={"password"} value={data.password}
                                               autoComplete={"username"}
                                               onChange={(e) => (setData("password", e.target.value))} />
                                        <InputError message={errors.password} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className={"mb-1"}>
                                            <Label htmlFor={"password_confirmation"}>Confirm Password</Label>
                                        </div>
                                        <Input id={"password_confirmation"} name={"password_confirmation"}
                                               type={"password"}
                                               value={data.password_confirmation}
                                               autoComplete={"username"}
                                               onChange={(e) => (setData("password_confirmation", e.target.value))} />
                                        <InputError message={errors.password_confirmation} />
                                    </div>
                                </div>
                                <InputError message={errors.invalidToken} />
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
                                <Button disabled={processing} className={"bg-primary gap-1"} form={"login-form"}
                                        type={"submit"}>Change Password</Button>
                            </div>
                        </div>
                    </CardFooter>
                    <div
                        className={" border-t border-b-gray-900 py-4 gap-2 text-foreground flex justify-center items-center"}>
                        <span>Already have an account</span>
                        <Link
                            className="underline text-sm text-gray-600 hover:text-gray-100  rounded-md focus:outline-none  focus:ring-offset-2 focus:focus:ring-offset-gray-800"
                            href={route("login")}>Login</Link>
                    </div>

                </Card>
            </div>
        </>
    )
}
export default ResetPassword
