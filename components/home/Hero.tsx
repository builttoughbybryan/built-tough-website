export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-black opacity-95" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

        <p className="mb-6 uppercase tracking-[0.45em] text-gray-400">
          BUILT THROUGH DISCIPLINE
        </p>

        <h1
          className="text-7xl md:text-9xl uppercase leading-none"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          BUILT
          <br />
          TOUGH
        </h1>

        <p
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Premium performance apparel engineered for athletes who demand
          discipline, resilience and relentless self-improvement.
        </p>

        <div className="mt-12 flex flex-col gap-4 justify-center sm:flex-row">

          <button className="rounded-full bg-white px-10 py-4 font-semibold text-black hover:scale-105 transition">
            Shop Collection
          </button>

          <button className="rounded-full border border-white px-10 py-4 hover:bg-white hover:text-black transition">
            Our Story
          </button>

        </div>

      </div>

    </section>
  );
}