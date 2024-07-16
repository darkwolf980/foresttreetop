import React from "react"


interface WebLayoutProps {
    children: React.ReactNode,
    className?: string
}

const WebLayout = ({ children, className }: WebLayoutProps) => {
    return (
        <div className={`w-full ${className}`}>
            {children}
        </div>
    )
}
export default WebLayout
