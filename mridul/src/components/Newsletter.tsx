"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-wine text-cream py-20 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
        <h2 className="font-display text-3xl md:text-5xl leading-[1.1] mb-4 max-w-2xl mx-auto">
          A little beauty, in your inbox.
        </h2>
        <p className="text-cream/85 text-[15px] mb-8">
          New collections, stories and sarees worth knowing about.
        </p>

        {submitted ? (
          <p className="text-[14px]">You&apos;re on the list. Welcome to MRIDUL.</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="focus-ring flex-1 bg-transparent border border-cream/40 px-4 py-3 text-[14px] placeholder:text-cream/60"
            />
            <button
              type="submit"
              className="focus-ring bg-cream text-ink px-7 py-3 text-[13px] tracking-wide hover:bg-ink hover:text-cream transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
