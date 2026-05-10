// All numbers below are illustrative mock data for the AggieLink demo.
// Scoring logic, formulas, and proprietary algorithms are intentionally NOT exposed.

export type Certification = "USDA Organic" | "CCOF" | "Real Organic" | "GAP" | "Certified Naturally Grown";

export type Farm = {
  id: string;
  name: string;
  steward: string;
  county: string;
  acres: number;
  yearsFarming: number;
  certifications: Certification[];
  practices: string[];
  topCrops: string[];
  weeklyCapacityLb: number;
  joinedYear: number;
  distanceMi: number; // distance to the buyer
};

export const farms: Farm[] = [
  { id: "f-01", name: "Putah Creek Family Farm", steward: "Maria & David Soto", county: "Yolo", acres: 28, yearsFarming: 22, certifications: ["USDA Organic", "CCOF"], practices: ["No-till", "Cover cropping"], topCrops: ["Carrots", "Beets", "Radish"], weeklyCapacityLb: 240, joinedYear: 2023, distanceMi: 8 },
  { id: "f-02", name: "Cache Creek Organics", steward: "Lin Zhao", county: "Yolo", acres: 14, yearsFarming: 9, certifications: ["USDA Organic"], practices: ["Drip irrigation", "Compost"], topCrops: ["Lettuce", "Kale", "Chard"], weeklyCapacityLb: 180, joinedYear: 2024, distanceMi: 16 },
  { id: "f-03", name: "Capay Hills Garden", steward: "The Vargas Family", county: "Yolo", acres: 35, yearsFarming: 31, certifications: ["USDA Organic", "Real Organic"], practices: ["Hedgerows", "Polyculture"], topCrops: ["Tomatoes", "Peppers", "Squash"], weeklyCapacityLb: 320, joinedYear: 2023, distanceMi: 24 },
  { id: "f-04", name: "Solano Heritage Farm", steward: "James Whitfield", county: "Solano", acres: 42, yearsFarming: 18, certifications: ["GAP"], practices: ["Integrated pest mgmt"], topCrops: ["Apples", "Pears", "Stone fruit"], weeklyCapacityLb: 410, joinedYear: 2024, distanceMi: 19 },
  { id: "f-05", name: "Coyote Hill Produce", steward: "Ana Mendez", county: "Solano", acres: 11, yearsFarming: 6, certifications: ["Certified Naturally Grown"], practices: ["No-spray", "Hand-harvest"], topCrops: ["Strawberries", "Herbs"], weeklyCapacityLb: 90, joinedYear: 2025, distanceMi: 22 },
  { id: "f-06", name: "Clarksburg Sun Farm", steward: "Tom & Ellie Park", county: "Sacramento", acres: 19, yearsFarming: 14, certifications: ["USDA Organic"], practices: ["Cover cropping"], topCrops: ["Sweet corn", "Melons"], weeklyCapacityLb: 220, joinedYear: 2023, distanceMi: 28 },
  { id: "f-07", name: "Yolo Greenway Acres", steward: "Priya Patel", county: "Yolo", acres: 8, yearsFarming: 4, certifications: ["CCOF"], practices: ["Drip irrigation"], topCrops: ["Greens", "Herbs"], weeklyCapacityLb: 110, joinedYear: 2025, distanceMi: 7 },
  { id: "f-08", name: "Knight's Landing Growers", steward: "The Nguyen Family", county: "Yolo", acres: 24, yearsFarming: 12, certifications: ["GAP"], practices: ["Crop rotation"], topCrops: ["Onions", "Garlic", "Leeks"], weeklyCapacityLb: 260, joinedYear: 2024, distanceMi: 18 },
  { id: "f-09", name: "Suisun Marsh Gardens", steward: "Dorothy Chen", county: "Solano", acres: 6, yearsFarming: 3, certifications: ["Certified Naturally Grown"], practices: ["Pollinator strips"], topCrops: ["Microgreens", "Edible flowers"], weeklyCapacityLb: 60, joinedYear: 2025, distanceMi: 26 },
  { id: "f-10", name: "Winters Mesa Farm", steward: "Carlos Reyes", county: "Yolo", acres: 31, yearsFarming: 21, certifications: ["USDA Organic", "CCOF"], practices: ["Dry farming", "Hedgerows"], topCrops: ["Winter squash", "Pumpkins"], weeklyCapacityLb: 350, joinedYear: 2023, distanceMi: 21 },
  { id: "f-11", name: "Esparto Hill Orchards", steward: "Jane Albrecht", county: "Yolo", acres: 18, yearsFarming: 16, certifications: ["GAP"], practices: ["Integrated pest mgmt"], topCrops: ["Apples", "Plums"], weeklyCapacityLb: 240, joinedYear: 2024, distanceMi: 30 },
  { id: "f-12", name: "Vacaville Valley Farm", steward: "Hannah & Eli Brooks", county: "Solano", acres: 22, yearsFarming: 8, certifications: ["USDA Organic"], practices: ["No-till", "Compost"], topCrops: ["Broccoli", "Cauliflower", "Cabbage"], weeklyCapacityLb: 290, joinedYear: 2024, distanceMi: 23 },
  { id: "f-13", name: "River Bend Produce", steward: "Wei Lin", county: "Sacramento", acres: 16, yearsFarming: 11, certifications: ["CCOF"], practices: ["Cover cropping"], topCrops: ["Asian greens", "Bok choy"], weeklyCapacityLb: 170, joinedYear: 2024, distanceMi: 27 },
  { id: "f-14", name: "Madison Acre Farm", steward: "Sarah Johnston", county: "Yolo", acres: 9, yearsFarming: 5, certifications: ["Certified Naturally Grown"], practices: ["Hand-harvest"], topCrops: ["Carrots", "Beets"], weeklyCapacityLb: 95, joinedYear: 2025, distanceMi: 14 },
  { id: "f-15", name: "Dixon Sunrise Farm", steward: "Robert & Lisa Hall", county: "Solano", acres: 38, yearsFarming: 26, certifications: ["GAP"], practices: ["Crop rotation"], topCrops: ["Sweet corn", "Tomatoes"], weeklyCapacityLb: 380, joinedYear: 2023, distanceMi: 17 },
  { id: "f-16", name: "Three Sisters Heritage", steward: "The Yazzie Family", county: "Yolo", acres: 12, yearsFarming: 7, certifications: ["USDA Organic"], practices: ["Polyculture", "Indigenous methods"], topCrops: ["Beans", "Corn", "Squash"], weeklyCapacityLb: 130, joinedYear: 2024, distanceMi: 12 },
  { id: "f-17", name: "Plainfield Pasture", steward: "Marcus Hill", county: "Yolo", acres: 27, yearsFarming: 13, certifications: ["GAP"], practices: ["Silvopasture"], topCrops: ["Eggs", "Pasture greens"], weeklyCapacityLb: 200, joinedYear: 2024, distanceMi: 11 },
  { id: "f-18", name: "Russell Boulevard Greens", steward: "Davis Co-op", county: "Yolo", acres: 5, yearsFarming: 3, certifications: ["Certified Naturally Grown"], practices: ["Urban agriculture"], topCrops: ["Salad mix", "Microgreens"], weeklyCapacityLb: 75, joinedYear: 2025, distanceMi: 4 },
  { id: "f-19", name: "Pleasant Valley Farm", steward: "Tomás Ortega", county: "Solano", acres: 20, yearsFarming: 17, certifications: ["USDA Organic"], practices: ["Compost", "Drip irrigation"], topCrops: ["Peppers", "Eggplant"], weeklyCapacityLb: 220, joinedYear: 2024, distanceMi: 25 },
  { id: "f-20", name: "Buckhorn Ranch", steward: "Helen & Frank Lopez", county: "Yolo", acres: 33, yearsFarming: 24, certifications: ["GAP", "CCOF"], practices: ["Hedgerows"], topCrops: ["Apples", "Pears"], weeklyCapacityLb: 340, joinedYear: 2023, distanceMi: 20 },
  { id: "f-21", name: "West Plainfield Co-op", steward: "Co-op of 4 farms", county: "Yolo", acres: 17, yearsFarming: 10, certifications: ["USDA Organic"], practices: ["Cooperative", "Cover cropping"], topCrops: ["Mixed vegetables"], weeklyCapacityLb: 180, joinedYear: 2024, distanceMi: 9 },
  { id: "f-22", name: "Sycamore Slough Farms", steward: "The Adeyemi Family", county: "Sacramento", acres: 21, yearsFarming: 9, certifications: ["CCOF"], practices: ["No-till"], topCrops: ["Sweet potatoes", "Okra"], weeklyCapacityLb: 200, joinedYear: 2024, distanceMi: 29 },
];

