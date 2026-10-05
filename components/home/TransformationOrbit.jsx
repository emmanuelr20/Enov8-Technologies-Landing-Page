import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TransformationOrbit({ pathGroups }) {
  return (
    <div className="transformation-path">
      <div className="transformation-path-heading">
        {/* <div>
          <p className="transformation-path-kicker">A connected operating model</p>
          <h3>One partner across the moments that move your business forward.</h3>
        </div>
        <Link href="/services" className="transformation-path-link">
          View all capabilities <ArrowRight aria-hidden="true" />
        </Link> */}
      </div>

      <nav aria-label="Explore transformation paths">
        <ol className="transformation-path-list">
          {pathGroups.map((group, index) => (
            <li key={group.label} className="transformation-path-item">
              <Link href={`/services/${group.ids[0]}`} className="transformation-path-card">
                <span className="transformation-path-index">0{index + 1}</span>
                <span className="transformation-path-copy">
                  <strong>{group.label}</strong>
                  <span>{group.title}</span>
                </span>
                <span className="transformation-path-arrow" aria-hidden="true">
                  <ArrowRight />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
