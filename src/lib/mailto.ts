import { company } from "@/lib/company";
/** Builds a mailto link for the order desk. The website has no server-side mail service, so enquiries open the visitor’s email application. */
export const mailtoLink = (subject: string, body: string) =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isUkPostcode = (v: string) => /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(v.trim());
