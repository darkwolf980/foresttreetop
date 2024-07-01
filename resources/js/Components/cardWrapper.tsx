import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shadcn/Components/ui/card"
import React from "react"
import BackButton from "@/Components/backButton"

interface CardWrapperProps {
    title: string
    bLabel: string
    backButtonLabel: string
    backButtonHref: string
    backButtonMessage: string
    children: React.ReactNode
}

const CardWrapper = ({
                         title,
                         children,
                         backButtonLabel,
                         backButtonHref,
                         backButtonMessage
                     }: CardWrapperProps) => {
    return (
        <>
            <Card className={"xl:w-1/4 md:w-1/2 shadow-md"}>
                <CardHeader className={"flex justify-center items-center text-2xl"}>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className={"flex flex-col w-full justify-center"}>
                    {children}
                </CardContent>
                <CardFooter>
                    <BackButton label={backButtonLabel} href={backButtonHref} message={backButtonMessage} />
                </CardFooter>
            </Card>
        </>
    )
}
export default CardWrapper
