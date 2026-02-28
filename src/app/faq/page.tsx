"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { faq } from "@/data/faq";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-heading text-lg font-semibold text-white pr-4">
          {question}
        </span>
        <span className="text-brand-green text-2xl flex-shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="pb-6 pt-12 text-center">
        <SectionHeading
          title="FAQ"
          subtitle="Common questions from drivers considering their first arrive-and-drive experience"
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-lg border border-white/10 bg-brand-card px-6">
          {faq.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>
    </>
  );
}
