/* A small square mark for a company: its logo when we have one, a monogram otherwise. */

const LOGOS: Record<string, string> = {
  Deuna: "/logos/deuna-logo.png",
  "Housecall Pro": "/logos/housecallpro-logo.png",
  Kushki: "/logos/kushki-logo.png",
  "Banco Pichincha": "/logos/pichincha-logo.png",
  Telefónica: "/logos/telefonica-logo.png",
};

export function CompanyMark({ company, size = 28 }: { company: string; size?: number }) {
  const logo = LOGOS[company];
  const style = { width: size, height: size };

  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt=""
        width={size}
        height={size}
        style={style}
        className="shrink-0 rounded-[5px] bg-white object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      style={{ ...style, fontSize: size * 0.5 }}
      className="shrink-0 inline-flex items-center justify-center rounded-[5px] border border-line-strong bg-paper-3 font-display leading-none text-ink"
    >
      {company.charAt(0)}
    </span>
  );
}
