import { CircleCheckBig, Target, Users, Award, Lightbulb } from "lucide-react"

export default function About() {
    return(
        <section 
        aria-label="About Enov8 Technologies"
        className="h-full z-50 text-black pt-13 lg:pt-30" 
        id="about">
            <h2 
            className="text-center text-3xl md:text-5xl max-w-[600px] mx-auto leading-snug
            dark:text-gray-100"
            style={{ fontFamily: "var(--font-space)"}}
            >
                Transforming Ideas Into Digital Reality
            </h2>
            <div className="container mx-auto flex flex-col items-center lg:flex-row justify-between 
            lg:items-start gap-8 px-3 pt-15 dark:text-gray-200">
                <div className="flex flex-col text-start sm:text-center lg:text-start gap-y-6 lg:pt-10">
                    <p className="text-lg font-medium">
                        We are a forward-thinking technology company committed to delivering 
                        innovative software solutions that transform businesses and empower 
                        growth. Our expertise spans across mobile development, web applications, 
                        enterprise solutions, and professional training.
                    </p>

                    <p className="text-lg font-medium">
                        Our team of experienced developers, designers, and strategists work together to 
                        deliver custom solutions that not only meet your current needs but also scale 
                        with your business as it grows.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap md:justify-center lg:justify-start gap-8">
                        <span className="flex items-center gap-2">
                            <Target 
                            style={{ color: "#0070f3"}} 
                            />
                            Quality-Driven Development
                        </span>
                        <span className="flex items-center gap-2">
                            <Users
                            style={{ color: "#0070f3"}} 
                            />
                            Client-Centric
                        </span>
                        <span className="flex items-center gap-2">
                            <Award 
                            style={{ color: "#0070f3"}} 
                            />
                            Quality Excellence
                        </span>
                        <span className="flex items-center gap-2">
                            <Lightbulb 
                            style={{ color: "#0070f3"}} 
                            />
                            Innovation
                        </span>
                        <span className="flex items-center gap-2">
                            <CircleCheckBig
                            style={{ color: "#0070f3"}} 
                            />
                            Industry Expertise
                        </span>
                    </div>
                </div>

                <img
                src="/about.jpg" 
                alt="Enov8 Technologies staff working on a project" 
                width={500}
                height={500}
                loading="lazy"
                />
            </div>
        </section>
    )
}