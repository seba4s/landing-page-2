import Image from "next/image";

import chocolate1 from "../imagenes pasteles/chocolate1.png";
import chocolate2 from "../imagenes pasteles/chocolate2.png";
import chocolate3 from "../imagenes pasteles/chocolate3.png";
import chocolate4 from "../imagenes pasteles/chocolate4.png";
import chocolate5 from "../imagenes pasteles/chocolate5.png";
import chocolate6 from "../imagenes pasteles/chocolate6.png";
import chocolate7 from "../imagenes pasteles/chocolate7.png";
import imagen1 from "../imagenes pasteles/imagen1.png";
import imagen2 from "../imagenes pasteles/imagen2.png";
import imagen3 from "../imagenes pasteles/imagen3.png";
import imagen4 from "../imagenes pasteles/imagen4.png";
import imagen5 from "../imagenes pasteles/imagen5.png";
import imagen6 from "../imagenes pasteles/imagen 6.png";
import tiquet from "../imagenes pasteles/tiquet.png";

export default function Home() {
  const categories = [
    { label: "Classic", icon: "cake" },
    { label: "Gourmet", icon: "gift" },
    { label: "Desserts", icon: "dessert" },
    { label: "Cookies", icon: "box" },
  ];

  const products = [
    {
      name: "Rich Chocolate Truffle Cake",
      price: "$500",
      weight: "500 g",
      accent: "from-[#fff5ef] to-[#f8e4d8]",
      image: chocolate2,
    },
    {
      name: "Choco Chip Truffle Cake",
      price: "$509",
      weight: "1 kg",
      accent: "from-[#fff5ef] to-[#f8e4d8]",
      image: chocolate4,
    },
    {
      name: "Tropical Fruit N Almond Cake",
      price: "$509",
      weight: "750 g",
      accent: "from-[#fff5ef] to-[#f8e4d8]",
      image: chocolate6,
    },
    {
      name: "Rich Butterscotch Crunch Cake",
      price: "$399",
      weight: "500 g",
      accent: "from-[#fff5ef] to-[#f8e4d8]",
      image: chocolate7,
    },
  ];

  const heroShowcase = [
    { label: "Decadent bite", image: chocolate1 },
    { label: "Chocolate mousse", image: chocolate5 },
  ];

  const promises = [
    { value: "On Time", label: "Delivery", icon: "bag" },
    { value: "500+", label: "Designs", icon: "van" },
    { value: "2 Cr+", label: "Orders", icon: "spark" },
    { value: "Baked", label: "Fresh", icon: "box" },
  ];

  const gallery = [
    {
      title: "Royal tiers",
      height: "min-h-[190px]",
      image: imagen1,
    },
    {
      title: "Cake artists",
      height: "min-h-[190px]",
      image: imagen2,
    },
    {
      title: "Birthday stories",
      height: "min-h-[160px]",
      image: imagen3,
    },
    {
      title: "Custom messages",
      height: "min-h-[160px]",
      image: imagen4,
    },
    {
      title: "Studio moments",
      height: "min-h-[160px]",
      image: imagen5,
    },
    {
      title: "Celebration cakes",
      height: "min-h-[160px]",
      image: imagen6,
    },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f9e9d5_0%,#f5dfc8_35%,#f0d6bc_100%)] px-3 py-3 text-[#6c221d] sm:px-6 sm:py-6 lg:px-10">
      <div className="mx-auto max-w-340 overflow-hidden rounded-[26px] border border-white/65 bg-[#fff7ef] shadow-[0_20px_50px_rgba(140,59,46,0.14)] sm:rounded-[34px] sm:shadow-[0_24px_80px_rgba(140,59,46,0.16)]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#d96a74_0%,#c9474d_22%,#b72f34_58%,#9d262a_100%)] px-4 pb-20 pt-4 sm:px-8 sm:pb-30 sm:pt-5 lg:px-12 lg:pt-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_60%,rgba(255,194,201,0.24)_0%,rgba(255,194,201,0)_24%),radial-gradient(circle_at_18%_22%,rgba(255,223,226,0.14)_0%,rgba(255,223,226,0)_12%),radial-gradient(circle_at_30%_76%,rgba(255,209,214,0.14)_0%,rgba(255,209,214,0)_10%),radial-gradient(circle_at_40%_58%,rgba(255,225,228,0.1)_0%,rgba(255,225,228,0)_10%),radial-gradient(circle_at_55%_22%,rgba(255,205,209,0.14)_0%,rgba(255,205,209,0)_16%),radial-gradient(circle_at_62%_72%,rgba(255,215,219,0.12)_0%,rgba(255,215,219,0)_12%),radial-gradient(circle_at_74%_18%,rgba(255,221,224,0.12)_0%,rgba(255,221,224,0)_10%),radial-gradient(circle_at_88%_28%,rgba(255,215,218,0.16)_0%,rgba(255,215,218,0)_12%),radial-gradient(circle_at_80%_84%,rgba(255,205,209,0.18)_0%,rgba(255,205,209,0)_24%),radial-gradient(circle_at_94%_60%,rgba(255,221,224,0.1)_0%,rgba(255,221,224,0)_9%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_100%)]" />
          <div className="absolute -left-10 top-44 hidden h-24 w-24 rounded-full bg-white/10 sm:block" />
          <div className="absolute left-8 top-30 h-10 w-10 rounded-full bg-white/12" />
          <div className="absolute left-[6%] top-[54%] h-12 w-12 rounded-full bg-white/8 sm:h-16 sm:w-16" />
          <div className="absolute left-[14%] bottom-10 h-8 w-8 rounded-full bg-white/10" />
          <div className="absolute left-[22%] top-[34%] hidden h-12 w-12 rounded-full bg-white/10 sm:block" />
          <div className="absolute left-[34%] top-[18%] h-8 w-8 rounded-full bg-white/10" />
          <div className="absolute left-[38%] bottom-12 hidden h-14 w-14 rounded-full bg-white/8 sm:block" />
          <div className="absolute left-[48%] top-10 h-24 w-24 rounded-full bg-white/10 sm:h-36 sm:w-36" />
          <div className="absolute left-[52%] top-[34%] h-9 w-9 rounded-full bg-white/10" />
          <div className="absolute left-[58%] top-[40%] hidden h-12 w-12 rounded-full bg-white/8 sm:block" />
          <div className="absolute left-[64%] bottom-20 hidden h-10 w-10 rounded-full bg-white/8 sm:block" />
          <div className="absolute right-[34%] top-[18%] hidden h-14 w-14 rounded-full bg-white/10 sm:block" />
          <div className="absolute right-8 top-28 h-12 w-12 rounded-full bg-white/10 sm:h-18 sm:w-18" />
          <div className="absolute right-14 top-48 h-9 w-9 rounded-full bg-white/10" />
          <div className="absolute right-28 top-56 hidden h-22 w-22 rounded-full bg-white/10 sm:block" />
          <div className="absolute right-[18%] bottom-18 hidden h-11 w-11 rounded-full bg-white/10 sm:block" />
          <div className="absolute right-[8%] top-[18%] h-8 w-8 rounded-full bg-white/12" />
          <div className="absolute right-[10%] bottom-2 h-28 w-28 rounded-full bg-white/10 sm:h-48 sm:w-48" />

          <header className="relative z-10 rounded-[22px] border border-[#e9d3cc] bg-[#fff7f2] px-3 py-3 shadow-[0_14px_34px_rgba(118,41,31,0.08)] sm:rounded-[28px] sm:px-4 sm:py-4 lg:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-3xl font-semibold tracking-tight text-[#a92f2c] sm:text-4xl">
                    Dakingo
                  </p>
                </div>
                <button className="rounded-full border border-[#d9bbb3] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#a22e2a] sm:px-4 sm:text-sm lg:hidden">
                  Order now
                </button>
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <div className="flex w-full items-center gap-2 rounded-full border border-[#ddbbb0] bg-white px-3 py-2.5 text-xs text-[#9b6c5f] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:gap-3 sm:px-4 sm:py-3 sm:text-sm lg:w-82.5">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-[#d9b3a5] text-[#af3c37] sm:h-7 sm:w-7">
                    <SearchIcon />
                  </span>
                  <span className="truncate">Search cakes, pastries or gift boxes</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button className="rounded-full px-3 py-2 text-xs font-bold text-[#8d2825] sm:px-4 sm:text-sm">
                    Login / Signup
                  </button>
                  <button className="hidden rounded-full bg-[#a62e29] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(122,28,27,0.32)] transition-transform duration-200 hover:-translate-y-0.5 lg:inline-flex">
                    Order now
                  </button>
                </div>
              </div>
            </div>

            <nav className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#f0e1db] pt-4 text-xs font-bold text-[#7f3128] sm:gap-x-6 sm:gap-y-3 sm:text-sm">
              {[
                "Cakes",
                "Theme Cakes",
                "Desserts",
                "Birthday",
                "Hampers",
                "Anniversary",
                "Occasions",
                "Celebrate",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors duration-200 hover:text-[#b73834]"
                >
                  {item}
                </a>
              ))}
            </nav>
          </header>

          <div className="relative z-10 mt-8 grid gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[1.05fr_1fr_220px] lg:items-center">
            <div className="mx-auto flex max-w-100 justify-center lg:mx-0 lg:max-w-none lg:justify-start">
              <div className="relative rounded-full border-8 border-white bg-[radial-gradient(circle_at_30%_20%,#8a5240_0%,#48231e_48%,#22100f_100%)] p-4 shadow-[0_18px_28px_rgba(42,10,10,0.24)] sm:border-12 sm:p-6 sm:shadow-[0_22px_40px_rgba(42,10,10,0.28)]">
                <div className="relative mx-auto aspect-square w-52 overflow-hidden rounded-full sm:w-72 md:w-80">
                  <Image
                    src={chocolate3}
                    alt="Pastel de chocolate destacado"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, 320px"
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-white lg:text-left">
              <p className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-[#ffd6d2] sm:text-xs sm:tracking-[0.5em]">
                Premium bakery
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-[0.9] sm:text-6xl xl:text-7xl">
                Decadent
                <br />
                Chocolate
                <br />
                Bliss!
              </h1>
              <p className="mt-4 max-w-xl text-lg font-semibold text-[#ffe7de] sm:text-2xl lg:text-3xl">
                Satisfy your sweetest cravings with bold layers and creamy finishes.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                <div className="rounded-[22px] bg-[#8f1d1c] px-4 py-3 text-left shadow-[0_16px_30px_rgba(60,10,10,0.28)] sm:rounded-[26px] sm:px-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#ffd7cf] sm:text-xs sm:tracking-[0.35em]">
                    Special offer
                  </p>
                  <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    Save 20%
                  </p>
                </div>
                <button className="rounded-full border border-white/40 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-white/10 sm:px-6 sm:text-sm">
                  Explore menu
                </button>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-72 flex-row justify-center gap-3 sm:max-w-none sm:gap-4 lg:flex-col">
              {heroShowcase.map((item) => (
                <div
                  key={item.label}
                  className="flex-1 rounded-[999px] border-6 border-white bg-[linear-gradient(180deg,#ffe5da_0%,#c7846d_100%)] p-2.5 shadow-[0_12px_20px_rgba(69,11,11,0.22)] sm:border-8 sm:p-3 sm:shadow-[0_16px_30px_rgba(69,11,11,0.25)] lg:flex-none"
                >
                  <div className="relative aspect-square overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_20%,#63372a_0%,#2c120f_65%,#170909_100%)] p-3">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-cover"
                        sizes="130px"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-center text-xs font-bold text-white sm:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative z-10 -mt-10 rounded-t-[28px] bg-[#fffaf5] px-4 pb-8 pt-6 sm:-mt-20 sm:rounded-t-[40px] sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-display text-4xl font-semibold leading-none text-[#a42d2a] sm:text-5xl">
                    Menu
                  </p>
                  <p className="mt-2 text-base font-bold text-[#7b423a] sm:text-lg">
                    What will you wish for?
                  </p>
                </div>
                <div className="flex gap-2">
                  {["A", "B", "C"].map((dot) => (
                    <span
                      key={dot}
                      className="grid h-10 w-10 place-items-center rounded-full border border-[#f1d7d0] bg-[#fff2ed] text-xs font-extrabold text-[#b23a35] shadow-[0_10px_18px_rgba(183,61,53,0.08)]"
                    >
                      {dot}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {categories.map((category) => (
                  <article
                    key={category.label}
                    className="rounded-[22px] border border-[#f2e4de] bg-white p-4 text-center shadow-[0_18px_30px_rgba(122,44,37,0.08)] transition-transform duration-200 hover:-translate-y-1 sm:rounded-[26px] sm:p-5"
                  >
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-[22px] bg-[#fff3ef] text-[#b03633] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <CategoryIcon icon={category.icon} />
                    </div>
                    <p className="mt-4 font-display text-xl font-semibold text-[#9e2f2b] sm:text-2xl">
                      {category.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-[linear-gradient(135deg,#fff1e9_0%,#ffe4d4_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:rounded-[30px] sm:p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#b23a35] sm:text-sm sm:tracking-[0.28em]">
                Fresh every day
              </p>
              <p className="mt-3 font-display text-3xl font-semibold leading-tight text-[#8e2624] sm:text-4xl">
                Hand-finished cakes with creamy layers, glossy ganache and gift-ready packaging.
              </p>
              <p className="mt-4 max-w-lg text-sm font-semibold leading-6 text-[#8a574d] sm:text-base sm:leading-7">
                Built to mirror the visual rhythm of the reference: bold hero, rounded cards, warm gradients and modular product showcases.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-3xl font-semibold text-[#a42d2a] sm:text-4xl">
                  Bestsellers from Across the Country
                </h2>
                <p className="mt-1 text-sm font-bold text-[#8d5750] sm:text-base">
                  Our most-loved cakes, styled like the original storefront layout.
                </p>
              </div>
              <button className="self-start rounded-full bg-[#aa322d] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_14px_24px_rgba(154,44,38,0.24)] transition-transform duration-200 hover:-translate-y-0.5 sm:self-auto sm:px-6 sm:text-sm">
                View all
              </button>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="rounded-3xl border border-[#f3e6e0] bg-white p-4 shadow-[0_18px_34px_rgba(129,47,39,0.08)] sm:rounded-[28px]"
                >
                  <div className="rounded-3xl bg-[linear-gradient(180deg,#fff1ea_0%,#fff9f6_100%)] p-4">
                    <div className={`relative aspect-square overflow-hidden rounded-[26px] bg-linear-to-br ${product.accent} p-2`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 260px"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold leading-tight text-[#8f2a27] sm:text-2xl">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm font-bold text-[#ab7c70]">
                        Size: {product.weight}
                      </p>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ae342f] text-white shadow-[0_10px_18px_rgba(165,51,45,0.22)]">
                      +
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xl font-extrabold text-[#aa342f]">{product.price}</p>
                      <p className="text-sm font-bold tracking-[0.18em] text-[#e0af52]">
                        STAR STAR STAR STAR STAR
                      </p>
                    </div>
                    <p className="rounded-full bg-[#fff0ea] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-[#ba4f43]">
                      Top pick
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              <div>
                <h2 className="font-display text-4xl font-semibold leading-none text-[#a42d2a] sm:text-5xl">
                  Our Promise
                </h2>
                <p className="mt-2 text-base font-bold text-[#8d5750] sm:text-lg">
                  There is no secret spell. Only honest craft and clean presentation.
                </p>
              </div>

              <div className="rounded-3xl bg-[linear-gradient(180deg,#fff2ec_0%,#fff8f4_100%)] p-5 shadow-[0_18px_34px_rgba(142,46,40,0.08)] sm:rounded-[30px] sm:p-6">
                <p className="font-display text-xl font-semibold text-[#a4302d] sm:text-2xl">
                  A glimpse, no magic spell, only social proof.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {promises.map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#dcae9f] text-[#ae342f]">
                        <FeatureIcon icon={item.icon} />
                      </div>
                      <p className="mt-3 text-lg font-extrabold uppercase text-[#9d2f2b]">
                        {item.value}
                      </p>
                      <p className="text-sm font-bold uppercase tracking-widest text-[#8f645a]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-[linear-gradient(135deg,#fff4e6_0%,#ffe0d3_100%)] p-5 shadow-[0_18px_34px_rgba(142,46,40,0.08)] sm:rounded-[30px] sm:p-6">
                <div className="grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
                  <div className="relative mx-auto h-28 w-32 overflow-visible sm:mx-0 sm:h-32 sm:w-36">
                    <Image
                      src={tiquet}
                      alt="Ticket promocional"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 128px, 144px"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-display text-3xl font-semibold leading-tight text-[#a22f2c] sm:text-4xl">
                      The magical ticket
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-[#8d5d52] sm:text-base sm:leading-7">
                      Add reminder dates in your account and unlock seasonal offers for future celebrations.
                    </p>
                    <button className="mt-4 rounded-full bg-[#ab322d] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_12px_24px_rgba(154,44,38,0.25)] sm:text-sm">
                      Unlock now
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white px-4 py-4 shadow-[0_14px_28px_rgba(122,44,37,0.08)] sm:px-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex -space-x-3">
                    {["A", "B", "C", "D", "E"].map((letter, index) => (
                      <span
                        key={letter}
                        className={`grid h-11 w-11 place-items-center rounded-full border-2 border-white text-sm font-extrabold text-white shadow-[0_10px_16px_rgba(122,44,37,0.12)] ${[
                          "bg-[#d05d58]",
                          "bg-[#ca8d58]",
                          "bg-[#9f5460]",
                          "bg-[#89684f]",
                          "bg-[#b97942]",
                        ][index]}`}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-extrabold text-[#97312d] sm:text-base">
                    Follow us on social!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.map((item) => (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-3xl p-3 text-white shadow-[0_20px_40px_rgba(123,45,39,0.14)] sm:rounded-[28px] sm:p-4 ${item.height}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(41,16,14,0.22)_45%,rgba(32,12,11,0.62)_100%)]" />
                  <div className="relative flex h-full min-h-32 flex-col justify-end overflow-hidden rounded-3xl border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.16)_100%)] p-4 backdrop-blur-[1px] sm:min-h-35 sm:p-5">
                    <div className="max-w-[18ch] origin-bottom-left transition-transform duration-300 ease-out group-hover:scale-[1.12]">
                      <p className="font-display text-lg font-semibold leading-none sm:text-2xl">
                        {item.title}
                      </p>
                      <p className="mt-2 text-xs font-bold leading-5 text-white/85 sm:text-sm">
                        Styled blocks that echo the image mosaic in the provided design.
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="mt-12 rounded-[28px] bg-[linear-gradient(135deg,#b73733_0%,#8d2623_100%)] px-4 py-6 text-white shadow-[0_24px_50px_rgba(123,33,30,0.24)] sm:rounded-[34px] sm:px-8 sm:py-8 lg:px-10">
            <div className="rounded-3xl border border-white/15 bg-white/6 px-4 py-4 text-center sm:px-5">
              <p className="font-display text-2xl font-semibold leading-tight sm:text-4xl">
                Dakingo - Your trusted online bakery for every celebration
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <div>
                  <p className="font-display text-4xl font-semibold text-[#fff3ed]">
                    Dakingo
                  </p>
                  <ul className="mt-4 space-y-2 text-sm font-bold text-[#ffd9d0]">
                    <li>Our story</li>
                    <li>Contact us</li>
                    <li>Careers</li>
                    <li>Store locator</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffe5dd]">
                    Know us
                  </p>
                  <ul className="mt-4 space-y-2 text-sm font-bold text-[#ffd9d0]">
                    <li>Blog</li>
                    <li>Craft notes</li>
                    <li>Collections</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffe5dd]">
                    Need help
                  </p>
                  <ul className="mt-4 space-y-2 text-sm font-bold text-[#ffd9d0]">
                    <li>Cancellation policy</li>
                    <li>Refund policy</li>
                    <li>Gift support</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffe5dd]">
                    More info
                  </p>
                  <ul className="mt-4 space-y-2 text-sm font-bold text-[#ffd9d0]">
                    <li>Custom orders</li>
                    <li>Corporate gifting</li>
                    <li>Download app</li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffe5dd]">
                  Newsletter
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="h-14 flex-1 rounded-full border border-white/30 bg-white px-5 text-sm font-bold text-[#7f2724] outline-none placeholder:text-[#b58a80]"
                  />
                  <button className="h-14 rounded-full bg-[#fff1e9] px-6 text-sm font-extrabold uppercase tracking-[0.14em] text-[#9d2f2b] shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 text-sm font-bold text-[#ffe5dd]">
                  Need help? Our bakery support team is one click away.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

function CategoryIcon({ icon }: { icon: string }) {
  const common = "h-8 w-8";

  if (icon === "cake") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M7 22h18v3H7z" stroke="currentColor" strokeWidth="2" />
        <path d="M10 22v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6" stroke="currentColor" strokeWidth="2" />
        <path d="M14 10c0-2 2-2 2-4 2 2 2 3 2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "gift") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <rect x="7" y="12" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 12v13M7 16h18" stroke="currentColor" strokeWidth="2" />
        <path d="M16 12c0-5 7-4 5-1-1 2-5 1-5 1Zm0 0c0-5-7-4-5-1 1 2 5 1 5 1Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "dessert") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M9 24h14l-2-8H11l-2 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 16c0-3 2-5 4-5s4 2 4 5" stroke="currentColor" strokeWidth="2" />
        <path d="M16 8v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
      <rect x="8" y="8" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8V6h8v2M12 14h8M12 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FeatureIcon({ icon }: { icon: string }) {
  const common = "h-8 w-8";

  if (icon === "bag") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M10 14h12l-1 11H11l-1-11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M13 14v-2a3 3 0 1 1 6 0v2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (icon === "van") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M6 12h13v8H6zM19 15h4l3 3v2h-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="11" cy="23" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="23" cy="23" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (icon === "spark") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M16 6v6M16 20v6M6 16h6M20 16h6M10 10l4 4M18 18l4 4M22 10l-4 4M14 18l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
      <rect x="8" y="10" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 10V8h8v2M12 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

