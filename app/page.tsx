const services = [
  {
    number: "01",
    title: "Mecanică auto",
    description:
      "Revizii, frâne, suspensie, distribuție și reparații pentru toate tipurile de autoturisme.",
  },
  {
    number: "02",
    title: "Diagnoză computerizată",
    description:
      "Identificăm rapid problemele electronice și mecanice cu echipamente de diagnoză moderne.",
  },
  {
    number: "03",
    title: "Revizie & întreținere",
    description:
      "Schimb ulei, filtre, verificări tehnice și întreținere preventivă pentru mașina ta.",
  },
  {
    number: "04",
    title: "Climatizare",
    description:
      "Verificare, încărcare și întreținere instalație de climatizare pentru confort în orice sezon.",
  },
];

const benefits = [
  "Mecanică realizată profesional",
  "Piese și consumabile de calitate",
  "Diagnoză computerizată",
  "Programări rapide",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* NAVBAR */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#" className="text-xl font-black tracking-tight">
            AUTOFIX<span className="text-orange-500">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#servicii" className="transition hover:text-white">
              Servicii
            </a>
            <a href="#despre" className="transition hover:text-white">
              Despre noi
            </a>
            <a href="#avantaje" className="transition hover:text-white">
              De ce noi
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-400"
          >
            Programează-te
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative flex min-h-[760px] items-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.35) 100%), url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2200&q=90')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-black/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              <span className="h-px w-10 bg-orange-500" />
              Service auto profesional
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Mașina ta.
              <br />
              <span className="text-orange-500">În mâini bune.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">
              Reparații, diagnoză și întreținere auto realizate profesionist,
              cu atenție la fiecare detaliu.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 font-bold transition hover:bg-orange-400"
              >
                Programează o vizită
                <span className="ml-3">→</span>
              </a>

              <a
                href="#servicii"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold backdrop-blur-sm transition hover:bg-white/10"
              >
                Vezi serviciile
              </a>
            </div>
          </div>

          <div className="mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-4">
            <div>
              <p className="text-3xl font-black">10+</p>
              <p className="mt-1 text-sm text-white/50">ani experiență</p>
            </div>
            <div>
              <p className="text-3xl font-black">2.000+</p>
              <p className="mt-1 text-sm text-white/50">mașini reparate</p>
            </div>
            <div>
              <p className="text-3xl font-black">4.9/5</p>
              <p className="mt-1 text-sm text-white/50">rating clienți</p>
            </div>
            <div>
              <p className="text-3xl font-black">24h</p>
              <p className="mt-1 text-sm text-white/50">răspuns rapid</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="despre" className="bg-[#0b0b0b] py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Despre noi
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Nu reparăm doar mașini. Construim încredere.
            </h2>
          </div>

          <div className="max-w-xl lg:pt-10">
            <p className="text-lg leading-8 text-white/60">
              La AUTOFIX, fiecare mașină este tratată cu aceeași atenție,
              indiferent de marcă sau model. Îți explicăm problema, îți
              prezentăm soluția și lucrăm transparent, fără costuri ascunse.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Folosim echipamente moderne și piese de calitate pentru ca
              mașina ta să plece din service în cea mai bună stare posibilă.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicii" className="bg-[#111111] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Ce facem
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Serviciile noastre
              </h2>
            </div>

            <p className="max-w-md text-white/50">
              Tot ce ai nevoie pentru întreținerea și repararea autoturismului
              tău, într-un singur loc.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group min-h-[300px] border-b border-r border-white/10 p-8 transition hover:bg-white/[0.03] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-orange-500">
                    {service.number}
                  </span>

                  <span className="text-2xl text-white/20 transition group-hover:text-orange-500">
                    ↗
                  </span>
                </div>

                <h3 className="mt-20 text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-white/50">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="avantaje" className="bg-orange-500 py-24 text-black lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em]">
              De ce AUTOFIX
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Service făcut cum trebuie.
            </h2>
          </div>

          <div className="grid gap-0">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-5 border-t border-black/20 py-6"
              >
                <span className="text-sm font-black">
                  0{index + 1}
                </span>
                <span className="text-xl font-bold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#0b0b0b] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#171717] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                  Ai nevoie de ajutor?
                </p>

                <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                  Hai să vedem ce are mașina ta.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/50">
                  Sună-ne sau trimite-ne un mesaj pentru o programare.
                  Răspundem rapid și îți spunem care este următorul pas.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+40700000000"
                  className="flex items-center justify-between rounded-2xl bg-orange-500 p-6 font-bold transition hover:bg-orange-400"
                >
                  <span>+40 700 000 000</span>
                  <span className="text-2xl">→</span>
                </a>

                <a
                  href="mailto:contact@autofix.ro"
                  className="flex items-center justify-between rounded-2xl border border-white/10 p-6 font-bold transition hover:bg-white/5"
                >
                  <span>contact@autofix.ro</span>
                  <span className="text-2xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-xl font-black">
              AUTOFIX<span className="text-orange-500">.</span>
            </p>
            <p className="mt-1 text-sm text-white/40">
              Service auto & diagnoză
            </p>
          </div>

          <p className="text-sm text-white/30">
            © 2026 AUTOFIX. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </main>
  );
}