import { describe, expect, it } from "vitest";
import { allProducts } from "@/lib/catalogue";
import { productImages } from "@/lib/photography";
import { servingImages } from "@/lib/serving-photography";
import { newEditorialImages } from "@/lib/new-editorial-photography";

describe("Product photography", () => {
  it("provides an individual photograph for each of the 37 catalogue products", () => {
    expect(allProducts).toHaveLength(37);
    for (const product of allProducts) {
      expect(productImages[product.slug], product.name).toBeTruthy();
    }
  });

  it("never assigns the same photograph to two different products", () => {
    const images = allProducts.map((product) => productImages[product.slug]);
    expect(new Set(images).size).toBe(37);
  });

  it("provides a distinct serving photograph for all 37 products", () => {
    const images = allProducts.map((product) => servingImages[product.slug]);
    for (const image of images) expect(image).toBeTruthy();
    expect(new Set(images).size).toBe(37);
    for (const image of images) expect(Object.values(productImages)).not.toContain(image);
  });

  it("provides four new editorial photos distinct from serving photos", () => {
    const images = Object.values(newEditorialImages);
    expect(new Set(images).size).toBe(4);
    for (const image of images) expect(Object.values(servingImages)).not.toContain(image);
  });
});
