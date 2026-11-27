import bakersNight from "@/assets/bakers-night.jpg";
import bakerySpread from "@/assets/bakery-spread.jpg";
import tandoorFlatbread from "@/assets/tandoor-flatbread.jpg";
import cafeCounter from "@/assets/cafe-counter.jpg";
import dawnDelivery from "@/assets/dawn-delivery.jpg";
import dispatchCrates from "@/assets/dispatch-crates.jpg";
import restaurantBread from "@/assets/restaurant-bread.jpg";
import scoringLoaf from "@/assets/scoring-loaf.jpg";
import loaves from "@/assets/cat-loaves.jpg";
import continental from "@/assets/cat-continental.jpg";
import rolls from "@/assets/cat-rolls-buns.jpg";
import flatbreads from "@/assets/cat-flatbreads.jpg";
import pastries from "@/assets/cat-pastries.jpg";
import cakes from "@/assets/cat-cakes-sweets.jpg";
export { default as heroOven } from "@/assets/hero-oven.jpg";

const map = {
  loaves,
  continental,
  "rolls-buns": rolls,
  flatbreads,
  pastries,
  "cakes-sweets": cakes,
};
export const categoryImages = map as typeof map & { [slug: string]: string };

export {
  bakersNight,
  bakerySpread,
  tandoorFlatbread,
  cafeCounter,
  dawnDelivery,
  dispatchCrates,
  restaurantBread,
  scoringLoaf,
};
