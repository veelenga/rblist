export type ListItem = {
  name: string;
  description: string;
  logo: string;
  tags: string[];
};

const data = [
  {
    name: "Apple",
    logo: "apple.png",
    description: `Stops selling its products in Russia.
       Limits access to Apple Pay`,
    tags: ["big-tech", "finance"],
  },
  {
    name: "Ford",
    logo: "ford.png",
    description: "Suspends its operations in Russia",
    tags: ["auto"],
  },
  {
    name: "General Motors",
    logo: "gmc.png",
    description: "Halts all its exports to Russia 'until further notice'",
    tags: ["auto"],
  },
  {
    name: "Toyota",
    logo: "toyota.png",
    description: "Stops making cars in Russia or importing them to the country",
    tags: ["auto"],
  },
  {
    name: "Volkswagen",
    logo: "volks.png",
    description: "Stops production of vehicles in Russia and has suspended exports to the Russian market",
    tags: ["auto"],
  },
  {
    name: "Nissan",
    logo: "nissan.png",
    description: "Suspends the export of vehicles to Russia",
    tags: ["auto"],
  },
  {
    name: "Boeing",
    logo: "boeing.png",
    description: "Suspends support for Russian airlines",
    tags: ["aviation"],
  },
  {
    name: "Twitter",
    logo: "twitter.png",
    description: "Announces plans to 'reduce the visibility and amplification' of Russian state media content",
    tags: ["big-tech"],
  },
  {
    name: "Netflix",
    logo: "netflix.png",
    description: "Suspends its streaming service in Russia",
    tags: ["big-tech"],
  },
];

export default data;
