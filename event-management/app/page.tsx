import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Headphones,
  MapPin,
  Search,
  Sparkles,
  Ticket,
} from "lucide-react";

const events = [
  { title: "Neon Nights Festival", type: "MUSIC FESTIVAL", date: "Aug 24, 2025", location: "Colombo, Sri Lanka", price: "From $49", art: "from-fuchsia-500 via-purple-800 to-indigo-950" },
  { title: "Champions League Final", type: "SPORTS", date: "Sep 07, 2025", location: "Kandy, Sri Lanka", price: "From $75", art: "from-cyan-700 via-fuchsia-800 to-rose-600" },
  { title: "Live Under The Stars", type: "CONCERT", date: "Sep 18, 2025", location: "Galle, Sri Lanka", price: "From $35", art: "from-indigo-900 via-pink-600 to-violet-900" },
];

const features = ["Concerts", "Festival", "Verified Tickets", "Best Price", "Limited Offers", "Early Access"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070817] text-white antialiased">
      <header className="relative z-10 bg-[#0c0724]/95">
        <div className="flex min-h-8 items-center justify-center gap-4 border-b border-white/10 bg-gradient-to-r from-purple-900/30 to-indigo-950/30 px-6 py-1.5 text-[10px] tracking-wide text-violet-100">
          <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-fuchsia-300" /> Early access to the hottest events is here.</span>
          <a className="flex items-center gap-1 font-bold text-fuchsia-300 hover:text-white" href="#membership">Explore membership <ArrowRight size={13} /></a>
          <span className="ml-auto hidden items-center gap-1 text-violet-300/70 sm:flex"><MapPin size={13} /> Colombo, Sri Lanka</span>
        </div>

        <nav className="flex h-[78px] items-center justify-between border-b border-white/10 px-5 sm:px-10 lg:px-24">
          <a className="group flex w-max items-baseline gap-[9px] whitespace-nowrap" href="#top" aria-label="Velora Events home">
            <span className="animate-pulse bg-gradient-to-r from-[#d7aa67] via-[#fff1c2] to-[#d7aa67] bg-clip-text font-serif text-[22px] font-normal leading-none tracking-[0.03em] text-transparent transition duration-300 group-hover:-translate-y-px group-hover:drop-shadow-[0_0_10px_rgba(215,170,103,0.65)]">VELORA</span>
            <span className="relative pb-1 pl-[5px] pr-[3px] font-sans text-[11px] font-normal leading-none tracking-[0.25em] text-[#f4f0e8] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:origin-left after:bg-[#d7aa67] after:content-[''] after:animate-pulse">EVENTS</span>
          </a>
          <div className="hidden items-center gap-8 md:flex"><a className="relative py-7 text-xs text-white after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-fuchsia-400 after:to-violet-500" href="#top">Home</a><a className="text-xs text-violet-200/70 transition hover:text-white" href="#events">Events</a><a className="text-xs text-violet-200/70 transition hover:text-white" href="#membership">Membership</a><a className="text-xs text-violet-200/70 transition hover:text-white" href="#community">Community</a></div>
          <div className="flex items-center gap-2.5 sm:gap-4"><a className="hidden w-36 items-center gap-2 rounded-full border border-white/10 bg-white/[.07] px-3 py-2 text-[10px] text-violet-200/70 sm:flex" href="#events"><Search size={15} /> Search events</a><a className="hidden text-[11px] font-bold text-violet-100 sm:block" href="#community">Sign in</a><a className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-2.5 text-[11px] font-bold shadow-lg shadow-fuchsia-700/20 transition hover:-translate-y-0.5" href="#events">Get tickets <ArrowRight size={15} /></a><button className="flex flex-col gap-1 p-1 md:hidden" aria-label="Open navigation"><span className="h-0.5 w-5 bg-white" /><span className="h-0.5 w-5 bg-white" /></button></div>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950/40 via-[#180b2b] to-[#08091b] px-5 text-center">
        <div className="absolute -left-10 -top-28 h-96 w-96 rounded-full bg-fuchsia-700/60 blur-3xl" /><div className="absolute -right-10 -top-24 h-80 w-80 rounded-full bg-violet-700/60 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070817] via-[#070817]/80 to-transparent" /><div className="absolute bottom-0 left-[4%] h-28 w-36 rounded-t-[50%] bg-[#030516] before:absolute before:-top-8 before:left-1/2 before:h-16 before:w-16 before:-translate-x-1/2 before:rounded-full before:bg-[#030516]" /><div className="absolute bottom-0 left-[25%] h-40 w-36 rounded-t-[50%] bg-[#030516] before:absolute before:-top-8 before:left-1/2 before:h-16 before:w-16 before:-translate-x-1/2 before:rounded-full before:bg-[#030516]" /><div className="absolute bottom-0 right-[5%] h-44 w-40 rounded-t-[50%] bg-[#030516] before:absolute before:-top-8 before:left-1/2 before:h-16 before:w-16 before:-translate-x-1/2 before:rounded-full before:bg-[#030516]" />
        <div className="relative z-[1] max-w-3xl"><p className="mb-4 text-[10px] font-bold tracking-[.25em] text-violet-200"><span className="mr-2 inline-block h-px w-6 bg-fuchsia-400 align-middle" />YOUR NEXT EXPERIENCE AWAITS</p><h1 className="text-5xl font-semibold leading-[.99] tracking-[-.04em] sm:text-6xl lg:text-7xl">Book Your Favourite<br /><span className="bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">Concerts &amp; Sports</span><br />Tickets</h1><p className="mx-auto my-6 max-w-xl text-sm leading-relaxed text-violet-100/80">Experience the thrill of live events. Get your tickets now with exclusive pricing and member benefits.</p><div className="flex justify-center gap-3"><a className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3 text-xs font-bold shadow-xl shadow-fuchsia-700/25 transition hover:-translate-y-0.5" href="#events">Browse Events <ArrowRight size={16} /></a><a className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-xs font-bold transition hover:bg-white/10" href="#community"><Headphones size={16} /> Join Community</a></div><div className="mt-9 flex justify-center gap-8 sm:gap-14">{[["500", "Events Listed"], ["50K", "Tickets Sold"], ["98", "Satisfaction"]].map(([value, label]) => <div className="flex flex-col" key={label}><strong className="text-2xl">{value}<span className="text-fuchsia-400">{label === "Satisfaction" ? "%" : "+"}</span></strong><small className="mt-1 text-[10px] text-violet-200/60">{label}</small></div>)}</div></div>
      </section>

      <div id="membership" className="flex min-h-12 items-center justify-start gap-8 overflow-x-auto whitespace-nowrap bg-gradient-to-r from-violet-700 via-fuchsia-600 to-violet-700 px-5 text-[11px] font-bold sm:justify-center">{features.map((feature) => <span className="flex items-center gap-2" key={feature}><Sparkles size={14} className="text-cyan-200" /> {feature}</span>)}</div>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2"><a className="group relative flex min-h-32 items-center gap-4 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-fuchsia-700/80 to-indigo-950 p-6 transition hover:-translate-y-1" href="#events"><div className="absolute -right-4 -top-10 h-44 w-44 rounded-full border-[22px] border-white/10" /><span className="z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-3xl">♫</span><div className="z-[1]"><h2 className="text-xl font-bold">Concerts</h2><p className="text-xs text-violet-100/80">Live music experiences</p></div><ChevronRight className="z-[1] ml-auto" size={22} /></a><a className="group relative flex min-h-32 items-center gap-4 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-cyan-800/80 to-fuchsia-950 p-6 transition hover:-translate-y-1" href="#events"><div className="absolute -right-4 -top-10 h-44 w-44 rounded-full border-[22px] border-white/10" /><span className="z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-3xl">✦</span><div className="z-[1]"><h2 className="text-xl font-bold">Sports</h2><p className="text-xs text-violet-100/80">Epic sporting events</p></div><ChevronRight className="z-[1] ml-auto" size={22} /></a></div>
        <div id="events" className="mb-6 mt-16 flex items-end justify-between"><div><p className="mb-2 text-[9px] font-bold tracking-[.25em] text-fuchsia-400">DON&apos;T MISS OUT</p><h2 className="mb-2 text-3xl font-bold tracking-tight">Top Events</h2><p className="text-xs text-violet-200/60">Handpicked experiences made for unforgettable moments.</p></div><a className="flex items-center gap-1 text-xs text-fuchsia-300" href="#events">View All <ArrowRight size={15} /></a></div>
        <div className="grid gap-5 md:grid-cols-3">{events.map((event) => <article className="overflow-hidden rounded-lg border border-white/10 bg-[#100d24]" key={event.title}><div className={`relative flex h-40 items-start justify-between overflow-hidden bg-gradient-to-br ${event.art} p-4 before:absolute before:-left-10 before:top-10 before:h-44 before:w-44 before:rounded-full before:border-[22px] before:border-white/10 after:absolute after:-right-8 after:-top-20 after:h-44 after:w-44 after:rounded-full after:border-[22px] after:border-white/10`}><span className="relative z-[1] text-[9px] font-bold tracking-widest">{event.type}</span><span className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-2xl">✦</span></div><div className="flex items-center justify-between p-4"><div><h3 className="mb-2 text-sm font-bold">{event.title}</h3><p className="flex items-center text-[10px] text-violet-200/60"><CalendarDays size={13} className="mr-1" />{event.date} &nbsp;·&nbsp; {event.location}</p></div><strong className="text-xs text-fuchsia-300">{event.price}</strong></div></article>)}</div>
      </section>
      <footer id="community" className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-5 py-7 text-[11px] text-violet-200/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><span className="font-serif text-base tracking-wide text-[#d7aa67]">VELORA <span className="font-sans text-[10px] tracking-[.28em] text-[#f4f0e8]">EVENTS</span></span><span>Find your people. Find your moment.</span></footer>
    </main>
  );
}
