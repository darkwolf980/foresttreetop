import { Head } from "@inertiajs/react"
import WebLayout from "@/Layouts/webLayout"
import HeroSection from "@/Components/Website/heroSection"
import React from "react"
import Nav from "@/Components/Website/nav"
import Introduction from "@/Components/Website/Introduction"

export default function Home() {

    return (
        <>
            <Head title={"Home"} />
            <WebLayout>
                <div>
                    <Nav />
                </div>
                <div>
                    <HeroSection />
                </div>
                <div>
                    <Introduction />
                </div>
            </WebLayout>
        </>
    )
}
