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
    description:
      "Stops production of vehicles in Russia and has suspended exports to the Russian market",
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
    description:
      "Announces plans to 'reduce the visibility and amplification' of Russian state media content",
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
    description:
      "Closes its office in Russia 'indefinitely' and restricts shows 'owned and operated by Russian state-affiliated media'",
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
    description:
      "Blocks Russian state media within Ukraine, including RT and it  would be 'significantly limiting recommendations to these channels'",
    tags: ["big-tech", "media"],
  },
  {
    name: "Google",
    logo: "google.png",
    description:
      "Will no longer allow Russian state media outlets to run ads or monetize their content",
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
    description:
      "Suspends all new sales of its products and services in Russia",
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
    description:
      "Removes its Russian practice from its official global network",
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
    description:
      "Plans to exit its 19.75% stake in Russia's biggest oil company, Rosneft, and suspending their joint ventures",
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
    description:
      "Leaves its last remaining oil-and-gas project in Russia and not to invest in new developments in the country",
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
    description:
      "Is getting out of Russia and ditching its joint ventures, decides to stop buying Russian oil and gas",
    tags: ["energy"],
  },
  {
    name: "TotalEnergies",
    logo: "totalenergies.png",
    description: "Would no longer provide capital for new projects to Russia",
    tags: ["energy"],
  },
  {
    name: "MasterCard",
    logo: "mastercard.png",
    description:
      "Suspends its network services in Russia. Cards, supported by Russian banks, willn't work in the company's network",
    tags: ["finance"],
  },
  {
    name: "VISA",
    logo: "visa.png",
    description:
      "Suspends all of its operations and all Visa transactions in Russia",
    tags: ["finance"],
  },
  {
    name: "American Express",
    logo: "amexpr.png",
    description: "Cards will no longer work on territory of Russia and Belarus",
    tags: ["finance"],
  },
  {
    name: "Moody's",
    logo: "moody.png",
    description: "Suspends commercial operations in Russia",
    tags: ["finance"],
  },
  {
    name: "DirecTV",
    logo: "directv.png",
    description: "Cuts ties with RT",
    tags: ["media", "entertainment"],
  },
  {
    name: "Disney",
    logo: "disney.png",
    description: "Suspends the release of its theatrical films in Russia",
    tags: ["media", "entertainment"],
  },
  {
    name: "WarnerMedia",
    logo: "warnmed.png",
    description:
      "Pauses all business in Russia, broadcast of its channels and all new content licensing with Russian entities",
    tags: ["media", "entertainment"],
  },
  {
    name: "H&M",
    logo: "h&m.png",
    description: "Pauses all sales in Russia",
    tags: ["retail"],
  },
  {
    name: "Heineken",
    logo: "heineken.png",
    description:
      "Stops producing and selling beer and had suspensions on new investments and exports to Russia",
    tags: ["retail"],
  },
  {
    name: "Ikea",
    logo: "ikea.png",
    description:
      "Pauses its retail and manufacturing operations in Russia and suspends all trade with Belarus",
    tags: ["retail"],
  },
  {
    name: "Inditex",
    logo: "inditex.png",
    description:
      "Pauses operations in Russia and closing 502 stores in the country",
    tags: ["retail"],
  },
  {
    name: "Mothercare",
    logo: "mothercare.png",
    description: "Suspends business in Russia and stopping shipments there",
    tags: ["retail"],
  },
  {
    name: "Puma",
    logo: "puma.png",
    description: "Suspends operations of all of its stores in Russia",
    tags: ["retail"],
  },
  {
    name: "Prada",
    logo: "prada.png",
    description: "Suspends its retail operations in Russia",
    tags: ["retail"],
  },
  {
    name: "Procter & Gamble",
    logo: "p&g.png",
    description:
      "Discontines all new capital investments in Russia and suspends all media, advertising, and promotional activity",
    tags: ["retail"],
  },
  {
    name: "ELC",
    logo: "elc.png",
    description:
      "Suspends all commercial activity, business investments and initiatives, as well as our brand sites in Russia",
    tags: ["retail"],
  },
  {
    name: "Yum Brands",
    logo: "yumbrands.png",
    description: "Suspends all investment and restaurant development in Russia",
    tags: ["retail", "foot"],
  },
  {
    name: "McDonald's",
    logo: "mac.png",
    description: "Closes all its restaurants in Russia",
    tags: ["retail", "foot"],
  },
  {
    name: "Unilever",
    logo: "unilever.png",
    description:
      "Suspends imports of its products to Russia and is stopps all investment and exports from there",
    tags: ["retail"],
  },
  {
    name: "UPS",
    logo: "ups.png",
    description: "Suspends operations in Russia and Belarus",
    tags: ["shipping goods"],
  },
  {
    name: "FedEx",
    logo: "fedex.png",
    description: "Suspends operations in Russia and Belarus",
    tags: ["shipping goods"],
  },
  {
    name: "DHL",
    logo: "dhl.png",
    description: "Suspends inbound shipments to Russia and Belarus",
    tags: ["shipping goods"],
  },
  {
    name: "Maersk",
    logo: "maersk.png",
    description: "Halts cargo bookings with Russia",
    tags: ["shipping goods"],
  },
  {
    name: "MSC",
    logo: "msc.png",
    description: "Halts cargo bookings with Russia",
    tags: ["shipping goods"],
  },
  {
    name: "Alstom",
    logo: "alstom.png",
    description:
      "Suspends all deliveries towards Russia and all future business investments to the country",
    tags: ["trains"],
  },
  {
    name: "Schlumberger",
    logo: "slb.png",
    description:
      "Suspends new investment and technology deployment to our Russia operations",
    tags: ["oilfield services"],
  },
  {
    name: "Weatherford",
    logo: "wfrd.png",
    description: "Suspends all new investments in Russia",
    tags: ["oilfield services"],
  },
  {
    name: "Baker Hughes",
    logo: "bkr.png",
    description:
      "Suspends all new investments and is complying with applicable laws and sanctions as it fulfills current contractual obligations",
    tags: ["oilfield services"],
  },
  {
    name: "Halliburton",
    logo: "hal.png",
    description:
      "Halts all shipments of specific sanctioned parts and products to Russia several weeks ago and had no active joint ventures there",
    tags: ["oilfield services"],
  },
];

export default data;
