import { Head, Link, useForm } from "@inertiajs/react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shadcn/Components/ui/card"
import ApplicationLogo from "@/Components/ApplicationLogo"
import { Label } from "@/shadcn/Components/ui/label"
import { Input } from "@/shadcn/Components/ui/input"
import InputError from "@/Components/InputError"
import { Button } from "@/shadcn/Components/ui/button"
import { FormEventHandler, useEffect } from "react"

const Register = () => {
    const {data,setData,errors,processing,reset,post} = useForm({
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
        role:0,
    })
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);
    const resetInputFields: FormEventHandler = () => {
        reset("name","email", "password")
    }
    const submit: FormEventHandler = (e)=>{
        e.preventDefault()
        post(route('register'))
    }
    return (
        <>
            <Head title={"Register"} />
            <div className={"flex flex-col bg-background text-foreground justify-center items-center min-h-screen"}>
                <ApplicationLogo className={"w-36 fill-current text-green-400"} />
                <Card className={"px-4 w-[350px] sm:w-[400px] md:w-[500px] bg-card text-card-foreground"}>
                    <CardHeader title="Register">
                        <CardTitle>Register</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form id={"register-form"} onSubmit={submit}>
                            <div className={"space-y-6"}>
                                <div>
                                    <div className={"mb-1"}>
                                        <Label htmlFor={"name"}>Username</Label>
                                    </div>
                                    <Input required={true} id={"name"} name={"name"} type={"name"} value={data.name}
                                           autoComplete={"name"}
                                           onChange={(e) => (setData("name", e.target.value))} />
                                    <InputError message={errors.name} />
                                </div>
                                <div>
                                    <div className={"mb-1"}>
                                        <Label htmlFor={"email"}>Email</Label>
                                    </div>
                                    <Input required={true} id={"email"} name={"email"} type={"email"} value={data.email}
                                           autoComplete={"username"}
                                           onChange={(e) => (setData("email", e.target.value))} />
                                    <InputError message={errors.email} />
                                </div>
                                <div>
                                    <div className={"mb-1"}>
                                        <Label htmlFor={"password"}>Password</Label>
                                    </div>
                                    <Input required={true} id={"password"} name={"password"} type={"password"} value={data.password}
                                           autoComplete={"new-password"}
                                           onChange={(e) => (setData("password", e.target.value))} />
                                    <InputError message={errors.password} />
                                </div>
                                <div>
                                    <div className={"mb-1"}>
                                        <Label htmlFor={"password_confirmation"}>Confirm Password</Label>
                                    </div>
                                    <Input required={true} id={"password_confirmation"} name={"password_confirmation"}
                                           type={"password"} value={data.password_confirmation}
                                           autoComplete={"new-password"}
                                           onChange={(e) => (setData("password_confirmation", e.target.value))} />
                                    <InputError message={errors.password_confirmation} />
                                </div>
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
                                <Button disabled={processing} className={"bg-primary gap-1"} form={"register-form"}
                                        type={"submit"}>Register</Button>
                            </div>
                        </div>
                    </CardFooter>
                    <div
                        className={" border-t border-b-gray-900 py-4 gap-2 text-foreground flex justify-center items-center"}>
                        <span>Already have an account?</span>
                        <Link
                            className="underline text-sm text-gray-600 hover:text-gray-100  rounded-md focus:outline-none  focus:ring-offset-2 focus:focus:ring-offset-gray-800"
                            href={route("login")}>Login</Link>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Register
