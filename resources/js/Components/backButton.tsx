import { Link } from "@inertiajs/react"

interface BackButtonProps {
    label: string
    href: string
    message: string
}

const BackButton = ({ label, href, message }: BackButtonProps) => {
    return (
        <div className={"flex justify-center items-center space-x-1 w-full"}>
            <p>{message}</p>
            <Link className={"hover:underline text-gray-400 hover:text-gray-500 font-bold"}
                  href={href}>{label}</Link>

        </div>
    )
}
export default BackButton
