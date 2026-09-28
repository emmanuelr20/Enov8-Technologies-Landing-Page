"use client";

import { Children } from "react";
import { motion, stagger } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];
const OFFSETS = {
  fade: {},
  fadeUp: { y: 12 },
  fadeLeft: { x: -12 },
  fadeRight: { x: 12 },
};

export function createEntranceVariants(pattern = "fadeUp", reduceMotion = false, delay = 0) {
  const offset = reduceMotion ? {} : OFFSETS[pattern] ?? OFFSETS.fadeUp;
  const settled = Object.fromEntries(Object.keys(offset).map((key) => [key, 0]));

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      ...settled,
      transition: {
        duration: reduceMotion ? 0.01 : 0.42,
        delay: reduceMotion ? 0 : delay,
        ease: EASE,
      },
    },
  };
}

export function createStaggerVariants(reduceMotion = false, staggerDelay = 0.08) {
  return {
    hidden: {},
    visible: {
      transition: {
        when: "beforeChildren",
        delayChildren: reduceMotion ? 0 : stagger(staggerDelay),
      },
    },
  };
}

function getTriggerProps(trigger) {
  if (trigger === "mount") return { animate: "visible" };

  return {
    whileInView: "visible",
    viewport: { once: true, amount: 0.12, margin: "0px 0px -8% 0px" },
  };
}

export function MotionEntrance({
  as = "div",
  children,
  className,
  pattern = "fadeUp",
  trigger = "viewport",
  delay = 0,
  ...props
}) {
  const Component = motion[as];

  return (
    <Component
      {...props}
      className={className}
      data-motion-entrance=""
      initial="hidden"
      {...getTriggerProps(trigger)}
      variants={createEntranceVariants(pattern, false, delay)}
    >
      {children}
    </Component>
  );
}

export function MotionStagger({
  as = "div",
  itemAs = "div",
  itemClassName,
  children,
  className,
  itemPattern = "fadeUp",
  trigger = "viewport",
  staggerDelay = 0.08,
  ...props
}) {
  const Component = motion[as];
  const Item = motion[itemAs];
  const items = Children.toArray(children);

  return (
    <Component
      {...props}
      className={className}
      data-motion-entrance=""
      initial="hidden"
      {...getTriggerProps(trigger)}
      variants={createStaggerVariants(false, staggerDelay)}
    >
      {items.map((child, index) => (
        <Item
          key={child.key ?? index}
          className={itemClassName}
          data-motion-entrance=""
          variants={createEntranceVariants(itemPattern, false)}
        >
          {child}
        </Item>
      ))}
    </Component>
  );
}
