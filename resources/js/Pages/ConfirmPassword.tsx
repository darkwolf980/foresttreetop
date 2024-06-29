import { Head, Link, useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"
import ApplicationLogo from "@/Components/ApplicationLogo"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shadcn/Components/ui/card"
import { Label } from "@/shadcn/Components/ui/label"
import { Input } from "@/shadcn/Components/ui/input"
import InputError from "@/Components/InputError"
import { Button } from "@/shadcn/Components/ui/button"

const ConfirmPassword = () => {
    const { data, setData, processing, errors, reset, post } = useForm({
        password: ""
    })

    useEffect(() => {
        reset("password")
    }, [])

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route("password.confirm"))
    }
    return (
        <>
            <Head title={"Confirm Password"} />
            <div
                className={"flex flex-col bg-background text-foreground justify-center items-center min-h-screen"}>
                <ApplicationLogo className={"w-36 fill-current text-green-400"} />
                <Card className={"px-4 w-[350px] sm:w-[400px] md:w-[500px] bg-card text-card-foreground"}>
                    <CardHeader>
                        <CardTitle>Confirm Password</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form id={"password-confirm-form"} onSubmit={submit}>
                            <div className={"space-y-6"}>
                                <div>
                                    <div className={"mb-1"}>
                                        <Label htmlFor={"password"}>Password</Label>
                                    </div>
                                    <Input id={"password"} name={"password"} type={"password"} value={data.password}
                                           onChange={(e) => (setData("password", e.target.value))} />
                                    <InputError message={errors.password} />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <div className={"flex w-full justify-between"}>
                            <div></div>
                            <div className={"flex justify-center items-center gap-3"}>
                                <Button disabled={processing} className={"bg-primary gap-1"}
                                        form={"password-confirm-form"}
                                        type={"submit"}>Confirm</Button>
                            </div>
                        </div>

                    </CardFooter>
                    <div
                        className={" border-t border-b-gray-900 py-4 gap-2 text-foreground flex justify-center items-center"}>
                        <span>Go back to home</span>
                        <Link
                            className="underline text-sm text-gray-600 hover:text-gray-100  rounded-md focus:outline-none  focus:ring-offset-2 focus:focus:ring-offset-gray-800"
                            href={route("home")}>Home</Link>
                    </div>
                </Card>
            </div>

        </>
    )
}

export default ConfirmPassword
