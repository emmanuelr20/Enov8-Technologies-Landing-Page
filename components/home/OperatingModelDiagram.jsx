export default function OperatingModelDiagram() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border/70 bg-background p-4 text-foreground shadow-sm sm:p-8" role="img" aria-labelledby="operating-model-title operating-model-description">
      <svg viewBox="0 0 640 640" className="h-full w-full" aria-hidden="true">
        <title id="operating-model-title">Enov8 operating model diagram</title>
        <desc id="operating-model-description">Enov8 Technologies connects software, automation, identity, security, enterprise systems, and support into one operating model.</desc>

        <circle cx="320" cy="320" r="118" fill="none" stroke="var(--brand)" strokeOpacity="0.22" strokeWidth="2" />
        <circle cx="320" cy="320" r="68" fill="none" stroke="var(--brand)" strokeOpacity="0.2" strokeWidth="2" />

        <g fill="none" stroke="var(--brand)" strokeOpacity="0.52" strokeWidth="2">
          <path d="M320 320 122 118" />
          <path d="M320 320 518 118" />
          <path d="M320 320 78 320" />
          <path d="M320 320 562 320" />
          <path d="M320 320 150 520" />
          <path d="M320 320 490 520" />
          <path d="M320 320 320 572" />
        </g>

        <g fill="var(--background)" stroke="var(--brand)" strokeWidth="3">
          <circle cx="122" cy="118" r="8" />
          <circle cx="518" cy="118" r="8" />
          <circle cx="78" cy="320" r="8" />
          <circle cx="562" cy="320" r="8" />
          <circle cx="150" cy="520" r="8" />
          <circle cx="490" cy="520" r="8" />
          <circle cx="320" cy="572" r="8" />
          <circle cx="320" cy="320" r="10" fill="var(--brand)" />
        </g>

        <g fill="var(--foreground)" fontFamily="var(--font-dm-sans), sans-serif">
          <text x="122" y="70" textAnchor="middle" fontSize="17" fontWeight="700" letterSpacing="2">SOFTWARE</text>
          <text x="122" y="94" textAnchor="middle" fontSize="14" fill="var(--muted-foreground)">Software Development</text>

          <text x="518" y="70" textAnchor="middle" fontSize="17" fontWeight="700" letterSpacing="2">SUPPORT</text>
          <text x="518" y="94" textAnchor="middle" fontSize="14" fill="var(--muted-foreground)">IT Consulting</text>

          <text x="26" y="372" textAnchor="start" fontSize="16" fontWeight="700" letterSpacing="1.8">AUTOMATION</text>
          <text x="26" y="396" textAnchor="start" fontSize="14" fill="var(--muted-foreground)">Business Automation</text>

          <text x="614" y="372" textAnchor="end" fontSize="16" fontWeight="700" letterSpacing="1.8">ENTERPRISE SYSTEMS</text>
          <text x="614" y="396" textAnchor="end" fontSize="14" fill="var(--muted-foreground)">ERP Deployment</text>

          <text x="150" y="566" textAnchor="middle" fontSize="17" fontWeight="700" letterSpacing="2">IDENTITY</text>
          <text x="150" y="590" textAnchor="middle" fontSize="14" fill="var(--muted-foreground)">Onboarding &amp; ID</text>

          <text x="490" y="566" textAnchor="middle" fontSize="17" fontWeight="700" letterSpacing="2">SECURITY</text>
          <text x="490" y="590" textAnchor="middle" fontSize="14" fill="var(--muted-foreground)">CyberSecurity</text>
        </g>

        <g fill="var(--foreground)" textAnchor="middle" fontFamily="var(--font-dm-sans), sans-serif">
          {/* <text x="320" y="168" fontSize="13" fontWeight="700" letterSpacing="1.4">ENOV8 TECHNOLOGIES OPERATING MODEL</text> */}
          <text x="320" y="214" fontSize="29" fontWeight="500">Strategy into</text>
          <text x="320" y="250" fontSize="29" fontWeight="500">systems</text>
          <text x="320" y="282" fontSize="15" fill="var(--muted-foreground)">Connected delivery across</text>
          <text x="320" y="306" fontSize="15" fill="var(--muted-foreground)">the work that keeps an</text>
          <text x="320" y="330" fontSize="15" fill="var(--muted-foreground)">organization moving.</text>
        </g>
      </svg>
    </div>
  );
}
