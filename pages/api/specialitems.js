export default function specialitems(req, res) {
  if (req.query.key === process.env.NEXT_PUBLIC_API_KEY) {
    res.status(200).json([
      {
        map: "Clear Sky Wheat Field",
        spName: "Japanese Honeysuckle,Wishing Coin of Past Ages,",
        spFrom: "Gather Hemp,Fishing,Infected",
        spType: "Gather,Gather,Combat",
      },
      {
        map: "Fall Forest",
        spName:
          "Bitting Nettle,Axe-Breaker Plank,Black Amber,Branken's Hammer,Torn Letter,Torn Journal",
        spFrom:
          "Gather Hemp,Gather Wood,Gather Stone,Fishing,Infected,Infected",
        spType: "Gather,Gather,Gather,Gather,Gather,COmbat,Combat",
      },
      {
        map: "Polar Tjaele",
        spName: "Mountain Aven,Fir Branch",
        spFrom: "Gather Hemp,Gather Wood",
        spType: "Gather,Gather",
      },
      {
        map: "Snow Highland",
        spName: "Black Walnut Log,Soaked Camera,Man's Army Tag,Infected Meat",
        spFrom: "Gather Wood,Fishing,Soldier,Animal",
        spType: "Gather,Gather,COmbat,Combat",
      },
      {
        map: "Mount Snow",
        spName:
          "Black Nightshade,Obsidian,Tech Bracelet,Imperial Mount Snow Config Map",
        spFrom: "Gather Hemp,Gather Stone,Fishing,Imperial",
        spType: "Gather,Gather,Gather,Combat",
      },
      {
        map: "Black Pearl Area",
        spName: "Jimson Weed,White Ash,Old Will's Gold Coin",
        spFrom: "Gather Hemp,Gather Wood,Infected",
        spType: "Gather,Gather,Combat",
      },
      {
        map: "Wolf-hunting Field",
        spName: "Galena",
        spFrom: "Gather Stone",
        spType: "Gather",
      },
      {
        map: "River Area",
        spName: "Crow Dipper,Seafarer's Diary",
        spFrom: "Gather Hemp,Fishing",
        spType: "Gather,Gather",
      },
      {
        map: "Santopany",
        spName: "Elodea,Military Issue Lighter,Mysterious Pirate Treasure",
        spFrom: "Gather Hemp,Fishing,Infected",
        spType: "Gather,Gather,Combat",
      },
      {
        map: "Redwood Town",
        spName:
          "Splintered Diamond,K-4V.L Revolver,Guardian Handcufffs,Bandits Necklace",
        spFrom: "Gather Stone,Fishing,Guardian,Bandit",
        spType: "Gather,Gather,Combat,Combat",
      },
      {
        map: "Lawrence Bay",
        spName: "Black Nightshade Fruit,Fluorite Fragment",
        spFrom: "Gather Hemp,Gather Stone",
        spType: "Gather,Gather",
      },
      {
        map: "Swamp Border",
        spName: "Turqoise",
        spFrom: "Gather Stone",
        spType: "Gather",
      },
      {
        map: "Mouth Swamp",
        spName: "Grass-Pink,Limestone",
        spFrom: "Gather Hemp,Gather Stone",
        spType: "Gather,Gather",
      },
      {
        map: "Silent Plain",
        spName: "Monkey Cup,Tourist Brochure",
        spFrom: "Gather Hemp,Infected",
        spType: "Gather,Combat",
      },
      { map: "Mouth Swamp", spName: "", spFrom: "", spType: "" },
      {
        map: "Sand Castle",
        spName:
          "Diamond Stone,Sekter's Combat Boots,Mercenary Resource Chest Key,Scientia Data,Mercenary Communicator",
        spFrom: "Gather Stone,Fishing,Mercenary,Infected,Mercenary",
        spType: "Gather,Gather,Combat,Combat,Combat",
      },
      {
        map: "Levin City",
        spName:
          "Rusty Iron Key,Helena Wayne's Signed Letter,Vinyl Record of Paste Ages,Ancient Beast Fossil,Unknown Insect's Egg",
        spFrom: "Fishing,NPC Helena Wayne,NPC Van Langland,Infected,Infected",
        spType: "Gather,Gather,Gather,Combat,Combat",
      },
    ]);
  }
}
