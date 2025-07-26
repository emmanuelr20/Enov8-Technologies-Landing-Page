import Image from "next/image";

export default function TechIndex() {
  const clipPathStyle = {
    clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
    WebkitClipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
  };

  const TechStack = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg",
  ];

  return (
    <section className="min-h-screen text-white relative" style={clipPathStyle}>
      <Image
        src="/techImage.jpg"
        alt="technology background"
        fill
        priority
        quality={100}
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/70  z-[-10]" />

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 pt-50">

        <div className="flex-1 max-w-xl pt-6">
          <h2 className="text-3xl font-black uppercase">technology index</h2>
          <p className="text-lg font-bold leading-snug mt-2 text-zinc-200">
            Our curated index of innovative technologies driving next-generation
            products and solutions across industries.
          </p>
        </div>
        
        <div className="flex-1 w-full lg:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto">
          {TechStack.slice(0, 6).map((logo, index) => (
            <div
              key={index}
              className="bg-white w-[140px] h-[110px] flex justify-center items-center rounded-xl shadow-md"
            >
              <img
                src={logo}
                alt={`Tech ${index}`}
                className="w-[80px] h-auto object-contain"
              />
            </div>
          ))}

          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center gap-6 px-3">
            {TechStack.slice(6).map((logo, index) => (
              <div
                key={index}
                className="bg-white w-[140px] h-[110px] flex justify-center items-center rounded-xl shadow-md"
              >
                <img
                  src={logo}
                  alt={`Tech ${index + 6}`}
                  className="w-[60px] h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
