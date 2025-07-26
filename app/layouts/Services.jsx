import { CiMobile1 } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { LuServer } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuPalette } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";

export default function Services() {
    const Services = [
        {
            icon: <CiMobile1 size={50} />,
            title: "Mobile App Development",
            text: "Android, iOS, and cross-platform solutions for fintech, logistics, e-commerce, education, and enterprise sectors.",
        },
        {
            icon: <TfiWorld size={40}  />,
            title: "Web Development & Web Apps",
            text: "Modern web applications, enterprise portals, and e-commerce platforms built with cutting-edge technologies",
        },
        {
            icon: <LuServer size={40}  />,
            title: "Enterprise Software Solutions",
            text: "Comprehensive enterprise systems including USSD applications, digital libraries, and robust backend systems.",
        },
        {
            icon: <RiGraduationCapLine size={40}  />,
            title: "Training Academy & Support",
            text: "Professional developer training programs covering front-end, back-end, full-stack, and mobile app development.",
        },
        {
            icon: <LuPalette size={40}  />,
            title: "UI/UX Design",
            text: "Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience.",
        },
        {
            icon: <LuRocket size={40}  />,
            title: "Digital Transformation",
            text: "End-to-end digital solutions that modernize your business processes and improve operational efficiency.",
        }
    ]
    return(
        <section className="min-h-screen text-black z-50 my-20" id="services">
            <div className="text-center space-y-4">
                <h2 
            className="text-3xl md:text-5xl capitalize font-bold dark:text-white"
            style={{ fontFamily: "var(--font-space)"}}
            >
                our services
            </h2>
            <p className="text-lg max-w-[600px] mx-auto font-medium text-zinc-700 dark:text-gray-200">
                Comprehensive technology solutions tailored to drive innovation and growth across industries
            </p>
            </div>
            <div className="w-full container mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Services.map(({icon, title, text}, i) => (
                    <article key={i} className="bg-white dark:bg-[#141414] text-gray-700 py-10 px-7 rounded shadow-md flex flex-col 
                    items-start gap-5">
                        <div className="font-bold dark:text-white">{icon}</div>
                        <h2 className="text-lg font-black text-light-primary dark:text-white">{title}</h2>
                        <p className="font-medium text-gray-400 dark:text-white">{text}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}