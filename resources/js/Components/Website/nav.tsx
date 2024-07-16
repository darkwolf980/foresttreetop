import ApplicationLogo from "@/Components/ApplicationLogo"
import { Link, usePage } from "@inertiajs/react"
import { cn } from "@/shadcn/util"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/shadcn/Components/ui/sheet"
import { Button } from "@/shadcn/Components/ui/button"
import { MenuIcon } from "lucide-react"

const Nav = () => {
    const { url } = usePage()
    const isActive = (path: string) => {
        return url === path

    }
    const menuItems = [
        { href: "/", text: "Home" },
        { href: "/rooms", text: "Rooms" },
        { href: "/food", text: "Foods" },
        { href: "/about", text: "About" }
    ]
    const DURATION = 0.25
    const STAGGER = 0.1
    return (
        <>
            <nav className={"sticky top-0 z-10 w-full"}>
                <div className={"hidden md:block"}>
                    <div className={"absolute top-0 flex justify-between items-center w-full"}>
                        <div className={"p-2 m-4 bg-white rounded-full"}>
                            <ApplicationLogo className={"fill-green-800 w-12"} />
                        </div>
                        <div
                            className={"bg-transparent flex flex-col justify-center border border-white rounded-e-full rounded-s-full w-fit h-12"}>
                            <ul className={"flex px-1 gap-6"}>
                                {menuItems.map((menuItem, key) => (
                                    <motion.li
                                        className={cn("py-1.5 relative outline-sky-400 transition focus-visible:outline-2 text-lg font-bold px-4", isActive(menuItem.href) ? "" : "hover:text-green-300")}
                                        initial="initial"
                                        whileHover="hovered"
                                    >
                                        {isActive(menuItem.href) ? <motion.span
                                            layoutId="bubble"
                                            className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                            style={{ borderRadius: 9999 }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        /> : ""}
                                        <Link key={key} href={menuItem.href}>
                                            {menuItem.text.split("").map((l, i) => {
                                                return (
                                                    <motion.span key={i} className={"inline-block"}
                                                                 variants={{
                                                                     initial: { y: 0 },
                                                                     hovered: { y: "-20%" }
                                                                 }}
                                                                 transition={{
                                                                     duration: DURATION,
                                                                     ease: "easeInOut",
                                                                     delay: STAGGER * i
                                                                 }}
                                                    >
                                                        {l}
                                                    </motion.span>
                                                )
                                            })}
                                        </Link>
                                    </motion.li>

                                ))}
                            </ul>

                        </div>
                        <div className={"mr-6"}><Button className={"font-bold"} size={"sm"}><a
                            href={"https://www.booking.com/hotel/lk/forest-tree-top-holiday-resort.en-gb.html#tab-main"}>Book
                            Now</a></Button>
                        </div>
                    </div>
                </div>
                <div className={"md:hidden"}>
                    <div className={"absolute top-0 flex justify-between items-center w-full"}>
                        <div className={"p-2 m-2 bg-gray-700 rounded-full"}>
                            <ApplicationLogo className={"fill-green-400 w-12"} />
                        </div>
                        <div className={"mx-2"}>
                            <Sheet>
                                <SheetTrigger className={""} asChild>
                                    <Button variant="ghost" size={"icon"}><MenuIcon /></Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle className={"text-green-400 mt-8"}>Forest Tree Top Holiday
                                            Resort</SheetTitle>
                                    </SheetHeader>
                                    <div className={"mt-8"}>
                                        <ul className={"flex flex-col px-1 gap-6"}>
                                            {menuItems.map((menuItem, k) => (
                                                <motion.li key={k}
                                                           initial="initial"
                                                           animate="animate"
                                                           className={cn("py-1.5 relative outline-sky-400 transition focus-visible:outline-2 text-lg font-bold px-4", isActive(menuItem.href) ? "bg-white z-10 rounded-full text-black" : "hover:text-white/75")}>
                                                    <Link href={menuItem.href}>
                                                        <motion.span className={"inline-block"}
                                                                     variants={{
                                                                         initial: { opacity: 0, x: 100 },
                                                                         animate: { opacity: 1, x: 0 }
                                                                     }}
                                                                     transition={{
                                                                         duration: DURATION,
                                                                         ease: "easeInOut",
                                                                         delay: STAGGER * k
                                                                     }}
                                                        >
                                                            {menuItem.text}
                                                        </motion.span>
                                                    </Link>
                                                </motion.li>

                                            ))}
                                        </ul>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nav
