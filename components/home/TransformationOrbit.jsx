import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TransformationOrbit({ pathGroups }) {
  return (
    <div className="orbit-container">
      <div className="orbit-stage" aria-hidden="true">
        <svg className="orbit-rings" viewBox="0 0 100 100">
          <circle className="orbit-ring-outer" cx="50" cy="50" r="47" />
          <circle className="orbit-ring-middle" cx="50" cy="50" r="36" />
          <circle className="orbit-ring-inner" cx="50" cy="50" r="25" />
        </svg>

        <span className="orbit-light-track orbit-light-track-outer">
          <span className="orbit-light" />
        </span>
        <span className="orbit-light-track orbit-light-track-middle">
          <span className="orbit-light" />
        </span>
        <span className="orbit-light-track orbit-light-track-inner">
          <span className="orbit-light" />
        </span>
      </div>

      <div className="orbit-center">
        <p className="orbit-center-kicker">Enov8 Technologies</p>
        <h3>
          Transformation
          <span>starts here.</span>
        </h3>
        <Link href="/services" className="orbit-center-link">
          Explore services <ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <nav className="orbit-path-navigation" aria-label="Explore transformation paths">
        <ul className="orbit-path-list">
          {pathGroups.map((group, index) => (
            <li
              key={group.label}
              className={`orbit-path-position orbit-path-position-${index + 1}`}
            >
              <Link
                href={`/services/${group.ids[0]}`}
                className="orbit-path-link"
              >
                <span className="orbit-path-mark" aria-hidden="true">
                  {group.label.charAt(0)}
                </span>
                <span className="orbit-path-copy">
                  <strong>{group.label}</strong>
                  <span>{group.title}</span>
                </span>
                <ArrowRight className="orbit-path-arrow" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
