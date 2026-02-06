import Link from "next/link";

export function AboutJoin() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* About Column */}
          <div className="text-center">
            {/* Image */}
            <div className="mb-6 overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
                alt="Bitcoin Association Switzerland Event"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "3/2" }}
              />
            </div>

            {/* Title */}
            <h3 className="subsection-title mb-4">
              <Link href="https://www.bitcoinassociation.ch/about-1" className="content-link">
                About
              </Link>
            </h3>

            {/* Description */}
            <p className="text-[#666] text-base leading-relaxed font-serif mb-4">
              Find out about our organization and mission.
            </p>

            {/* Link */}
            <Link
              href="https://www.bitcoinassociation.ch/about-1"
              className="content-link text-base font-serif inline-flex items-center gap-1"
            >
              Learn More →
            </Link>
          </div>

          {/* Join Us Column */}
          <div className="text-center">
            {/* Image */}
            <div className="mb-6 overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
                alt="Bitcoin Association Switzerland General Assembly 2018"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "3/2" }}
              />
            </div>

            {/* Title */}
            <h3 className="subsection-title mb-4">
              <Link href="https://www.bitcoinassociation.ch/meetups-events" className="content-link">
                Join US
              </Link>
            </h3>

            {/* Description */}
            <p className="text-[#666] text-base leading-relaxed font-serif mb-4">
              You can become a contributor to our cause, or participate
              yourself.
            </p>

            {/* Link */}
            <Link
              href="https://www.bitcoinassociation.ch/meetups-events"
              className="content-link text-base font-serif inline-flex items-center gap-1"
            >
              Find Out How →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