// ============================================================================
// AGGREGATED WEEKLY ORDER
// ============================================================================

export type OrderLine = {
  crop: string;
  category: "Roots" | "Greens" | "Brassicas" | "Alliums" | "Nightshades" | "Squash" | "Fruit" | "Other";
  amountLb: number;
  packedAs: string;
  contributors: { farmId: string; lb: number }[];
};

export const aggregatedOrder = {
  weekOf: "Week of May 11, 2026",
  buyer: "UC Davis Dining Services",
  buyerLogo: "UCD",
  delivery: "Tuesday, 6:00 AM · Dining Commons Loading Dock",
  totalLb: 2840,
  lineCount: 14,
  contributingFarms: 18,
  status: "Ready for dispatch",
  invoiceId: "AL-2026-W19-UCD",
  lines: [
    { crop: "Carrots", category: "Roots", amountLb: 320, packedAs: "20 lb cases", contributors: [
      { farmId: "f-01", lb: 140 },
      { farmId: "f-14", lb: 95 },
      { farmId: "f-16", lb: 50 },
      { farmId: "f-21", lb: 35 },
    ] },
    { crop: "Lettuce (Romaine)", category: "Greens", amountLb: 260, packedAs: "24-count cases", contributors: [
      { farmId: "f-02", lb: 110 },
      { farmId: "f-07", lb: 70 },
      { farmId: "f-18", lb: 50 },
      { farmId: "f-21", lb: 30 },
    ] },
    { crop: "Kale (Lacinato)", category: "Greens", amountLb: 180, packedAs: "12-bunch cases", contributors: [
      { farmId: "f-02", lb: 70 },
      { farmId: "f-07", lb: 60 },
      { farmId: "f-13", lb: 50 },
    ] },
    { crop: "Broccoli", category: "Brassicas", amountLb: 240, packedAs: "20 lb cases", contributors: [
      { farmId: "f-12", lb: 180 },
      { farmId: "f-21", lb: 60 },
    ] },
    { crop: "Cabbage", category: "Brassicas", amountLb: 200, packedAs: "40 lb bins", contributors: [
      { farmId: "f-12", lb: 110 },
      { farmId: "f-15", lb: 90 },
    ] },
    { crop: "Yellow Onions", category: "Alliums", amountLb: 280, packedAs: "50 lb bags", contributors: [
      { farmId: "f-08", lb: 200 },
      { farmId: "f-21", lb: 80 },
    ] },
    { crop: "Garlic", category: "Alliums", amountLb: 60, packedAs: "10 lb cases", contributors: [
      { farmId: "f-08", lb: 60 },
    ] },
    { crop: "Roma Tomatoes", category: "Nightshades", amountLb: 220, packedAs: "20 lb flats", contributors: [
      { farmId: "f-03", lb: 140 },
      { farmId: "f-15", lb: 80 },
    ] },
    { crop: "Bell Peppers", category: "Nightshades", amountLb: 140, packedAs: "15 lb cases", contributors: [
      { farmId: "f-03", lb: 80 },
      { farmId: "f-19", lb: 60 },
    ] },
    { crop: "Zucchini", category: "Squash", amountLb: 200, packedAs: "20 lb cases", contributors: [
      { farmId: "f-03", lb: 110 },
      { farmId: "f-10", lb: 90 },
    ] },
    { crop: "Apples (Gala)", category: "Fruit", amountLb: 360, packedAs: "40 lb cases", contributors: [
      { farmId: "f-04", lb: 180 },
      { farmId: "f-11", lb: 100 },
      { farmId: "f-20", lb: 80 },
    ] },
    { crop: "Strawberries", category: "Fruit", amountLb: 80, packedAs: "8 lb flats", contributors: [
      { farmId: "f-05", lb: 80 },
    ] },
    { crop: "Beets", category: "Roots", amountLb: 160, packedAs: "25 lb cases", contributors: [
      { farmId: "f-01", lb: 80 },
      { farmId: "f-14", lb: 50 },
      { farmId: "f-16", lb: 30 },
    ] },
    { crop: "Mixed Salad Greens", category: "Greens", amountLb: 140, packedAs: "3 lb bags", contributors: [
      { farmId: "f-09", lb: 40 },
      { farmId: "f-13", lb: 50 },
      { farmId: "f-18", lb: 50 },
    ] },
  ] satisfies OrderLine[],
};

