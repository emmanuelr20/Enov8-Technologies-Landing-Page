import { Button } from "@/components/ui/button"

export default function Action() {
    return(
        <section className="min-h-[40vh] text-white z-50 bg-gray-950 dark:bg-black flex 
        justify-center items-center dark:border-b-2 dark:border-b-white">
            <div className="flex flex-col justify-between items-center lg:flex-row gap-10 py-12 px-6 container mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold lg:max-w-2xl text-center lg:text-start" style={{ fontFamily: "var(--font-space)"}}>
                    Get Custom and Reliable Digital Solution for your Business
                </h2>
                <Button 
                variant={"background"}
                className="text-lg font-black bg-light-primary py-6" 
                size="lg">Start a Project</Button>
            </div>
        </section>
    )
}