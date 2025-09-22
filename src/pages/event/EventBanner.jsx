function EventBanner() {
  return (
    <div className="h-[300px] sm:h-[450px] md:h-[550px] relative">
      <div className="bg-[url(assets/event_pageImg.jpg)] bg-cover bg-center bg-no-repeat w-full h-full">
        <section className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/70 px-6 py-6 gap-5">
          <h1 className="text-center font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-wide">
            Events
          </h1>
          <main className="text-center italic font-light max-w-2xl space-y-2">
            <p className="font-semibold text-lg md:text-xl">
              Experience the art of fine living.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              We&apos;re more than a brand — we&apos;re a lifestyle movement.
              Join our inner circle and discover.
            </p>
          </main>
        </section>
      </div>
    </div>
  );
}

export default EventBanner;
