"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1];

export default function TransformationOrbit({ pathGroups }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="transformation-path">
      <nav className="transformation-path-nav" aria-label="Explore transformation paths">
        <motion.span
          aria-hidden="true"
          className="transformation-path-line"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.8, ease: EASE }
          }
        />
        <ol className="transformation-path-list">
          {pathGroups.map((group, index) => (
            <motion.li
              key={group.label}
              className="transformation-path-item"
              initial={reduceMotion ? false : { y: 10 }}
              whileInView={reduceMotion ? undefined : { y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.38, delay: index * 0.07, ease: EASE }
              }
            >
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
            </motion.li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
