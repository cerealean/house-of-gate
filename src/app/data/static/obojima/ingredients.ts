export interface Ingredient {
  Name: string;
  Combat: number;
  Utility: number;
  Whimsy: number;
  Description: string;
  Rarity: 'Common' | 'Uncommon' | 'Rare';
  Source: string;
  Regions: string[];
}

export const ingredients: Ingredient[] = [
    {
        "Name": "Amber",
        "Combat": 9,
        "Utility": 5,
        "Whimsy": 4,
        "Description": "A chunk of petrified tree sap, prized for its gem-like luster and potential magical properties.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Land of Hot Water",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Apper Carrot",
        "Combat": 0,
        "Utility": 3,
        "Whimsy": 1,
        "Description": "A superior strain of carrot, known for its delicious flavor and hearty crunch.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields",
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Bamboo",
        "Combat": 3,
        "Utility": 3,
        "Whimsy": 3,
        "Description": "Versatile material used for building, drinking vessels, and musical instruments.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Bashu Powder",
        "Combat": 2,
        "Utility": 0,
        "Whimsy": 0,
        "Description": "Spicy, smoky powder made from bashu tree seed pods, valued for culinary and minor healing uses.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Blue Back Salmon",
        "Combat": 3,
        "Utility": 4,
        "Whimsy": 7,
        "Description": "Large, crafty fish with marbled flesh, found in rivers and reefs.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Boom Beri",
        "Combat": 7,
        "Utility": 6,
        "Whimsy": 1,
        "Description": "Sweet berries found near mountains, delicious during a brief ripening season.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Bora Bug",
        "Combat": 4,
        "Utility": 8,
        "Whimsy": 3,
        "Description": "Hazelnut-sized beetles crushed to produce turquoise dye.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Brush Reed",
        "Combat": 1,
        "Utility": 10,
        "Whimsy": 6,
        "Description": "Found near ponds, well-known for its potion-making properties and brush-like structure.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Land of Hot Water",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Bundle of Driko Twigs",
        "Combat": 1,
        "Utility": 1,
        "Whimsy": 2,
        "Description": "The aromatic wood of the driko tree, commonly used for its scent.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Camp Mite",
        "Combat": 6,
        "Utility": 4,
        "Whimsy": 8,
        "Description": "Spherical bugs that stick to fabrics, often found near campfires.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields",
            "Gift of Shuritashi",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Chicken Egg",
        "Combat": 1,
        "Utility": 1,
        "Whimsy": 2,
        "Description": "A staple food, with varying qualities prized by chicken farmers.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Chisuay’s Heavenly Tea",
        "Combat": 2,
        "Utility": 7,
        "Whimsy": 5,
        "Description": "A legendary tea blend with revered properties and a unique flavor.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": []
    },
    {
        "Name": "Clay Snake Tail",
        "Combat": 8,
        "Utility": 6,
        "Whimsy": 5,
        "Description": "High-demand potion material that regrows after being harvested.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields",
            "Land of Hot Water",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Cloud Horn",
        "Combat": 1,
        "Utility": 0,
        "Whimsy": 0,
        "Description": "Produces light, fibrous fluff used by potion makers.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields",
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Creeping Bolete",
        "Combat": 3,
        "Utility": 10,
        "Whimsy": 6,
        "Description": "Mobile mushrooms spreading spores on forest floors.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gift of Shuritashi",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Dorrin Plate",
        "Combat": 7,
        "Utility": 8,
        "Whimsy": 4,
        "Description": "A magical stone with crystalline properties, used in potion making.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": []
    },
    {
        "Name": "Dried Fruit",
        "Combat": 2,
        "Utility": 1,
        "Whimsy": 4,
        "Description": "Artisans preserve fruit with mystic quality, best sourced from Mount Arbora.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": []
    },
    {
        "Name": "Earwax",
        "Combat": 0,
        "Utility": 0,
        "Whimsy": 0,
        "Description": "Important for potion-making, valued for varying qualities.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Fish Folk Tooth",
        "Combat": 9,
        "Utility": 4,
        "Whimsy": 3,
        "Description": "Used by witches in underwater potions, often found along coastlines.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Fish Head",
        "Combat": 4,
        "Utility": 5,
        "Whimsy": 4,
        "Description": "Any stinky fish head works for brewing potions.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Flash Paper",
        "Combat": 6,
        "Utility": 9,
        "Whimsy": 1,
        "Description": "Combustible paper used during festivals for vivid displays.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gift of Shuritashi",
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Green Slime",
        "Combat": 8,
        "Utility": 6,
        "Whimsy": 7,
        "Description": "A weak acid favored by healers in topical ointments.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Gohaku Rice",
        "Combat": 3,
        "Utility": 2,
        "Whimsy": 3,
        "Description": "Lustrous and magical, grown in Gohaku with pride.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Land of Hot Water",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Hakuma Sapwood",
        "Combat": 5,
        "Utility": 1,
        "Whimsy": 9,
        "Description": "Fragrant wood burned at shrines for its mind-clearing incense.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields",
            "Gift of Shuritashi",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Hill Dragon Egg",
        "Combat": 9,
        "Utility": 3,
        "Whimsy": 8,
        "Description": "Pumpkin-sized acorns that hill dragons bury across the plains, marked by certain flowers.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Howler Fur",
        "Combat": 10,
        "Utility": 5,
        "Whimsy": 4,
        "Description": "Arcane fur used in wards against evil spirits, found near howler camps.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Itchi Beri",
        "Combat": 0,
        "Utility": 1,
        "Whimsy": 0,
        "Description": "Sweet berries causing rashes when handled, found on riverbanks.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Jumping Bonfire",
        "Combat": 6,
        "Utility": 4,
        "Whimsy": 10,
        "Description": "Flowers that mimic flames and shoot seeds when touched.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Jack-O’-Lantern Bits",
        "Combat": 2,
        "Utility": 1,
        "Whimsy": 3,
        "Description": "Pieces of carved pumpkins imbued with eldritch energies.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Kloth Leech",
        "Combat": 1,
        "Utility": 1,
        "Whimsy": 1,
        "Description": "Colorful leeches used to craft patchwork cloth.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Knobble Leaf Seaweed",
        "Combat": 1,
        "Utility": 1,
        "Whimsy": 1,
        "Description": "A sought-after seaweed for cooking and spellwork.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Kojo Root",
        "Combat": 2,
        "Utility": 2,
        "Whimsy": 0,
        "Description": "Versatile and earthy, used in herbal remedies.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands"
        ]
    },
    {
        "Name": "Monkey’s Coil",
        "Combat": 2,
        "Utility": 0,
        "Whimsy": 1,
        "Description": "Spiraling flower that requires great strength to open.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Mountain Ox Dung",
        "Combat": 10,
        "Utility": 3,
        "Whimsy": 8,
        "Description": "Used by skilled potion makers, dried ox dung has many applications.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands"
        ]
    },
    {
        "Name": "Mouse Tree Nut",
        "Combat": 4,
        "Utility": 6,
        "Whimsy": 5,
        "Description": "Nutritious and versatile for musical instruments.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands"
        ]
    },
    {
        "Name": "Narutomaki",
        "Combat": 0,
        "Utility": 0,
        "Whimsy": 0,
        "Description": "Celebratory fish cakes made for festivals.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Nobblewort",
        "Combat": 3,
        "Utility": 1,
        "Whimsy": 2,
        "Description": "Common lichen believed to ward off bad luck and spirits.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields",
            "Gift of Shuritashi",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Mellowort",
        "Combat": 3,
        "Utility": 3,
        "Whimsy": 3,
        "Description": "A calming herb used in teas and ointments, found in shaded forests.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Mandrake Root",
        "Combat": 8,
        "Utility": 2,
        "Whimsy": 1,
        "Description": "A humanoid-shaped root, highly prized in spellcasting and alchemy.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Mount Arbora"
        ]
    },
    {
        "Name": "Lovers Vine",
        "Combat": 1,
        "Utility": 1,
        "Whimsy": 1,
        "Description": "A flowering vine symbolizing eternal love, often gifted between partners.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Oporion Glass",
        "Combat": 1,
        "Utility": 10,
        "Whimsy": 0,
        "Description": "Durable glass used for sharpening blades, found underwater or in caves.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Land of Hot Water",
            "Mount Arbora",
            "Shallows"
        ]
    },
    {
        "Name": "Origami Crane",
        "Combat": 6,
        "Utility": 0,
        "Whimsy": 10,
        "Description": "Magical origami imbued with subtle energies, found in Sky Kite Valley.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Pink Candle Wax",
        "Combat": 2,
        "Utility": 2,
        "Whimsy": 0,
        "Description": "Wax used for minor blessings and prayers, common in rural shops.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gift of Shuritashi",
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Peeping Willow",
        "Combat": 0,
        "Utility": 0,
        "Whimsy": 1,
        "Description": "Eyeball-like flowers used as a red dye source, poisonous unless dried.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Mount Arbora"
        ]
    },
    {
        "Name": "Poison",
        "Combat": 9,
        "Utility": 8,
        "Whimsy": 0,
        "Description": "Potent substance used to enhance potions.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Land of Hot Water",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Pungent Sea Foam",
        "Combat": 5,
        "Utility": 7,
        "Whimsy": 5,
        "Description": "Toxic foam collected from corrupted seashores, requires skill to handle.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Shallows"
        ]
    },
    {
        "Name": "Pyramid Melon",
        "Combat": 2,
        "Utility": 2,
        "Whimsy": 2,
        "Description": "Tart fruit shaped like a pyramid, enjoyed by children for its seeds.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Queen's Dilemma",
        "Combat": 7,
        "Utility": 5,
        "Whimsy": 3,
        "Description": "A mushroom spread by Queen Okumi as a symbol of bravery and love.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": []
    },
    {
        "Name": "Raka Paste",
        "Combat": 4,
        "Utility": 10,
        "Whimsy": 0,
        "Description": "A glossy paste used for repairing pottery, stored with a wax seal.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Land of Hot Water",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Rattle Shoot",
        "Combat": 10,
        "Utility": 8,
        "Whimsy": 7,
        "Description": "Seed pods that rattle and scatter seeds when it rains.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Ribbon Rot",
        "Combat": 5,
        "Utility": 3,
        "Whimsy": 9,
        "Description": "Purple mold that destroys wood, found in damp forests.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Rust Crab",
        "Combat": 8,
        "Utility": 4,
        "Whimsy": 2,
        "Description": "Cantankerous crabs with strong claws, found in Obojima’s waters.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Shallows"
        ]
    },
    {
        "Name": "Scalefruit Rind",
        "Combat": 4,
        "Utility": 2,
        "Whimsy": 2,
        "Description": "Thick-skinned fruit with a sweet interior, found along coastlines.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Seashell",
        "Combat": 0,
        "Utility": 0,
        "Whimsy": 1,
        "Description": "Decorative shells used in pathways or sold in seaside shops.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Sea Water",
        "Combat": 1,
        "Utility": 0,
        "Whimsy": 0,
        "Description": "Essential for potion brewing, varies based on its source.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Sheep Dragon Wool",
        "Combat": 10,
        "Utility": 8,
        "Whimsy": 7,
        "Description": "Thick wool used for clothing and armor, dyed in vibrant colors.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields"
        ]
    },
    {
        "Name": "Snap Vine Sap",
        "Combat": 0,
        "Utility": 2,
        "Whimsy": 0,
        "Description": "Thick orange-red fluid from carnivorous plants.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands"
        ]
    },
    {
        "Name": "Spindle Leg Spider Webs",
        "Combat": 5,
        "Utility": 9,
        "Whimsy": 6,
        "Description": "Strong silky webs used by spiders in tall grass or bushes.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Spirit Root",
        "Combat": 6,
        "Utility": 0,
        "Whimsy": 9,
        "Description": "Believed to absorb bad spirits, found in rocky areas.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Mount Arbora"
        ]
    },
    {
        "Name": "Squid Ink",
        "Combat": 4,
        "Utility": 9,
        "Whimsy": 7,
        "Description": "Rich ink used in writing, dyeing, and cooking.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Shallows"
        ]
    },
    {
        "Name": "Tangle Weed",
        "Combat": 8,
        "Utility": 8,
        "Whimsy": 4,
        "Description": "Aquatic plant that tangles fishing lines.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Shallows"
        ]
    },
    {
        "Name": "Ube",
        "Combat": 2,
        "Utility": 6,
        "Whimsy": 5,
        "Description": "Staple food enjoyed in festivals and used in cooking.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Varrow",
        "Combat": 0,
        "Utility": 1,
        "Whimsy": 0,
        "Description": "Aromatic plant used in tea and potions, found near coasts.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Venus Fly Rat",
        "Combat": 9,
        "Utility": 2,
        "Whimsy": 8,
        "Description": "Carnivorous rodents with numbing saliva.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands"
        ]
    },
    {
        "Name": "Windbloom",
        "Combat": 6,
        "Utility": 7,
        "Whimsy": 0,
        "Description": "Miniature flowers drifting in clouds, originating from Mount Arbora.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields",
            "Land of Hot Water",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Witch’s Broom",
        "Combat": 3,
        "Utility": 0,
        "Whimsy": 5,
        "Description": "Magical plant used for flying brooms and potions.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Witch’s Eye Coral",
        "Combat": 1,
        "Utility": 0,
        "Whimsy": 10,
        "Description": "Coral associated with curses, found underwater.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Shallows"
        ]
    },
    {
        "Name": "Yugi Sap",
        "Combat": 0,
        "Utility": 4,
        "Whimsy": 2,
        "Description": "Sticky substance created by trees inhabited by spirits.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Gale Fields",
            "Gift of Shuritashi",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Yuma Shrub",
        "Combat": 5,
        "Utility": 8,
        "Whimsy": 4,
        "Description": "Shrub producing oil to repel insects.",
        "Rarity": "Common",
        "Source": "Obojima - Tales from the Tall Grass, pages 201-209",
        "Regions": [
            "Coastal Highlands",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Black Pearl",
        "Combat": 13,
        "Utility": 14,
        "Whimsy": 15,
        "Description": "Coveted for its dreamlike luster, believed to bring visions or help find objects. Found in hornshell clams guarded by fish folk warriors.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 210",
        "Regions": [
            "Shallows"
        ]
    },
    {
        "Name": "Black Cinnamon",
        "Combat": 16,
        "Utility": 12,
        "Whimsy": 11,
        "Description": "A rare magical trait in cinnamon trees, surrounded by legends and revered at Kuroki Temple.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 210",
        "Regions": [
            "Mount Arbora"
        ]
    },
    {
        "Name": "Bottle Cap (Supa-Fizz!)",
        "Combat": 11,
        "Utility": 13,
        "Whimsy": 16,
        "Description": "Contains latent magic, sought after by potion makers. Found in habitable areas of Obojima.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 210",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Crackling Jasper",
        "Combat": 17,
        "Utility": 15,
        "Whimsy": 12,
        "Description": "Contains restless fire spirits, creating sparks and tiny flames. Found near hot springs and lava tubes.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 210",
        "Regions": [
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Corrupted Seawater",
        "Combat": 17,
        "Utility": 11,
        "Whimsy": 14,
        "Description": "Purplish water with a sickly stench, found in eastern Obojima.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 210",
        "Regions": [
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Corrupted Slime",
        "Combat": 16,
        "Utility": 14,
        "Whimsy": 13,
        "Description": "Sticky slime with lethargic effects, cultivated from corrupted slime monsters.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 210",
        "Regions": [
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Hakumon’s Ramen Broth",
        "Combat": 12,
        "Utility": 14,
        "Whimsy": 17,
        "Description": "Legendary broth with potent effects. Sought after by chefs and potion makers.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 210",
        "Regions": [
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Dawn Petal",
        "Combat": 11,
        "Utility": 13,
        "Whimsy": 17,
        "Description": "Sacred petals admired for their shape, fragrance, and golden luster. Grown only where planted by nature spirits.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 210",
        "Regions": [
            "Gift of Shuritashi",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Dragon Root",
        "Combat": 14,
        "Utility": 15,
        "Whimsy": 16,
        "Description": "Valuable root that burns hotter than most woods and coals.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 211",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Essence of Ill Omen",
        "Combat": 16,
        "Utility": 12,
        "Whimsy": 11,
        "Description": "Ashy residue with potent magical properties, created from divination magic.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 211",
        "Regions": []
    },
    {
        "Name": "Essence of Glumbug",
        "Combat": 11,
        "Utility": 11,
        "Whimsy": 17,
        "Description": "Extracted glowing essence from glumbugs, found in stones and caves.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 211",
        "Regions": [
            "Coastal Highlands",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Feather Rock",
        "Combat": 13,
        "Utility": 17,
        "Whimsy": 15,
        "Description": "Paradoxical stone that defies gravity, often found in Gale Fields.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 211",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Fizzing Green",
        "Combat": 12,
        "Utility": 14,
        "Whimsy": 12,
        "Description": "Effervescent substance from spiral ferns, harvested by druids.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 211",
        "Regions": [
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Forge Slag",
        "Combat": 15,
        "Utility": 14,
        "Whimsy": 11,
        "Description": "Slag created by master blacksmiths, imbued with latent magic.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 211",
        "Regions": [
            "Mount Arbora"
        ]
    },
    {
        "Name": "Gargoyle Powder",
        "Combat": 15,
        "Utility": 16,
        "Whimsy": 13,
        "Description": "Ground-up petrified dragon eggs, used in petrification spells.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 211",
        "Regions": [
            "Land of Hot Water",
            "Mount Arbora"
        ]
    },
    {
        "Name": "Glow Worms of the Vale",
        "Combat": 12,
        "Utility": 15,
        "Whimsy": 14,
        "Description": "Wildly colored glow worms from the Vale of Abundance.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 211",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Happy Joy Cake",
        "Combat": 12,
        "Utility": 13,
        "Whimsy": 12,
        "Description": "Small, bite-sized magical treats loved across Obojima, distributed by trusted merchants.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 212",
        "Regions": [
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Kojobi Fruit",
        "Combat": 14,
        "Utility": 14,
        "Whimsy": 14,
        "Description": "Rare fruit celebrated in Kojobi Festivals, bringing communities together.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 212",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Laughing Moss",
        "Combat": 11,
        "Utility": 16,
        "Whimsy": 16,
        "Description": "Moss known for its magical laughter, harvested by naturalists.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 212",
        "Regions": [
            "Gift of Shuritashi",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Living Spud",
        "Combat": 14,
        "Utility": 12,
        "Whimsy": 17,
        "Description": "Rare animated potato revered for its magical properties.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 212",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Lions Blume",
        "Combat": 17,
        "Utility": 13,
        "Whimsy": 16,
        "Description": "Carnivorous flower with magical sap and teeth, found on high moors.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 212",
        "Regions": [
            "Coastal Highlands"
        ]
    },
    {
        "Name": "Magic Monk’s Rice Wine",
        "Combat": 16,
        "Utility": 12,
        "Whimsy": 15,
        "Description": "High-end spirit said to enhance intellect and vivid dreams.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 212",
        "Regions": []
    },
    {
        "Name": "Molted Lizard Skin",
        "Combat": 15,
        "Utility": 12,
        "Whimsy": 12,
        "Description": "Dried, sun-crisped lizard skin used in various magical applications.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 212",
        "Regions": [
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Mountain Snail",
        "Combat": 14,
        "Utility": 15,
        "Whimsy": 12,
        "Description": "Snails with protective shells used in magical protection spells.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 212",
        "Regions": [
            "Mount Arbora"
        ]
    },
    {
        "Name": "Mournshade",
        "Combat": 13,
        "Utility": 14,
        "Whimsy": 13,
        "Description": "Used by healers to absorb painful emotions, found in wetlands.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Munchanka Root",
        "Combat": 17,
        "Utility": 11,
        "Whimsy": 11,
        "Description": "Root of a deadly plant, dangerous to handle, found in arid regions.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Nakudama Spice",
        "Combat": 12,
        "Utility": 15,
        "Whimsy": 14,
        "Description": "Earthy spice made from zelk beans, rare and labor-intensive to produce.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Coastal Highlands",
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Night Thistle",
        "Combat": 14,
        "Utility": 17,
        "Whimsy": 16,
        "Description": "Eerie flower blooming in corrupted regions, associated with restless spirits.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Noodle Eel",
        "Combat": 13,
        "Utility": 12,
        "Whimsy": 16,
        "Description": "Pest with a refined taste for ramen, difficult to catch.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Opu Opu Spring Water",
        "Combat": 11,
        "Utility": 16,
        "Whimsy": 14,
        "Description": "Sacred healing water, scarce due to a troll's presence near the spring.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Mount Arbora"
        ]
    },
    {
        "Name": "Pok Pok Flakes",
        "Combat": 13,
        "Utility": 14,
        "Whimsy": 13,
        "Description": "Dried flakes from the pok pok fish, used for a culinary and magical kick.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Shallows"
        ]
    },
    {
        "Name": "Petrified Alligator",
        "Combat": 15,
        "Utility": 16,
        "Whimsy": 13,
        "Description": "Rare, magically potent remnants of alligators petrified by a druid.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Shallows",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Rubble from a Rubble Golem",
        "Combat": 16,
        "Utility": 11,
        "Whimsy": 15,
        "Description": "Magical debris from a rubble golem, radiates occasional motes of light.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": []
    },
    {
        "Name": "Shadowroot",
        "Combat": 15,
        "Utility": 13,
        "Whimsy": 12,
        "Description": "Root growing in perpetual shadow, must be kept away from light.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Gift of Shuritashi",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Scumweed",
        "Combat": 11,
        "Utility": 12,
        "Whimsy": 11,
        "Description": "Slimy, thick plant used for armor, found in corrupted coastal areas.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Sleeping Merchant",
        "Combat": 13,
        "Utility": 13,
        "Whimsy": 13,
        "Description": "Soporific water lily, grows only in specific ponds and lakes.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": []
    },
    {
        "Name": "Spark Plug",
        "Combat": 11,
        "Utility": 17,
        "Whimsy": 11,
        "Description": "Adds a small magical charge, used by potion makers.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Spirit Tea",
        "Combat": 11,
        "Utility": 11,
        "Whimsy": 17,
        "Description": "Legendary tea brewed in the Spirit Realm by master tea blender Chisuay.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Spring",
        "Combat": 14,
        "Utility": 17,
        "Whimsy": 15,
        "Description": "Spiral-shaped components prized by magic users, found in ancient ruins.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Sun Shroom",
        "Combat": 13,
        "Utility": 16,
        "Whimsy": 14,
        "Description": "Mushroom allowing prolonged wakefulness, with side effects of laughter.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, pages 213-214",
        "Regions": [
            "Gale Fields"
        ]
    },
    {
        "Name": "Toka Truffle",
        "Combat": 15,
        "Utility": 12,
        "Whimsy": 14,
        "Description": "Goal of every truffle hunter, prized for its pungency and deliciousness, found underground near oak trees.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 215",
        "Regions": [
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Vinyl Record",
        "Combat": 15,
        "Utility": 15,
        "Whimsy": 15,
        "Description": "Black disks believed to be an ancient way of recording knowledge, often melted to release magic.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 215",
        "Regions": [
            "Coastal Highlands",
            "Gale Fields",
            "Gift of Shuritashi",
            "Land of Hot Water",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Wolfenite",
        "Combat": 11,
        "Utility": 17,
        "Whimsy": 11,
        "Description": "Found high in mountain crevices or howler dens, a rare mineral valued by brewers.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 215",
        "Regions": [
            "Gale Fields",
            "Mount Arbora",
            "Brackwater Wetlands"
        ]
    },
    {
        "Name": "Wychwood",
        "Combat": 14,
        "Utility": 13,
        "Whimsy": 15,
        "Description": "Twisted branches used by spellcasters, grown in spirit-rich groves touched by moonlight.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 215",
        "Regions": [
            "Gift of Shuritashi"
        ]
    },
    {
        "Name": "Yellow Slime",
        "Combat": 17,
        "Utility": 11,
        "Whimsy": 11,
        "Description": "Cultivated from monsters, metabolizes venoms but exudes a nauseating stench.",
        "Rarity": "Uncommon",
        "Source": "Obojima - Tales from the Tall Grass, page 215",
        "Regions": [
            "Land of Hot Water"
        ]
    },
    {
        "Name": "Blossom of Spirit Vine",
        "Combat": 18,
        "Utility": 18,
        "Whimsy": 19,
        "Description": "A rare plant with arcane energies, found only in the Spirit Realm. Only one blossom exists at any moment.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 216",
        "Regions": []
    },
    {
        "Name": "Bottled Lightning",
        "Combat": 20,
        "Utility": 20,
        "Whimsy": 18,
        "Description": "Lightning bottled by wizards, a closely guarded magical feat.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 216",
        "Regions": []
    },
    {
        "Name": "Bubble Gum",
        "Combat": 18,
        "Utility": 19,
        "Whimsy": 20,
        "Description": "Rare bubble gum found in ruins or unwrapped, treasured for its whimsical nature.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 216",
        "Regions": []
    },
    {
        "Name": "Coal From The Wandering Line",
        "Combat": 19,
        "Utility": 19,
        "Whimsy": 20,
        "Description": "Mystical coal with blue iridescent flecks, falling from the Wandering Line.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 216",
        "Regions": []
    },
    {
        "Name": "Crimson Octopus Ink",
        "Combat": 19,
        "Utility": 18,
        "Whimsy": 19,
        "Description": "Highly prized ink with magical and artistic uses, guarded by rare crimson octopuses.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 216",
        "Regions": []
    },
    {
        "Name": "Dragon Fang of Yutro",
        "Combat": 20,
        "Utility": 18,
        "Whimsy": 19,
        "Description": "Legendary dragon fang scattered across Obojima, filled with powerful magic.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 216",
        "Regions": []
    },
    {
        "Name": "Fairy Willow",
        "Combat": 18,
        "Utility": 18,
        "Whimsy": 20,
        "Description": "Grows in the Spirit Realm, blooms soft catkins in early spring. Locations vary yearly.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 217",
        "Regions": []
    },
    {
        "Name": "Giant Koi Fish Scale",
        "Combat": 18,
        "Utility": 20,
        "Whimsy": 18,
        "Description": "Scales from giant flying koi, often seen as good omens and venerated in temples.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 217",
        "Regions": []
    },
    {
        "Name": "Golden Root",
        "Combat": 18,
        "Utility": 18,
        "Whimsy": 18,
        "Description": "Roots from ancient trees turned to gold, requiring forest spirits' cooperation to harvest.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 217",
        "Regions": []
    },
    {
        "Name": "Hand of Eryo",
        "Combat": 18,
        "Utility": 18,
        "Whimsy": 19,
        "Description": "Rare mushrooms in uppermost branches, highly coveted by foragers and spirits.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 217",
        "Regions": []
    },
    {
        "Name": "Irimbi Chrysalis",
        "Combat": 19,
        "Utility": 20,
        "Whimsy": 18,
        "Description": "Jade-green chrysalis from irimbi caterpillars, nearly impossible to find intact.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 217",
        "Regions": []
    },
    {
        "Name": "Lionfish Poison",
        "Combat": 20,
        "Utility": 0,
        "Whimsy": 0,
        "Description": "Potent poison from Lionfish King’s lineage, highly dangerous to procure.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 217",
        "Regions": []
    },
    {
        "Name": "Nokumai’s Frozen Breath",
        "Combat": 0,
        "Utility": 0,
        "Whimsy": 20,
        "Description": "Legendary snow dragon's breath, frozen eternally, sought after by arcane practitioners.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 218",
        "Regions": []
    },
    {
        "Name": "Orange Slime",
        "Combat": 20,
        "Utility": 20,
        "Whimsy": 20,
        "Description": "Highly combustible, volatile substance, handled with extreme caution.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 218",
        "Regions": []
    },
    {
        "Name": "Ota Lantern Oil",
        "Combat": 0,
        "Utility": 20,
        "Whimsy": 0,
        "Description": "Oil providing glimpses of the Spirit Realm, sold by the elusive Ota Clan.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 218",
        "Regions": []
    },
    {
        "Name": "Plumage of a Running Kirio",
        "Combat": 18,
        "Utility": 18,
        "Whimsy": 19,
        "Description": "Rare feathers of a mystical bird heralding elder spirits.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 218",
        "Regions": []
    },
    {
        "Name": "Ronin Neko Figurine",
        "Combat": 0,
        "Utility": 19,
        "Whimsy": 18,
        "Description": "Artifact depicting a heroic cat, limited and highly treasured.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 218",
        "Regions": []
    },
    {
        "Name": "Sage Arol’s Beetle",
        "Combat": 18,
        "Utility": 20,
        "Whimsy": 0,
        "Description": "Rare beetle used for potion crafting and legend of its mandibles as quills.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 218",
        "Regions": []
    },
    {
        "Name": "Starstone",
        "Combat": 18,
        "Utility": 0,
        "Whimsy": 19,
        "Description": "A glittering crystalline rock from an ancient comet, hunted for its magical shimmer.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 219",
        "Regions": []
    },
    {
        "Name": "Tears of the Moon",
        "Combat": 18,
        "Utility": 18,
        "Whimsy": 18,
        "Description": "Crystals formed from moonlight and mist, found on rare occasions.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 219",
        "Regions": []
    },
    {
        "Name": "Wufu Whisky",
        "Combat": 19,
        "Utility": 19,
        "Whimsy": 19,
        "Description": "Legendary whisky crafted by the mysterious master distiller Wufu, highly coveted and rare.",
        "Rarity": "Rare",
        "Source": "Obojima - Tales from the Tall Grass, page 219",
        "Regions": []
    }
];
