import React from "react"
import { Button } from "@/shadcn/Components/ui/button"

interface SectionProps {
    imageUrl: string,
    title: string,
    description: string,
    buttonText: string,
    imageOnLeft: boolean
}

const Section = ({ imageUrl, title, description, buttonText, imageOnLeft = true }: SectionProps) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8 lg:px-16">
            <div className={`w-full md:w-1/2 ${imageOnLeft ? "md:order-first" : "md:order-last"}`}>
                <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className={`w-full md:w-1/2 mt-8 md:mt-0 ${imageOnLeft ? "md:pl-8" : "md:pr-8"}`}>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>
                <p className="text-lg mb-6">{description}</p>
                <Button variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}

const AlternatingImageTextComponent = () => {
    const sections = [
        {
            imageUrl: "/img/test1.jpg",
            title: "Dedicated to environmentally conscious hospitality",
            description: "Singita's luxury safari lodges provide restorative sanctuaries and encounters in the bush that guests won't find anywhere else. Sought-after locations, intuitive attention to detail and the utmost privacy underpin every stay.",
            buttonText: "Our Story",
            imageOnLeft: true
        },
        {
            imageUrl: "/img/test1.jpg",
            title: "Sustainable conservation efforts",
            description: "We are committed to preserving and protecting the natural habitats and wildlife in our care. Through innovative conservation techniques and community partnerships, we ensure the longevity of these precious ecosystems.",
            buttonText: "Learn More",
            imageOnLeft: false
        }
        // Add more sections as needed
    ]

    return (
        <div className="container mx-auto">
            {sections.map((section, index) => (
                <Section key={index} {...section} />
            ))}
        </div>
    )
}

export default AlternatingImageTextComponent
