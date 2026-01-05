"use client";

import { useEffect } from "react";
import Reviews from "@/components/Reviews";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="font-sans bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-rose-400/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-up">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
              <span className="text-red-600">UPCELL</span> COLUMBUS
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Fast, reliable phone & Apple device repairs, accessories,
              and trade-ins — trusted by the Columbus community.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-2xl bg-red-600 text-white font-medium hover:bg-red-700 transition">
                Phone Repair
              </button>
              <button className="px-8 py-3 rounded-2xl border border-zinc-300 dark:border-white/20 hover:bg-zinc-100 dark:hover:bg-white/5 transition">
                Trade In
              </button>
            </div>

            <div className="mt-8 flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              <span>⚡ Same-Day Repairs</span>
              <span>🔒 Warranty Included</span>
              <span>📍 Columbus, OH</span>
            </div>
          </div>

          <img
            src="https://scontent.fosu2-2.fna.fbcdn.net/v/t39.30808-6/467630189_122120387624548198_2710548949970733922_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Y_02Bj7HUbUQ7kNvwHm3B-6&_nc_oc=AdlYHqa2LMatLGptLeG0IU8JSeCt0LMcqjDCNs5QCd_v7rbUW8Ww8Xn8wfidmIUp0rpneINyWf-6H2I11n1CShdj&_nc_zt=23&_nc_ht=scontent.fosu2-2.fna&_nc_gid=rPBmASWdgtGucLBhJ2kqKA&oh=00_Afr7wqU4ZHULl3nZy8pwxNtqRnD4-xHohieA6G9TQwZCww&oe=6961BA1B"
            alt="Device repair"
            className="rounded-3xl shadow-2xl object-cover animate-fade-in"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ["🛠️ Expert Repairs", "Certified technicians using premium parts."],
            ["⏱️ Fast Turnaround", "Most repairs completed within an hour."],
            ["💎 Honest Pricing", "Free diagnostics and transparent quotes."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="reveal p-8 rounded-3xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                {title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24">
        <h2 className="text-4xl text-red-500 font-semibold text-center mb-16">
          Repairs & Services
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ["📱 Phones", "Screens, batteries, ports, speakers."],
            ["📟 Tablets", "Glass & battery replacement."],
            ["💻 Apple Devices", "MacBooks & Watches."],
            ["🎧 Accessories", "Cases, chargers & cables."],
            ["🛒 Buy & Sell", "Certified devices with warranty."],
            ["🔄 Trade-In", "Instant cash or credit."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:scale-[1.02] transition"
            >
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STORE */}
      <section className="px-6 py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center reveal">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMPd8IbEZ15fARwO_rIM43lijRYRmmR0Ph732hJ=s1360-w1360-h1020-rw"
            alt="UPCELL store"
            className="rounded-3xl shadow-xl object-cover"
          />

          <div>
            <h2 className="text-4xl font-semibold text-red-500 mb-6">
              Visit Our Store
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Walk into UPCELL COLUMBUS for quick repairs, honest advice,
              and friendly service from local experts.
            </p>

            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li>📍 Columbus, Ohio</li>
              <li>🕒 Mon–Sat: 10 AM – 8 PM</li>
              <li>📞 Walk-ins welcome</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 py-24">
        <h2 className="text-4xl font-semibold text-red-500 text-center mb-10">
          Find Us At
        </h2>

        <div className="reveal max-w-5xl mx-auto h-[420px] rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-white/10">
          <iframe
            title="UPCELL Columbus Map"
            src="https://www.google.com/maps?q=973%20Harrisburg%20Pike,%20Columbus,%20OH%2043223&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reveal">
        <Reviews />
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-4xl font-semibold mb-6">
            Need a Repair Today?
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-10">
            Walk in or contact us — we’ll take care of the rest.
          </p>

          <a
            href="tel:16142721611"
            className="inline-block px-10 py-4 rounded-2xl bg-red-600 text-white font-medium hover:bg-red-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} UPCELL COLUMBUS · Trusted Local Repairs
      </footer>
    </div>
  );
}
