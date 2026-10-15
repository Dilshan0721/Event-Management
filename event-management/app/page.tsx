"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Headphones,
  MapPin,
  Play,
  Search,
  Sparkles,
  Ticket,
  Users,
  Star,
} from "lucide-react";

const events = [
  {
    title: "Neon Nights Festival",
    type: "MUSIC FESTIVAL",
    date: "Aug 24, 2025",
    location: "Colombo, Sri Lanka",
    price: "From $49",
    art: "from-fuchsia-500 via-purple-800 to-indigo-950",
  },
  {
    title: "Champions League Final",
    type: "SPORTS",
    date: "Sep 07, 2025",
    location: "Kandy, Sri Lanka",
    price: "From $75",
    art: "from-cyan-700 via-fuchsia-800 to-rose-600",
  },
  {
    title: "Live Under The Stars",
    type: "CONCERT",
    date: "Sep 18, 2025",
    location: "Galle, Sri Lanka",
    price: "From $35",
    art: "from-indigo-900 via-pink-600 to-violet-900",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const visibleEvents = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return events;
    return events.filter((event) =>
      `${event.title} ${event.type} ${event.location}`.toLowerCase().includes(query),
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070817] text-white antialiased">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#0c0724]/90 shadow-lg shadow-black/20 backdrop-blur-xl">
     
        <nav className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between border-b border-white/10 px-6 sm:px-12 lg:px-16">
          <a
            className="group flex w-max items-baseline gap-[9px] whitespace-nowrap"
            href="#top"
            aria-label="Velora Events home"
          >
            <span className="animate-pulse bg-gradient-to-r from-[#d7aa67] via-[#fff1c2] to-[#d7aa67] bg-clip-text font-serif text-[22px] font-normal leading-none tracking-[0.03em] text-transparent transition duration-300 group-hover:-translate-y-px group-hover:drop-shadow-[0_0_10px_rgba(215,170,103,0.65)]">
              VELORA
            </span>
            <span className="relative pb-1 pl-[5px] pr-[3px] font-sans text-[11px] font-normal leading-none tracking-[0.25em] text-[#f4f0e8] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:animate-pulse after:bg-[#d7aa67]">
              EVENTS
            </span>
          </a>
          <div className="hidden items-center gap-9 md:flex">
            <a
              className="relative py-7 text-xs text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#d7aa67] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-[#d7aa67]"
              href="#top"
            >
              Home
            </a>
            <a
              className="text-xs text-violet-200/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#d7aa67]"
              href="#events"
            >
              Events
            </a>
            <a
              className="text-xs text-violet-200/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#d7aa67]"
              href="#membership"
            >
              Membership
            </a>
            <a
              className="text-xs text-violet-200/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#d7aa67]"
              href="#community"
            >
              Community
            </a>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              className="group hidden h-11 w-56 items-center gap-2.5 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[.09] to-white/[.04] px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 focus-within:border-[#d7aa67]/80 focus-within:ring-2 focus-within:ring-[#d7aa67]/15 hover:-translate-y-0.5 hover:border-[#d7aa67]/60 hover:shadow-[0_10px_30px_rgba(215,170,103,0.12)] sm:flex"
              href="#events"
              onClick={(event) => event.preventDefault()}
            >
              <input aria-label="Search events" className="min-w-0 flex-1 bg-transparent text-[11px] tracking-wide text-white outline-none placeholder:text-violet-200/55" onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search experiences" type="search" value={searchTerm} />
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#d7aa67]/10 text-[#e8bd72] transition-colors duration-300 group-focus-within:bg-[#d7aa67]/20 group-hover:bg-[#d7aa67]/20"><Search size={15} /></span>
            </a>
            <a
              className="flex h-10 w-[88px] items-center justify-center rounded-full border border-white/15 text-[10px] font-semibold text-violet-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d7aa67] hover:text-[#d7aa67] sm:text-[11px]"
              href="#community"
            >
              Sign in
            </a>
            <a
              className="flex h-10 w-[88px] items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#c58a35] via-[#e8bc6b] to-[#b8792d] text-[11px] font-bold text-[#1b1023] shadow-lg shadow-[#d7aa67]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#d7aa67]/40"
              href="#membership"
            >
              Sign up <ArrowRight size={15} />
            </a>
            <button
              className="flex flex-col gap-1 p-1 md:hidden"
              aria-label="Open navigation"
            >
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
            </button>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="relative isolate min-h-[680px] overflow-hidden bg-[#080817]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/velora-concert-hero.png"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_right]"
          aria-hidden="true"
        >
          <source src="/main.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080817] via-[#080817]/95 via-42% to-[#080817]/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080817] via-transparent to-[#080817]/20" />
        <div className="absolute -right-24 top-10 -z-10 h-72 w-[52%] rounded-[50%] border border-[#d7aa67]/60 blur-[1px]" />
        <div className="absolute -bottom-36 left-[33%] -z-10 h-80 w-[52%] rounded-[50%] border border-[#d7aa67]/80 blur-[1px]" />
        <div className="mx-auto flex min-h-[680px] max-w-[1440px] items-center px-6 pb-20 pt-[130px] sm:px-12 lg:px-16">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-4 text-[11px] font-medium tracking-[.32em] text-[#d7aa67]">
              <span className="h-px w-9 bg-[#d7aa67]" />
              LIVE MOMENTS. LASTING STORIES.
            </p>
            <h1 className="font-serif text-6xl font-normal leading-[.94] tracking-[-.04em] text-white sm:text-7xl lg:text-[84px]">
              Experience
              <br />
              <span className="text-[#f0c981] drop-shadow-[0_0_20px_rgba(215,170,103,0.25)]">
                Extraordinary Events
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-violet-100/75 sm:text-lg">
              From intimate gatherings to world-class festivals,
              <br className="hidden sm:block" /> Velora Events brings people
              closer to the moments that matter.
            </p>
            <div className="mt-9 flex items-center gap-7">
              <a
                className="flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-4 text-sm font-bold shadow-2xl shadow-fuchsia-700/30 transition hover:-translate-y-1"
                href="#events"
              >
                Get tickets <ArrowRight size={18} />
              </a>
              <a
                className="flex items-center gap-3 text-sm font-bold text-white transition hover:text-[#f0c981]"
                href="#community"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/5">
                  <Play size={17} fill="currentColor" />
                </span>
                Watch our story
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-violet-100/75 sm:gap-9">
              <div className="flex items-center gap-3">
                <Ticket
                  className="text-[#d7aa67]"
                  size={29}
                  strokeWidth={1.5}
                />
                <span>
                  Curated
                  <br />
                  Experiences
                </span>
              </div>
              <span className="h-12 w-px bg-white/20" />
              <div className="flex items-center gap-3">
                <Users className="text-[#d7aa67]" size={29} strokeWidth={1.5} />
                <span>
                  A Thriving
                  <br />
                  Community
                </span>
              </div>
              <span className="hidden h-12 w-px bg-white/20 sm:block" />
              <div className="hidden items-center gap-3 sm:flex">
                <Star className="text-[#d7aa67]" size={29} strokeWidth={1.5} />
                <span>
                  Unforgettable
                  <br />
                  Moments
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="membership"
        className="flex min-h-12 items-center justify-start gap-8 overflow-x-auto whitespace-nowrap bg-gradient-to-r from-violet-700 via-fuchsia-600 to-violet-700 px-5 text-[11px] font-bold sm:justify-center"
      >
        <span className="flex items-center gap-2">
          <Sparkles size={14} className="text-cyan-200" /> Concerts
        </span>
        <span className="flex items-center gap-2">
          <Sparkles size={14} className="text-cyan-200" /> Festival
        </span>
        <span className="flex items-center gap-2">
          <Ticket size={14} className="text-cyan-200" /> Verified Tickets
        </span>
        <span className="flex items-center gap-2">
          <Sparkles size={14} className="text-cyan-200" /> Best Price
        </span>
        <span className="flex items-center gap-2">
          <Sparkles size={14} className="text-cyan-200" /> Limited Offers
        </span>
      </div>
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          <a
            className="relative flex min-h-32 items-center gap-4 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-fuchsia-700/80 to-indigo-950 p-6 transition hover:-translate-y-1"
            href="#events"
          >
            <span className="z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-3xl">
              ♫
            </span>
            <div className="z-[1]">
              <h2 className="text-xl font-bold">Concerts</h2>
              <p className="text-xs text-violet-100/80">
                Live music experiences
              </p>
            </div>
            <ChevronRight className="z-[1] ml-auto" size={22} />
          </a>
          <a
            className="relative flex min-h-32 items-center gap-4 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-cyan-800/80 to-fuchsia-950 p-6 transition hover:-translate-y-1"
            href="#events"
          >
            <span className="z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-3xl">
              ✦
            </span>
            <div className="z-[1]">
              <h2 className="text-xl font-bold">Sports</h2>
              <p className="text-xs text-violet-100/80">Epic sporting events</p>
            </div>
            <ChevronRight className="z-[1] ml-auto" size={22} />
          </a>
        </div>
        <div id="events" className="mb-6 mt-16 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[9px] font-bold tracking-[.25em] text-fuchsia-400">
              DON&apos;T MISS OUT
            </p>
            <h2 className="mb-2 text-3xl font-bold tracking-tight">
              Top Events
            </h2>
            <p className="text-xs text-violet-200/60">
              Handpicked experiences made for unforgettable moments.
            </p>
          </div>
          <a
            className="flex items-center gap-1 text-xs text-fuchsia-300"
            href="#events"
          >
            View All <ArrowRight size={15} />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {visibleEvents.map((event) => (
            <article
              className="overflow-hidden rounded-lg border border-white/10 bg-[#100d24]"
              key={event.title}
            >
              <div
                className={`relative flex h-40 items-start justify-between overflow-hidden bg-gradient-to-br ${event.art} p-4`}
              >
                <span className="relative z-[1] text-[9px] font-bold tracking-widest">
                  {event.type}
                </span>
                <span className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-2xl">
                  ✦
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="mb-2 text-sm font-bold">{event.title}</h3>
                  <p className="flex items-center text-[10px] text-violet-200/60">
                    <CalendarDays size={13} className="mr-1" />
                    {event.date} &nbsp;·&nbsp; {event.location}
                  </p>
                </div>
                <strong className="text-xs text-fuchsia-300">
                  {event.price}
                </strong>
              </div>
            </article>
          ))}
          {visibleEvents.length === 0 && (
            <p className="col-span-full rounded-xl border border-white/10 bg-white/[.04] px-5 py-8 text-center text-sm text-violet-200/70">
              No events found. Try another search.
            </p>
          )}
        </div>
      </section>
      <footer
        id="community"
        className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-5 py-7 text-[11px] text-violet-200/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"
      >
        <span className="font-serif text-base tracking-wide text-[#d7aa67]">
          VELORA{" "}
          <span className="font-sans text-[10px] tracking-[.28em] text-[#f4f0e8]">
            EVENTS
          </span>
        </span>
        <span>Find your people. Find your moment.</span>
      </footer>
    </main>
  );
}
