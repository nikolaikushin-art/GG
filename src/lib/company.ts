// Verified against the Companies House register on 17 November 2026.
// Source: https://find-and-update.company-information.service.gov.uk/company/17581412
// Only details shown on that record are stated here. No VAT number, directors or other particulars have been added.
export const company = {
  name: "GOLDEN GRAIN BAKEHOUSE LTD",
  displayName: "Golden Grain Bakehouse Ltd",
  number: "17581412",
  type: "Private limited company",
  status: "Active",
  incorporated: "14 November 2026",
  jurisdiction: "England and Wales",
  registeredOffice: ["Unit 56 Staffa Road", "London", "England", "E10 7QZ"],
  sic: [
    ["10710", "Manufacture of bread; manufacture of fresh pastry goods and cakes"],
    ["46360", "Wholesale of sugar and chocolate and sugar confectionery"],
    [
      "47240",
      "Retail sale of bread, cakes, flour confectionery and sugar confectionery in specialised stores",
    ],
  ] as [string, string][],
  firstAccountsDue: "14 August 2028",
  confirmationStatementDue: "27 November 2027",
  recordUrl: "https://find-and-update.company-information.service.gov.uk/company/17581412",
  verifiedOn: "17 November 2026",
  email: "orders@goldengrain.co.uk",
} as const;
