import companyDb from "./db.json";

export type ListItem = {
  name: string;
  description: string;
  status: string;
  website?: string | null;
  twitter?: string | null;
  instagram?: string | null;
  logo: string;
  tags: string[];
};

const data = [
  {
    name: "Snapcommerce",
    logo: "https://images.squarespace-cdn.com/content/v1/5f3a96f64e5615558ab05acd/1612897529329-5SNXX3LJGOUOLADFK0Y2/Full_Logo_Black.png?format=150w",
    description: "Suspend/block all hotel bookings in Russia plus any purchases made in RUB",
    status: "Withdrawal",
    website: "https://www.snapcommerce.com",
    instagram: "instagram.com/snaptravel",
    twitter: "twitter.com/snaptravel",
    tags: ["retail"]
  },
  {
    name: "Apple",
    logo: "apple.png",
    description: "Stops selling its products in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Ford",
    logo: "ford.png",
    description: "Suspends its operations in Russia",
    status: "Suspension",
    tags: ["auto"],
  },
  {
    name: "General Motors",
    logo: "gmc.png",
    description: "Halts all its exports to Russia 'until further notice'",
    status: "Suspension",
    tags: ["auto"],
  },
  {
    name: "Toyota",
    logo: "toyota.png",
    description: "Stops making cars in Russia or importing them to the country",
    status: "Suspension",
    tags: ["auto"],
  },
  {
    name: "Volkswagen",
    logo: "volks.png",
    description:
      "Stops production of vehicles in Russia and has suspended exports to the Russian market",
    status: "Suspension",
    tags: ["auto"],
  },
  {
    name: "Nissan",
    logo: "nissan.png",
    description: "Suspends the export of vehicles to Russia",
    status: "Suspension",
    tags: ["auto"],
  },
  {
    name: "Boeing",
    logo: "boeing.png",
    description: "Suspends support for Russian airlines",
    status: "Suspension",
    tags: ["aviation"],
  },
  {
    name: "Twitter",
    logo: "twitter.png",
    description:
      "Announces plans to 'reduce the visibility and amplification' of Russian state media content",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Netflix",
    logo: "netflix.png",
    description: "Suspends its streaming service in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Spotify",
    logo: "spotify.png",
    description:
      "Closes its office in Russia 'indefinitely' and restricts shows 'owned and operated by Russian state-affiliated media'",
    status: "Suspension",
    tags: ["tech", "media"],
  },
  {
    name: "Roku",
    logo: "roku.png",
    description: "Banns RT worldwide",
    status: "Suspension",
    tags: ["tech", "media"],
  },
  {
    name: "YouTube",
    logo: "youtube.png",
    description:
      "Blocks Russian state media within Ukraine, including RT and it  would be 'significantly limiting recommendations to these channels'",
    status: "Suspension",
    tags: ["tech", "media"],
  },
  {
    name: "Google",
    logo: "google.png",
    description:
      "Will no longer allow Russian state media outlets to run ads or monetize their content",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Airbnb",
    logo: "airbnb.png",
    description: "Suspends all operations in Russia and Belarus",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Intel",
    logo: "intel.png",
    description: "Stops all shipments to Russia and Belarus",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Microsoft",
    logo: "microsoft.png",
    description:
      "Suspends all new sales of its products and services in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "IBM",
    logo: "ibm.png",
    description: "Suspends all business in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Amazon",
    logo: "amazon.png",
    description: "Halts new sign-ups for the service in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Accenture",
    logo: "accenture.png",
    description: "Discontins its business in Russia",
    status: "Suspension",
    tags: ["consulting"],
  },
  {
    name: "Deloitte",
    logo: "deloitte.png",
    description: "Stops operating in Russia and Belarus",
    status: "Suspension",
    tags: ["consulting"],
  },
  {
    name: "EY",
    logo: "e&y.png",
    description:
      "Removes its Russian practice from its official global network",
    status: "Suspension",
    tags: ["consulting"],
  },
  {
    name: "PwC",
    logo: "pwc.png",
    description: "Breaks away from its Russian business",
    status: "Suspension",
    tags: ["consulting"],
  },
  {
    name: "RuTracker",
    logo: "rutracker.png",
    description: "Blocks access for users from the Russia",
    status: "Suspension",
    tags: ["media", "torrent"],
  },
  {
    name: "BP",
    logo: "bp.png",
    description:
      "Plans to exit its 19.75% stake in Russia's biggest oil company, Rosneft, and suspending their joint ventures",
    status: "Suspension",
    tags: ["energy"],
  },
  {
    name: "Equinor",
    logo: "equinor.png",
    description: "Begins to exit its joint ventures in Russia",
    status: "Suspension",
    tags: ["energy"],
  },
  {
    name: "Exxon",
    logo: "exxon.png",
    description:
      "Leaves its last remaining oil-and-gas project in Russia and not to invest in new developments in the country",
    status: "Suspension",
    tags: ["energy"],
  },
  {
    name: "General Electric",
    logo: "genelec.png",
    description: "Suspends most of its operations in Russia",
    status: "Suspension",
    tags: ["energy"],
  },
  {
    name: "Shell",
    logo: "shell.png",
    description:
      "Is getting out of Russia and ditching its joint ventures, decides to stop buying Russian oil and gas",
    status: "Suspension",
    tags: ["energy"],
  },
  {
    name: "TotalEnergies",
    logo: "totalenergies.png",
    description: "Would no longer provide capital for new projects to Russia",
    status: "Suspension",
    tags: ["energy"],
  },
  {
    name: "MasterCard",
    logo: "mastercard.png",
    description:
      "Suspends its network services in Russia. Cards, supported by Russian banks, willn't work in the company's network",
    status: "Suspension",
    tags: ["finance"],
  },
  {
    name: "VISA",
    logo: "visa.png",
    description:
      "Suspends all of its operations and all Visa transactions in Russia",
    status: "Suspension",
    tags: ["finance"],
  },
  {
    name: "American Express",
    logo: "amexpr.png",
    description: "Cards will no longer work on territory of Russia and Belarus",
    status: "Suspension",
    tags: ["finance"],
  },
  {
    name: "Moody's",
    logo: "moody.png",
    description: "Suspends commercial operations in Russia",
    status: "Suspension",
    tags: ["finance"],
  },
  {
    name: "DirecTV",
    logo: "directv.png",
    description: "Cuts ties with RT",
    status: "Suspension",
    tags: ["media", "entertainment"],
  },
  {
    name: "Disney",
    logo: "disney.png",
    description: "Suspends the release of its theatrical films in Russia",
    status: "Suspension",
    tags: ["media", "entertainment"],
  },
  {
    name: "WarnerMedia",
    logo: "warnmed.png",
    description:
      "Pauses all business in Russia, broadcast of its channels and all new content licensing with Russian entities",
    status: "Suspension",
    tags: ["media", "entertainment"],
  },
  {
    name: "H&M",
    logo: "h&m.png",
    description: "Pauses all sales in Russia",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Heineken",
    logo: "heineken.png",
    description:
      "Stops producing and selling beer and had suspensions on new investments and exports to Russia",
    status: "Suspension",
    tags: ["alcohol", "retail"],
  },
  {
    name: "Ikea",
    logo: "ikea.png",
    description:
      "Pauses its retail and manufacturing operations in Russia and suspends all trade with Belarus",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Inditex",
    logo: "inditex.png",
    description:
      "Pauses operations in Russia and closing 502 stores in the country",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Mothercare",
    logo: "mothercare.png",
    description: "Suspends business in Russia and stopping shipments there",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Puma",
    logo: "puma.png",
    description: "Suspends operations of all of its stores in Russia",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Prada",
    logo: "prada.png",
    description: "Suspends its retail operations in Russia",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Procter & Gamble",
    logo: "p&g.png",
    description:
      "Discontines all new capital investments in Russia and suspends all media, advertising, and promotional activity",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "ELC",
    logo: "elc.png",
    description:
      "Suspends all commercial activity, business investments and initiatives, as well as our brand sites in Russia",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Yum Brands",
    logo: "yumbrands.png",
    description: "Suspends all investment and restaurant development in Russia",
    status: "Suspension",
    tags: ["retail", "food"],
  },
  {
    name: "McDonald's",
    logo: "mac.png",
    description: "Closes all its restaurants in Russia",
    status: "Suspension",
    tags: ["retail", "food"],
  },
  {
    name: "Unilever",
    logo: "unilever.png",
    description:
      "Suspends imports of its products to Russia and is stopps all investment and exports from there",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "UPS",
    logo: "ups.png",
    description: "Suspends operations in Russia and Belarus",
    status: "Suspension",
    tags: ["delivery"],
  },
  {
    name: "FedEx",
    logo: "fedex.png",
    description: "Suspends operations in Russia and Belarus",
    status: "Suspension",
    tags: ["delivery"],
  },
  {
    name: "DHL",
    logo: "dhl.png",
    description: "Suspends inbound shipments to Russia and Belarus",
    status: "Suspension",
    tags: ["delivery"],
  },
  {
    name: "Maersk",
    logo: "maersk.png",
    description: "Halts cargo bookings with Russia",
    status: "Suspension",
    tags: ["delivery"],
  },
  {
    name: "MSC",
    logo: "msc.png",
    description: "Halts cargo bookings with Russia",
    status: "Suspension",
    tags: ["delivery"],
  },
  {
    name: "Alstom",
    logo: "alstom.png",
    description:
      "Suspends all deliveries towards Russia and all future business investments to the country",
    status: "Suspension",
    tags: ["trains"],
  },
  {
    name: "Schlumberger",
    logo: "slb.png",
    description:
      "Suspends new investment and technology deployment to our Russia operations",
    status: "Suspension",
    tags: ["oilfield services"],
  },
  {
    name: "Weatherford",
    logo: "wfrd.png",
    description: "Suspends all new investments in Russia",
    status: "Suspension",
    tags: ["oilfield services"],
  },
  {
    name: "Baker Hughes",
    logo: "bkr.png",
    description:
      "Suspends all new investments and is complying with applicable laws and sanctions as it fulfills current contractual obligations",
    status: "Suspension",
    tags: ["oilfield services"],
  },
  {
    name: "Halliburton",
    logo: "hal.png",
    description:
      "Halts all shipments of specific sanctioned parts and products to Russia several weeks ago and had no active joint ventures there",
    status: "Suspension",
    tags: ["oilfield services"],
  },
  {
    name: "Activision Blizzard",
    logo: "blizz.png",
    description: "Suspends sales in Russia",
    status: "Suspension",
    tags: ["entertainment"],
  },
  {
    name: "Apple Pay",
    logo: "applepay.png",
    description: "Full block in Russia",
    status: "Suspension",
    tags: ["tech", "finance"],
  },
  {
    name: "Adidas",
    logo: "adidas.png",
    description:
      "Refusal to cooperate with the national football team of Russia",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Adobe",
    logo: "adobe.png",
    description: "Stops working in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Air Astana",
    logo: "airastana.png",
    description: "Suspends flights to Russia",
    status: "Suspension",
    tags: ["aviation"],
  },
  {
    name: "Aston Martin",
    logo: "astonmartin.png",
    description: "Stops supply of products to Russia",
    status: "Suspension",
    tags: ["auto"],
  },
  {
    name: "Audi",
    logo: "audi.png",
    description: "Leaves the Russian market",
    status: "Suspension",
    tags: ["auto"],
  },
  {
    name: "Autodesk",
    logo: "autodesk.png",
    description: "Stops work in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "AMD",
    logo: "amd.png",
    description: "Stops the supply of products to Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Avast",
    logo: "avast.png",
    description: "Suspends sales of products in Russia and Belarus",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "BBC",
    logo: "bbc.png",
    description: "Revokes content licensing in Russia",
    status: "Suspension",
    tags: ["media", "entertainment"],
  },
  {
    name: "BIS",
    logo: "bis.png",
    description:
      "Suspends access of the Central Bank of Russia to its services",
    status: "Suspension",
    tags: ["finance"],
  },
  {
    name: "BlaBlaCar",
    logo: "blablacar.png",
    description: "Leaves the Russian market",
    status: "Suspension",
    tags: ["transport"],
  },
  {
    name: "British American Tobacco",
    logo: "bat.png",
    description: "Leaves the Russian market",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Brown-Forman",
    logo: "brownforman.png",
    description: "Leaves the Russian market",
    status: "Suspension",
    tags: ["retail", "alcohol"],
  },
  {
    name: "BMW",
    logo: "bmw.png",
    description: "Stops exports and production in Russia",
    status: "Suspension",
    tags: ["auto"],
  },
  {
    name: "Bolt",
    logo: "bolt.png",
    description: "Stops work in Russia, leaves the Belarusian market",
    status: "Suspension",
    tags: ["transport", "delivery"],
  },
  {
    name: "Burger King",
    logo: "burgerking.png",
    description: "Refuses to support the network in Russia",
    status: "Suspension",
    tags: ["food"],
  },
  {
    name: "Festival De Cannes",
    logo: "fdc.png",
    description: "Ban of the Russian delegation",
    status: "Suspension",
    tags: ["media", "entertainment"],
  },
  {
    name: "Caterpillar",
    logo: "caterpillar.png",
    description: "Suspends operations in Russia",
    status: "Suspension",
    tags: ["manufacture"],
  },
  {
    name: "Cargill",
    logo: "cargill.png",
    description: "Closes down its activities in Russia",
    status: "Suspension",
    tags: ["food", "manufacture"],
  },
  {
    name: "Carlsberg",
    logo: "carlsberg.png",
    description:
      "Stops investing, and stops the company's exports of beer and other beverages to Russia",
    status: "Suspension",
    tags: ["alcohol", "retail"],
  },
  {
    name: "Cex Io",
    logo: "cexio.png",
    description: "Restrictions for users in Russia",
    status: "Suspension",
    tags: ["tech", "finance"],
  },
  {
    name: "Cinema 4D",
    logo: "cinema.png",
    description: "The application does not work in Russia",
    status: "Suspension",
    tags: ["entertainment"],
  },
  {
    name: "Cisco",
    logo: "cisco.png",
    description: "Suspends operations in Russia and Belarus",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Coca-Cola",
    logo: "cola.png",
    description: "Exits from the Russian market",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Colgate-Palmolive",
    logo: "colgate.png",
    description: "Restrictions on the import and sale of goods in Russia",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Crocs",
    logo: "crocs.png",
    description: "Stops business in Russia",
    status: "Suspension",
    tags: ["retail"],
  },
  {
    name: "Curtis Brown",
    logo: "curtisbrown.png",
    description: "Pause in cooperation with Russia",
    status: "Suspension",
    tags: ["media", "entertainment"],
  },
  {
    name: "Bloober Team",
    logo: "blooberteam.png",
    description: "Stops sales in Russia and Belarus",
    status: "Suspension",
    tags: ["entertainment"],
  },
  {
    name: "Daimler Truck AG",
    logo: "dta.png",
    description: "Closes the business in Russia",
    status: "Suspension",
    tags: ["transport", "manufacture"],
  },
  {
    name: "Depositphotos",
    logo: "depositphotos.png",
    description: "Exits from Russia and Belarus",
    status: "Suspension",
    tags: ["entertainment", "media"],
  },
  {
    name: "Deutsche Bank",
    logo: "deutschebank.png",
    description: "Stops working in Russia",
    status: "Suspension",
    tags: ["finance"],
  },
  {
    name: "Discovery",
    logo: "discovery.png",
    description: "Stops broadcasting in Russia",
    status: "Suspension",
    tags: ["entertainment", "media"],
  },
  {
    name: "Dell",
    logo: "dell.png",
    description: "Closes sales in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "DMarket",
    logo: "dmarket.png",
    description: "Freezes accounts of Russian and Belarusian users",
    status: "Suspension",
    tags: ["retail", "entertainment"],
  },
  {
    name: "DP Eurasia",
    logo: "dpeurasia.png",
    description: "Suspends investment in Russia",
    status: "Suspension",
    tags: ["food"],
  },
  {
    name: "Eurovision",
    logo: "eurovision.png",
    description: "Exclusions of Russia from participation",
    status: "Suspension",
    tags: ["media", "entertainment"],
  },
  {
    name: "EFA",
    logo: "efa.png",
    description: "Boycott of Russian films",
    status: "Suspension",
    tags: ["media", "entertainment"],
  },
  {
    name: "EA Games",
    logo: "eag.png",
    description: "Stops sales in Russia and Belarus",
    status: "Suspension",
    tags: ["entertainment"],
  },
  {
    name: "Epic Games",
    logo: "epicgames.png",
    description: "Stops selling content in Russia",
    status: "Suspension",
    tags: ["entertainment"],
  },
  {
    name: "Epson",
    logo: "epson.png",
    description: "Suspends the supply of these products to Belarus and Russia",
    status: "Suspension",
    tags: ["tech", "retail"],
  },
  {
    name: "Elisa Esports",
    logo: "elisaesports.png",
    description: "Removes from participation all Russian clubs",
    status: "Suspension",
    tags: ["media", "entertainment"],
  },
  {
    name: "Ericsson",
    logo: "ericsson.png",
    description: "Stops deliveries in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Eni",
    logo: "eni.png",
    description: "Stops buying oil in Russia",
    status: "Suspension",
    tags: ["oilfield services"],
  },
  {
    name: "Ferrari",
    logo: "ferrari.png",
    description: "Suspends deliveries to Russia",
    status: "Suspension",
    tags: ["auto"],
  },
  {
    name: "Fiverr",
    logo: "fiverr.png",
    description: "Suspends activities in Russia",
    status: "Withdrawal",
    tags: ["tech"],
  },
  {
    name: "Formula One",
    logo: "formula.png",
    description:
      "Suspends all operations in Russia and cancellation of the tournament in Sochi",
    status: "Withdrawal",
    tags: ["auto"],
  },
  {
    name: "F.I.G.",
    logo: "fig.png",
    description:
      "All competitions in Russia and Belarus are canceled and banned",
    status: "Suspension",
    tags: ["sport"],
  },
  {
    name: "Frankfurt Book Fair",
    logo: "fbf.png",
    description:
      "Suspends cooperate with Russian organizations and publishing houses",
    status: "Withdrawal",
    tags: ["books", "entertainment"],
  },
  {
    name: "Gardners",
    logo: "gardners.png",
    description: "Stops together with Russian publishers",
    status: "Withdrawal",
    tags: ["media", "books", "entertainment"],
  },
  {
    name: "GOG",
    logo: "gog.png",
    description: "Stops processing payments in rubles",
    status: "Suspension",
    tags: ["finance", "entertainment"],
  },
  {
    name: "Google Pay",
    logo: "googlepay.png",
    description: "Blocks a number of banks and restrictions on work in Russia",
    status: "Scaling Back",
    tags: ["finance"],
  },
  {
    name: "ASUS",
    logo: "asus.png",
    description: "Stops operations in Russia",
    status: "Suspension",
    tags: ["tech"],
  },
  {
    name: "Harley-Davidson ",
    logo: "harley.jpg",
    description: "Closes business in Russia",
    status: "Withdrawal",
    tags: ["transport"],
  },
];

companyDb.forEach((item: ListItem) => {
  if (
    !data.find(
      (dataItem) => dataItem.name.toLowerCase() === item.name.toLowerCase()
    )
  ) {
    data.push(item);
  }
});

export default data;
