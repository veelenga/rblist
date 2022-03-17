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
    logo: "gmc.jpeg",
    description: "Halts all its exports to Russia 'until further notice.'",
    tags: ["auto"],
  },
  {
    name: "Toyota",
    logo: "toyota.png",
    description: "Stops making cars in Russia or importing them to the country",
    tags: ["auto"],
  },
];

export default data;
