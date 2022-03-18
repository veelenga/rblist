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
  {
    name: "Spotify",
    logo: "spotify.png",
    description: "Closes its office in Russia 'indefinitely' and restricts shows 'owned and operated by Russian state-affiliated media'",
    tags: ["big-tech", "media"],
  },
  {
    name: "Roku",
    logo: "roku.png",
    description: "Banns RT worldwide",
    tags: ["big-tech", "media"],
  },
  {
    name: "YouTube",
    logo: "youtube.png",
    description: "Blocks Russian state media within Ukraine, including RT and it  would be 'significantly limiting recommendations to these channels'",
    tags: ["big-tech", "media"],
  },
  {
    name: "Google",
    logo: "google.png",
    description: "Will no longer allow Russian state media outlets to run ads or monetize their content",
    tags: ["big-tech"],
  },
  {
    name: "Airbnb",
    logo: "airbnb.png",
    description: "Suspends all operations in Russia and Belarus",
    tags: ["big-tech"],
  },
  {
    name: "Intel",
    logo: "intel.png",
    description: "Stops all shipments to Russia and Belarus",
    tags: ["big-tech"],
  },
  {
    name: "Microsoft",
    logo: "microsoft.png",
    description: "Suspends all new sales of its products and services in Russia",
    tags: ["big-tech"],
  },
  {
    name: "IBM",
    logo: "ibm.png",
    description: "Suspends all business in Russia",
    tags: ["big-tech"],
  },
  {
    name: "Amazon",
    logo: "amazon.png",
    description: "Halts new sign-ups for the service in Russia",
    tags: ["big-tech"],
  },
  {
    name: "Accenture",
    logo: "accenture.png",
    description: "Discontins its business in Russia",
    tags: ["consulting"],
  },
  {
    name: "Deloitte",
    logo: "deloitte.png",
    description: "Stops operating in Russia and Belarus",
    tags: ["consulting"],
  },
  {
    name: "Ernst & Young",
    logo: "e&y.png",
    description: "Removes its Russian practice from its official global network",
    tags: ["consulting"],
  },
  {
    name: "KPMG International",
    logo: "kpmg.png",
    description: "Russia and Belarus firms will leave the KPMG network",
    tags: ["consulting"],
  },
  {
    name: "PricewaterhouseCoopers",
    logo: "pwc.png",
    description: "Breaks away from its Russian business",
    tags: ["consulting"],
  },
  {
    name: "RuTracker",
    logo: "rutracker.png",
    description: "Blocks access for users from the Russia",
    tags: ["media", "torrent"],
  },
  {
    name: "BP",
    logo: "bp.png",
    description: "Plans to exit its 19.75% stake in Russia's biggest oil company, Rosneft, and suspending their joint ventures",
    tags: ["energy"],
  },
  {
    name: "Equinor",
    logo: "equinor.png",
    description: "Begins to exit its joint ventures in Russia",
    tags: ["energy"],
  },
  {
    name: "Exxon",
    logo: "exxon.png",
    description: "Leaves its last remaining oil-and-gas project in Russia and not to invest in new developments in the country",
    tags: ["energy"],
  },
  {
    name: "General Electric",
    logo: "genelec.png",
    description: "Suspends most of its operations in Russia",
    tags: ["energy"],
  },
  {
    name: "Shell",
    logo: "shell.png",
    description: "Is getting out of Russia and ditching its joint ventures, decides to stop buying Russian oil and gas",
    tags: ["energy"],
  },
  {
    name: "TotalEnergies",
    logo: "totalenergies.png",
    description: "Would no longer provide capital for new projects to Russia",
    tags: ["energy"],
  },
];

export default data;
