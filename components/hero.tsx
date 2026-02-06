export function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w')`,
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 max-w-5xl">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-normal tracking-wider leading-relaxed uppercase font-sans">
            A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
          </h1>
        </div>
      </div>
    </section>
  );
}
