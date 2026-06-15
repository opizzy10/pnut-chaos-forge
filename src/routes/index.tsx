import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Rocket, Users, Lock, Gift, Heart, Sparkles, TrendingUp, Shield,
  Trophy, Handshake, Send, Twitter, ExternalLink, Copy, Check,
  ChevronRight, CircleCheck, Loader2, Star, Coins, Droplet, Zap, Globe,
} from "lucide-react";
import pnutTrain from "@/assets/pnut-train.jpeg.asset.json";
import pnutChaos from "@/assets/pnut-chaos.jpeg.asset.json";
import { Counter } from "@/components/Counter";
import { StarField } from "@/components/StarField";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "PNUT CHAOS — One Community. One Journey." },
      { name: "description", content: "Community-first meme movement on Solana. 21% supply locked until 2027. No fake hype, no shortcuts." },
      { property: "og:title", content: "PNUT CHAOS — One Community. One Journey." },
      { property: "og:description", content: "Community-first meme movement on Solana. Real growth. No shortcuts." },
    ],
  }),
});

const CONTRACT = "EXSMKQwntUrZR18SW2gDsG5KtG99H8NgXJPWsX84pump";
const TG = "https://t.me/pnutchaosofficial";
const X_URL = "https://x.com/pnutchaos";
const GECKO = "https://www.geckoterminal.com/solana/pools/EdKMZJEszbquL4yoVEaJxrujsBHHTbVvLi7ZKJJHjUnr";

