import React from "react"
import { Button } from "@/shadcn/Components/ui/button"
import { motion } from "framer-motion"

const DURATION = 1.5
const HeroSection = () => {
    return (
        <div className={"space-y-4 bg-background"}>
            <section className={"w-full h-screen bg-cover bg-center"}>
                <div className={"flex md:hidden justify-between items-center"}>
                    <div
                        className={"bg-[url('/img/background.jpg')] rounded-b-full border-b-4 border-green-300 bg-cover bg-center w-full h-screen"}>
                        <motion.div transition={{ duration: DURATION }} initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className={"w-full flex flex-col justify-center items-center h-screen bg-black/80"}>
                            <h1 className={"text-white text-3xl ml-2 text-center font-bold"}>Welcome to <span
                                className={"text-green-400"}>Forest Tree Top
                                Holiday Resort</span></h1>
                            <p className={"mt-6 px-8 text-lg"}>Experience the ultimate retreat amidst lush
                                greenery and
                                serene
                                landscapes at Forest Tree Top Holiday Resort. Our tranquil haven offers breathtaking
                                views, and unparalleled hospitality. Whether you seek
                                adventure or relaxation, our resort is the perfect destination for an unforgettable
                                getaway.</p>
                            <div className={"mt-10"}>
                                <Button className={"bg-blue-500 hover:bg-blue-500/70 text-white font-bold"} size={"lg"}><a
                                    href={"https://www.booking.com/hotel/lk/forest-tree-top-holiday-resort.en-gb.html#tab-main"}>Book
                                    Now</a></Button>
                            </div>
                        </motion.div>
                    </div>

                </div>
                <div className={"hidden md:block "}>
                    <div className={"flex justify-between items-center relative"}>
                        <motion.div transition={{ duration: DURATION }} initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className={"w-4/5 flex flex-col justify-center items-center h-screen"}>
                            <h1 className={"text-white text-5xl text-center font-bold"}>Welcome to <span
                                className={"text-green-400"}>Forest Tree Top
                                Holiday Resort</span></h1>
                            <p className={"mt-6 px-8 text-lg text-center"}>Experience the ultimate retreat amidst lush
                                greenery and
                                serene
                                landscapes at Forest Tree Top Holiday Resort. Our tranquil haven offers breathtaking
                                views, and unparalleled hospitality. Whether you seek
                                adventure or relaxation, our resort is the perfect destination for an unforgettable
                                getaway.</p>
                            <div className={"mt-10"}>
                                <Button className={"bg-blue-500 hover:bg-blue-500/70 text-white font-bold"} size={"lg"}><a
                                    href={"https://www.booking.com/hotel/lk/forest-tree-top-holiday-resort.en-gb.html#tab-main"}>Book
                                    Now</a></Button>
                            </div>
                        </motion.div>
                        <div
                            className={"bg-[url('/img/background.jpg')] rounded-s-full w-full left-2/4 border-b-4 border-green-300 bg-cover bg-center h-screen"}>
                            <div className={"bg-black/40 w-full h-screen"}></div>
                        </div>

                    </div>
                </div>
            </section>
            <img src={"/img/page_border_pattern.png"} alt={"border pattern"} className={"z-10 bg-cover bg-center"} />
        </div>
    )
}

export default HeroSection
