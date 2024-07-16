import { Head } from "@inertiajs/react"
import WebLayout from "@/Layouts/webLayout"
import Nav from "@/Components/Website/nav"
import React from "react"

export default function Home() {

    return (
        <>
            <Head title={"Home"} />
            <WebLayout>
                <Nav />
                <div className={"bg-background h-screen"}></div>
            </WebLayout>
        </>
    )
}
