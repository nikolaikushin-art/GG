export type DeliveryArea = { name: string; note: string; codes: string[] };
// Outward-code prefixes grouped by the delivery area stated on the Wholesale page. Indicative only: the order desk confirms each address.
export const areas: DeliveryArea[] = [
  {
    name: "Greater London",
    note: "Our home territory and the core of every delivery round.",
    codes: [
      "E",
      "EC",
      "N",
      "NW",
      "SE",
      "SW",
      "W",
      "WC",
      "BR",
      "CR",
      "DA",
      "EN",
      "HA",
      "IG",
      "KT",
      "RM",
      "SM",
      "TW",
      "UB",
      "WD",
    ],
  },
  {
    name: "Essex",
    note: "Along the A12 and A13 corridors and into the county towns.",
    codes: ["CM", "CO", "SS", "RM", "IG"],
  },
  {
    name: "Hertfordshire",
    note: "Reached by the northern routes out of London.",
    codes: ["AL", "EN", "SG", "WD", "HP"],
  },
  {
    name: "Kent",
    note: "North and west Kent, with longer runs by arrangement.",
    codes: ["BR", "DA", "CT", "ME", "TN"],
  },
  {
    name: "Surrey",
    note: "North and east Surrey, by arrangement for the rest of the county.",
    codes: ["CR", "GU", "KT", "RH", "SM"],
  },
];

/** Returns the stated delivery areas that include the postcode, or an empty list. Indicative only. */
export function areasFor(postcode: string): DeliveryArea[] {
  const m = postcode
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .match(/^([A-Z]{1,2})\d/);
  return m ? areas.filter((a) => a.codes.includes(m[1]!)) : [];
}

const fmt = (d: Date, o: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/London", ...o }).format(d);

/** Delivery dates on offer: orders in by 4pm (London time) go out the next morning, later orders the morning after. */
export function deliveryDates(now = new Date(), count = 10): { value: string; label: string }[] {
  const hour = Number(fmt(now, { hour: "2-digit", hour12: false }));
  const lead = hour < 16 ? 1 : 2;
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(now.getTime() + (lead + i) * 86_400_000);
    return {
      value: fmt(d, { year: "numeric", month: "2-digit", day: "2-digit" })
        .split("/")
        .reverse()
        .join("-"),
      label: fmt(d, { weekday: "short", day: "numeric", month: "short" }),
    };
  });
}
