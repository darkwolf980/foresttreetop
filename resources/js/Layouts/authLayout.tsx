import React from "react"

interface FormLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: FormLayoutProps) => {
    return (
        <div className={"flex flex-col space-y-1 bg-background justify-center items-center h-screen w-full"}>
            {children}
        </div>
    )
}
export default AuthLayout