function Home() {
  return (
    <div className="dark min-h-screen bg-[#050505] text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Community />
      <Roadmap />
      <Tokenomics />
      <Gallery />
      <WhyPnut />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-500 ${scrolled ? "rounded-2xl glass mx-3 sm:mx-5" : ""}`}>
        <a href="#top" className="flex items-center gap-2 font-display text-2xl tracking-wider">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-gold text-background shadow-[0_0_20px_oklch(0.78_0.18_65_/_0.6)]">🥜</span>
          <span>PNUT <span className="text-gradient-gold">CHAOS</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground transition">Story</a>
          <a href="#roadmap" className="hover:text-foreground transition">Roadmap</a>
          <a href="#tokenomics" className="hover:text-foreground transition">Tokenomics</a>
          <a href="#community" className="hover:text-foreground transition">Community</a>
        </nav>
        <a href={GECKO} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-gold px-5 py-2.5 text-sm font-semibold text-background shadow-[0_0_20px_oklch(0.78_0.18_65_/_0.4)] transition hover:scale-105">
          <span className="relative z-10">Buy $PNUT</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden pt-24">
      {/* Background galaxy */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.2_0.06_45/0.6),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,oklch(0.78_0.18_65/0.18),transparent_50%)]" />
        <StarField density={150} />
        {/* Floating orange particles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary blur-[1px] animate-pulse-glow"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-5 pt-10 text-center lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Live on Solana · $PNUT
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-[14vw] sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-wide"
        >
          ONE COMMUNITY.<br />
          <span className="text-gradient-gold">ONE JOURNEY.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          PNUT CHAOS is building a community-first movement on Solana.
          No fake hype. No shortcuts. Just believers building together, step by step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href={GECKO} target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-gold px-7 py-3.5 font-semibold text-background shadow-[0_0_40px_oklch(0.78_0.18_65/0.5)] transition hover:scale-105">
            <Coins className="h-4 w-4" /> Buy $PNUT
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a href={TG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/10 px-7 py-3.5 font-semibold text-foreground backdrop-blur transition hover:border-primary/40 hover:bg-black/80">
            <Send className="h-4 w-4" /> Join Telegram
          </a>
          <a href={X_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 font-semibold transition hover:scale-105">
            <Twitter className="h-4 w-4" /> Follow on X
          </a>
        </motion.div>

        {/* Mascot artwork */}
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative mt-16 w-full max-w-5xl"
        >
          <div className="absolute inset-x-10 -bottom-10 top-10 rounded-[40%] bg-gradient-to-r from-primary/40 via-gold/40 to-primary/40 blur-3xl animate-pulse-glow" />
          <div className="relative overflow-hidden rounded-3xl glass-gold p-1.5">
            <div className="relative overflow-hidden rounded-[22px]">
              <img src={pnutChaos.url} alt="PNUT CHAOS community on the moon" className="w-full animate-float-slow" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Tickers */}
        <div className="mt-12 mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-2"><Shield className="h-3.5 w-3.5 text-primary" /> 21% Supply Locked</span>
          <span className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-primary" /> Verified via Streamflow</span>
          <span className="flex items-center gap-2"><Heart className="h-3.5 w-3.5 text-primary" /> Community First</span>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- STATS ---------- */
function Stats() {
  const items = [
    { icon: Coins, label: "Total Supply", value: "1,000,000,000", sub: "Fixed Supply" },
    { icon: Lock, label: "Locked Supply", value: "209,646,850", sub: "Until June 11, 2027" },
    { icon: Gift, label: "Community Rewards", value: "10%", sub: "Reserved for Giveaways" },
    { icon: Users, label: "Holder Goal", value: "250+", sub: "Phase 2 Target" },
    { icon: Send, label: "Telegram Community", value: "Growing", sub: "Daily Active" },
    { icon: Shield, label: "Supply Locked", value: "21%", sub: "Verified On-chain" },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Live Stats" title={<>BUILT ON <span className="text-gradient-gold">TRANSPARENCY</span></>} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition hover:border-primary/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-gold/10 text-primary ring-1 ring-primary/30">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{it.label}</div>
                <div className="mt-2 font-display text-4xl tracking-wide text-gradient-gold sm:text-5xl">{it.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{it.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT / STORY ---------- */
function About() {
  const beats = [
    { t: "It started with an idea.", icon: Sparkles },
    { t: "A simple belief that a small community could build something real together.", icon: Heart },
    { t: "The chart went up.", icon: TrendingUp },
    { t: "The chart went down.", icon: ChevronRight },
    { t: "But every day the community grew.", icon: Users },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.18_65/0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-5">
        <SectionHeader eyebrow="The Origin" title={<>THE STORY OF <span className="text-gradient-gold">PNUT CHAOS</span></>} />

        <div className="mt-20 space-y-12">
          {beats.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex items-center gap-6 ${i % 2 === 0 ? "" : "flex-row-reverse text-right"}`}
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl glass-gold text-primary glow-orange-sm">
                <b.icon className="h-7 w-7" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">{b.t}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-4 sm:grid-cols-3"
        >
          {[
            { icon: Heart, t: "Community First", c: "Every decision starts with the holders." },
            { icon: Star, t: "Step by Step", c: "Patience beats hype. Always." },
            { icon: Rocket, t: "Long-Term Vision", c: "Built to outlast cycles, not chase them." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl glass p-7 text-center transition hover:border-primary/40 hover:-translate-y-1">
              <c.icon className="mx-auto mb-3 h-7 w-7 text-primary" />
              <div className="font-display text-xl tracking-wide">{c.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.c}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- COMMUNITY ---------- */
function Community() {
  const items = [
    { icon: Users, label: "New Holders", value: 180, suffix: "+" },
    { icon: Send, label: "Telegram Members", value: 1200, suffix: "+" },
    { icon: Handshake, label: "Supporters", value: 500, suffix: "+" },
    { icon: Rocket, label: "Builders", value: 25, suffix: "+" },
  ];
  return (
    <section id="community" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Movement" title={<>BUILT BY THE <span className="text-gradient-gold">COMMUNITY</span></>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass-gold p-8 text-center transition hover:-translate-y-2 hover:glow-orange-sm"
            >
              <span className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl opacity-50 group-hover:opacity-100 transition" />
              <div className="relative">
                <it.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                <div className="font-display text-5xl tracking-wide text-gradient-gold">
                  <Counter to={it.value} suffix={it.suffix} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{it.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ROADMAP ---------- */
function Roadmap() {
  const phases = [
    {
      tag: "Phase 1",
      status: "Completed",
      statusColor: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/30",
      items: [
        "Launch on Pump.fun",
        "First Holders",
        "100% Bonding Completed",
        "X Community Launch",
        "Telegram Community Launch",
        "Community Giveaways",
        "Website Launch",
      ],
    },
    {
      tag: "Phase 2",
      status: "In Progress",
      statusColor: "text-primary bg-primary/10 ring-primary/40",
      items: [
        "Reach 250 Holders",
        "Community Growth",
        "Marketing Expansion",
        "Community Partnerships",
        "Strengthen Community",
        "CoinGecko Application",
        "CoinMarketCap Application",
        "209,646,850 PNUT Locked Until June 11, 2027",
        "21% Supply Locked",
      ],
    },
    {
      tag: "Phase 3",
      status: "Long-Term Vision",
      statusColor: "text-gold bg-gold/10 ring-gold/30",
      items: [
        "Strategic Partnerships",
        "Community Expansion",
        "Long-Term Growth",
        "Exchange Listings",
        "Children's Home & Charity Support",
        "Motorsport Integration",
        "PNUT Merchandise",
        "Community Voting",
        "VIP Community Benefits",
      ],
    },
  ];
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.78_0.18_65/0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Roadmap" title={<>THE <span className="text-gradient-gold">JOURNEY</span> AHEAD</>} />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {phases.map((p, i) => (
            <motion.div
              key={p.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-3xl glass p-7 transition hover:border-primary/40"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 transition group-hover:opacity-100 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl tracking-wider text-muted-foreground">{p.tag}</span>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${p.statusColor}`}>
                    {p.status === "Completed" && <CircleCheck className="h-3 w-3" />}
                    {p.status === "In Progress" && <Loader2 className="h-3 w-3 animate-spin" />}
                    {p.status === "Long-Term Vision" && <Star className="h-3 w-3" />}
                    {p.status}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      {p.status === "Completed" ? (
                        <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      ) : p.status === "In Progress" ? (
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary animate-pulse" />
                      ) : (
                        <Star className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      )}
                      <span className="text-muted-foreground">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TOKENOMICS ---------- */
function Tokenomics() {
  const cards = [
    { icon: "🥜", title: "Total Supply", value: "1,000,000,000", sub: "Fixed Supply · PNUT" },
    { icon: <Lock className="h-7 w-7" />, title: "Supply Locked", value: "21%", sub: "Locked Until June 11, 2027 · Verified via Streamflow" },
    { icon: <Gift className="h-7 w-7" />, title: "Community Rewards", value: "10%", sub: "Reserved for Giveaways" },
    { icon: <Droplet className="h-7 w-7" />, title: "Liquidity", value: "Locked", sub: "Secured through PumpSwap" },
  ];
  return (
    <section id="tokenomics" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Tokenomics" title={<>SIMPLE. TRANSPARENT. <span className="text-gradient-gold">COMMUNITY DRIVEN.</span></>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-gold/10 text-primary text-3xl ring-1 ring-primary/30">
                {c.icon}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.title}</div>
              <div className="mt-2 font-display text-3xl tracking-wide text-gradient-gold sm:text-4xl break-words">{c.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{c.sub}</div>
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const [zoom, setZoom] = useState<string | null>(null);
  const images = [
    { src: pnutChaos.url, label: "One Community. One Journey." },
    { src: pnutTrain.url, label: "Don't Miss the PNUT Train." },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Gallery" title={<>THE <span className="text-gradient-gold">CHAOS GALLERY</span></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setZoom(img.src)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass-gold p-1.5 text-left"
            >
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="font-display text-xl tracking-wide">{img.label}</div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-background opacity-0 transition group-hover:opacity-100">
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      {zoom && (
        <div
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 backdrop-blur-xl p-5 animate-in fade-in"
        >
          <img src={zoom} alt="" className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}

/* ---------- WHY ---------- */
function WhyPnut() {
  const cards = [
    { icon: Heart, t: "Community First", c: "Holders shape direction. Always." },
    { icon: Rocket, t: "Long-Term Vision", c: "Built for years, not weeks." },
    { icon: Shield, t: "Transparency", c: "All locks verified on-chain." },
    { icon: Lock, t: "Locked Supply", c: "21% locked until June 11, 2027." },
    { icon: Zap, t: "Active Community", c: "Daily chats, daily growth." },
    { icon: Trophy, t: "Rewards & Giveaways", c: "10% reserved for the people." },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader eyebrow="Why Us" title={<>WHY <span className="text-gradient-gold">PNUT CHAOS</span></>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl opacity-0 transition group-hover:opacity-100" />
              <c.icon className="mb-5 h-8 w-8 text-primary" />
              <div className="font-display text-2xl tracking-wide">{c.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{c.c}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SOCIAL PROOF ---------- */
function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.18_65/0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl tracking-wide sm:text-7xl"
        >
          JOIN THE <span className="text-gradient-gold">MOVEMENT</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 space-y-2 text-lg text-muted-foreground"
        >
          <p>Every holder matters. Every supporter matters. Every step counts.</p>
          <p>This isn't about overnight success. It's about <span className="text-foreground font-semibold">building something real together</span>.</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-36">
      <div className="absolute inset-0 overflow-hidden">
        <StarField density={100} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.18_65/0.25),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] glass-gold p-10 sm:p-16 glow-orange"
        >
          <h2 className="font-display text-5xl tracking-wide sm:text-7xl lg:text-8xl">
            READY TO BUILD <br className="hidden sm:block" /><span className="text-gradient-gold">WITH US?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            One Community. One Journey.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={GECKO} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-gold px-7 py-4 font-semibold text-background shadow-[0_0_40px_oklch(0.78_0.18_65/0.6)] transition hover:scale-105">
              🥜 BUY PNUT
            </a>
            <a href={TG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/10 px-7 py-4 font-semibold backdrop-blur transition hover:border-primary/40">
              <Send className="h-4 w-4" /> JOIN TELEGRAM
            </a>
            <a href={X_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-4 font-semibold transition hover:scale-105">
              <Twitter className="h-4 w-4" /> FOLLOW ON X
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex items-center gap-2 font-display text-3xl tracking-wider">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-gold text-background">🥜</span>
              PNUT <span className="text-gradient-gold">CHAOS</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              A community-first movement on Solana. Real growth. No shortcuts.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={TG} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full glass hover:border-primary/40 transition">
                <Send className="h-4 w-4" />
              </a>
              <a href={X_URL} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full glass hover:border-primary/40 transition">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={GECKO} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full glass hover:border-primary/40 transition">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl glass p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contract Address (Solana)</div>
            <div className="mt-3 flex items-center gap-3">
              <code className="flex-1 min-w-0 truncate text-sm text-foreground">{CONTRACT}</code>
              <button
                onClick={copy}
                className="inline-flex items-center gap-1.5 shrink-0 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-background transition hover:scale-105"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} PNUT CHAOS. All rights reserved.</span>
          <span>Built by the community, for the community.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- shared ---------- */
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        <span className="h-1 w-1 rounded-full bg-primary" /> {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-5 font-display text-4xl tracking-wide sm:text-6xl lg:text-7xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
