
"use client";

import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Mecanică auto",
    text: "Reparații mecanice, suspensie, direcție și transmisie realizate profesionist.",
  },
  {
    number: "02",
    title: "Diagnoză",
    text: "Identificăm rapid problemele cu echipamente moderne de diagnoză.",
  },
  {
    number: "03",
    title: "Revizii",
    text: "Schimburi de ulei, filtre și verificări complete pentru întreținerea mașinii.",
  },
  {
    number: "04",
    title: "Frâne",
    text: "Verificare și înlocuire discuri, plăcuțe și componente ale sistemului de frânare.",
  },
  {
    number: "05",
    title: "Climatizare",
    text: "Verificare, încărcare și întreținere pentru instalația de climatizare.",
  },
  {
    number: "06",
    title: "Distribuție",
    text: "Înlocuire kit distribuție și verificarea componentelor asociate.",
  },
];

const advantages = [
  "Experiență de peste 10 ani",
  "Diagnoză computerizată",
  "Piese și consumabile de calitate",
  "Prețuri transparente",
];

const reviews = [
  {
    name: "Andrei M.",
    text: "Foarte mulțumit de serviciile oferite. Au identificat problema rapid și mi-au explicat tot ce trebuia făcut.",
  },
  {
    name: "Mihai D.",
    text: "Service serios, oameni profesioniști și comunicare foarte bună. Recomand.",
  },
  {
    name: "Alex P.",
    text: "Am venit pentru o revizie și am plecat foarte mulțumit. Cu siguranță voi reveni.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* NAVBAR */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

          <a href="#" className="text-2xl font-black tracking-tighter">
            AUTO<span className="text-orange-500">FIX</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#servicii" className="transition hover:text-white">
              Servicii
            </a>

            <a href="#despre" className="transition hover:text-white">
              Despre noi
            </a>

            <a href="#recenzii" className="transition hover:text-white">
              Recenzii
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold transition hover:bg-orange-400"
          >
            Programează-te
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,.95) 0%, rgba(0,0,0,.78) 45%, rgba(0,0,0,.25) 100%), url('/images/hero.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">

          <div className="max-w-4xl">

            <div className="mb-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              <span className="h-px w-12 bg-orange-500" />
              Service auto premium
            </div>

            <h1 className="text-6xl font-black leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[100px]">
              MAȘINA TA.
              <br />
              <span className="text-orange-500">ÎN MÂINI BUNE.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Service auto profesionist pentru oameni care vor lucrări făcute
              corect, comunicare transparentă și un rezultat în care pot avea
              încredere.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#contact"
                className="rounded-full bg-orange-500 px-8 py-4 text-center font-bold transition hover:bg-orange-400"
              >
                Programează o vizită →
              </a>

              <a
                href="#servicii"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold backdrop-blur transition hover:bg-white/10"
              >
                Vezi serviciile
              </a>

            </div>
          </div>

          {/* STATS */}
          <div className="mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-4">

            <div>
              <p className="text-3xl font-black">10+</p>
              <p className="mt-1 text-sm text-white/45">ani experiență</p>
            </div>

            <div>
              <p className="text-3xl font-black">2.000+</p>
              <p className="mt-1 text-sm text-white/45">clienți</p>
            </div>

            <div>
              <p className="text-3xl font-black">4.9/5</p>
              <p className="mt-1 text-sm text-white/45">rating</p>
            </div>

            <div>
              <p className="text-3xl font-black">24h</p>
              <p className="mt-1 text-sm text-white/45">răspuns rapid</p>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="despre" className="py-28 lg:py-36">
  <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

    <div className="overflow-hidden rounded-[2rem]">
      <img
        src="/images/about.jpg"
        alt="Mecanic AUTOFIX lucrând la un autoturism"
        className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
      />
    </div>

    <div>

      <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
        Despre noi
      </p>

      <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
        Nu reparăm doar mașini.
        <br />
        <span className="text-white/35">
          Construim încredere.
        </span>
      </h2>

      <p className="mt-8 text-lg leading-8 text-white/60">
        La AUTOFIX, fiecare mașină este tratată cu aceeași atenție.
        Îți explicăm problema, îți prezentăm soluția și lucrăm
        transparent.
      </p>

      <p className="mt-6 text-lg leading-8 text-white/60">
        Folosim echipamente moderne și componente de calitate pentru ca
        mașina ta să plece din service în cea mai bună stare posibilă.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-3xl font-black text-orange-500">10+</p>
          <p className="mt-2 text-sm text-white/45">
            ani experiență
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-3xl font-black text-orange-500">2K+</p>
          <p className="mt-2 text-sm text-white/45">
            clienți mulțumiți
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* SERVICES */}
      <section id="servicii" className="bg-[#111111] py-28 lg:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Ce facem
              </p>

              <h2 className="text-4xl font-black sm:text-6xl">
                Serviciile noastre
              </h2>
            </div>

            <p className="max-w-md leading-7 text-white/45">
              Tot ce ai nevoie pentru întreținerea și repararea autoturismului
              tău.
            </p>

          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <article
                key={service.number}
                className="group min-h-[310px] border-b border-r border-white/10 p-8 transition hover:bg-white/[0.035] lg:p-10"
              >

                <div className="flex items-start justify-between">

                  <span className="text-sm font-bold text-orange-500">
                    {service.number}
                  </span>

                  <span className="text-xl text-white/20 transition group-hover:text-orange-500">
                    ↗
                  </span>

                </div>

                <h3 className="mt-24 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  {service.text}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-orange-500 py-28 text-black lg:py-36">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

          <div>

            <p className="mb-5 text-sm font-black uppercase tracking-[0.2em]">
              De ce noi
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              Service făcut
              <br />
              cum trebuie.
            </h2>

          </div>

          <div>

            {advantages.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-6 border-t border-black/20 py-7"
              >

                <span className="text-sm font-black">
                  0{index + 1}
                </span>

                <span className="text-xl font-bold">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 lg:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Proces simplu
          </p>

          <h2 className="text-4xl font-black sm:text-6xl">
            De la problemă la soluție.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-4">

            {[
              ["01", "Programezi", "Ne contactezi și stabilim o programare."],
              ["02", "Diagnosticăm", "Identificăm cauza problemei."],
              ["03", "Reparăm", "Îți prezentăm soluția și efectuăm lucrarea."],
              ["04", "Ridici mașina", "Primești mașina verificată și pregătită de drum."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
              >

                <span className="text-sm font-bold text-orange-500">
                  {number}
                </span>

                <h3 className="mt-16 text-2xl font-bold">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  {text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>
{/* GALLERY */}
<section className="bg-[#080808] py-28 lg:py-36">

  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mb-14">
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
        În service
      </p>

      <h2 className="text-4xl font-black sm:text-6xl">
        Muncim. Reparăm. Livrăm.
      </h2>

      <p className="mt-5 max-w-xl text-lg leading-8 text-white/45">
        Un service profesionist începe cu atenția la fiecare detaliu.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2">

      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src="/images/service-1.jpg"
          alt="Service auto AUTOFIX"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <p className="absolute bottom-7 left-7 text-xl font-bold">
          Atelier profesionist
        </p>
      </div>

      <div className="grid gap-4">

        <div className="group relative h-[202px] overflow-hidden rounded-[2rem]">
          <img
            src="/images/service-2.jpg"
            alt="Diagnoză auto"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <p className="absolute bottom-5 left-6 font-bold">
            Echipamente moderne
          </p>
        </div>

        <div className="group relative h-[202px] overflow-hidden rounded-[2rem]">
          <img
            src="/images/service-3.jpg"
            alt="Reparații auto"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <p className="absolute bottom-5 left-6 font-bold">
            Lucrări executate corect
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
      {/* REVIEWS */}
      <section id="recenzii" className="bg-[#111111] py-28 lg:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-16">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Clienții noștri
            </p>

            <h2 className="text-4xl font-black sm:text-6xl">
              Ce spun oamenii.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
              >

                <div className="text-orange-500">
                  ★★★★★
                </div>

                <p className="mt-8 text-lg leading-8 text-white/65">
                  “{review.text}”
                </p>

                <p className="mt-8 font-bold">
                  {review.name}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="py-28 lg:py-36">

  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mb-16">
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
        Contact
      </p>

      <h2 className="text-4xl font-black sm:text-6xl">
        Programează-ți mașina.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">
        Completează formularul sau contactează-ne direct. Revenim cât mai
        repede posibil pentru confirmarea programării.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* FORMULAR */}
      <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 sm:p-10">

        <h3 className="text-2xl font-bold">
          Solicită o programare
        </h3>

        <form
  className="mt-8 space-y-5"
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const service = data.get("service");
    const message = data.get("message");

    const text = `Salut! Vreau să fac o programare la AUTOFIX.

Nume: ${name}
Telefon: ${phone}
Email: ${email}
Serviciu: ${service}

Mesaj:
${message}`;

    window.open(
      `https://wa.me/40700000000?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }}
>

          <div>
            <label className="mb-2 block text-sm text-white/50">
              Nume
            </label>

            <input
              type="text"
              name="name"
              placeholder="Numele tău"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none transition focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/50">
              Telefon
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="07xx xxx xxx"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none transition focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/50">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="email@exemplu.ro"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none transition focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/50">
              Serviciu
            </label>

            <select
              name="service"
              className="w-full rounded-xl border border-white/10 bg-[#181818] px-4 py-4 outline-none transition focus:border-orange-500"
            >
              <option>Mecanică auto</option>
              <option>Diagnoză</option>
              <option>Revizie</option>
              <option>Frâne</option>
              <option>Climatizare</option>
              <option>Distribuție</option>
              <option>Alt serviciu</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/50">
              Mesaj
            </label>

            <textarea
              name="message"
              rows={5}
              placeholder="Spune-ne cu ce problemă te confrunți..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none transition focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 px-6 py-4 font-bold text-black transition hover:bg-orange-400"
          >
            Trimite solicitarea →
          </button>

        </form>

      </div>

      {/* DATE CONTACT */}
      <div className="space-y-4">

        <a
          href="tel:+40700000000"
          className="block rounded-[2rem] border border-white/10 bg-[#111111] p-8 transition hover:border-orange-500/50"
        >
          <p className="text-sm text-white/40">
            Telefon
          </p>

          <p className="mt-3 text-2xl font-bold">
            +40 700 000 000
          </p>
        </a>
<div className="mt-4 overflow-hidden rounded-[2rem] border border-white/10">
  <iframe
    src="https://www.google.com/maps?q=Ploiesti%20Romania&output=embed"
    width="100%"
    height="400"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        <a
          href="https://wa.me/40700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-[2rem] border border-white/10 bg-[#111111] p-8 transition hover:border-orange-500/50"
        >
          <p className="text-sm text-white/40">
            WhatsApp
          </p>

          <p className="mt-3 text-2xl font-bold">
            Scrie-ne pe WhatsApp →
          </p>
        </a>

        <a
          href="mailto:contact@autofix.ro"
          className="block rounded-[2rem] border border-white/10 bg-[#111111] p-8 transition hover:border-orange-500/50"
        >
          <p className="text-sm text-white/40">
            Email
          </p>

          <p className="mt-3 text-2xl font-bold">
            contact@autofix.ro
          </p>
        </a>

        <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-8">

          <p className="text-sm text-white/40">
            Program
          </p>

          <div className="mt-5 space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Luni – Vineri</span>
              <span className="text-white/50">08:00 – 18:00</span>
            </div>

            <div className="flex justify-between">
              <span>Sâmbătă</span>
              <span className="text-white/50">09:00 – 14:00</span>
            </div>

            <div className="flex justify-between">
              <span>Duminică</span>
              <span className="text-white/50">Închis</span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
    </main>
  );
}