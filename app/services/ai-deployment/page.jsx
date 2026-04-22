import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "AI Deployment | Enov8 Technologies",
  description:
    "Harness the power of Artificial Intelligence to automate complex processes and drive innovation in your organization.",
};

export default function AIDeploymentPage() {
  return (
    <ServicePageTemplate serviceId="ai-deployment">
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A37] dark:text-white font-space tracking-tight">
              AI Deployment
            </h2>
          </div>
          <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed font-poppins">
            Transform your business with intelligent automation. Our AI
            deployment services focus on integrating machine learning, natural
            language processing, and predictive analytics into your existing
            workflows to drive efficiency and innovation.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden shadow-2xl">
          <Image
            src="/ai2.jpg"
            alt="AI & Machine Learning showcase"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-8">
            <p className="text-white font-space font-bold text-xl tracking-wide uppercase">
              Intelligent Workflow Evolution
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                Predictive Analytics
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-lg pl-5">
              Turn your data into a competitive advantage. We build AI models
              that forecast trends, predict customer behavior, and identify
              operational risks before they occur.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold font-space text-light-primary">
                NLP & Chatbots
              </h4>
            </div>
            <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed text-lg pl-5">
              Enhance customer support and internal communication with advanced
              Natural Language Processing tools and intelligent conversational
              agents that understand context.
            </p>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="bg-light-primary/5 dark:bg-zinc-900/50 p-8 border-r-4 border-light-primary text-right">
          <h4 className="text-xl font-bold text-[#1A1A37] dark:text-white font-space mb-4">
            The AI Advantage
          </h4>
          <p className="text-gray-700 dark:text-zinc-400 font-poppins leading-relaxed">
            AI is no longer just for big tech. We make sophisticated machine
            learning accessible and practical for businesses of all sizes,
            ensuring you stay ahead in an increasingly automated world.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
