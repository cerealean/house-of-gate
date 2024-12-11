interface Potion {
    Number: number,
    Name: string,
    Type: 'Combat' | 'Whimsical' | 'Utility' | 'Custom',
    Rarity: 'Common' | 'Uncommon' | 'Rare',
    Source: string,
    Description: string
}

interface AllPotions {
    combat: Potion[],
    utility: Potion[],
    whimsical: Potion[],
    custom: Potion[],
}

export const potions: AllPotions = {
    "combat": [
        {
            "Number": 1,
            "Name": "Rabbit's Speed",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Within seconds of downing this potion, you feel a distinct lightness and spring in your step. For the next 10 minutes, your walking speed increases by 5 feet."
        },
        {
            "Number": 2,
            "Name": "Weapon Master's Elixer",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, you gain a sense of clarity and focus, and the swing of a certain weapon becomes second nature to you. For the next 24 hours, you gain proficiency with a melee weapon of your choice."
        },
        {
            "Number": 3,
            "Name": "Spirit Of Salyri",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Within seconds of downing this potion, you feel a distinct lightness and spring in your step. For the next 10 minutes, your walking speed increases by 5 feet. When you drink this potion, you gain a sense of clarity and focus, and the swing of a certain weapon becomes second nature to you. For the next 24 hours, you gain proficiency with a melee weapon of your choice. This potion is said to contain the spirit of Salyri, a great Obojiman warrior known for her fighting prowess. Anyone who drinks this potion gains a certain understanding of how to efectively wear armor in combat. For the next 24 hours, you gain proficiency with one type of armor of your choice."
        },
        {
            "Number": 4,
            "Name": "Beast Hide",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Drinking this potion thickens your skin and grows patches of fur all around your body. Frost that would normally freeze your skin instead melts on contact. For 1 minute, you have resistance to cold damage."
        },
        {
            "Number": 5,
            "Name": "Spirit Armor",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When poured on a creature that isn’t wearing armor, this potion covers the target with a magical force. For the next hour, the target has an AC of 15 while it isn’t wearing armor. This efect ends if the target dons armor."
        },
        {
            "Number": 6,
            "Name": "Displacement Field",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Drinking this silvery, glittering potion causes you to shimmer and flicker, making you appear to be standing next to your actual location. Until the start of your next turn, all attacks against you are made with disadvantage."
        },
        {
            "Number": 7,
            "Name": "Shepherd's Bane",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "It is said that this potion was first brewed in the Gale Fields by a young shepherd looking to protect their flock. The irony was not lost on them when they drank the potion and took on wolflike features. When you drink this potion, you grow claws which last for 1 hour. For the duration, your unarmed strikes using your claws deal slashing damage equal to 1d6 plus your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
        },
        {
            "Number": 8,
            "Name": "Bottled Bomb",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "It is said that this potion was first brewed in the Gale Fields by a young shepherd looking to protect their flock. The irony was not lost on them when they drank the potion and took on wolflike features. When you drink this potion, you grow claws which last for 1 hour. For the duration, your unarmed strikes using your claws deal slashing damage equal to 1d6 plus your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. When thrown at a point that you can see within 60 feet of you, this volatile liquid explodes. Each creature within 5 feet of the explosion must make a DC 14 Dexterity saving throw, taking 1d8 force damage on a failed save, or half as much damage on a successful one."
        },
        {
            "Number": 9,
            "Name": "Wonder Juice",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this multicolored potion, you instantly feel magical. For 1 minute, everything you are wearing or carrying is considered magical, allowing weapons you wield to overcome resistance and immunity to nonmagical attacks and damage."
        },
        {
            "Number": 10,
            "Name": "Candlecap",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After imbibing this potion, you gain lively flaming locks, which last for 1 hour and shed bright light in a 20-foot radius and dim light for an additional 20 feet. Once on each of your turns for the duration, you can cause an unarmed strike made with your head to deal an extra 1d4 fire damage. Additionally, you can take an action to cause the flame on your head to flare up and burst outward, dealing 2d4 fire damage to all other creatures within 5 feet of you; using this ability causes the efects of this potion to end early."
        },
        {
            "Number": 11,
            "Name": "Eagle's Vision",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, your eyes grow slightly larger and turn the golden color of an eagle. For the next minute, attacking at long range doesn’t impose disadvantage on your ranged weapon attack rolls."
        },
        {
            "Number": 12,
            "Name": "Paranoia",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, your eyes grow slightly larger and turn the golden color of an eagle. For the next minute, attacking at long range doesn’t impose disadvantage on your ranged weapon attack rolls. When you drink this potion, you gain heightened senses along with the sneaking suspicion that you are being stalked. For the next 8 hours, you can’t be surprised."
        },
        {
            "Number": 13,
            "Name": "Bottled Torch",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When uncorked, this potion spews a hot yellow flame from its bottle for 1 minute, which resembles the shape of a blade. For the duration, you can make a melee weapon attack with the fiery blade as if it were an improvised weapon. On a hit, the target takes 2d4 fire damage. The blade disappears early if it is submerged in water."
        },
        {
            "Number": 14,
            "Name": "Static Shock",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion makes you feel tingly as it charges you up with static electricity. Immediately after a creature touches you or hits you with a melee attack made with a metal weapon in the next 24 hours, you can use your reaction to send a charge of static electricity back at that creature, dealing 1d10 lightning damage to it. Once you do so, the efects of this potion end."
        },
        {
            "Number": 15,
            "Name": "Incoming!",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Upon drinking this potion, you become hyper-aware of threats from afar and your reflexes snap into action, empowering you to slip out of harm’s way or knock missiles aside. For 1 minute, you gain a +2 bonus to AC against ranged attacks."
        },
        {
            "Number": 16,
            "Name": "Lightning Breath",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Upon drinking this potion, you become hyper-aware of threats from afar and your reflexes snap into action, empowering you to slip out of harm’s way or knock missiles aside. For 1 minute, you gain a +2 bonus to AC against ranged attacks. For 24 hours after drinking this shimmering gold liquid, your voice gains a crackling quality to it and your breath sparks and sputters. For the duration, you can use a bonus action to exhale an arc of lightning at a creature you can see within 30 feet of you. The target must make a DC 12 Dexterity saving throw, taking 1d10 lightning damage on a failed save, or half as much damage on a successful one. Once you exhale this lightning, the efects of this potion end."
        },
        {
            "Number": 17,
            "Name": "Heroism",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this glowing red elixir, you gain advantage on the next attack roll you make within the next 24 hours."
        },
        {
            "Number": 18,
            "Name": "Slugskin",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Drinking this potion makes your skin thick, slippery, and rubbery. Spears and sharp objects that would normally pierce your skin have a hard time getting through this tough texture. For the next minute, you have resistance to piercing damage. While the potion is active, you can choose to exude a slime trail as part of your movement."
        },
        {
            "Number": 19,
            "Name": "Thunderbelch",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Upon ingesting this fiercely fizzing potion, roll a d4 to determine the number of rounds before you let forth a thunderous belch of epic proportions. On your turn that round, you must use your action to release the belch. Each creature other than you within 10 feet of you must make a DC 14 Constitution saving throw. On a failed save, a creature takes 3d8 thunder damage and is deafened until the end of your next turn. On a successful save, the creature takes half as much damage and isn’t deafened."
        },
        {
            "Number": 20,
            "Name": "Seeking Smoke",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When thrown at a creature that you can see within 30 feet of you, this shimmering liquid explodes, releasing a billowing cloud of smoke. The targeted creature must succeed on a DC 12 Dexterity saving throw, or be coated in a cloak of smoke for 1 minute. A creature coated in smoke has disadvantage on Dexterity (stealth) checks made to hide."
        },
        {
            "Number": 21,
            "Name": "Dancing Juice",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "You can coat one melee weapon with this potion. When you hit a creature with the coated weapon in the next hour, you can force it to make a DC 12 Constitution saving throw. On a failed save, the weapon is no longer coated in the potion, and the target begins to convulse in a manner that could be mistaken for an awkward, clumsy series of dance steps. The target’s speed is reduced to 0 until the end of its next turn, after which the convulsing ends."
        },
        {
            "Number": 22,
            "Name": "Prickleskin",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Drinking this potion causes spines to emerge all over your body. These spines lay flat but can be controlled by you to stand on end. When you successfully grapple a creature and as a bonus action while it remains grappled, you can deal 1d4 piercing damage to the target. The efects of this potion last for 1 minute."
        },
        {
            "Number": 23,
            "Name": "Tiny Bubbles",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Drinking this pink, bitter-tasting potion, causes hundreds of small, iridescent bubbles to emerge from your nose and mouth and fill a 20-foot cube that you can see within 30 feet of you. If the bubbles are left untouched, they float in place, remaining there for 1 hour. When a creature enters a space occupied by the bubbles for the first time on a turn, it must make a DC 13 Dexterity saving throw. On a failed save, a cacophony of popping erupts as the bubbles burst, dealing 1d6 thunder damage to all creatures inside the cube. The sound of the bubbles popping can be heard from a mile away."
        },
        {
            "Number": 24,
            "Name": "Claws Of The Crab King",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Your hands turn into a handsome set of powerful crab claws. For 1 minute, your unarmed strikes using the claws deal double damage to objects and structures, and you make grapple checks using them with advantage. The claws can’t wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell."
        },
        {
            "Number": 25,
            "Name": "Rubberskin",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this blue goo, your skin turns into a thick gray rubber. For 1 hour, you have resistance to lightning damage."
        },
        {
            "Number": 26,
            "Name": "Keening Voice",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you open this potion, a keening wail comes out of the bottle. When imbibed, this potion gives the drinker’s vocal cords a magic resonance. As a bonus action, you can make a ranged attack against a creature within 60 feet of you, using your Charisma (Performance) bonus for the attack bonus. The target is unafected if can’t hear you. On a hit, the target takes 1d6 thunder damage. The efect of this potion lasts for 1 hour."
        },
        {
            "Number": 27,
            "Name": "Kinetic Pop",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When poured over a nonmagical weapon, this potion fills the mundane item with kinetic energy, causing it to vibrate with anticipation. The next time you hit a creature with the weapon, the energy explodes, doubling the damage rolled by the weapon’s damage dice. The efects of this potion end after 1 hour or once the energy explodes."
        },
        {
            "Number": 28,
            "Name": "Healing Gas",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When thrown at a point that you can see within 60 feet of you, this volatile liquid explodes, releasing a crimson ball of gas. Each creature within 5 feet of the explosion regains a number of hit points equal to 1d4 + 1."
        },
        {
            "Number": 29,
            "Name": "Cinderskin",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this bubbling, black potion, your skin becomes encrusted with charcoal. For 1 hour, you have resistance to fire damage."
        },
        {
            "Number": 30,
            "Name": "Iron Mind",
            "Type": "Combat",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After imbibing this elixir, your eyes glow with a silveryblue hue. For 1 hour, you gain advantage on saving throws against being charmed and resistance to psychic damage."
        },
        {
            "Number": 31,
            "Name": "Gargoyle Hooch",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This gray liquid tastes like mud and makes your tongue numb. Within seconds of swallowing the potion, your skin turns to living stone. For the next hour, you gain a +2 bonus to AC, and your walking speed is reduced by 5 feet."
        },
        {
            "Number": 32,
            "Name": "Elixir Of Jipampa",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, you can feel your nervous system gain a boost of furtive energy from the rabbit spirit, Jipampa. Your pupils dilate and your reflexes become enhanced. For the next 24 hours you gain a +5 bonus to initiative rolls. Additionally, if a trigger would allow you to take a reaction, but you have already used your reaction this round, you can choose to take a second reaction; using this ability causes the efects of this potion to end early."
        },
        {
            "Number": 33,
            "Name": "Catspeed",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, you are overwhelmed by a warm lethargic feeling that rests like a blanket over an intense burst of energy you feel swirling inside of you. Once within the next 24 hours when you take the Attack action, you can make two additional attacks as part of that action. Once you do so, the efects of this potion end. While the potion is active, you gain the ability to purr like a cat."
        },
        {
            "Number": 34,
            "Name": "Durability",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, your skin becomes as tough as thick leather that, for a short time, repairs itself. For 1 minute, you gain 10 temporary hit points at the start of each of your turns."
        },
        {
            "Number": 35,
            "Name": "Fire Shield",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion burns like a hot tamale when you drink it and fills you with fiery strength. The next time you would take fire damage, you take no damage and instead regain a number of hit points equal to half the damage you would have taken. The efects of this potion last for 24 hours or until you regain hit points in this way."
        },
        {
            "Number": 36,
            "Name": "Tunnel Vision",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Drinking this potion causes you to hyperfixate on your strikes but potentially opens you to counterattacks. The efects of this potion last for 1 minute. For the duration, the first time you hit a target with a weapon attack on each of your turns, it deals an extra 1d12 damage of the same type. Until the potion’s efects end, you also take a −2 penalty to AC."
        },
        {
            "Number": 37,
            "Name": "Ratatam's Glowskin Elixer",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, your skin begins to shed dim light in a 10-foot radius around you. As a bonus action, you can choose to intensify this light—shedding bright light in a 10-foot radius, and dim light for an additional 10 feet—or diminish the intensity again. Additionally, you can take an action to produce a flare of blinding light around you. Each creature within 30 feet of you that can see must succeed on a DC 16 Constitution saving throw or become blinded for 1 minute. An afected creature can repeat the saving throw at the end of each of its turns, ending the efect on itself on a success. The efects of this potion last for 8 hours or until you use the flare."
        },
        {
            "Number": 38,
            "Name": "Don't Hit Me Juice",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When thrown at a creature you can see within 30 feet of you, this bright pink elixir breaks, covering the creature in juice. The target must succeed on a DC 16 Wisdom saving hrow or be pacified for 1 minute. A pacified creature can’t attack, cast a spell that afects an enemy, or deal damage to another creature. The target can repeat the saving throw at the end of each of its turns, ending the efect on itself on a success."
        },
        {
            "Number": 39,
            "Name": "Invulnerability",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, your skin begins to shed dim light in a 10-foot radius around you. As a bonus action, you can choose to intensify this light—shedding bright light in a 10-foot radius, and dim light for an additional 10 feet—or diminish the intensity again. Additionally, you can take an action to produce a flare of blinding light around you. Each creature within 30 feet of you that can see must succeed on a DC 16 Constitution saving throw or become blinded for 1 minute. An afected creature can repeat the saving throw at the end of each of its turns, ending the efect on itself on a success. The efects of this potion last for 8 hours or until you use the flare. When thrown at a creature you can see within 30 feet of you, this bright pink elixir breaks, covering the creature in juice. The target must succeed on a DC 16 Wisdom saving throw or be pacified for 1 minute. A pacified creature can’t attack, cast a spell that afects an enemy, or deal damage to another creature. The target can repeat the saving throw at the end of each of its turns, ending the efect on itself on a success. When you open this potion, it bursts forth with a symphonic fanfare. Until the start of your next turn, you are immune to all damage. On your next turn, you can’t move or take actions, as a wave of lethargy sweeps over you."
        },
        {
            "Number": 40,
            "Name": "Bottled Bind",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When thrown at a creature you can see within 30 feet of you, this thick mudlike potion breaks, covering the creature in tacky glue. The target must succeed on a DC 15 Strength saving throw or become restrained for 1 minute. The restrained target can use its action to make a DC Combat 15 Strength check. On a success, the target is no longer restrained."
        },
        {
            "Number": 41,
            "Name": "Respiratory Distress",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion reacts instantly with air, rapidly expanding into a 15-foot-radius cloud of irritating gas when exposed. You can throw it at a point you can see within 60 feet of you, causing it to break open and release the cloud there. Each creature within the cloud when it appears must make a DC 15 Constitution saving throw. On a failed save, a creature spends its reaction coughing and snorting and its concentration is broken if it was concentrating."
        },
        {
            "Number": 42,
            "Name": "Pumpkin Patch Guard",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this warming harvest beverage transforms your head into a Jack-O’-Lantern. From your newly formed eyes you cast a cone of glowing light, which causes creatures in a 15-foot cone to be under the efects of the Faerie Fire* spell. At the start of each of your turns while the efects last, you decide which way the cone faces and whether the cone is active. The efect of the potions lasts for 1 minute."
        },
        {
            "Number": 43,
            "Name": "Sheep Dragon Brew",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "One swig of this hearty potion will see you growing a thick coat of sheep dragon wool all around your body. Besides keeping you warm, it aids your survival and protects you from the cold. For the duration your AC increases by 1, and you gain resistance to cold damage. The efects of the potion last for 1 hour."
        },
        {
            "Number": 44,
            "Name": "Enhanced Static Shock",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion makes you feel tingly as it charges you up with static electricity. Immediately after a creature touches you or hits you with a melee attack made with a metal weapon in the next 24 hours, you can use your reaction to send a charge of static electricity back at that creature, dealing 3d10 lightning damage to it. Once you do so, the efects of this potion end."
        },
        {
            "Number": 45,
            "Name": "Enhanced Lightning Breath",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "For 24 hours after drinking this shimmering gold liquid, your voice gains a crackling quality to it and your breath sparks and sputters. For the duration, you can use a bonus action to exhale an arc of lightning at a creature you can see within 30 feet of you. The target must make a DC 16 Dexterity saving throw, taking 3d10 lightning damage on a failed save, or half as much damage on a successful one. Once you exhale this lightning, the efects of this potion end."
        },
        {
            "Number": 46,
            "Name": "Enhanced Bottled Bomb",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When thrown at a point that you can see within 60 feet of you, this volatile liquid explodes. Each creature within 5 feet of the explosion must make a DC 16 Dexterity saving throw, taking 3d8 force damage on a failed save, or half as much damage on a successful one."
        },
        {
            "Number": 47,
            "Name": "Wrathful Spirit",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, you feel the essence of a long-dead spirit overwhelm you. You feel on edge and have an undertone of rage that boils below the surface. Roll 2d8. For the duration, whenever you cast a spell, you can cause one target that took damage from it to take extra force damage equal to the number rolled. The efects of this potion last for 1 minute."
        },
        {
            "Number": 48,
            "Name": "Rapid Withdrawal",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, motes of pink light erupt from your body and orbit around you. For 1 minute, whenever you take damage from a hostile creature, you can use your reaction to teleport up to 15 feet to an unoccupied space you can see."
        },
        {
            "Number": 49,
            "Name": "Life-steal",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This dangerous and disliked potion transforms when used. As an action, you can uncork the potion and point it toward a creature within 10 feet of you. The target takes 3d6 necrotic damage, and the potion transforms into a healing elixir. A creature that consumes this elixir regains a number of hit points equal to the necrotic damage dealt."
        },
        {
            "Number": 50,
            "Name": "Demonskin",
            "Type": "Combat",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Uncorking this potion, you are immediately assaulted with a powerfully pungent, acrid odor. Once you drink it, your skin takes on a glowing burgundy hue and your eyes turn a sickly crimson. For 1 minute, you gain a +2 bonus to AC and resistance to cold, fire, and lightning damage, as well as bludgeoning, piercing, and slashing damage from nonmagical attacks. Until the potion’s efects end, your creature type changes to Demon (Fiend)."
        },
        {
            "Number": 51,
            "Name": "Withered Will",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After drinking this light and dewy potion, you gain the ability to breathe a cloud of withering vapor. For the next minute, you can use a bonus action to exhale a cloud in a 60-foot cone. Each creature in that area must make a DC 17 Constitution saving throw. On a failed save, a creature’s speed is halved, it can’t take reactions, and it has disadvantage on attack rolls until the start of your next turn. At the start of your next turn, roll a d6. You regain the use of this ability on a roll of 4–6."
        },
        {
            "Number": 52,
            "Name": "Astounding Vigor",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this hearty potion, you feel the strongest and healthiest you’ve ever felt. For the duration, you gain a number of temporary hit points equal to your hit point maximum. The efects of this potion last for 24 hours or until these temporary hit points are lost."
        },
        {
            "Number": 53,
            "Name": "Many Hands",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion you can call upon an ancient and devious spirit known as Many Hands. When you do, a host of long, spindly, spectral arms reach out from your body. Anyone who can see you when the hands first emerge must succeed on a DC 19 Wisdom saving throw or be frightened until the start of your next turn; creatures that are friendly to you have advantage on this save. Additionally, the arms lash out from you, clawing at all other creatures within 20 feet of you. Each creature in that area must make a DC 19 Constitution saving throw. On a failed save, a target takes 10d6 necrotic damage and can’t regain hit points until the start of your next turn. On a successful save, the creature takes half as much damage, but sufers no other efect."
        },
        {
            "Number": 54,
            "Name": "Epic Bottled Bomb",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When thrown at a point that you can see within 60 feet of you, this volatile liquid explodes. Each creature within 30 feet of the explosion must make a DC 19 Dexterity saving throw, taking 20d6 force damage on a failed save, or half as much damage on a successful one."
        },
        {
            "Number": 55,
            "Name": "Essence Of Great Rivers",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This crystal clear potion captures the essence of the four great river spirits Mu, Go, Yon, and Din. For the next 24 hours, you can call on their strength to aid you. If you fail a saving throw, you can choose to succeed instead. You can do so three times before the magic of the potion fades."
        },
        {
            "Number": 56,
            "Name": "Carla Cackletooth's Corruption Cocktail",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion was invented by none other than the legendary Carla Cackletooth, a witch of considerable potion making prowess. When poured out, it summons 10 corrupted muks, which are at your beck and call and under your control until destroyed."
        },
        {
            "Number": 57,
            "Name": "Hunter's Speed",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When this amber potion is consumed, you gain the attributes of the Hunter, one of the great beasts of Obojima. Roll a d4. For the duration, you gain a flying speed of 90 feet, and whenever you take the Attack action, you can make an additional number of attacks equal to 1 + the number rolled on the d4. The efects of this potion last for 1 minute."
        },
        {
            "Number": 58,
            "Name": "Hero's Blade",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When poured over a weapon, this heroic elixir stains it blue and causes it to shimmer as if it were a gemstone reflecting light. For the next minute, the weapon gains a +3 bonus to attack and damage rolls. Until this efect ends, creatures hit by this weapon don’t benefit from any damage immunities or resistances they have, if any, for 1 minute."
        },
        {
            "Number": 59,
            "Name": "Severed Reaction",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion was invented by none other than the legendary Carla Cackletooth, a witch of considerable potion making prowess. When poured out, it summons 10 corrupted muks, which are at your beck and call and under your control until destroyed. When this amber potion is consumed, you gain the attributes of the Hunter, one of the great beasts of Obojima. Roll a d4. For the duration, you gain a flying speed of 90 feet, and whenever you take the Attack action, you can make an additional number of attacks equal to 1 + the number rolled on the d4. The efects of this potion last for 1 minute. When poured over a weapon, this heroic elixir stains it blue and causes it to shimmer as if it were a gemstone reflecting light. For the next minute, the weapon gains a +3 bonus to attack and damage rolls. Until this efect ends, creatures hit by this weapon don’t benefit from any damage immunities or resistances they have, if any, for 1 minute. Consuming this foggy brew gives you a headache you can never quite alleviate. While under the efects of this potion, you can take two reactions each round instead of one. Each time you take a second reaction, you lose a number of hit points equal to half your level. This potion’s efect is permanent, and it doesn’t count against the number of potions you can have afecting you at once."
        },
        {
            "Number": 60,
            "Name": "Dragon Frog Transmutation",
            "Type": "Combat",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After guzzling down this froggy potion, you turn into an Ancient Dragon Frog, as if by the true polymorph* spell. This transformation lasts for 1 minute, or 10 minutes if a Dragon Fang of Yutro was used when brewing this potion."
        }
    ],
    "utility": [
        {
            "Number": 1,
            "Name": "Sensorius Maximus",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This efervescent green potion tastes like an old sock. When imbibed, it heightens all the senses with an expansive, almost euphoric feeling. For the next hour, you gain a +3 bonus to Wisdom (Perception) checks."
        },
        {
            "Number": 2,
            "Name": "Flip And Skip",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This blue potion sparkles and fizzes when opened and makes your tongue tingle when imbibed. For the next hour, you gain a +3 bonus to Dexterity (Acrobatics) checks."
        },
        {
            "Number": 3,
            "Name": "Brute Brew",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Drinking this brownish broth fills your sinews with ogreish power. For the next hour, you gain a +3 bonus to Strength (Athletics) checks."
        },
        {
            "Number": 4,
            "Name": "Animal Affinity",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion has a violet color and smells like a spring meadow. When you drink it, you become very calm and are able to sense the subtle cues from all kinds of animals. For the next hour, you gain a +3 bonus to Wisdom (Animal Handling) checks."
        },
        {
            "Number": 5,
            "Name": "Detective's Tonic",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This subtle bourbon-flavored potion burns when consumed. For the next hour, you gain a +3 bonus to Intelligence (Investigation) checks."
        },
        {
            "Number": 6,
            "Name": "Cave Diver",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This subtle bourbon-flavored potion burns when consumed. For the next hour, you gain a +3 bonus to Intelligence (Investigation) checks. When poured on your hands and feet, they temporarily become stained with a deep indigo color. For the next 10 minutes, you gain the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You also gain a climbing speed equal to your walking speed."
        },
        {
            "Number": 7,
            "Name": "Perfect Memory",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "For 1 hour after drinking this potion, everything you see and hear is recorded perfectly in your memory. You can recall these memories up to 24 hours later. After that, all the memories begin to fade with only the most memorable parts remaining."
        },
        {
            "Number": 8,
            "Name": "Eyes Of Akibu",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When this potion is poured over your eyes, your longrange vision enhances. For 4 hours, you can see up to 300 feet away as if looking at something one-tenth as far away from you."
        },
        {
            "Number": 9,
            "Name": "Glowskin",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Ironically, glowskin potions are jet black in color. For 4 hours after drinking this potion, your skin sheds bright light in a 30-foot radius and dim light for an additional 30 feet."
        },
        {
            "Number": 10,
            "Name": "Tiny Telekinesis",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, you feel a slight pressure behind your eyes as though something is pushing on the inside of your skull trying to get out. For the next minute, you gain the ability to move an inanimate object within 60 feet of you with your mind. The object can be no larger than 5 inches in diameter and weigh no more than 1 pound, and it can’t be worn or carried. Moving an object in this way requires an action. You can move the object up to 30 feet in any direction, and you can’t move it more than 60 feet away from you."
        },
        {
            "Number": 11,
            "Name": "Irresistible Charm",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Once imbibed, a tingling sensation builds within you, bubbling up into a giddy euphoria of confident charm. For the next 10 minutes, you gain expertise in the Persuasion skill, which means you can add twice your proficiency bonus to any ability check you make with it."
        },
        {
            "Number": 12,
            "Name": "Pathseeking",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion is brewed for the specific task of detecting tracks left by a secret path potion. These tracks appear to you as glowing footprints made with uncanny detail. You also gain the ability to see into the Spirit Realm (Ethereal Plane). The efects of this potion last for 1 hour."
        },
        {
            "Number": 13,
            "Name": "Iron Belly",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Legend has it that Obojiman rangers would use this potion during long treks in the wilderness so they could eat unknown roots and fungi as well as drink from lakes and lowland streams without fear of illness. When imbibed, you gain 5 temporary hit points and resistance to poison damage for 1 hour."
        },
        {
            "Number": 14,
            "Name": "Face Of Fugari",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Fugari is a figure of legend, a dragon frog who would glower at his subjects, filling them with dread at being swallowed whole. Drinking this potion gives you a grim, bullfroggish demeanor which strikes fear into those who view you. For the next minute, you have advantage on Charisma (Intimidation) checks."
        },
        {
            "Number": 15,
            "Name": "Duck Foot",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this brackish-smelling potion, your hands and feet begin to tingle. Within seconds, they turn a bright orange and become webbed like a mallard’s feet. For the next hour, you gain a swimming speed of 40 feet and are able to make a very convincing quacking sound."
        },
        {
            "Number": 16,
            "Name": "Potion Of Fog",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, a billow of thick fog pours from your mouth, duplicating the efect of the Fog Cloud* spell (no concentration required) centered on you. The cloud lasts for 1 hour, and it moves with you, remaining centered on you. As an action, you can expel all remaining fog from your stomach, causing it to remain centered on that space for the duration. The fog produces a scent of your choice."
        },
        {
            "Number": 17,
            "Name": "Secret Path",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When this potion is applied to a pair of boots, it allows their wearer to leave a trail of magical tracks that are invisible to the naked eye. This trail is only visible to a creature who can see invisible objects (such as one benefiting from see invisibility or truesight) or has imbibed a pathseeking potion. When this potion is brewed, the creator can choose the color of the tracks. The boots leave tracks for 24 hours, and the tracks last for one month before fading from view."
        },
        {
            "Number": 18,
            "Name": "Grandma's Turnip Soup",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion tastes like a soup made with love. When you consume it during a short rest, you can roll 1d4 Hit Dice (adding your Constitution modifier to each and regaining hit points equal to the total) without expending them."
        },
        {
            "Number": 19,
            "Name": "Herbalist's Aid",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Drinking this highly sought-after potion grants you a unique sense helpful for detecting ingredients. For the next hour, you gain a +3 bonus to all ability checks made to locate an ingredient."
        },
        {
            "Number": 20,
            "Name": "Homeward Tonic",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion tastes like a soup made with love. When you consume it during a short rest, you can roll 1d4 Hit Dice (adding your Constitution modifier to each and regaining hit points equal to the total) without expending them. Drinking this highly sought-after potion grants you a unique sense helpful for detecting ingredients. For the next hour, you gain a +3 bonus to all ability checks made to locate an ingredient. This fiery red elixir smells of home and drinking it gives a sensation of comfort when consumed. For the next 24 hours, you always know the direction of the place you consider home, provided it is on the same plane of existence."
        },
        {
            "Number": 21,
            "Name": "Soft Paw",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this liquorice-flavored potion turns your hands and feet into fur-covered paws. For the next 10 minutes, you have advantage on Dexterity checks."
        },
        {
            "Number": 22,
            "Name": "Potion Of Healing Touch",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When this glowing blue potion is poured on your hands, it gives you the ability to heal. As a bonus action, you can touch a creature, causing it to regain 2d4 hit points. This potion’s efects last 1 hour or until you have used this ability."
        },
        {
            "Number": 23,
            "Name": "Cat's Eye",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you imbibe this potion, your eyes become catlike, and you can choose their color. For the next hour, you gain darkvision out to a range of 60 feet. If you already have darkvision from another source, its range increases by 30 feet."
        },
        {
            "Number": 24,
            "Name": "Liquid Mending",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you imbibe this potion, your eyes become catlike, and you can choose their color. For the next hour, you gain darkvision out to a range of 60 feet. If you already have darkvision from another source, its range increases by 30 feet. Also known as “craftsman in a bottle,” this well-loved potion is found in most homes and shops. You can pour this potion over an object to repair a single break or tear in it, as if by the Mending* spell."
        },
        {
            "Number": 25,
            "Name": "Liquid Lockpick",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Although frowned upon in many villages, this useful potion is still sought after by many islanders for both wholesome and nefarious reasons. You can pour the potion into a lock, loosening the mechanism inside and decreasing the DC to pick it by 1d4. Once a lock’s DC is reduced by this potion, its DC can’t be reduced by another liquid lockpick potion. The efects of this potion last for 1 hour."
        },
        {
            "Number": 26,
            "Name": "Language Lore",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This grayish potion tastes like chewed up paper. For 1 hour after drinking it, you understand the literal meaning of any spoken language that you hear."
        },
        {
            "Number": 27,
            "Name": "Pig Snout",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After drinking this pink pastel potion, there is a brief uncomfortable transformation, where the imbiber grows a beautiful, snufing pig snout. For the next hour, you become very fond of trufes, perhaps even to the point of belligerence, and you have advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
            "Number": 28,
            "Name": "Machine Oil",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When poured over a machine that is in working condition, this dark black liquid powers up the device, allowing it to function as if it were whelmed by a spirit or activated by the Jolt* spell. The machine stays powered by this potion for 1 minute."
        },
        {
            "Number": 29,
            "Name": "Potion Of Soft Steps",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this frothy brew, you float an inch of the ground and walk on a cushion of air. For the next 10 minutes, you gain a +2 bonus to Dexterity (Stealth) checks, and you leave no discernible tracks."
        },
        {
            "Number": 30,
            "Name": "Liquid Cat",
            "Type": "Utility",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This lively swirling concoction transforms and solidifies into a friendly cat when poured out. The cat serves you as a familiar, as if from the Find Familiar* spell. The cat disappears after 24 hours."
        },
        {
            "Number": 31,
            "Name": "Twin Vision",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion must be shared with another creature, each of them ingesting half of the potion. When the second half of the potion is consumed, the first creature gains the ability to see through the eyes of the second creature, gaining the benefits of any special senses that creature has. While seeing in this way, the first creature is blind with regard to its own senses. Either creature can use its action to stop shared vision or reactivate it.” This ability lasts for 8 hours, and it can’t be used if the creatures are more than 1 mile apart."
        },
        {
            "Number": 32,
            "Name": "Spirit Repellent",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion can either be imbibed or poured on a 1-foot square causing the nearby area to become repulsive to spirits. Any spirit that has a challenge rating of 5 or lower within 30 feet of you or the square must make a DC 15 Charisma saving throw. On a failed save, the spirit is teleported to a random unoccupied space that is 35 feet away from you or the square, and can’t willingly move to a space within range for 1 minute. A spirit that hasn’t made this save must immediately do so if it moves within range, becoming afected by the repellant for the duration on a failed save."
        },
        {
            "Number": 33,
            "Name": "Essence Of The River Spirit",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This small, stoppered vial contains a clear liquid that shimmers with a faint blue light. When the vial is opened, you can pour the liquid into a small pool of water, such as a bath or hot spring, transforming it into a healing pool. A creature that soaks in the pool for at least 10 minutes regains 4d4 + 4 hit points. The pool loses its magic after 1 hour or once six creatures have benefited from this efect."
        },
        {
            "Number": 34,
            "Name": "Potion Of Freezing",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Pouring this grayish blue potion into any liquid will cause that liquid to freeze solid for 1 hour, after which it begins to thaw as normal. This efect can freeze no more than a 20-foot cube of liquid."
        },
        {
            "Number": 35,
            "Name": "Potion Of Attunement",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "As an action, you can pour a drop of this potion onto a magic item that requires attunement and drink the rest. Once you do so, you instantly become attuned to that item."
        },
        {
            "Number": 36,
            "Name": "Water Breathing",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This tropical fruity elixir tastes just as delicious as your favorite juice. For the duration, you can breathe underwater. The efects of the potion last for 1 hour."
        },
        {
            "Number": 37,
            "Name": "Liquid Dispel",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When thrown at a creature, object, or magical efect within 30 feet of you, this potion breaks, releasing its contents on the target. Any spell of 3rd level or lower on the target immediately ends."
        },
        {
            "Number": 38,
            "Name": "Pocket Stomach",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When imbibed, your stomach temporarily functions as a bag of holding, allowing you to store any object you can fit in your mouth inside its extradimensional space. The efects of this potion last for a 1 hour, after which you throw up anything consumed."
        },
        {
            "Number": 39,
            "Name": "Liquid Arcana",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "The brewer of this potion rolls a d4 to determine the maximum level of the spell slot it can restore. When you drink it, you immediately regain an expended spell slot of that level or lower."
        },
        {
            "Number": 40,
            "Name": "Arcane Solvent",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When this potion is applied to a magic item, any creature that was attuned to it is no longer attuned. If the item is being worn or carried by the attuned creature, it can resist the efects of this potion with a successful DC 13 Wisdom saving throw."
        },
        {
            "Number": 41,
            "Name": "Gardner's Solution",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When this oily, greenish potion is rubbed on a plant, the plant instantly grows to full maturity. If the plant is too big for the space—such as a redwood tree—it will stop growing once it has reasonably filled the space. If the potion is imbibed, it does nothing, but it tastes like maple syrup."
        },
        {
            "Number": 42,
            "Name": "Potion Of Exertion",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When this oily, greenish potion is rubbed on a plant, the plant instantly grows to full maturity. If the plant is too big for the space—such as a redwood tree—it will stop growing once it has reasonably filled the space. If the potion is imbibed, it does nothing, but it tastes like maple syrup. When you drink this potion, you gain a surge of manic energy allowing you to take another action this round at initiative count 1."
        },
        {
            "Number": 43,
            "Name": "Breakfast In A Bottle",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "The brewer of this potion rolls a d4 to determine the number of servings it creates. When poured out, this liquid quickly forms into an appetizing breakfast, such as some bread or pancakes. A creature that consumes a serving of it feels satiated for the day, and its exhaustion level is reduced by 1. It takes 1 minute to consume one serving, and once a creature benefits from this efect, it can’t do so again until it finishes a long rest. The food spoils after 24 hours, losing its magic."
        },
        {
            "Number": 44,
            "Name": "Twin Telepathy",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion must be shared with another creature, each of them ingesting half of the potion. When consumed, the potion allows the imbibers to communicate telepathically across any distance. The efects of this potion last for 24 hours."
        },
        {
            "Number": 45,
            "Name": "Potion Of Reprieve",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When imbibed, this potion ofers temporary relief from an ill efect. For the next hour, you gain the benefit of an efect of your choice from the Greater Restoration* spell. When this potion’s efects end, you lose the chosen benefit, causing the ill efect to return."
        },
        {
            "Number": 46,
            "Name": "Uncanny Focus",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "For 1 minute after imbibing this purplish liquid, you have advantage on Constitution saving throws made to maintain concentration on spells. In addition, becoming incapacitated doesn’t cause you to lose concentration on a spell."
        },
        {
            "Number": 47,
            "Name": "Meditative Trance",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This violet colored potion smells like lavender and citrus. The next time you take a short rest after ingesting it, you enjoy a deep, dreamless sleep, granting you the benefits of a long rest, even if you already benefited from a long rest in the past 24 hours."
        },
        {
            "Number": 48,
            "Name": "Potion Of Holistic Wellness",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you uncork this potion of scintillating liquid, your senses are calmed with the smell of vanilla and honey along with a warm spring breeze. When imbibed, you feel like your whole soul is embraced in a loving hug, causing you to regain 4d8 + 4 hit points, and removing any conditions afecting you, excluding the grappled, prone, or restrained condition."
        },
        {
            "Number": 49,
            "Name": "Sharp Mind",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, your mind becomes charged with magical energy. For the next 8 hours, you gain a +2 bonus to Intelligence saving throws, and you gain resistance to psychic damage. In addition, you can devour whole tomes of text, reading 10 times faster than normal."
        },
        {
            "Number": 50,
            "Name": "Mind Over Might",
            "Type": "Utility",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this chalky elixir turns an intellectual scholar into an athlete. For the next 24 hours, you can use your Intelligence or Wisdom modifier (your choice), in place of your Strength or Dexterity modifier, when making Strength (Athletics) and Dexterity (Acrobatics) checks. You also gain proficiency in those skills for the duration, if you don’t already have it."
        },
        {
            "Number": 51,
            "Name": "Simulacrum Elixir",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this numbing concoction sends you into a deep sleep. When you awake, your mind has taken over a perfect clone of yourself. The clone appears to be the same as you in every way, but it has half of your hit point maximum and is formed without any equipment other than mundane clothes. Otherwise, the clone uses all of your statistics, except that it is a construct. The clone lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots. While the clone exists, your original body stays in a constant deep sleep, where it requires no nourishment, but it can still sufer damage as normal. The clone lasts until you dismiss it or it drops to 0 hit points, at which point it disappears in a cloud of butterflies. When it disappears, your mind returns to your original body."
        },
        {
            "Number": 52,
            "Name": "Hidden Hand",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this grainy potion heightens your senses and gives you a sunken feeling of untapped strength. For the next 24 hours, you gain telekinetic powers as if you were under the efects of the Telekinesis* spell."
        },
        {
            "Number": 53,
            "Name": "Last Resort",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When this potion is downed, a crystalline cocoon begins forming around you. The cocoon becomes fully formed at the start of your next turn, and you can’t be contacted or interacted with in any way. The cocoon is immune to all damage, and it can’t be moved or destroyed by any means short of a wish spell. While in the cocoon, you are in stasis and don’t need to eat or breathe. The cocoon lasts between 1 hour and 4 decades. Roll on the table below to determine the measurement of time for the efect, from hours to decades. Then roll a d4 to determine the exact amount of time the cocoon exists. Measurement of Time: 1: Hours 2: Days 3: Weeks 4: Months 5: Years 6: Decades"
        },
        {
            "Number": 54,
            "Name": "Elixir Of Echoes",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, you gain the ability to cast a spell that was cast by another creature within the last minute. The spell has to have been cast within 100 feet of you, and you must be aware that the spell was cast. Once imbibed, you can cast the copied spell once within the next minute, without expending a spell slot or material components. If the spell requires a saving throw or spell attack roll, you use the DC and attack bonus of the creature that originally cast the spell."
        },
        {
            "Number": 55,
            "Name": "Blessing Of The Moon Spirit",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After drinking this potion, which glows like a full moon, you gain a strange and wondrous afnity for the moon’s light. This potion’s efects are permanent. While moonlight touches you, you can use a bonus action to expend three hit dice. You can use this ability once per long rest. When you first consume this potion, your hit point maximum is increased by 2d10. This doesn’t count against the number of potions you can have afecting you at once."
        },
        {
            "Number": 56,
            "Name": "Bowark's Bombastic Beer",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion was discovered by accident by the great brewmaster, Bowark. Unsealing it fills the room with a strong scent of hops and yeasty goodness. When consumed this beer gives you a warm euphoric calm that makes you feel like everything will be alright. Until this potion’s efects end, you can choose to reroll any ability check, attack roll, or saving throw you make. You can reroll in this way a total of 7 times before the potion wears of."
        },
        {
            "Number": 57,
            "Name": "Unified Might",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this potion produces a burning sensation that fills your body, leaving you with newfound intellectual and physical strength. For the next hour, two ability scores of your choice increase to 25."
        },
        {
            "Number": 58,
            "Name": "Umi's Powerful Undertow",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potent elixir allows the drinker to enhance their aquatic spells with the ocean’s wrath. For the next hour, when you cast a spell that produces or manipulates water in some capacity, the spell is cast as if using a spell slot of one level higher. Additionally, spells that use water to deal damage to a creature or object, deal an extra 2d12 bludgeoning damage. Alternatively, you can throw the potion into an unoccupied space within 30 feet of you, breaking the glass and summoning three water elementals in the nearest unoccupied spaces. These creatures are under your control until destroyed."
        },
        {
            "Number": 59,
            "Name": "Island Nectar",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potent elixir allows the drinker to enhance their aquatic spells with the ocean’s wrath. For the next hour, when you cast a spell that produces or manipulates water in some capacity, the spell is cast as if using a spell slot of one level higher. Additionally, spells that use water to deal damage to a creature or object, deal an extra 2d12 bludgeoning damage. Alternatively, you can throw the potion into an unoccupied space within 30 feet of you, breaking the glass and summoning three water elementals in the nearest unoccupied spaces. These creatures are under your control until destroyed. Consuming this sweet potion gives you a calming sensation before reinvigorating your life force and pushing you into action. You regain 100 hit points, and as part of the same bonus action to consume it, you can immediately make a melee weapon attack, cast a spell that targets only one creature or object, or move up to your speed."
        },
        {
            "Number": 60,
            "Name": "Elixir Of Omnimind",
            "Type": "Utility",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This pale blue potion smells like ozone. When you drink it, your mind expands, and you gain a brief but exceptional capacity to comprehend the vast complexities of the arcane. For the next minute, you can concentrate on two spells at the same time. If you are forced to make a Constitution saving throw to maintain your concentration, you must make a separate saving throw for each spell."
        }
    ],
    "whimsical": [
        {
            "Number": 1,
            "Name": "Melodious Bird Calls",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this frothy liquid, you can perfectly mimic the call of any songbird for 24 hours."
        },
        {
            "Number": 2,
            "Name": "Projected Thoughts",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this gritty potion, a 1-foot-diameter bubble emerges from the top of your head. The bubble lasts for 1 hour and moves with you, remaining centered on you. Until this efect ends, you can choose to project your thoughts into the bubble, where they manifest as illusory but silent words or images (your choice), which anyone can see."
        },
        {
            "Number": 3,
            "Name": "Intoxicating Aroma",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, you smell of an expertly crafted perfume. The efects of this potion last for 22 years. This doesn’t count against the number of potions you can have afecting your body at once."
        },
        {
            "Number": 4,
            "Name": "Ladybug Kinship",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When opened, this potion begins to evaporate quickly. For 1 minute, as the potion evaporates, ladybugs fly out of the bottle at a rate of 500 per round. The potion stops producing ladybugs once it has fully evaporated."
        },
        {
            "Number": 5,
            "Name": "Essence Of Umami",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion makes everything taste amazing. When you pour it on any food, no matter if it’s a hunk of tofu or a slab of slow-roasted brisket, essence of umami makes it glow with magic. When the food is tasted, it magically gives the taster their own personal version of the ultimate culinary experience."
        },
        {
            "Number": 6,
            "Name": "Vocal Stranger",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion is easily mistaken for brackish water. Once you drink it, you can produce an egg, rock, coin, or 2-foot-long string from your mouth. This efect lasts until utilized. This doesn’t count against the number of potions you can have afecting your body at once. Once imbibed, you can perfectly mimic the speech of a person you’re not familiar with. If you can’t think of a person you’ve never met, you instead mimic a random voice. The efects of the potion last for 1 hour."
        },
        {
            "Number": 7,
            "Name": "Beard Brew",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Drinking this fuzzy liquid gives the sensation of wool rubbing against your entire body. When consumed, you instantly grow facial hair, even if you would not normally be able to do so. The style of facial hair is random, and it stays on your face until shaven of. This doesn’t count against the number of potions you can have afecting your body at once."
        },
        {
            "Number": 8,
            "Name": "Photosynthetic Skin",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This vibrant green potion tastes like freshly cut grass. For the next 24 hours, while the sun is out you regain 1 hit point at the start of every hour."
        },
        {
            "Number": 9,
            "Name": "Paradise Plumage",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After drinking this potion, you are instantly adorned with striking and distinctive plumage. You can control it to create dazzling displays of shimmering feathers, iridescent colors, and stunning patterns. When you do so, you gain advantage on all Charisma (Performance) checks made to distract or amaze. The efects of this potion last for 24 hours."
        },
        {
            "Number": 10,
            "Name": "Musical Mixer",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When uncorked, this silvery elixir produces beautiful, ethereal music for 1 hour as it slowly evaporates."
        },
        {
            "Number": 11,
            "Name": "Stink Brew",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "It stinks and now so do you! After drinking this potion, all other creatures within 15 feet of you must succeed on a DC 13 Constitution saving throw or be unable to willingly move closer to you for the duration. A creature that hasn’t yet made this save must immediately do so when it moves within 15 feet of you. The efects of the potion last 1d4 rounds."
        },
        {
            "Number": 13,
            "Name": "Manifested Nostalgia",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After consuming this clear and flavorless potion, you quickly undergo a radical transformation, becoming the child version of yourself for the next 4 hours. For the duration, you are one size smaller (to a minimum of Small), and your Strength and Dexterity become 10, unless those scores are already less than 10."
        },
        {
            "Number": 14,
            "Name": "Pigment",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this multicolored potion allows you to produce a variety of oil paints from the tips of your fingers. You can change the color of the paints at will, and they never seem to run out. The efects of the potion last for 8 hours."
        },
        {
            "Number": 15,
            "Name": "Audio Oddity",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When opened, this embarrassing and noisy potion sounds like a man sobbing. When consumed, this potion strangely mutes the sound produced by any spell cast by the imbiber for the next 1 hour."
        },
        {
            "Number": 16,
            "Name": "Hindsight",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "A well-known potion amongst investigators and merchants, this thick brew acquires special insight on an object when poured over it. The only downside is that you must then lick the brew of the object to obtain any of this information. When poured and then licked of, the potion reveals a minor but useful bit of information about the object."
        },
        {
            "Number": 17,
            "Name": "Super Singing",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this potion tastes as if it were a freshly brewed tea with the perfect amount of honey mixed in. For the next hour, you are unable to speak without singing, and you have advantage on Charisma (Performance) checks using your voice."
        },
        {
            "Number": 18,
            "Name": "Fluffplum Tonic",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This nearly weightless liquid grants to drinkers the attributes of a dandelion, allowing them to float safely to the ground when falling and be easily carried by the wind. For the next hour, you are under the efects of the Feather Fall* spell and weigh no more than 1 pound."
        },
        {
            "Number": 19,
            "Name": "Merriment",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Is this just booze? For the next hour, you become incredibly intoxicated. For the duration, you gain expertise in a skill of your choice, which means your proficiency bonus is doubled for any ability check you make with it. Until this efect ends, all ability checks you make that don’t use the chosen skill are made with disadvantage."
        },
        {
            "Number": 20,
            "Name": "Bubble Message",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "As part of the bonus action to consume this potion, you speak a message and hiccup a bubble, which magically contains the message inside it. You then describe a creature you are familiar with and the bubble floats to that creature, traveling at a speed of 1 mile per hour, and then pops. The bubble pops early if it takes any damage. When the bubble pops, it releases the contained message in your voice."
        },
        {
            "Number": 21,
            "Name": "Crystal Clear",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This aqua-blue potion feels cold to the touch and raises the hairs on your arm when opened. When poured into a non-magical liquid, it turns the liquid invisible for 1d4 hours. If the liquid the potion is poured into is larger than a 20-foot cube, the potion has no efect."
        },
        {
            "Number": 22,
            "Name": "Elder Elixir",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This unassuming potion temporarily doubles your age when consumed. The efects of the potion last 1d12 months. This doesn’t count against the number of potions you can have afecting your body at once."
        },
        {
            "Number": 23,
            "Name": "Witch's Hidden Gem",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This bland and underwhelming-looking potion coats your mouth and gullet as you drink it, leaving a thin film. For the next hour, all liquid you consume turns into wine when you drink it."
        },
        {
            "Number": 24,
            "Name": "Carbonated Snake",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This bland and underwhelming-looking potion coats your mouth and gullet as you drink it, leaving a thin film. For the next hour, all liquid you consume turns into wine when you drink it. When shaken and pointed in a direction, the contents of this zippy elixir shoot out of the bottle, turning into a poisonous snake midair and landing in a space within 10 feet of you."
        },
        {
            "Number": 25,
            "Name": "Shadow Child",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "You are filled with intense feelings of confusion before an apparition emerges from your body that resembles a young girl with onyx skin and hair and piercing green eyes. Only you can see it, and it can’t speak. It functions as the Unseen Servant* spell and lasts for 1 hour."
        },
        {
            "Number": 26,
            "Name": "Hsirebbig",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This bitter potion grants you a special form of speech that sounds like absolute gibberish to anyone who isn’t also under the efects of a hsirebbig potion. Even spells like comprehend languages fail to decipher this speech. The efects of this potion last 24 hours."
        },
        {
            "Number": 27,
            "Name": "Sky Swimming",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After drinking this potion, you feel the sudden and unpleasant feeling of wearing soaking-wet clothing. For the next 10 minutes, you gain a flying speed of 15 feet and can hover, but it looks and feels as if you’re swimming through the sky. While flying in this way, you must also obey the rules for underwater combat."
        },
        {
            "Number": 28,
            "Name": "Passing Memory",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When brewed, this powerful elixir stores one of the creator’s memories of their choice within it. When consumed by another creature, that creature gains the stored memory."
        },
        {
            "Number": 29,
            "Name": "Bottled Slime",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This mischievous little slime can sometimes form in place of a potion. If noticed before being consumed, it can be thrown to an unoccupied space within 30 feet of you, releasing the slime when it shatters. After hurling the potion, a soda slime appears in the space and acts of its own volition."
        },
        {
            "Number": 30,
            "Name": "Oil Of The Trademark Flourish",
            "Type": "Whimsical",
            "Rarity": "Common",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you apply this oil to an object, you assign a signature sound that accompanies the object when it’s used. This efect is permanent, unless removed as is a curse."
        },
        {
            "Number": 31,
            "Name": "Mosspot",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "After drinking this earthy mixture, your form quickly shifts and shrinks. You immediately polymorph into a mossling spirit, as if by the spell. This efect doesn’t require your concentration and ends after 1 hour."
        },
        {
            "Number": 32,
            "Name": "Incredible Luck",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Once consumed, this potion calls forth a rain cloud that weeps for you. Then in a flash of lightning, your head takes on the form of an anthropomorphic animal chosen by the GM. This efect is permanent. After drinking this wonderful liquid your spirits lift and optimistic feelings pour over you. You gain advantage on the next 1d4 ability checks, attack rolls, or saving throws you make."
        },
        {
            "Number": 33,
            "Name": "Grand Friendship",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This potion can be divided into as many as eight parts. When two or more creatures consume this golden elixir, they gain a conditional ability to fly. For the next 24 hours, creatures that consumed the elixir gain a flying speed of 60 feet, but only while holding hands with all other creatures that partook of the potion."
        },
        {
            "Number": 34,
            "Name": "Witch's Lament",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Once consumed, this potion calls forth a rain cloud that weeps for you. Then in a flash of lightning, your head takes on the form of an anthropomorphic animal chosen by the GM. This efect is permanent."
        },
        {
            "Number": 35,
            "Name": "Spirit Appendage",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This bitter unappealing elixir turns your stomach and is often a fight to keep down your gullet. Once consumed, you grow a 6-foot-long prehensile tail, which takes a form decided by the GM. The tail can be used as if it were a third arm and can easily support your own weight. The tail lasts for 1d12 days before falling of."
        },
        {
            "Number": 36,
            "Name": "Move A Thing",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When poured over an object that weighs 500 pounds or less, it begins to weigh lighter and lighter. The object weighs up to 1d100 pounds less at the start of every hour until it weighs exactly 10 pounds. It remains weighing 10 pounds for 1 week, after which the efects of this potion fade."
        },
        {
            "Number": 37,
            "Name": "Gobble Gunk",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This unappealing potion allows the imbiber to eat whatever they can fit in their mouth with no ill efect—metal, poison, seawater: you name it, you eat it. The efects of this potion last 1 hour. Any magical objects consumed in this way are hurled back up after the end of the hour."
        },
        {
            "Number": 38,
            "Name": "Pocket Portal",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When buried and left to sit for 24 hours, this potion will sprout and form a temporary portal to the Spirit Realm from knotted roots and mud. The portal stays open for 24 hours before closing."
        },
        {
            "Number": 39,
            "Name": "Don't Eat Dirt",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this viscous brew tastes like wet soil. For the duration, you become immune to the prone condition. Whenever you would fall prone, you instead stand up as if an invisible force kept you that way. Even by choice, you cannot go prone. The efects of this potion last 10 days."
        },
        {
            "Number": 40,
            "Name": "Lunar Elixir",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this viscous brew tastes like wet soil. For the duration, you become immune to the prone condition. Whenever you would fall prone, you instead stand up as if an invisible force kept you that way. Even by choice, you cannot go prone. The efects of this potion last 10 days. When poured out, this silvery liquid rapidly expands and coats the surrounding area, creating a chalky white sheen across everything it touches. For the next 8 hours, gravity in a 20-foot-radius, 300-foot-high cylinder centered on the potion is like the moon’s gravity. The jump distance for all creatures inside the cylinder is tripled, and falling damage taken inside the cylinder is halved."
        },
        {
            "Number": 41,
            "Name": "Lifetime Supply",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this potion causes your hair to grow at an accelerated rate. Roll 1d4 + 2 and multiply it by 100 to find out how many feet of hair you grow. After 1 minute, the potion wears of and all your hair falls out."
        },
        {
            "Number": 42,
            "Name": "Invisible Tonic",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When poured over an object that is Small or smaller, the object becomes invisible. The efects of this potion last until removed, as if it were a curse."
        },
        {
            "Number": 43,
            "Name": "Liquid Disguise",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When brewed, this potion takes on the essence of a random humanoid within 1 mile. A creature that consumes the potion takes on the visage of that creature for the next 24 hours."
        },
        {
            "Number": 44,
            "Name": "Spirit Sweets",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This bitter concoction tastes and smells horrible to physical beings, yet couldn’t taste more delicious to spirits, many of which would trade quite a bit for a sip of the brew. A spirit with a challenge rating of 8 or lower that consumes this potion becomes drunk and happy for 1d4 days. Alternatively, the potion can be poured out, attracting spirits with a challenge rating of 2 or lower that are within 1 mile. When poured out, the potion attracts spirits for 8 hours or until it is consumed."
        },
        {
            "Number": 45,
            "Name": "A New Look",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, this unassuming elixir magically transforms your head into a random anthropomorphic animal, such as a horse, panda, pig, or raccoon. This efect lasts until removed, as if it were a curse. This doesn’t count against the number of potions you can have afecting your body at once."
        },
        {
            "Number": 46,
            "Name": "Shadow Puppet",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "Once consumed, this potion gives sentience to your shadow. The shadow starts to act independently of you but is still bound to your body. It has its own emotions and personality but can’t interact with the world in any way beyond what a normal shadow could. The efects of this potion last until removed, as if it were a curse. This doesn’t count against the number of potions you can have afecting your body at once."
        },
        {
            "Number": 47,
            "Name": "Object Embodiment",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this metallic potion, your body twists and alters into an object of your choice, as if by the true polymorph spell. This efect doesn’t require your concentration and ends after 1 hour."
        },
        {
            "Number": 48,
            "Name": "Phoenix Elixir",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When imbibed, this elixir burns your throat and ignites an ember within you. For 24 hours, you are immune to fire damage. When the potion’s magic finally fades, the fire inside of you burns intensely from within, consuming you in flames and turning your body to ash. 1 hour later you appear in the nearest bonfire, reborn anew. All objects and clothing that were on your person when you were turned to ash are left by your original body."
        },
        {
            "Number": 49,
            "Name": "Unknown Elixir",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "This bizarre blend of flavors reminds you of freshly cut grass, petroleum jelly, and honey. When consumed, it sits in your stomach like a rock and slowly swells in power. You gain the ability to cast one random spell of 6th level or lower, without expending a spell slot. This spell uses a save DC of 17 and a spell attack bonus of +9. The efects of this potion last until the spell is cast. This doesn’t count against the number of potions you can have afecting your body at once."
        },
        {
            "Number": 50,
            "Name": "Illusion In A Bottle",
            "Type": "Whimsical",
            "Rarity": "Uncommon",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When this potion is poured out, an illusion of your choice appears in its space, as if by the Major Image* spell. A creature that uses its action to examine the image can determine that it is an illusion with a successful DC 18 Intelligence (Investigation) check. The illusion lasts for 1 hour."
        },
        {
            "Number": 51,
            "Name": "Homegrown",
            "Type": "Whimsical",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When poured over a surface that is at least a 50-footsquare area and isn’t obstructed by obstacles (such as trees or boulders), this pungent liquid begins to quickly foam and expand. After 1 minute, a newly formed and furnished home of grand size appears in the space."
        },
        {
            "Number": 52,
            "Name": "Mind Transfer",
            "Type": "Whimsical",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When imbibed, this acrid elixir loosens your soul from your body and prepares it for transfer. The first time you are touched by a creature after consuming this potion, your mind and soul transfer into that creature’s body. While inhabiting the creature’s body, you can force it to make a contested Intelligence or Wisdom check (you both choose which ability to use) at the start of each of its turns. If you succeed, you gain total control over the creature until the start of its next turn. While your mind and soul are away, your body is left unconscious. If the creature dies while your mind and soul are still inside it, you also die. You inhabit the creature’s body for 1 hour, until you dismiss the efect as an action, or until the creature is targeted by a Dispel Evil and Good* spell."
        },
        {
            "Number": 53,
            "Name": "New Life",
            "Type": "Whimsical",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "The brewer of this potion chooses the likeness of a humanoid that they are familiar with. When imbibed, you take on the illusionary form of the chosen creature. This illusory disguise is perfect in every way and matches both the creature’s visage and its voice. Only creatures with the ability to detect magic or see through illusions (as with truesight) can discern this disguise. The efects of this potion last for 7 years or until removed, as if it were a curse. This doesn’t count against the number of potions you can have afecting your body at once."
        },
        {
            "Number": 54,
            "Name": "Ups-a-daisy",
            "Type": "Whimsical",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When poured over a creature or object, this creamy elixir instantly awakens the target, as if by the Awaken* spell. The awakened creature remains charmed by you for 1 year, instead of 30 days."
        },
        {
            "Number": 55,
            "Name": "Spiritual Rebuke",
            "Type": "Whimsical",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When poured, this dark elixir stains the earth and creates a 10-foot cube that is void of the island’s magic, as if it were under the efects of the Antimagic Field* spell This efect lasts for 1 year."
        },
        {
            "Number": 56,
            "Name": "Newly Found Magic",
            "Type": "Whimsical",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, you feel a rush of magical inspiration flow through you. You instantly learn a random 3rd-level spell. You can cast it without expending a spell slot, and once you do so, you can’t cast it in this way again until you finish a long rest. This potion’s efect is permanent, and it doesn’t count against the number of potions you can have afecting you at once."
        },
        {
            "Number": 58,
            "Name": "Dancing Feet",
            "Type": "Whimsical",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "The crafter’s brew can be added to any larger container of water or a small body of water to create an enchanting bath. The first nonmagical object submerged in the water for at least 1 minute gains a permanent magical efect. This efect is random and powerful enough that the item’s rarity should be considered uncommon or higher After drinking this potion, you no longer walk or run— now you dance. Going from one place to another is no longer a mundane trudge, a shufing expression of ennui. How you get from point A to point B is now a dazzling dance performance. From smooth, elven waltzes, to Nakudama hops and gyrations, to the interpretive dance forms of the dara, you explore them all. Your stylish moves increase your walking speed by 10 feet, give you a +5 bonus to Charisma (Performance) checks that involve dancing, and grant you proficiency in Dexterity saving throws if you don’t already have it. This lasts until you dismiss the potion’s efects as an action."
        },
        {
            "Number": 59,
            "Name": "Chicken Chaser",
            "Type": "Whimsical",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When you drink this potion, your hair turns dark red (if you have any), and you gain the ability to speak with chickens permanently, as if by the Speak with Animals* spell. Additionally, you can crow a sacred and thunderous cackle that summons 100 chickens in a 20-foot radius centered on you. These chickens appear running from a distance, digging out from the ground below, and falling from the sky in a veritable tsunami of flapping, clucking poultry. Each creature in the area (excluding you) must make a DC Whimsical 19 Dexterity saving throw, taking 30d6 slashing damage on a failed save, or half as much damage on a successful one. Once you’ve summoned the chickens in this way, you can’t do so again. This doesn’t count against the number of potions you can have afecting your body at once."
        },
        {
            "Number": 60,
            "Name": "Disappearing Act",
            "Type": "Whimsical",
            "Rarity": "Rare",
            "Source": "Obojima - Tales from the Tall Grass, pages 220-248",
            "Description": "When consumed, your body vanishes along with all the items you were wearing or carrying, and your sentience is transferred into a random object within 100 miles of you."
        }
    ],
    "custom": []
};