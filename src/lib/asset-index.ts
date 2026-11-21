// Single index of every photograph in the library, addressed as "folder/file-name".
const modules = import.meta.glob(
  "/src/assets/{new,pages,gallery,editorial,serving,products}/*.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

export const assetIndex: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [
    path.replace("/src/assets/", "").replace(/\.(jpg|jpeg|png|webp)$/, ""),
    url,
  ]),
);

export const hasAsset = (key: string) => key in assetIndex;
export const img = (key: string): string => {
  const url = assetIndex[key];
  if (!url) throw new Error(`Unknown image key: ${key}`);
  return url;
};
