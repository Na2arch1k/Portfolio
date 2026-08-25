"use client";

import { m, type Variants } from "framer-motion";

const TAGS = {
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  p: m.p,
  span: m.span,
} as const;

type Tag = keyof typeof TAGS;

const word: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

interface TextRevealProps {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * Splits `text` into words, each masked by an overflow-hidden wrapper and
 * animated up into place on a stagger, so a heading looks like it's being
 * typeset live rather than fading in as one static block. Children inherit
 * "hidden"/"visible" from the parent's whileInView state via framer-motion's
 * variant propagation — they don't need their own initial/animate props.
 */
export function TextReveal({ text, as = "span", className, delay = 0, once = true }: TextRevealProps) {
  const Tag = TAGS[as];
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.045, delayChildren: delay } },
      }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em]">
          <m.span className="inline-block" variants={word}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </m.span>
        </span>
      ))}
    </Tag>
  );
}
