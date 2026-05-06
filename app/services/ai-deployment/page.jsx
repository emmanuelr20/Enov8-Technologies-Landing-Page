import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildServiceMetadata } from "@/lib/seoMetadata";

export const metadata = buildServiceMetadata("ai-deployment");

export default function AIDeploymentPage() {
  return (
    <ServicePageTemplate serviceId="ai-deployment">
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-1.5 h-10 bg-light-primary block shrink-0" />
            <h2 className="text-[#1A1A37] dark:text-white tracking-tight">
              AI Deployment
            </h2>
          </div>
          <p className="dark:text-white/90">
            Transform your business with intelligent automation. Our AI
            deployment services focus on integrating machine learning, natural
            language processing, and predictive analytics into your existing
            workflows to drive efficiency and innovation.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/services/ai2.webp"
            alt="AI & Machine Learning showcase"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-100 dark:border-zinc-800 pt-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                Predictive Analytics
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              Turn your data into a competitive advantage. We build AI models
              that forecast trends, predict customer behavior, and identify
              operational risks before they occur.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-1 min-h-8 self-stretch bg-light-primary block shrink-0" />
              <h4 className="capitalize dark:text-white">
                NLP & Chatbots
              </h4>
            </div>
            <p className="dark:text-white/90 pl-5">
              Enhance customer support and internal communication with advanced
              Natural Language Processing tools and intelligent conversational
              agents that understand context.
            </p>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="bg-light-primary/5 dark:bg-zinc-900/50 p-8 border-l-4 border-light-primary">
          <h4 className="text-[#1A1A37] dark:text-white mb-4">
            The AI Advantage
          </h4>
          <p className="dark:text-white/90">
            AI is no longer just for big tech. We make sophisticated machine
            learning accessible and practical for businesses of all sizes,
            ensuring you stay ahead in an increasingly automated world.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
