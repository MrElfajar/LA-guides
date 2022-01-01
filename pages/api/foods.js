// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function foodsAPI(req, res) {
  if (req.query.key === process.env.NEXT_PUBLIC_API_KEY) {
    res.status(200).json([
      {
        id: 1,
        name: "Jam",
        ingredient: ["Fruit", "Fruit"],
        effects: ["Allay Hunger"],
      },
      {
        id: 2,
        name: "Honey",
        ingredient: ["Honey"],
        effects: ["HP Regeneration"],
      },
      {
        id: 3,
        name: "Pure Coconut Juice",
        ingredient: ["Coconut", "Coconut"],
        effects: ["Allay Hunger"],
      },
      {
        id: 4,
        name: "Fruity Popsicle",
        ingredient: ["1 Fruit", "3 Ice Cube"],
        effects: ["Allay Hunger"],
      },
      {
        id: 5,
        name: "Candied Fruit",
        ingredient: ["Fruit", "Honey"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Fruit Milk",
        ingredient: ["Fruit", "Milk"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Toffee",
        ingredient: ["Honey", "Milk"],
        effects: ["2,Movement Speed"],
      },
      {
        name: "Juice",
        ingredient: ["2 Fruit", "2 Ice Cubes"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Honey Water",
        ingredient: ["1 Honey", "3 Ice Cubes"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Bread Roll",
        ingredient: ["Flour", "Egg"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Coconut Jelly",
        ingredient: ["Ice Cubes", "Coconut"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Coconut Fruity Mix",
        ingredient: ["Fruit", "Coconut"],
        effects: ["3,Movement Speed"],
      },
      {
        name: "Milky Corn Pudding",
        ingredient: ["Milk", "Corn"],
        effects: ["2,Movement Speed"],
      },
      {
        name: "Fruit Pie",
        ingredient: ["Fruit", "Flour", "Honey"],
        effects: ["3,Damage to Humanoid"],
      },
      {
        name: "Egg Tart",
        ingredient: ["Flour", "Honey", "Milk"],
        effects: ["2,P.Mining Crit", "3,S.Mining Crit"],
      },
      {
        name: "Milk Pudding",
        ingredient: [],
        effects: [],
      },
      {
        name: "Creamy Soup",
        ingredient: [],
        effects: [],
      },
      {
        name: "Coconut Snowflake Cake",
        ingredient: ["Flour", "Milk", "Coconut"],
        effects: ["3,Gathering Mastery"],
      },
      {
        name: "Fruit Coconut Cream",
        ingredient: ["Fruit", "Milk", "Coconut"],
        effects: ["3,Swimming Speed"],
      },
      {
        name: "Egg Yolk and Corn Cookie",
        ingredient: ["Flour", "Egg", "Corn"],
        effects: ["3,HP Cap"],
      },
      {
        name: "Fruit Cake",
        ingredient: ["Fruit", "Flour", "Honey", "Milk"],
        effects: ["1,Movement Speed"],
      },
      {
        name: "Fruit Smoothie",
        ingredient: ["2 Fruit", "Honey", "Ice Cube"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Strawberry Jelly",
        ingredient: [],
        effects: [],
      },
      {
        name: "Strawberry Yogurt Ice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Berry Cheesecake",
        ingredient: [],
        effects: [],
      },
      {
        name: "Milk Stewed with Meat and Egg",
        ingredient: ["2 Egg", "Milk", "Pumpkin"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Blueberry Coconut Crisp Snack",
        ingredient: ["2 Blueberry", "Flour", "Coconut"],
        effects: [
          "3,Hemp Gathering Mastery",
          "2,Logging Speed",
          "3,Mining Speed",
          "3,Gathering Speed",
        ],
      },
      {
        name: "Golden Corn Cake",
        ingredient: ["2 Corn", "Egg", "Carrot"],
        effects: ["2,Logging Speed", "3,Mining Speed", "3,Gathering Speed"],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Tree Root Cake",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Chocolate Mousse",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Lotus Paste & Yolk Cake",
        ingredient: [],
        effects: [],
      },
      {
        name: "Snow Skin Mooncake",
        ingredient: [],
        effects: [],
      },
      {
        name: "Five Kernel Mooncake",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sesame & Red Bean",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fruit Ice Congee",
        ingredient: ["Rice", "Fruit", "Ice Cube"],
        effects: [
          "3,Mining Speed",
          "2,Movement Speed",
          "3,Sandstorm Resistance",
        ],
      },
      {
        name: "Rice Cake with Milk",
        ingredient: [],
        effects: [],
      },
      {
        name: "Brown Sugar Rice Cake",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fermented Glutinous Rice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Double Skin Milk",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sesame Paste",
        ingredient: [],
        effects: [],
      },
      {
        name: "Ginger Milk Curd",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fruit Lollipop",
        ingredient: ["2 Honey", "2 Strawberry"],
        effects: ["3,Swimming Speed", "2,Movement Speed"],
      },
      {
        name: "Cola Kid Cookies",
        ingredient: [],
        effects: [],
      },
      {
        name: "Almond Pudding",
        ingredient: [],
        effects: [],
      },
      {
        name: "Christmas Gingerbread",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pineapple Cake",
        ingredient: [],
        effects: [],
      },
      {
        name: "French Toast",
        ingredient: [],
        effects: [],
      },
      {
        name: "Egg Waffle",
        ingredient: ["Flour", "Egg"],
        effects: ["2,Fighting Mastery", "3,Damage to Infected"],
      },
      {
        name: "Fish Ball Noodles",
        ingredient: ["Fish", "Flour", "Vegetables"],
        effects: ["2,HP Cap"],
      },
      {
        name: "Toast",
        ingredient: [],
        effects: [],
      },
      {
        name: "Mince Pie",
        ingredient: [],
        effects: [],
      },
      {
        name: "Vegetable Cake",
        ingredient: [],
        effects: [],
      },
      {
        name: "Mushroom Udon Noodles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Bread with Jam",
        ingredient: ["Fruit", "Flour"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Beet Porridge",
        ingredient: ["Vegetables", "Honey"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Milky Croissant",
        ingredient: ["Flour", "Milk"],
        effects: ["2,P.Logging Crit", "2,S.Logging Crit"],
      },
      {
        name: "Honey Croissant",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sesame Dumplings",
        ingredient: [],
        effects: [],
      },
      {
        name: "Peanut Dumplings",
        ingredient: [],
        effects: [],
      },
      {
        name: "Red Bean Dumplings",
        ingredient: [],
        effects: [],
      },
      {
        name: "Jujube Dumplings",
        ingredient: [],
        effects: [],
      },
      {
        name: "Capsicol Noodles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Coconut Cream Bread",
        ingredient: ["Flour", "Coconut"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Corn Sponge Cake",
        ingredient: ["Flour", "Corn"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Dumplings",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sandwich",
        ingredient: [],
        effects: [],
      },
      {
        name: "Shrimp and Corn Pizza",
        ingredient: ["Flour", "Shrimp", "Corn"],
        effects: ["3,Crit Chance"],
      },
      {
        name: "Special Pizza",
        ingredient: [],
        effects: [],
      },
      {
        name: "Spaghetti",
        ingredient: [],
        effects: [],
      },
      {
        name: "Rainbow Dumplings",
        ingredient: [],
        effects: [],
      },
      {
        name: "Strawberry Muffin",
        ingredient: [],
        effects: [],
      },
      {
        name: "Blueberry Biscuit",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Seafood Udon",
        ingredient: [],
        effects: [],
      },
      {
        name: "Shiitake & Ham",
        ingredient: [],
        effects: [],
      },
      {
        name: "Shiitake & Shrimp",
        ingredient: [],
        effects: [],
      },
      {
        name: "Mung Bean & Meat",
        ingredient: [],
        effects: [],
      },
      {
        name: "Mung Bean & Ham",
        ingredient: [],
        effects: [],
      },
      {
        name: "Chestnut & Shrimp",
        ingredient: [],
        effects: [],
      },
      {
        name: "Chestnut & Meat",
        ingredient: [],
        effects: [],
      },
      {
        name: "Supreme Sweet",
        ingredient: ["Sticky Rice", "Chestnut", "Mung Bean", ""],
        effects: [],
      },
      {
        name: "Supreme Meat",
        ingredient: [],
        effects: [],
      },
      {
        name: " Omurice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Egg Fried Rice",
        ingredient: ["Rice", "Egg"],
        effects: ["2,Fighting Mastery"],
      },
      {
        name: "Minced Pork Rice (Stewed)",
        ingredient: ["Rice", "Meat", "Mushrooms"],
        effects: [
          "3,S.Hemp Gathering Crit",
          "2,Crit Chance",
          "2,Crit Immunity Rate",
        ],
      },
      {
        name: "Seafood Congee",
        ingredient: [],
        effects: [],
      },
      {
        name: "Baked Tuna Rice Roll",
        ingredient: ["Rice", "Seasoning", "2 Tuna"],
        effects: [
          "2,Logging Speed",
          "3,Swimming Speed",
          "3,Energy Consumed when Running",
        ],
      },
      {
        name: "Coconut with Steamed Rice",
        ingredient: ["Rice", "Coconut"],
        effects: ["2,Logging Speed", "3,Sandstorm Resistance"],
      },
      {
        name: "Assorted Shumai",
        ingredient: [],
        effects: [],
      },
      {
        name: "Strawberry Rice Roll",
        ingredient: [],
        effects: [],
      },
      {
        name: "Milk Cheese Paste",
        ingredient: [],
        effects: [],
      },
      {
        name: "Spicy Rice Noodles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Clay Pot Rice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Rice Cracker",
        ingredient: [],
        effects: [],
      },
      {
        name: "White Rice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pumpkin Rice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Seafood Rice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Cheese Sausage Rice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Cute Rice Ball",
        ingredient: [],
        effects: [],
      },
      {
        name: "Mixed Rice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Shrimp Curry Fried Rice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pineapple Mixed Rice",
        ingredient: [],
        effects: [],
      },
      {
        name: "Toasted Rice Slices",
        ingredient: [],
        effects: [],
      },
      {
        name: "Intestine Rice Rolls",
        ingredient: [],
        effects: [],
      },
      {
        name: "Hot and Sour Rice Noodles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Meat Dumplings in Spicy Sauce",
        ingredient: [],
        effects: [],
      },
      {
        name: "Dandan Noodles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Cold Rice Cake",
        ingredient: [],
        effects: [],
      },
      {
        name: "Dumplings in Spicy Sauce",
        ingredient: [],
        effects: [],
      },
      {
        name: "Crusty Pancake",
        ingredient: [],
        effects: [],
      },
      {
        name: "Cold Noodles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pineapple Oil",
        ingredient: [],
        effects: [],
      },
      {
        name: "Crystal Shrimp Dumpling",
        ingredient: [],
        effects: [],
      },
      {
        name: "Shrimp Wonton",
        ingredient: [],
        effects: [],
      },
      {
        name: "Meat Rice Rolls",
        ingredient: [],
        effects: [],
      },
      {
        name: "Shrimp Rice Rolls",
        ingredient: [],
        effects: [],
      },
      {
        name: "Egg Rice Rolls",
        ingredient: ["2 Egg", "Rice", "Sauce"],
        effects: ["3,Ammo Capacity", "3,HP Cap", "3,Thunderstorm Resistance"],
      },
      {
        name: "Kidney & Liver Rice Rolls",
        ingredient: [],
        effects: [],
      },
      {
        name: "Egg & Pork Congee",
        ingredient: ["2 Rice", "Meat", "Egg"],
        effects: [
          "2,Attack Speed",
          "2,Ammunition Consumption",
          "2,Crit Immunity Rate",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Creamy Corn Congee",
        ingredient: [],
        effects: [],
      },
      {
        name: "Minced Pork Rice",
        ingredient: ["Meat", "Egg", "Rice", "Sauce"],
        effects: ["3,Damage to Humanoid", "3,Blizzard Resistance"],
      },
      {
        name: "Pork Chop Bun",
        ingredient: [],
        effects: [],
      },
      {
        name: "Shrimp Roe Noodles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Rice Noodles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Cheeseburger",
        ingredient: [],
        effects: [],
      },
      {
        name: "Spring Roll of Fortune",
        ingredient: [],
        effects: [],
      },
      {
        name: "Nasi Goreng",
        ingredient: [],
        effects: [],
      },
      {
        name: "Coconut Rice",
        ingredient: ["Coconut", "Egg", "Rice", "Sauce"],
        effects: [
          "2,Fighting Mastery",
          "3,Damage to Infected",
          "2,Firing Rate",
        ],
      },
      {
        name: "Fish and Chips",
        ingredient: ["Fish", "Vegetables", "Sauce", "Cooking Oil"],
        effects: ["3,Hemp Gathering Mastery", "2,P.Hemp Gathering Crit"],
      },
      {
        name: "Thai Rice Noodles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Indescribable Food",
        ingredient: [],
        effects: [],
      },
      {
        name: "Clean Can",
        ingredient: [],
        effects: [],
      },
      {
        name: "Stewed Fish Soup",
        ingredient: ["Fish", "Ice Cubes"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Vegetable and Fish Ball Soup",
        ingredient: ["Fish", "Vegetables"],
        effects: ["3,Max Energy"],
      },
      {
        name: "Fried Fishfinger",
        ingredient: ["Fish", "Flour"],
        effects: ["3,Mining Speed"],
      },
      {
        name: "Boiled Fish with Chili Sauce",
        ingredient: ["Fish", "Cayenne Pepper"],
        effects: ["1,Fighting Mastery"],
      },
      {
        name: "King Prawn Soup",
        ingredient: [],
        effects: [],
      },
      {
        name: "Tamagoyaki",
        ingredient: [],
        effects: [],
      },
      {
        name: "Barbecued Meats",
        ingredient: [],
        effects: [],
      },
      {
        name: "Egg Custard",
        ingredient: ["Egg"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Meat Skewer",
        ingredient: [],
        effects: [],
      },
      {
        name: "Meatballs",
        ingredient: [],
        effects: [],
      },
      {
        name: "Mushroom Skewers",
        ingredient: [],
        effects: [],
      },
      {
        name: "Honey Grilled Meat",
        ingredient: ["Meat", "Honey"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Hot Mushroom",
        ingredient: [],
        effects: [],
      },
      {
        name: "Milk Stew",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Pepper and Egg",
        ingredient: ["Cayenne Pepper", "Egg"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Spicy Diced Meat",
        ingredient: [],
        effects: [],
      },
      {
        name: "Egg Dumplings with Fresh Meat",
        ingredient: ["Meat", "Egg"],
        effects: ["2,Damage to Wild Animals"],
      },
      {
        name: "Vegetable Quiche",
        ingredient: [],
        effects: [],
      },
      {
        name: "Egg Baked with Mushroom",
        ingredient: ["Mushroom", "Egg"],
        effects: ["2,Damage to Humanoid"],
      },
      {
        name: "Honey Egg Flower Soup",
        ingredient: ["Honey", "Egg"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Coconut with Steamed Egg",
        ingredient: ["Coconut", "Egg"],
        effects: ["2,Swimming Speed", "3,Max Energy"],
      },
      {
        name: "Coconut Barbecued Meat",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Shrimp with Eggs",
        ingredient: ["Shrimp", "Egg"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Corn and Mincemeat",
        ingredient: ["Meat,Corn"],
        effects: ["3,Damage to Humanoid"],
      },
      {
        name: "Nutritious Stew",
        ingredient: [],
        effects: [],
      },
      {
        name: "Boiled Pork Slices",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sweet and Spicy Meatballs",
        ingredient: [],
        effects: [],
      },
      {
        name: "Assorted Platter",
        ingredient: [],
        effects: [],
      },
      {
        name: "Meat Plate",
        ingredient: [],
        effects: [],
      },
      {
        name: "Hot & Spicy Pot",
        ingredient: [],
        effects: [],
      },
      {
        name: "Carrot Meat Pie",
        ingredient: ["2 Meat", "2 CArrot"],
        effects: ["2,Damage to Wild Animals"],
      },
      {
        name: "Fish-flavored Shredded Pork",
        ingredient: ["2 Meat", "Cayenne Pepper", "Carrot"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Spicy Swimming Crab",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Squid Rings",
        ingredient: [],
        effects: [],
      },
      {
        name: "Spicy Squid Tentacles",
        ingredient: [],
        effects: [],
      },
      {
        name: "Hot-spicy Seafood Pot",
        ingredient: [],
        effects: [],
      },
      {
        name: "Steamed Shrimp",
        ingredient: [],
        effects: [],
      },
      {
        name: "Steamed Crab",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Grass Carp",
        ingredient: ["Grass Carp"],
        effects: ["1,Logging Speed"],
      },
      {
        name: "Grilled Carp",
        ingredient: ["Carp"],
        effects: ["2,Gathering Speed"],
      },
      {
        name: "Grilled Puffer Fish",
        ingredient: ["Puffer Fish"],
        effects: ["Allay Hunger"],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Yellow Croaker",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Swimming Crab",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Mackerel",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Weever",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Perch",
        ingredient: ["Perch"],
        effects: ["Allay Hunger"],
        addon: "Greatly restore HP",
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Turbot",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Halichoeres",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Sea Eel",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Grouper",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Trout",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Salmon",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Tilapia",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Parrotfish",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Wrasse",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Soft-shelled Turtle",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Triggerfish",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Squid",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Sunfish",
        ingredient: [],
        effects: [],
      },
      {
        name: "Steamed Fish with Peppers",
        ingredient: ["Cayenne", "Bighead Carp"],
        effects: [
          "2,Damage to Infected",
          "2,Damage to Humanoid",
          "2,Damage to Wild Animals",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Braised Eel",
        ingredient: ["Eel"],
        effects: [
          "Mining Speed",
          "P.Mining Crit",
          "S.Mining Crit",
          "Movement Speed",
        ],
      },
      {
        name: "Grilled Red Snapper",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Saury",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fire Ratfish Dish",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Sole Fish",
        ingredient: ["Sole Fish"],
        effects: [
          "3,Mining Speed",
          "2,P.Mining Crit",
          "3,S.Mining Crit",
          "2,Movement Speed",
        ],
      },
      {
        name: "Tuna Sashimi",
        ingredient: [],
        effects: [],
      },
      {
        name: "Lobster Feast",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Super Luxurious Drumstick Meat",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sushi",
        ingredient: [],
        effects: [],
      },
      {
        name: "Steamed Pork with Rice Flour",
        ingredient: [],
        effects: [],
      },
      {
        name: "Vermicelli with Pork",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fired Tofu",
        ingredient: [],
        effects: [],
      },
      {
        name: "Boiled Blood Curd",
        ingredient: [],
        effects: [],
      },
      {
        name: "Twice-cooked Pork",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Pif Intestines",
        ingredient: [],
        effects: [],
      },
      {
        name: "Beef and Ox Tripe in Chili Sauce",
        ingredient: [],
        effects: [],
      },
      {
        name: "Braised Lobster",
        ingredient: ["Vegetables", "Flour", "Shrimp"],
        effects: ["Mining Speed", "P.Mining Crit", "S.Mining Crit"],
      },
      {
        name: "Mantis Shrimp with Spiced Salt",
        ingredient: [],
        effects: [],
      },
      {
        name: "Marinated Delights Platter",
        ingredient: [],
        effects: [],
      },
      {
        name: "Dry-cooked Shumai",
        ingredient: [],
        effects: [],
      },
      {
        name: "Roasted Crispy Pork",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pork Mince & Salted Egg",
        ingredient: ["2 Meat", "Egg", "Rice"],
        effects: [
          "3,Damage to Humanoid",
          "2,Ammunition Consumption",
          "3,Blizzard Resistance",
        ],
      },
      {
        name: "Shredded Pork Knuckle in Jelly",
        ingredient: ["Cooking Oil", "Sauce", "Meat"],
        effects: [
          "3,Damage to Infected",
          "2,Firing Rate",
          "2,Crit Immunity Rate",
        ],
      },
      {
        name: "Rice Meatballs",
        ingredient: [],
        effects: [],
      },
      {
        name: "Corn, Turnip & Pork Rib Soup",
        ingredient: ["Meat", "Corn", "2 Carrot"],
        effects: ["2,HP Cap", "2,Crit Immunity Rate"],
      },
      {
        name: "Spareribs and Kelp Soup",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pan-fried Egg Fuyong",
        ingredient: ["Meat", "Vegetables", "Mushrooms", "Egg"],
        effects: [
          "2,P.Hemp Gathering Crit",
          "3,S.Hemp Gathering Crit",
          "1,Fighting Mastery",
          "3,Ammo Capacity",
        ],
      },
      {
        name: "Sweet & Sour Pork",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Curry Fish Ball",
        ingredient: ["Fish", "2 Vegetables", "Sauce"],
        effects: ["3,Gathering Speed", "2,P.Hemp Gathering Crit"],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Oden",
        ingredient: [],
        effects: [],
      },
      {
        name: "Satay",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fish in Banana Leaf",
        ingredient: ["Fish", "2 Vegetables", "Seasoning"],
        effects: [
          "1,P.Logging Crit",
          "1,P.Mining Crit",
          "1,P.Hemp Gathering Crit",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sauteed Crab with Curry",
        ingredient: [],
        effects: [],
      },
      {
        name: "Steamed Vegetables",
        ingredient: [],
        effects: [],
      },
      {
        name: "Hot Water",
        ingredient: ["Ice Cubes"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Grilled Mushrooms",
        ingredient: ["Mushrooms (Not all Matsutake)"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Pepper Sauce",
        ingredient: [],
        effects: [],
      },
      {
        name: "Grilled Corn",
        ingredient: ["Corn"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Fruit and Vegetables Salad",
        ingredient: ["Fruit", "Vegetables"],
        effects: ["1,P.Hemp Gathering Crit", "1,S.Hemp Gathering Crit"],
      },
      {
        name: "Mushroom Soup",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Mushroom and Pepper",
        ingredient: [],
        effects: [],
      },
      {
        name: "Boiled Corn with Chili Sauce",
        ingredient: ["Cayenne Pepper", "Corn"],
        effects: ["2,Crit Chance"],
      },
      {
        name: "Golden Corn Fritter",
        ingredient: ["Honey", "Corn"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Coconut Corn Soup",
        ingredient: ["Coconut", "Corn"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Grilled Matsutake",
        ingredient: ["Matsutake Mushroom"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Fried Pumpkin Sticks",
        ingredient: [],
        effects: [],
      },
      {
        name: "Mixed Mushroom Soup",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fried Spicy Watermelon Peel",
        ingredient: [],
        effects: [],
      },
      {
        name: "Carrot Corn Juice",
        ingredient: ["2 Corn", "2 Carrot"],
        effects: ["Allay Hunger"],
      },
      {
        name: "Corn-pumpkin Porridge",
        ingredient: ["3 Corn", "1 Pumpkin"],
        effects: ["Allay Hunger"],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sticky Rice Balls",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pot Side Soup",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Braised Chicked and Potatoes",
        ingredient: ["Meat", "Rice", "Sauce", "Potato"],
        effects: [
          "Hemp Gathering Mastery",
          "Gathering Speed",
          "S.Hemp Gathering Crit",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Bento of Love",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Lemon Cheesecake",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Braised High-fin Banded Shark",
        ingredient: ["High-fin Banded Shark"],
        effects: ["Logging Speed", "S.Logging Crit", "Movement Speed"],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pan-Fried Filefish",
        ingredient: [],
        effects: [],
      },
      {
        name: "Watermelon Smoothie",
        ingredient: [],
        effects: [],
      },
      {
        name: "Milk Popsicle",
        ingredient: [],
        effects: [],
      },
      {
        name: "Chewy Rainbow Gummies",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Flying Fish Sashimi",
        ingredient: ["Flying Fish"],
        effects: [
          "3,Hemp Gathering Mastery",
          "3,Gathering Speed",
          "3,S.Hemp Gathering Crit",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sauteed Bamboo Shoots and Meat",
        ingredient: ["Cooking Oil", "Bamboo Shoot", "Cayenne Pepper", "Meat"],
        effects: [
          "3,Damage to Infected",
          "3,Crit Chance",
          "3,Crit Immunity Rate",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Eight Delicacies and Tofu",
        ingredient: ["Mushroom", "Tofu", "Carrot", "Bamboo Shoot"],
        effects: [
          "3,Gathering Speed",
          "3,S.Hemp Gathering Crit",
          "3,Max Energy",
          "3,Thunderstorm Resistance",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pickled Cucumbers",
        ingredient: ["2 Cucumber", "Sauce", "Cayenne Pepper"],
        effects: ["3,Gathering Speed", "2,P.Hemp Gathering Crit"],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Colorful Fruit Tea",
        ingredient: ["Ice Cube", "Lemon", "Watermelon", "Honeydew Melon"],
        effects: [
          "3,Hemp Gathering Mastery",
          "3,Gathering Speed",
          "3,S.Hemp Gathering Crit",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Radish and Mushroom Soup",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Stewed Chinese Perch",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Braised Bream",
        ingredient: ["White Amur Bream"],
        effects: [
          "S.Logging Crit",
          "S.Mining Crit",
          "S.Hemp Gathering Crit",
          "Blizzard Resistance",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Orange Steamed Egg",
        ingredient: ["3 Egg", "1 Sweet Orange"],
        effects: [
          "3,Damage to Infected",
          "2,Firing Rate",
          "3,Headshot Damage",
          "2,Stability",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Pure Mulberry Jam",
        ingredient: ["Any", "Mulberry"],
        effects: [
          "Damage to Infected",
          "Damage to Humanoid",
          "Damage to Wild Animals",
          "Crit Chance",
        ],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Rice-water with Longans",
        ingredient: [],
        effects: [],
      },
      {
        name: "Ultimate Seaberry Cake",
        ingredient: [],
        effects: [],
      },
      {
        name: "Fantasy Cold Lychee Drink",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Party Cancy Cane",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
      {
        name: "Sweet Dried Persimmon",
        ingredient: [],
        effects: [],
      },
      {
        name: "???",
        ingredient: [],
        effects: [],
      },
    ]);
  } else {
    res.status(200).json("404 not found");
  }
}
