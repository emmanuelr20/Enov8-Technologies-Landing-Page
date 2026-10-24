export default function OperatingModelDiagram() {
  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-xl border border-border/70 bg-background p-4 text-foreground shadow-sm sm:p-8"
      role="img"
      aria-labelledby="operating-model-title operating-model-description"
    >
      <svg viewBox="0 0 640 640" className="h-full w-full" aria-hidden="true">
        <title id="operating-model-title">Enov8 Technologies connected systems model</title>
        <desc id="operating-model-description">
          Enov8 Technologies connects operations, modern systems, secure foundations, and supported adoption into one dependable business system.
        </desc>

        <circle cx="320" cy="320" r="118" fill="none" stroke="var(--brand)" strokeOpacity="0.22" strokeWidth="2" />
        <circle cx="320" cy="320" r="68" fill="none" stroke="var(--brand)" strokeOpacity="0.2" strokeWidth="2" />

        <g fill="none" stroke="var(--brand)" strokeOpacity="0.52" strokeWidth="2">
          <path d="M320 320 320 94" />
          <path d="M320 320 546 390" />
          <path d="M320 320 320 546" />
          <path d="M320 320 94 390" />
        </g>

        <g fill="var(--background)" stroke="var(--brand)" strokeWidth="3">
          <circle cx="320" cy="94" r="8" />
          <circle cx="546" cy="390" r="8" />
          <circle cx="320" cy="546" r="8" />
          <circle cx="94" cy="390" r="8" />
          <circle cx="320" cy="320" r="10" fill="var(--brand)" />
        </g>

        <g fill="var(--foreground)" fontFamily="var(--font-geist), sans-serif">
          <text x="320" y="58" textAnchor="middle" fontSize="17" fontWeight="600" letterSpacing="1.6">CONNECT OPERATIONS</text>
          <text x="320" y="78" textAnchor="middle" fontSize="14" fill="var(--muted-foreground)">Workflows · Platforms · Data</text>
          <text x="614" y="383" textAnchor="end" fontSize="17" fontWeight="600" letterSpacing="1.6">MODERNIZE</text>
          <text x="614" y="409" textAnchor="end" fontSize="14" fill="var(--muted-foreground)">Software · ERP · AI</text>
          <text x="320" y="584" textAnchor="middle" fontSize="17" fontWeight="600" letterSpacing="1.6">SUPPORT ADOPTION</text>
          <text x="320" y="608" textAnchor="middle" fontSize="14" fill="var(--muted-foreground)">People · Process · Support</text>
          <text x="26" y="383" textAnchor="start" fontSize="17" fontWeight="600" letterSpacing="1.6">SECURE</text>
          <text x="26" y="409" textAnchor="start" fontSize="14" fill="var(--muted-foreground)">Security · Networks · Infrastructure</text>
        </g>

        <g fill="var(--foreground)" textAnchor="middle" fontFamily="var(--font-geist), sans-serif">
          <text x="320" y="238" fontSize="21" fontWeight="400">Fragmented operations</text>
          <text x="320" y="262" fontSize="21" fontWeight="400">into connected systems</text>
          <text x="320" y="320" fontSize="15" fill="var(--muted-foreground)">A practical operating model</text>
          <text x="320" y="340" fontSize="15" fill="var(--muted-foreground)">your team can depend on</text>
        </g>
      </svg>
    </div>
  );
}