// ============================================================================
// IMPACT INSIGHTS — narrative figures only, no formulas
// ============================================================================

export const impact = {
  poundsThisSeason: 38420,
  farmsSupported: 22,
  institutionsServed: 4,
  acresInNetwork: 456,
  averageFarmSize: 21,
  farmsUnder30Acres: 18,

  // Plain-language observations (no formulas, no proprietary scoring exposed)
  highlights: [
    "Your network supplied 38,420 lb of food across 22 small farms this season — without any single farm needing to scale beyond what it can responsibly produce.",
    "82% of contributing farms operate on fewer than 30 acres. AggieLink's pooled fulfillment is what made them eligible to bid.",
    "Dollars spent in the network return to growers in the same three counties they came from.",
  ],

  weeklyTrend: [
    { week: "W1", lb: 1840 },
    { week: "W2", lb: 2120 },
    { week: "W3", lb: 2010 },
    { week: "W4", lb: 2380 },
    { week: "W5", lb: 2470 },
    { week: "W6", lb: 2290 },
    { week: "W7", lb: 2540 },
    { week: "W8", lb: 2680 },
    { week: "W9", lb: 2510 },
    { week: "W10", lb: 2740 },
    { week: "W11", lb: 2620 },
    { week: "W12", lb: 2840 },
  ],

  byCategory: [
    { category: "Fruit", lb: 9200, color: "#b86244" },
    { category: "Greens", lb: 6800, color: "#458c55" },
    { category: "Roots", lb: 5400, color: "#9c7327" },
    { category: "Brassicas", lb: 4900, color: "#286c3c" },
    { category: "Nightshades", lb: 4400, color: "#cd7d5e" },
    { category: "Alliums", lb: 3700, color: "#74ad7e" },
    { category: "Squash", lb: 2700, color: "#dbab5d" },
    { category: "Other", lb: 1320, color: "#a9ccae" },
  ],

  byCounty: [
    { county: "Yolo", farms: 12 },
    { county: "Solano", farms: 7 },
    { county: "Sacramento", farms: 3 },
  ],

  institutions: [
    { name: "UC Davis Dining Services", since: 2023 },
    { name: "Sutter Davis Hospital", since: 2024 },
    { name: "Davis Joint Unified School District", since: 2024 },
    { name: "Woodland Memorial Hospital", since: 2025 },
  ],
};

export const farmsById = Object.fromEntries(farms.map((f) => [f.id, f]));
