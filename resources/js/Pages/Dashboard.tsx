import { Head, Link } from "@inertiajs/react"

export default function Dashboard() {
    return (
        <>
            <Head title={"Dashboard"}/>
            <Link method={'post'} href={route("logout")} as={"button"}>Logout</Link>
        </>
    )
}
