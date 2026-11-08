import { ArrowUpRight, CalendarClock, Mail, MessageCircle, Phone, X } from "lucide-react";
import { contact, site } from "@/lib/site";

// Server-rendered native <dialog>. Any element with `data-open-contact`
// opens it (see Interactions.jsx); closing needs no JavaScript at all.
export default function ContactDialog() {
  const options = [
    {
      href: site.booking,
      icon: CalendarClock,
      title: "Book a discovery call",
      text: "Schedule a focused 30-minute systems assessment.",
      external: true,
      primary: true,
    },
    {
      href: `mailto:${contact.salesEmail}?subject=${encodeURIComponent("Project Inquiry - Enov8 Technologies")}`,
      icon: Mail,
      title: "Send an inquiry",
      text: "Tell us what is slowing your operation down.",
    },
    {
      href: contact.whatsapp,
      icon: MessageCircle,
      title: "Chat on WhatsApp",
      text: "Quick questions, quick answers.",
      external: true,
    },
    {
      href: contact.phoneHref,
      icon: Phone,
      title: "Call us",
      text: contact.phoneDisplay,
    },
  ];

  return (
    <dialog id="contact-dialog" className="sheet" aria-labelledby="contact-dialog-title">
      <div className="ink relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
        <div className="relative overflow-hidden px-7 pb-8 pt-16">
          <div className="aurora" aria-hidden="true">
            <i />
            <i />
          </div>
          <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
          <form method="dialog" className="absolute right-4 top-4 z-10">
            <button
              className="grid size-10 place-items-center rounded-full bg-white/10 text-fg transition hover:rotate-90 hover:bg-white/20"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
          </form>
          <p className="eyebrow relative">
            <span className="dot" /> Connected systems for better operations
          </p>
          <h2 id="contact-dialog-title" className="display-md relative mt-4">
            Book a systems <span className="serif text-accent">assessment</span>
          </h2>
          <p className="relative mt-3 max-w-md text-fg-2">
            Tell us where operations are slowing down. We'll help you identify the clearest next
            step and turn it into a practical plan.
          </p>
        </div>
        <ul className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-2 p-3 pt-0">
          {options.map(({ href, icon: Icon, title, text, external, primary }) => (
            <li key={title} className="min-w-0">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group flex w-full min-w-0 items-center gap-4 rounded-2xl border p-4 transition-colors ${
                  primary
                    ? "border-transparent bg-brand-bright text-white"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                }`}
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl ${
                    primary ? "bg-white/15" : "bg-white/5 text-brand"
                  }`}
                >
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{title}</span>
                  <span className={`block truncate text-sm ${primary ? "text-white/80" : "text-muted"}`}>
                    {text}
                  </span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
}
