import { ISpell } from "src/app/spells/models/spell";

export const spells: ISpell[] = [
  {
    "id": "95af8ffd-b26d-4335-948d-b4926887cd09",
    "name": "Acid Splash",
    "level": 0,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 211"
    ],
    "text": "You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spells damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6)."
  },
  {
    "id": "ee93b826-5d53-4355-b80b-c739a3284b0f",
    "name": "Aid",
    "level": 2,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a tiny strip of white cloth)",
    "duration": "8 hours",
    "classes": [
      "Cleric",
      "Paladin",
      "Bard",
      "Ranger",
      "Artificer",
      "Sorcerer (Clockwork)"
    ],
    "sources": [
      "Player's Handbook p. 211"
    ],
    "text": "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
  },
  {
    "id": "17af361e-4bc1-4a97-a12c-5365bd1ee19e",
    "name": "Alarm",
    "level": 1,
    "ritual": true,
    "school": "abjuration",
    "time": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a tiny bell and a piece of fine silver wire)",
    "duration": "8 hours",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Ranger",
      "Wizard",
      "Artificer",
      "Sorcerer (Clockwork)"
    ],
    "sources": [
      "Player's Handbook p. 211"
    ],
    "text": "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."
  },
  {
    "id": "2c583bc3-82e5-447e-ab60-3538aee12df6",
    "name": "Alarm (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "abjuration",
    "time": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a tiny bell and a piece of fine silver wire)",
    "duration": "8 hours",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 211"
    ],
    "text": "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.  On spell lists: Fighter (Eldritch Knight), Ranger, Wizard"
  },
  {
    "id": "a3a40c62-a930-493e-b1e3-dc9d69e60852",
    "name": "Alter Self",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 211"
    ],
    "text": "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one. Aquatic Adaptation: You adapt your body to an aquatic environment, sprouting gills, and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed. Change Appearance: You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also don't appear as a creature of a different size than you, and your basic shape stays the same, if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again. Natural Weapons: You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with you unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."
  },
  {
    "id": "c01a9325-3dfc-4c00-bb78-1288069553fd",
    "name": "Animal Friendship",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a morsel of food)",
    "duration": "24 hours",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 212"
    ],
    "text": "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends.  At Higher Levels: When you cast this spell using a 2nd level spell slot or higher, you can affect one additional beast for each slot level above 1st."
  },
  {
    "id": "b8211565-62ba-4e89-a3e5-299120f2d0a5",
    "name": "Animal Messenger",
    "level": 2,
    "ritual": true,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a morsel of food)",
    "duration": "24 hours",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 212"
    ],
    "text": "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue ray, or a bird. You specify a location, which you must have visited, and a recipient who matches a general description, such as a man or woman dressed in the uniform of the town guard or a red-haired dwarf wearing a pointed hat. You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell towards the specified location, covering about 50 miles per 24 hours for a flying messenger or 25 miles for other animals. When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes it way back to where you cast this spell.  At Higher Levels: If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd."
  },
  {
    "id": "9c0bbecd-a74c-4c8e-96ba-9016ac51533a",
    "name": "Animal Messenger (Ritual Only)",
    "level": 2,
    "ritual": true,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a morsel of food)",
    "duration": "24 hours",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 212"
    ],
    "text": "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue ray, or a bird. You specify a location, which you must have visited, and a recipient who matches a general description, such as a man or woman dressed in the uniform of the town guard or a red-haired dwarf wearing a pointed hat. You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell towards the specified location, covering about 50 miles per 24 hours for a flying messenger or 25 miles for other animals. When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes it way back to where you cast this spell.  At Higher Levels: If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.  On spell lists: Bard, Druid, Ranger"
  },
  {
    "id": "4e62a1b5-c82d-4309-8563-3d97c1a0480f",
    "name": "Animal Shapes",
    "level": 8,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 24 hours",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 212"
    ],
    "text": "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your actions to transform affected creatures into new forms. The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit point it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells. The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment."
  },
  {
    "id": "5041ad78-f0a6-41c1-bfc2-b8a5ccb38f04",
    "name": "Animate Dead",
    "level": 3,
    "ritual": false,
    "school": "necromancy",
    "time": "1 minute",
    "range": "10 feet",
    "components": "V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 212"
    ],
    "text": "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain the control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot above 3rd. Each of the creatures must come from a different corpse or pile of bones."
  },
  {
    "id": "0f95b57a-17c8-4e14-8ecc-37112a98d4e3",
    "name": "Animate Objects",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V,S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 213"
    ],
    "text": "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points. As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. Animated Object Statistics: Tiny — HP: 20, AC: 18, Attack: +8 to hit, 1d4+4 damage, Str: 4, Dex: 18 Small — HP: 25, AC: 16, Attack: +6 to hit, 1d8+2 damage, Str: 6, Dex: 14 Medium — HP: 40, AC: 13, Attack: +5 to hit, 2d6+1 damage, Str: 10, Dex: 12 Large — HP: 50, AC: 10, Attack: +6 to hit, 2d10+2 damage, Str: 14, Dex: 10 Huge — HP: 80, AC: 10, Attack: +8 to hit, 2d12+4 damage, Str: 18, Dex: 6 An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determine by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet, if the objects lack legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determine by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form.  At Higher Levels: If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th."
  },
  {
    "id": "d42f2c24-ada3-47fd-bff6-d7a582441d80",
    "name": "Antilife Shell",
    "level": 5,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self (10-foot radius)",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 213"
    ],
    "text": "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier. If you move so that an affect creature is forced to pass through the barrier, the spell ends."
  },
  {
    "id": "998d70c6-09d9-4491-8d60-1762c46c52aa",
    "name": "Antimagic Field",
    "level": 8,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self (10-foot-radius sphere)",
    "components": "V, S M (a pinch of powdered iron or iron filings)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Cleric",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 213"
    ],
    "text": "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration. Targeted Effects: Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target. Areas of Magic: The area of another spell or magical effect, such as fireball, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough. Spells: Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it. Magic Items: The properties and powers of magic items are suppressed in the sphere. For example, a +1 long sword in the sphere functions as a nonmagical long sword. A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or piece of magic ammunition fully leaves the sphere (For example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits. Magical Travel: Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spells, temporarily closes while in the sphere. Creatures and Objects: A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere. Dispel Magic: Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don't nullify each other."
  },
  {
    "id": "1a1b621c-21f5-4838-be89-2afc411fb6b1",
    "name": "Antipathy/Sympathy",
    "level": 8,
    "ritual": false,
    "school": "enchantment",
    "time": "1 hour",
    "range": "60 feet",
    "components": "V, S, M (either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect)",
    "duration": "10 days",
    "classes": [
      "Druid",
      "Wizard",
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 214"
    ],
    "text": "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect. Antipathy: The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it. Sympathy: The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below. Ending the Effect: If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spells is allowed another Wisdom saving throw every 24 hours while the spell persists. A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again."
  },
  {
    "id": "81a54603-3fd9-402c-aff7-f8e9a9c89569",
    "name": "Arcane Eye",
    "level": 4,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a bit of bat fur)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Wizard",
      "Artificer",
      "Ranger (Swarmkeeper)",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 214"
    ],
    "text": "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction. As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter."
  },
  {
    "id": "84736f88-ff6f-408d-aa4e-55af0741f6e0",
    "name": "Arcane Gate",
    "level": 6,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "500 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 214"
    ],
    "text": "You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost. The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal. Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other, passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."
  },
  {
    "id": "18981f1b-5581-4a46-bc7b-b3fac5270a32",
    "name": "Arcane Lock",
    "level": 2,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (gold dust worth at least 25 gp, which the spell consumes)",
    "duration": "Until dispelled",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 215"
    ],
    "text": "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes. While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10."
  },
  {
    "id": "e645d5ee-f98a-465a-8f3a-a6ee192c5b5f",
    "name": "Armor of Agathys",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a cup of water)",
    "duration": "1 hour",
    "classes": [
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 215"
    ],
    "text": "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st."
  },
  {
    "id": "4acf7168-dcd5-403b-97c8-c30f92274e89",
    "name": "Arms of Hadar",
    "level": 1,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Self (10-foot radius)",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Warlock",
      "Sorcerer (Aberrant)"
    ],
    "sources": [
      "Player's Handbook p. 215"
    ],
    "text": "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
  },
  {
    "id": "da0c192b-98e9-4010-bb89-6316c503a1d3",
    "name": "Astral Projection",
    "level": 9,
    "ritual": false,
    "school": "necromancy",
    "time": "1 hour",
    "range": "10 feet",
    "components": "V, S, M (for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes)",
    "duration": "Special",
    "classes": [
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 215"
    ],
    "text": "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation, it doesn't need food or air and doesn't age. Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut-something that can happen only when an effect specifically states that it does-your soul and body are separated, killing you instantly. Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it. The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens. The spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation. If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points."
  },
  {
    "id": "63a1c571-212d-4f4d-a3b5-d00b6c3730a3",
    "name": "Augury",
    "level": 2,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Self",
    "components": "V, S, M (specially marked sticks, bones, or similar tokens worth at least 25 gp)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 215"
    ],
    "text": "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:  • Weal, for good results • Woe, for bad results • Weal and woe, for both good and bad results • Nothing, for results that aren't especially good or bad The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret."
  },
  {
    "id": "98be8467-0cbf-4830-b92d-9887cd949745",
    "name": "Augury (Ritual Only)",
    "level": 2,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Self",
    "components": "V, S, M (specially marked sticks, bones, or similar tokens worth at least 25 gp)",
    "duration": "Instantaneous",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 215"
    ],
    "text": "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens: • Weal, for good results • Woe, for bad results • Weal and woe, for both good and bad results • Nothing, for results that aren't especially good or bad The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.  On spell lists: Cleric"
  },
  {
    "id": "a51205e5-3e29-4277-8459-75998eaeff77",
    "name": "Aura of Life",
    "level": 4,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Paladin",
      "Warlock (Undying)",
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 216"
    ],
    "text": "Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."
  },
  {
    "id": "f3020e38-2dc9-437a-bf2d-40306a2d27b6",
    "name": "Aura of Purity",
    "level": 4,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Paladin",
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 216"
    ],
    "text": "Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned."
  },
  {
    "id": "a2c7ff61-9bcf-4908-8351-d37d5bf7a433",
    "name": "Aura of Vitality",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Cleric",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 216"
    ],
    "text": "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
  },
  {
    "id": "5124fdcc-83c5-4a87-9349-7d63c914a238",
    "name": "Awaken",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "8 hours",
    "range": "Touch",
    "components": "V, S, M (an agate worth at least 1,000 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 216"
    ],
    "text": "After spending the casting time tracing magical pathways within a precious gemstone, you touch a huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree. The awakened beast or plant is charmed by you for 30 days or until you and your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed."
  },
  {
    "id": "7634a669-010c-4f9e-8717-34d8f4be8f7e",
    "name": "Bane",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of blood)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 216"
    ],
    "text": "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
  },
  {
    "id": "abb14e09-e093-478d-b4b8-7f8bc747ef14",
    "name": "Banishing Smite",
    "level": 5,
    "ritual": false,
    "school": "abjuration",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Warlock (Hexblade)"
    ],
    "sources": [
      "Player's Handbook p. 216"
    ],
    "text": "The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points of fewer, you banish it. If the target is native to a different plane of existence than the on you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied."
  },
  {
    "id": "bff1a71d-aa45-494c-b383-85db763e1bb6",
    "name": "Banishment",
    "level": 4,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (an item distasteful to the target)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Cleric",
      "Paladin",
      "Ranger (Horizon Walker)",
      "Ranger (Monster Slayer)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 217"
    ],
    "text": "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is native to a different plane of existence that the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th."
  },
  {
    "id": "1fa7f0b3-ac2d-4eec-b0c3-05cf352211d5",
    "name": "Barkskin",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a handful of oak bark)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 217"
    ],
    "text": "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing."
  },
  {
    "id": "d6a9c60a-ffb4-407e-a17d-c147983942c1",
    "name": "Beacon of Hope",
    "level": 3,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 217"
    ],
    "text": "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."
  },
  {
    "id": "1f865488-82cf-44dd-a572-979899790ef9",
    "name": "Beast Sense",
    "level": 2,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Touch",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 217"
    ],
    "text": "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses."
  },
  {
    "id": "f2a7129c-f775-4df8-87ca-74029fc11272",
    "name": "Beast Sense (Ritual Only)",
    "level": 2,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Touch",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 217"
    ],
    "text": "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses.  On spell lists: Druid, Ranger"
  },
  {
    "id": "e673f6a2-48bc-4d3a-a4b3-abff33fb4083",
    "name": "Bestow Curse",
    "level": 3,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 218"
    ],
    "text": "You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:  • Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. • While cursed, the target has disadvantage on attack rolls against you. • While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing. • While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target. A remove curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.  At Higher Levels: If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration."
  },
  {
    "id": "8076b97d-0c79-4512-81c1-514f8c515ff6",
    "name": "Bigby's Hand",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (an eggshell and a snakeskin glove)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Wizard",
      "Sorcerer",
      "Warlock (Fathomless)",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 218"
    ],
    "text": "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand. The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn't fill its space. When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it. Clenched Fist: The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage. Forceful Hand: The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it. Grasping Hand: The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6+your spellcasting ability modifier. Interposing Hand: The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th."
  },
  {
    "id": "9ff9debb-f315-4701-b947-9a163b97feca",
    "name": "Blade Barrier",
    "level": 6,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 218"
    ],
    "text": "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain. When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage."
  },
  {
    "id": "81372355-7d67-4d5a-8307-7a02b8cb36d2",
    "name": "Blade Ward",
    "level": 0,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 round",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 218"
    ],
    "text": "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
  },
  {
    "id": "47c3029b-e56a-4712-818b-5fa614a2b0cf",
    "name": "Bless",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a sprinkling of holy water)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 219"
    ],
    "text": "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
  },
  {
    "id": "70687526-b34f-4a68-b17e-8d9e79b1cab9",
    "name": "Blight",
    "level": 4,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 219"
    ],
    "text": "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs. If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw, it simply withers and dies.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
  },
  {
    "id": "1b83894f-85b4-43bc-8e85-ab08a95f7f95",
    "name": "Blinding Smite",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Sorcerer (Stone Sorcery)"
    ],
    "sources": [
      "Player's Handbook p. 219"
    ],
    "text": "The next time you hit a creature with a melee weapon attack during this spell's duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."
  },
  {
    "id": "3e7469b1-c81f-4a29-aa72-e8ba99ff89c4",
    "name": "Blindness/Deafness",
    "level": 2,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "1 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Warlock (Fiend)",
      "Warlock (Undying)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 219"
    ],
    "text": "You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
  },
  {
    "id": "f124d2cc-d581-4081-903b-5e0a052238a2",
    "name": "Blink",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 minute",
    "classes": [
      "Sorcerer",
      "Warlock (Archfey)",
      "Warlock (Hexblade)",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 219"
    ],
    "text": "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of you next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more that one space is equally near). You can dismiss this spell as an action. While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creature that aren't there can't perceive you or interact with you, unless they have the ability to do so."
  },
  {
    "id": "b23f9484-b9f1-4576-8c7f-a75dfd0051db",
    "name": "Blur",
    "level": 2,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock (Hexblade)",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 219"
    ],
    "text": "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
  },
  {
    "id": "fd647872-17b0-4fcb-a5c0-cffcfbf28380",
    "name": "Branding Smite",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Warlock (Hexblade)",
      "Sorcerer (Stone Sorcery)"
    ],
    "sources": [
      "Player's Handbook p. 219"
    ],
    "text": "The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it is invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd."
  },
  {
    "id": "91f5c676-2afd-4917-92be-7002d974c29c",
    "name": "Breath of Winter",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (60-foot cone)",
    "components": "V, S, 6 ki points",
    "duration": "Instantaneous",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "Prerequisite: 17th level You can spend 6 ki points to cast cone of cold.  Cone of Cold: A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws."
  },
  {
    "id": "ee60ddb1-631e-47d9-8381-dd31da8edac8",
    "name": "Burning Hands",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (15-foot cone)",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Warlock (Fiend)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 220"
    ],
    "text": "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
  },
  {
    "id": "d2241900-663a-4463-8ffc-9203f04f45a5",
    "name": "Call Lightning",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 220"
    ],
    "text": "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see within range directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud). When you cast the spell, choose a point you can see under the cloud. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher level, the damage increases by 1d10 for each slot level above 3rd."
  },
  {
    "id": "d36a7edf-fe76-46a0-a157-4fe879c9f566",
    "name": "Calm Emotions",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Warlock (Archfey)",
      "Sorcerer (Aberrant)"
    ],
    "sources": [
      "Player's Handbook p. 221"
    ],
    "text": "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime. Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise."
  },
  {
    "id": "68b3d7d4-3684-4d9a-b198-505e88c97a91",
    "name": "Chain Lightning",
    "level": 6,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a bit of fur, a piece of amber, glass, or crystal rod, and three silver pins)",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 221"
    ],
    "text": "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much on a successful one.  At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th."
  },
  {
    "id": "182c5ec0-e889-4c79-b670-e26d651e3b96",
    "name": "Charm Person",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Ranger (Fey Wanderer)"
    ],
    "sources": [
      "Player's Handbook p. 221"
    ],
    "text": "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
  },
  {
    "id": "3b76b673-4ee1-4c24-ab70-68ab482a6010",
    "name": "Chill Touch",
    "level": 0,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "1 round",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 221"
    ],
    "text": "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  },
  {
    "id": "ab62ed53-24d1-4ba5-be43-3de34753db0c",
    "name": "Chromatic Orb",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a diamond worth at least 50 gp)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 221"
    ],
    "text": "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st"
  },
  {
    "id": "54f56acf-3da3-429c-b6f9-9228cc0f7683",
    "name": "Circle of Death",
    "level": 6,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (the powder of a crushed black pearl worth at least 500 gp)",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 221"
    ],
    "text": "A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.  At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th."
  },
  {
    "id": "0e601b31-78a5-4365-8905-d736cc0d745a",
    "name": "Circle of Power",
    "level": 5,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 222"
    ],
    "text": "Divine energy radiates out from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw."
  },
  {
    "id": "4160dc39-5a86-47a9-abb2-8af84ca93ee0",
    "name": "Clairvoyance",
    "level": 3,
    "ritual": false,
    "school": "divination",
    "time": "10 minutes",
    "range": "1 mile",
    "components": "V, S, M (a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for scrying)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Warlock (Great Old One)",
      "Wizard",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 222"
    ],
    "text": "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with. When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing. A creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist."
  },
  {
    "id": "6ca9bda3-09b3-4361-8f3b-276209f45b33",
    "name": "Clench of the North Wind",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, 3 ki points",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "Prerequisite: 6th level You can spend 3 ki points to cast hold person.  Hold Person: Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.  Additional Ki Points: When you cast this spell using 4 or more ki points, you can target on additional humanoid for each ki point above 3. The humanoids must be within 30 feet of each other when you target them."
  },
  {
    "id": "2f310719-14ab-4e98-a0c7-e7035412d872",
    "name": "Clone",
    "level": 8,
    "ritual": false,
    "school": "necromancy",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold a Medium creature, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 222"
    ],
    "text": "This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside as a sealed vessel and grows to full size and maturity after 120 days you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed. At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The original creature's physical remains, if they still exist, become inert and can't thereafter be restored to life, since the creature's soul is elsewhere."
  },
  {
    "id": "a83648e3-de47-450b-8996-498642e32c3a",
    "name": "Cloud of Daggers",
    "level": 2,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a sliver of glass)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 222"
    ],
    "text": "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there.  At Higher Levels: when you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd."
  },
  {
    "id": "5a3b3fdb-f768-4597-8caa-399e1713f875",
    "name": "Cloudkill",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 222"
    ],
    "text": "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured. When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe. The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 5th."
  },
  {
    "id": "bbf5d6bc-ce31-4e67-9d54-e0ac8e2d04b9",
    "name": "Color Spray",
    "level": 1,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Self (15-foot cone)",
    "components": "V, S, M (a pinch of powder or sand that is colored red, yellow, and blue)",
    "duration": "1 round",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard",
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 222"
    ],
    "text": "A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see). Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the end of your next turn. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for the creature to be affected.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st."
  },
  {
    "id": "a2f03078-f3ef-408e-99a7-a314da7d87aa",
    "name": "Command",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "1 round",
    "classes": [
      "Cleric",
      "Paladin",
      "Warlock (Fiend)",
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 223"
    ],
    "text": "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends. Approach: The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you. Drop: The target drops whatever it is holding and then ends its turn. Flee: The target spends its turn moving away from you by the fastest available means. Grovel: The target falls prone and then ends its turn. Halt: The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
  },
  {
    "id": "5ca4f436-7bb3-43b1-839f-ba7a5526dce1",
    "name": "Commander's Strike",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack's damage roll."
  },
  {
    "id": "67bd3ef3-54b6-46ab-bd9f-28f60b9f100a",
    "name": "Commune",
    "level": 5,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Self",
    "components": "V, S, M (incense and a vial of holy or unholy water)",
    "duration": "1 minute",
    "classes": [
      "Cleric",
      "Warlock (Raven Queen)"
    ],
    "sources": [
      "Player's Handbook p. 223"
    ],
    "text": "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question. Divine beings aren't necessarily omniscient, so you might receive \"unclear\" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead. If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret."
  },
  {
    "id": "e9cfdac4-85c0-431b-ad23-c18e57b81a62",
    "name": "Commune (Ritual Only)",
    "level": 5,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Self",
    "components": "V, S, M (incense and a vial of holy or unholy water)",
    "duration": "1 minute",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 223"
    ],
    "text": "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question. Divine beings aren't necessarily omniscient, so you might receive \"unclear\" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead. If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret.  On spell lists: Cleric"
  },
  {
    "id": "a83a98b0-8bb3-42a3-8942-328d7df47bc4",
    "name": "Commune with Nature",
    "level": 5,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 224"
    ],
    "text": "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns. You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area: • terrain and bodies of water • prevalent plants, minerals, animals, or peoples • powerful celestials, fey, fiends, elementals, or undead • influence from other planes of existence • buildings"
  },
  {
    "id": "e9e52c09-e54d-4849-97e0-cfe033132546",
    "name": "Commune with Nature (Ritual Only)",
    "level": 5,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 224"
    ],
    "text": "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns. You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area: • terrain and bodies of water • prevalent plants, minerals, animals, or peoples • powerful celestials, fey, fiends, elementals, or undead • influence from other planes of existence • buildings  On spell lists: Druid, Ranger"
  },
  {
    "id": "1fa903df-2462-4881-9cb6-7247bfdaf551",
    "name": "Compelled Duel",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 bonus action",
    "range": "30 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Sorcerer (Stone Sorcery)"
    ],
    "sources": [
      "Player's Handbook p. 224"
    ],
    "text": "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you, if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn. The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target."
  },
  {
    "id": "0310dc0b-b1e1-48f1-9044-7f540fb661dc",
    "name": "Comprehend Languages",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a pinch of soot and salt)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 224"
    ],
    "text": "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn't decode secret messages in a text or glyph, such as an arcane sigil, that isn't part of a written language."
  },
  {
    "id": "e525ebba-cbdd-4db7-a62b-e29f04563e88",
    "name": "Comprehend Languages (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a pinch of soot and salt)",
    "duration": "1 hour",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 224"
    ],
    "text": "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn't decode secret messages in a text or glyph, such as an arcane sigil, that isn't part of a written language.  On spell lists: Bard, Sorcerer, Warlock, Wizard"
  },
  {
    "id": "bcdb0a15-0cb6-461b-802c-f6087ad4a011",
    "name": "Compulsion",
    "level": 4,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 224"
    ],
    "text": "Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. A target automatically succeeds on this saving throw if it can't be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take its action before it moves. After moving in this way, it can make another Wisdom saving throw to try to end the effect. A target isn't compelled to move into an obviously deadly hazard, such as a fire pit, but it will provoke opportunity attacks to move in the designated direction."
  },
  {
    "id": "76ddbd4f-1e15-4c5f-8f41-572e404144ba",
    "name": "Cone of Cold",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (60-foot cone)",
    "components": "V, S, M (a small crystal or glass cone)",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock (Hexblade)",
      "Wizard",
      "Druid",
      "Warlock (Fathomless)",
      "Warlock (Hexblade)",
      "Warlock (Raven Queen)"
    ],
    "sources": [
      "Player's Handbook p. 224"
    ],
    "text": "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
  },
  {
    "id": "2a881a6e-e5a9-4a63-a6c1-e94d23848451",
    "name": "Confusion",
    "level": 4,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (three nut shells)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 224"
    ],
    "text": "This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled actions. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it. An affected target can't take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn.  1 — The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn't take an action this turn. 2-6 — The creature doesn't move or take actions this turn. 7-8 — The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn. 9-10 — The creature can act and move normally. At the end of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot above 4th."
  },
  {
    "id": "0510d6e8-bbd7-4d2c-92e6-c43e7d46c854",
    "name": "Conjure Animals",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger",
      "Ranger (Primeval Guardian)"
    ],
    "sources": [
      "Player's Handbook p. 225"
    ],
    "text": "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: • One beast of challenge rating 2 or lower • Two beasts of challenge rating 1 or lower • Four beasts of challenge rating 1/2 or lower • Eight beasts of challenge rating 1/4 or lower Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics.  At Higher Levels: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot."
  },
  {
    "id": "1a16e8b6-e6f5-4910-b7ef-8a00e060b16d",
    "name": "Conjure Barrage",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Self (60-foot cone)",
    "components": "V, S, M (one piece of ammunition or a thrown weapon)",
    "duration": "Instantaneous",
    "classes": [
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 225"
    ],
    "text": "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
  },
  {
    "id": "a420db83-9db4-40b2-9c07-8e374483f831",
    "name": "Conjure Celestial",
    "level": 7,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 225"
    ],
    "text": "You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends. The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions The DM has the celestial's statistics.  At Higher Levels: When you cast this spell using a 9th-level spell slot, you summon a celestial of challenge rating 5 or lower."
  },
  {
    "id": "cfff1aca-6d3e-47fa-a691-209daff76fb2",
    "name": "Conjure Elemental",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "90 feet",
    "components": "V, S, M (burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 225"
    ],
    "text": "You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends. The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the elemental's statistics.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
  },
  {
    "id": "5b7e4603-715f-4790-b0d3-031c2aa06d72",
    "name": "Conjure Fey",
    "level": 6,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 226"
    ],
    "text": "You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends. The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the fey creature's statistics.  At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th."
  },
  {
    "id": "411c20fe-7290-492c-a5cf-8facd3aa6c9d",
    "name": "Conjure Minor Elementals",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 226"
    ],
    "text": "You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:. • One elemental of challenge rating 2 or lower • Two elementals of challenge rating 1 or lower • Four elementals of challenge rating 1/2 or lower • Eight elementals of challenge rating 1/4 or lower. An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics.  At Higher Levels: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot"
  },
  {
    "id": "427dcdfa-d81d-48b3-880a-04bb2091c624",
    "name": "Conjure Volley",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (one piece of ammunition or one thrown weapon)",
    "duration": "Instantaneous",
    "classes": [
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 226"
    ],
    "text": "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon."
  },
  {
    "id": "e20fdaba-9293-4c5e-906f-1db172ccd48c",
    "name": "Conjure Woodland Beings",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (one holly berry per creature summoned)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 226"
    ],
    "text": "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: • One fey creature of challenge rating 2 or lower • Two fey creatures of challenge rating 1 or lower • Four fey creatures of challenge rating 1/2 or lower • Eight fey creatures of challenge rating 1/4 or lower A summoned creature disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics.  At Higher Levels: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
  },
  {
    "id": "5ba2880c-e778-4c0e-9143-845f5de3a273",
    "name": "Contact Other Plane",
    "level": 5,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Self",
    "components": "V",
    "duration": "1 minute",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 226"
    ],
    "text": "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A greater restoration spell cast on you ends this effect. On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as yes, no, maybe, never, irrelevant, unclear (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer."
  },
  {
    "id": "9d455c1d-e93d-4ad5-8459-ca2ee7240abf",
    "name": "Contact Other Plane (Ritual Only)",
    "level": 5,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Self",
    "components": "V",
    "duration": "1 minute",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 226"
    ],
    "text": "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A greater restoration spell cast on you ends this effect. On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as yes, no, maybe, never, irrelevant, unclear (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer.  On spell lists: Warlock, Wizard"
  },
  {
    "id": "df027671-458e-4451-b773-93bead1adbfe",
    "name": "Contagion",
    "level": 5,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "7 days",
    "classes": [
      "Cleric",
      "Druid",
      "Warlock (Undying)"
    ],
    "sources": [
      "Player's Handbook p. 227"
    ],
    "text": "Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, the target is poisoned. At the end of each of the poisoned target’s turns, the target must make a Constitution saving throw. If the target succeeds on three of these saves, it is no longer poisoned, and the spell ends. If the target fails three of these saves, the target is no longer poisoned, but choose one of the diseases below. The target is subjected to the chosen disease for the spell’s duration. Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it. Blinding Sickness: Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is blinded. Filth Fever: A raging fever sweeps through the creature's body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength. Flesh Rot: The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage. Mindfire: The creature's mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat. Seizure: The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity. Slimy Doom: The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn."
  },
  {
    "id": "11504d39-ab1d-4275-aa0f-7d0e969dadf1",
    "name": "Contingency",
    "level": 6,
    "ritual": false,
    "school": "evocation",
    "time": "10 minutes",
    "range": "Self",
    "components": "V, S, M (a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp)",
    "duration": "10 days",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 227"
    ],
    "text": "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell, called the contingent spell, as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid. The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then contingency ends. The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person."
  },
  {
    "id": "730951c2-1510-44b6-9398-44af8e7edfb8",
    "name": "Continual Flame",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (ruby dust worth 50 gp, which the spell consumes)",
    "duration": "Until dispelled",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Cleric",
      "Wizard",
      "Druid",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 227"
    ],
    "text": "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched."
  },
  {
    "id": "a32afe29-94b6-4577-9e38-4868aa4c03b8",
    "name": "Control Water",
    "level": 4,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "300 feet",
    "components": "V, S , M (a drop of water and a pinch of dust)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Cleric",
      "Druid",
      "Wizard",
      "Warlock (Fathomless)"
    ],
    "sources": [
      "Player's Handbook p. 227"
    ],
    "text": "Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one. Flood: You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land. If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing. The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts. Part Water: You cause water in the area to move apart and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored. Redirect Flow: You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect. Whirlpool: This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC. When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so. The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage, this damage occurs each round it remains in the vortex."
  },
  {
    "id": "3ed764f1-ecfc-4fba-9f62-11240114bdb8",
    "name": "Control Weather",
    "level": 8,
    "ritual": false,
    "school": "transmutation",
    "time": "10 minutes",
    "range": "Self (5-mile radius)",
    "components": "V, S, M (burning incense and bits of earth and wood mixed in water)",
    "duration": "Concentration, up to 8 hours",
    "classes": [
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 228"
    ],
    "text": "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early. When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal. When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction.  Precipitation: Stage 1 — Clear Stage 2 — Light clouds Stage 3 — Overcast or ground fog Stage 4 — Rain, hail or snow Stage 5 — Torrential rain, driving hail or blizzard  Temperature: Stage 1 — Unbearable heat Stage 2 — Hot Stage 3 — Warm Stage 4 — Cool Stage 5 — Cold Stage 6 — Arctic cold  Wind: Stage 1 — Calm Stage 2 — Moderate wind Stage 3 — Strong wind Stage 4 — Gale Stage 5 — Storm"
  },
  {
    "id": "268fce2f-b290-43c9-9d8a-ed12600cc70d",
    "name": "Cordon of Arrows",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "5 feet",
    "components": "V, S, M (four or more arrows or bolts)",
    "duration": "8 hours",
    "classes": [
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 228"
    ],
    "text": "You plant four pieces of nonmagical ammunition — arrows or crossbow bolts — in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains. When you cast this spell, you can designate any creatures you choose, and the spell ignores them.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd"
  },
  {
    "id": "e86617e1-8de9-40e1-839c-0b56f5c0e273",
    "name": "Counterspell",
    "level": 3,
    "ritual": false,
    "school": "abjuration",
    "time": "1 reaction, which you take when you see a creature within 60 feet of you casting a spell",
    "range": "60 feet",
    "components": "S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 228"
    ],
    "text": "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of or lower, its spell fails and has no effect. If it is casting a spell of or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used."
  },
  {
    "id": "4991b7fc-5019-4337-b20b-83b7def7d35d",
    "name": "Create Food and Water",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Paladin",
      "Artificer",
      "Warlock (Genie)"
    ],
    "sources": [
      "Player's Handbook p. 229"
    ],
    "text": "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad."
  },
  {
    "id": "6b12e6de-82ae-49c2-9023-dd2707a28988",
    "name": "Create or Destroy Water",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of water if creating water or a few grains of sand if destroying it)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Warlock (Fathomless)"
    ],
    "sources": [
      "Player's Handbook p. 229"
    ],
    "text": "You either create or destroy water. Create Water: You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area. Destroy Water: You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
  },
  {
    "id": "8abaf36f-0095-4485-ae18-96d3bc709b0d",
    "name": "Create Undead",
    "level": 6,
    "ritual": false,
    "school": "necromancy",
    "time": "1 minute",
    "range": "10 feet",
    "components": "V, S, M (one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse.)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 229"
    ],
    "text": "You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The DM has game statistics for these creatures.). As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature w ill take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones.  At Higher Levels: When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies"
  },
  {
    "id": "9f1fd878-3aea-48e7-a162-a7afb3819fca",
    "name": "Creation",
    "level": 5,
    "ritual": false,
    "school": "illusion",
    "time": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a tiny piece of matter of the same type of the item you plan to create)",
    "duration": "Special",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Artificer",
      "Warlock (Genie)"
    ],
    "sources": [
      "Player's Handbook p. 229"
    ],
    "text": "You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before. The duration depends on the object's material. If the object is composed of multiple materials, use the shortest duration. Material — Duration: Vegetable matter — 1 day; Stone/crystal — 12 hours; Precious metals — 1 hour; Gems — 10 minutes; Adamantine/Mithral — 1 minute Using any material created by this spell as another spell's material component causes that spell to fail.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th."
  },
  {
    "id": "dc456ccf-60c8-4021-864f-b0ea6d32e329",
    "name": "Crown of Madness",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 229"
    ],
    "text": "One humanoid of your choice that you can see within range must succeed on a W Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes. The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach. On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends."
  },
  {
    "id": "87b99223-3b85-448e-a42e-15fffdb8a202",
    "name": "Crusader's Mantle",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 230"
    ],
    "text": "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
  },
  {
    "id": "c2ecd774-450c-490a-961e-09686e12fda7",
    "name": "Cure Wounds",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Warlock (Celestial)",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 230"
    ],
    "text": "A creature you touch regains a number of hit points equal to 1d8+your spellcasting ability modifier. This spell has no effect on undead or constructs.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
  },
  {
    "id": "034a29a4-e21e-4a1e-9a1c-78f8886bc104",
    "name": "Dancing Lights",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 230"
    ],
    "text": "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."
  },
  {
    "id": "b1ff5070-7ff0-40bf-bcb3-0f8899738cbe",
    "name": "Darkness",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, M (bat fur and a drop of pitch or piece of coal)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 230"
    ],
    "text": "Magical darkness spreads from a point you choose within range to fill a 15-foot radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it. If any of this spell's area overlaps with an area of light created by a spell of or lower, the spell that created the light is dispelled."
  },
  {
    "id": "de6deeab-e067-498a-a657-22769647762c",
    "name": "Darkvision",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (either a pinch of dried carrot or an agate)",
    "duration": "8 hours",
    "classes": [
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 230"
    ],
    "text": "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet."
  },
  {
    "id": "7f21463d-e545-4680-8119-348e6f1fb368",
    "name": "Daylight",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "1 hour",
    "classes": [
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Sorcerer",
      "Warlock (Celestial)"
    ],
    "sources": [
      "Player's Handbook p. 230"
    ],
    "text": "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet. If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object with and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light. If any of this spell's area overlaps with an area of darkness created by a spell of or lower, the spell that created the darkness is dispelled."
  },
  {
    "id": "bb4694e6-5c3b-4f77-bcb2-53f56c73f36f",
    "name": "Death Ward",
    "level": 4,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "classes": [
      "Cleric",
      "Paladin",
      "Warlock (Undying)"
    ],
    "sources": [
      "Player's Handbook p. 230"
    ],
    "text": "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spells ends."
  },
  {
    "id": "d295693c-2726-4458-8c4c-d7b1e11807ce",
    "name": "Delayed Blast Fireball",
    "level": 7,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a tine ball of bat guano and sulfur)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 230"
    ],
    "text": "A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one. The spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6. If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes. The fire damages objects in the area and ignites flammable objects that aren't being worn or carried.  At Higher Levels: When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th."
  },
  {
    "id": "f1b27a2a-2878-4c35-a37b-624aee09c43c",
    "name": "Demiplane",
    "level": 8,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "1 hour",
    "classes": [
      "Warlock",
      "Wizard",
      "Sorcerer"
    ],
    "sources": [
      "Player's Handbook p. 231"
    ],
    "text": "You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side. Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead."
  },
  {
    "id": "fc409e08-ac9e-4f68-b41b-cace09ebeb75",
    "name": "Destructive Wave",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 231"
    ],
    "text": "You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone."
  },
  {
    "id": "707c12ec-c676-43ef-9c75-5c72b6aae2a4",
    "name": "Detect Evil and Good",
    "level": 1,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Cleric",
      "Paladin",
      "Warlock (Genie)"
    ],
    "sources": [
      "Player's Handbook p. 231"
    ],
    "text": "For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
  },
  {
    "id": "66ffcf36-ea64-4b51-a19d-9f31858f47ec",
    "name": "Detect Magic",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 231"
    ],
    "text": "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
  },
  {
    "id": "fbefb786-73ea-4ef6-9dc7-26404c389200",
    "name": "Detect Magic (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 231"
    ],
    "text": "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.  On spell lists: Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard"
  },
  {
    "id": "7b900e16-01ed-4bf7-9c4b-0ad025a6f906",
    "name": "Detect Poison and Disease",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a yew leaf)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 231"
    ],
    "text": "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
  },
  {
    "id": "9866bcf7-c0a9-4523-a4b3-b77494e7efbf",
    "name": "Detect Poison and Disease (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a yew leaf)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 231"
    ],
    "text": "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.  On spell lists: Cleric, Druid, Paladin, Ranger"
  },
  {
    "id": "36b79b8b-a8df-4a1a-aa38-0953edd4a93c",
    "name": "Detect Thoughts",
    "level": 2,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a copper piece)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock (Great Old One)",
      "Wizard",
      "Sorcerer (Aberrant)"
    ],
    "sources": [
      "Player's Handbook p. 231"
    ],
    "text": "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected. You initially learn the surface thoughts of the creature — what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creatures thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check if it succeeds, the spell ends. Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation. You can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language. Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range."
  },
  {
    "id": "12e63466-fbcc-450e-a6b0-66f2c2590393",
    "name": "Dimension Door",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "500 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Ranger (Fey Wanderer)"
    ],
    "sources": [
      "Player's Handbook p. 233"
    ],
    "text": "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as 200 feet straight downward or upward to the northwest at a 45-degree angle, 300 feet. You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell. If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you."
  },
  {
    "id": "1f050be1-2c40-45f8-bfb2-975d84d16f13",
    "name": "Disarming Attack",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. You add the superiority die to the attack's damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet."
  },
  {
    "id": "35c865b3-c9e5-4cbb-94bd-28894bfba222",
    "name": "Disguise Self",
    "level": 1,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Self",
    "components": "V,S",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Rogue (Arcane Trickster)",
      "Ranger (Gloom Stalker)",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 233"
    ],
    "text": "You make yourself, including your clothing, armor, weapons, and other belongings on your person, look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of some one who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC."
  },
  {
    "id": "d1d97513-180b-478c-9447-96191b9a574a",
    "name": "Disintegrate",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a lodestone and a pinch of dust)",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 233"
    ],
    "text": "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by Wall of Force. A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6+40 force damage. The target is disintegrated if this damage leaves it with 0 hit points. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell. This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell.  At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th."
  },
  {
    "id": "a5d632d9-e6db-4a5c-8386-42c8008262b3",
    "name": "Dispel Evil and Good",
    "level": 5,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (holy water or powdered silver and iron)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 233"
    ],
    "text": "Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions. Break Enchantment: As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures. Dismissal: As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a Charisma saving throw or be sent back to its home plane (if it isn't there already). If they aren't on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild."
  },
  {
    "id": "17fc1a34-7086-4aeb-be5e-4be083db8d8c",
    "name": "Dispel Magic",
    "level": 3,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer",
      "Ranger (Fey Wanderer)",
      "Sorcerer (Clockwork)"
    ],
    "sources": [
      "Player's Handbook p. 234"
    ],
    "text": "Choose any creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of or higher on the target, make an ability check using your spellcasting ability. The DC equals 10+the spell's level. On a successful check, the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used."
  },
  {
    "id": "1be323cc-aad7-47e8-8189-24b773935673",
    "name": "Dissonant Whispers",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Warlock (Great Old One)",
      "Sorcerer (Aberrant)"
    ],
    "sources": [
      "Player's Handbook p. 234"
    ],
    "text": "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction , if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
  },
  {
    "id": "e11f9fd0-a41a-4655-8a01-68c3c7cd2741",
    "name": "Distracting Strike",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn."
  },
  {
    "id": "b9eecbcc-06d8-458d-b573-03d89c359db3",
    "name": "Divination",
    "level": 4,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 234"
    ],
    "text": "Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen. The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast this spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret."
  },
  {
    "id": "dde95ee8-b5a3-4bf9-a25f-b4c5b56e01e5",
    "name": "Divination (Ritual Only)",
    "level": 4,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 234"
    ],
    "text": "Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen. The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast this spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.  On spell lists: Cleric"
  },
  {
    "id": "a53c6884-45ea-4fe0-a9f4-217448787c03",
    "name": "Divine Favor",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 234"
    ],
    "text": "Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit."
  },
  {
    "id": "090e94f8-4fc9-4455-a18f-d6eb63666ccc",
    "name": "Divine Word",
    "level": 7,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "30 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 234"
    ],
    "text": "You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points: • 50 hit points or fewer: deafened for 1 minute • 40 hit points or fewer: deafened and blinded for 10 minutes • 30 hit points or fewer: blinded, deafened, and stunned for 1 hour • 20 hit points or fewer: killed instantly Regardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to your current plane for 24 hours by any means short of a wish spell."
  },
  {
    "id": "cc695dfc-f620-43b0-9312-9a883125deec",
    "name": "Dominate Beast",
    "level": 4,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock (Archfey)",
      "Warlock (Great Old One)",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 234"
    ],
    "text": "You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as Attack that creature, Run over there, or Fetch that object. If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.  At Higher Levels: When you cast this spell with a 5th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 6th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 7th level or higher, the duration is concentration, up to 8 hours."
  },
  {
    "id": "d07d626a-5af1-4c41-9d1c-1956f92a4ba3",
    "name": "Dominate Monster",
    "level": 8,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 235"
    ],
    "text": "You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as Attack that creature, Run over there, or Fetch that object. If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.  At Higher Levels: When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours."
  },
  {
    "id": "9be8348c-6ff4-45d3-9675-f4ca4f4c2d58",
    "name": "Dominate Person",
    "level": 5,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock (Archfey)",
      "Warlock (Great Old One)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 235"
    ],
    "text": "You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as Attack that creature, Run over there, or Fetch that object. If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.  At Higher Levels: When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours."
  },
  {
    "id": "b10889c3-b3dd-472f-98ef-bc4b377499f9",
    "name": "Drawmij's Instant Summon",
    "level": 6,
    "ritual": true,
    "school": "conjuration",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a sapphire worth 1,000 gp)",
    "duration": "Until dispelled",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 235"
    ],
    "text": "You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire. At any time thereafter, you can use your action to speak the item's name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends. If another creature is holding or carrying the item, crushing the sapphire doesn't transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment. Dispel magic or a similar effect successfully applied to the sapphire ends this spell's effect."
  },
  {
    "id": "e47cd729-7412-4bfa-9c84-983d2510fd7f",
    "name": "Drawmij's Instant Summon (Ritual Only)",
    "level": 6,
    "ritual": true,
    "school": "conjuration",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a sapphire worth 1,000 gp)",
    "duration": "Until dispelled",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 235"
    ],
    "text": "You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire. At any time thereafter, you can use your action to speak the item's name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends. If another creature is holding or carrying the item, crushing the sapphire doesn't transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment. Dispel magic or a similar effect successfully applied to the sapphire ends this spell's effect.  On spell lists: Wizard"
  },
  {
    "id": "7125da3b-9bea-4d18-bd59-7df5507db5ce",
    "name": "Dream",
    "level": 5,
    "ritual": false,
    "school": "illusion",
    "time": "1 minute",
    "range": "Special",
    "components": "V, S, M (a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird)",
    "duration": "8 hours",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 236"
    ],
    "text": "This spell shapes a creature's dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don't sleep, such as elves, can't be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but can't take actions or move. If the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target's dreams. You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target's sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage. If you have a body part, lock of hair, clipping from a nail, or similar portion of the target's body, the target makes its saving throw with disadvantage."
  },
  {
    "id": "625ddfbf-a1a0-4a99-b95a-0cddee21aa32",
    "name": "Druidcraft",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 236"
    ],
    "text": "Whispering to the spirits of nature, you create one of the following effects within range: • You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round. • You instantly make a flower blossom, a seed pod open, or a leaf bud bloom. • You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube. • You instantly light or snuff out a candle, a torch, or a small campfire."
  },
  {
    "id": "86de62dd-24a8-42c7-87bd-852e21364c53",
    "name": "Earthquake",
    "level": 8,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "500 feet",
    "components": "V, S, M (a pinch of dirt, a piece of rock, and a lump of clay)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer"
    ],
    "sources": [
      "Player's Handbook p. 236"
    ],
    "text": "You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot- radius circle centered on that point and shakes creatures and structures in contact with the ground in that area. The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken. When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone. This spell can have additional effects depending on the terrain in the area, as determined by the DM. Fissures: Fissures open throughout the spell's area at the start of your next turn after you cast the spell. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 x 10 feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse (see below). Structures: The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall prone or become buried."
  },
  {
    "id": "19954237-e706-427d-91f0-16af18cbbafd",
    "name": "Eldritch Blast",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 237"
    ],
    "text": "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. you can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."
  },
  {
    "id": "bd24b663-8d55-4b1c-a240-51252f99d864",
    "name": "Elemental Attunement",
    "level": 0,
    "ritual": false,
    "time": "1 action",
    "range": "",
    "components": "None",
    "duration": "1 minute",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "You can use your action to briefly control elemental forces within 30 feet of you, causing one of the following effects of your choice:  • Create a harmless, instantaneous sensory effect related to air, earth, fire, or water, such as a shower of sparks, a puff of wind, a spray of light mist, or a gentle rumbling of stone.  • Instantaneously light or snuff out a candle, a torch, or a small campfire.  • Cause earth, fire, water, or mist that can fit within a 1-foot cube to shape itself into a crude form you designate for 1 minute."
  },
  {
    "id": "eab56aab-f170-4cc5-b59d-4a5b62f16e39",
    "name": "Elemental Weapon",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Paladin",
      "Warlock (Hexblade)",
      "Druid",
      "Ranger",
      "Artificer",
      "Sorcerer (Stone Sorcery)"
    ],
    "sources": [
      "Player's Handbook p. 237"
    ],
    "text": "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.  At Higher Levels: When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
  },
  {
    "id": "a9139dab-b22c-47eb-b764-58f860f42d63",
    "name": "Enhance Ability",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (fur or a feather from a beast)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Sorcerer",
      "Ranger",
      "Wizard",
      "Artificer",
      "Ranger (Primeval Guardian)"
    ],
    "sources": [
      "Player's Handbook p. 237"
    ],
    "text": "You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects: the target gains the effect until the spell ends. Bear's Endurance: The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends. Bull's Strength: The target has advantage on Strength checks, and his or her carrying capacity doubles. Cat's Grace: The target has advantage on Dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated. Eagle's Splendor: The target has advantage on Charisma checks. Fox's Cunning: The target has advantage on Intelligence checks. Owl's Wisdom: The target has advantage on Wisdom checks.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
  },
  {
    "id": "501e6143-face-4907-81e0-50a2115601d4",
    "name": "Enlarge/Reduce",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a pinch of powdered iron)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Bard",
      "Druid",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 237"
    ],
    "text": "You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect. If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once. Enlarge: The target's size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category — from Medium to Large, for example. If there isn't enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target's weapons also grow to match its new size. While these weapons are enlarged, the target's attack with them deal 1d4 extra damage. Reduce: The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category — from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target's weapons also shrink to match its new size. While these weapons are reduced, the target's attacks with them deal 1d4 less damage (this can't reduce the damage below 1)."
  },
  {
    "id": "4319250c-d3e8-4add-a268-e53e0cb9a812",
    "name": "Ensnaring Strike",
    "level": 1,
    "ritual": false,
    "school": "conjuration",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 237"
    ],
    "text": "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away. While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.  At Higher Levels: If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
  },
  {
    "id": "654eaf48-9b1c-44cd-b187-fcbb9d48823e",
    "name": "Entangle",
    "level": 1,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger",
      "Ranger (Primeval Guardian)"
    ],
    "sources": [
      "Player's Handbook p. 238"
    ],
    "text": "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the conjured plants wilt away."
  },
  {
    "id": "1434fa56-2c61-4f92-9ee3-b2be69b63f59",
    "name": "Enthrall",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "1 minute",
    "classes": [
      "Bard",
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 238"
    ],
    "text": "You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak."
  },
  {
    "id": "1ae91494-0013-4054-b161-b0251d20d9c5",
    "name": "Eternal Mountain Defense",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, 5 ki points",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "Prerequisite: 17th level You can spend 5 ki points to cast stoneskin, targeting yourself.  Stoneskin: This spell turns your flesh as hard as stone. Until the spell ends, you have resistance to nonmagical bludgeoning, piercing, and slashing damage."
  },
  {
    "id": "3900ae75-333e-4709-a50b-9e698c460936",
    "name": "Etherealness",
    "level": 7,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Up to 8 hours",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 238"
    ],
    "text": "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plan you originated from, but everything there looks gray, and you can't see anything more than 60 feet away. While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so. You ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plan you originated from. When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved. This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes.  At Higher Levels: When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell."
  },
  {
    "id": "a53fe87e-b3a7-4382-b43f-5c83222d8d4c",
    "name": "Evard's Black Tentacles",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a piece of tentacle from a giant octopus or a giant squid)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock (Great Old One)",
      "Wizard",
      "Sorcerer (Aberrant)"
    ],
    "sources": [
      "Player's Handbook p. 238"
    ],
    "text": "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain. When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage. A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself."
  },
  {
    "id": "1556badf-16dc-4571-9922-31f896584c52",
    "name": "Evasive Footwork",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving."
  },
  {
    "id": "9e9374fe-c6c9-424c-a083-2c999f6de0be",
    "name": "Expeditious Retreat",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 238"
    ],
    "text": "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action."
  },
  {
    "id": "3345f5be-628c-492a-8f61-07c8953c7b4e",
    "name": "Eyebite",
    "level": 6,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 238"
    ],
    "text": "For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of Eyebite. Asleep: The target galls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake. Panicked: The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends. Sickened: The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Wisdom saving throw. If it succeeds, the effect ends."
  },
  {
    "id": "f7039b75-eac6-4d70-9869-26ed9dfcfccb",
    "name": "Fabricate",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "10 minutes",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 239"
    ],
    "text": "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool. Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-foot cube). The quality of objects made by the spell is commensurate with the quality of the raw materials. Creatures or magic items can't be created or transmuted by this spell. You also can't use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan's tools used to craft such objects."
  },
  {
    "id": "08cab1de-4758-4c2a-881b-bece2be7c045",
    "name": "Faerie Fire",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Druid",
      "Warlock (Archfey)",
      "Artificer",
      "Ranger (Swarmkeeper)"
    ],
    "sources": [
      "Player's Handbook p. 239"
    ],
    "text": "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
  },
  {
    "id": "24a40efb-20cc-40ba-8c5d-4422eb3bc849",
    "name": "False Life",
    "level": 1,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a small amount of alcohol or distilled spirits)",
    "duration": "1 hour",
    "classes": [
      "Sorcerer",
      "Warlock (Undying)",
      "Wizard",
      "Artificer",
      "Warlock (Raven Queen)"
    ],
    "sources": [
      "Player's Handbook p. 239"
    ],
    "text": "Bolstering yourself with a necromantic facsimile of life, you gain 1d4+4 temporary hit points for the duration.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
  },
  {
    "id": "dc202db5-16ac-4470-a942-a0749ceb54cd",
    "name": "Fangs of the Fire Snake",
    "level": 1,
    "ritual": false,
    "time": "None",
    "range": "10 feet",
    "components": "1 ki point",
    "duration": "1 turn",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "When you use the Attack action on your turn, you can spend 1 ki point to cause tendrils of flame to stretch out from your fists and feet. Your reach with your unarmed strikes increases by 10 feet for that action, as well as the rest of the turn. A hit with such an attack deals fire damage instead of bludgeoning damage, and if you spend 1 ki point when the attack hits, it also deals an extra 1d10 fire damage."
  },
  {
    "id": "fd2d5400-4234-4501-bb73-dfd7cac4d3dd",
    "name": "Fear",
    "level": 3,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Self (30-foot cone)",
    "components": "V, S, M (a white feather or the heart of a hen)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Ranger (Gloom Stalker)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 239"
    ],
    "text": "You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration. While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature."
  },
  {
    "id": "f29062cb-6ab5-4763-bf83-0f8c7577a514",
    "name": "Feather Fall",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 reaction, which you take when you or a creature within 60 feet of you falls",
    "range": "60 feet",
    "components": "V, M (a white feather or the heart of a hen)",
    "duration": "1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard",
      "Artificer",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 239"
    ],
    "text": "Reaction: When you or a creature within 60 feet of you falls Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature."
  },
  {
    "id": "14e8e982-f750-4be4-9621-43a2ac5c91fb",
    "name": "Feeblemind",
    "level": 8,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a handful of clay, crystal, glass, or mineral spheres)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 239"
    ],
    "text": "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw. On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them. At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends. The spell can also be ended by greater restoration, heal or wish."
  },
  {
    "id": "f67daf88-bc11-4da6-ae86-baa3a45d903a",
    "name": "Feign Death",
    "level": 3,
    "ritual": true,
    "school": "necromancy",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of graveyard dirt)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Warlock (Undying)",
      "Wizard",
      "Warlock (Raven Queen)"
    ],
    "sources": [
      "Player's Handbook p. 240"
    ],
    "text": "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death. For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends."
  },
  {
    "id": "c5b72d9c-96b5-4b70-aee0-9465927ebebc",
    "name": "Feign Death (Ritual Only)",
    "level": 3,
    "ritual": true,
    "school": "necromancy",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of graveyard dirt)",
    "duration": "1 hour",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 240"
    ],
    "text": "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death. For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends.  On spell lists: Bard, Cleric, Druid, Wizard"
  },
  {
    "id": "3a5e213f-0054-46ad-b7b7-04f36a627ef4",
    "name": "Feinting Attack",
    "level": 1,
    "ritual": false,
    "time": "1 bonus action",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature this turn. If that attack hits, add the superiority die to the attack’s damage roll."
  },
  {
    "id": "34b838e3-4869-4a00-a1e0-6156f2106043",
    "name": "Find Familiar",
    "level": 1,
    "ritual": true,
    "school": "conjuration",
    "time": "1 hour",
    "range": "10 feet",
    "components": "V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 240"
    ],
    "text": "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk. lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey or fiend (your choice) instead of a beast. Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal. When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses. As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits you summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature. Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll."
  },
  {
    "id": "695254e9-864b-4b83-ab0f-dfa35564a0f9",
    "name": "Find Familiar (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "conjuration",
    "time": "1 hour",
    "range": "10 feet",
    "components": "V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)",
    "duration": "Instantaneous",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 240"
    ],
    "text": "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk. lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey or fiend (your choice) instead of a beast. Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal. When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses. As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits you summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature. Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.  On spell lists: Wizard"
  },
  {
    "id": "39242626-a081-4710-b379-2c6a6f43ecc4",
    "name": "Find Steed",
    "level": 2,
    "ritual": false,
    "school": "conjuration",
    "time": "10 minutes",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 240"
    ],
    "text": "You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose: a warhorse, a pony, a camel, an elk, or a mastiff. (Your DM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak. Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed. When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum. While your steed is within 1 mile of you, you can communicate with each other telepathically. You can't have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear."
  },
  {
    "id": "a1e75100-4c4a-4cc7-af91-2e2de0f53b3b",
    "name": "Find the Path",
    "level": 6,
    "ritual": false,
    "school": "divination",
    "time": "1 minute",
    "range": "Self",
    "components": "V, S, M (a set of divinatory tools — such as bones, ivory sticks, cards, teeth, or carved runes — worth 100 gp and an object from the location you wish to find)",
    "duration": "Concentration, up to 1 day",
    "classes": [
      "Bard",
      "Cleric",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 240"
    ],
    "text": "This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plan of existence, a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as a green dragon's lair), the spell fails. For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination."
  },
  {
    "id": "2a92a3bd-52a1-4d16-8d55-c7681c5180d9",
    "name": "Find Traps",
    "level": 2,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 241"
    ],
    "text": "You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole. This spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense."
  },
  {
    "id": "8778ef08-f3a4-4f5a-a5b4-4afaed2b4184",
    "name": "Finger of Death",
    "level": 7,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 241"
    ],
    "text": "You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8+30 necrotic damage on a failed save, or half as much damage on a successful one. A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability."
  },
  {
    "id": "69f920df-5a08-4476-960c-db8d10c1ee93",
    "name": "Fire Bolt",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 242"
    ],
    "text": "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried. This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
  },
  {
    "id": "fc73b7f9-81e9-4f77-8f92-8cc6baf2ef42",
    "name": "Fire Shield",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a bit of phosphorous or a firefly)",
    "duration": "10 minutes",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Warlock (Fiend)",
      "Wizard",
      "Druid",
      "Sorcerer"
    ],
    "sources": [
      "Player's Handbook p. 242"
    ],
    "text": "Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet, You can end the spell early by using an action to dismiss it. The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage. In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield."
  },
  {
    "id": "d2407e30-9f87-4239-9049-7660bdc14797",
    "name": "Fire Storm",
    "level": 7,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer"
    ],
    "sources": [
      "Player's Handbook p. 242"
    ],
    "text": "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one. The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell."
  },
  {
    "id": "74e2bfe8-b70a-4f5e-9540-f4ddb1ac6f16",
    "name": "Fireball",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a tiny ball of bat guano and sulfur)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Warlock (Fiend)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 241"
    ],
    "text": "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
  },
  {
    "id": "f1d9300a-0403-4071-9011-7aea03076273",
    "name": "Fist of Four Thunders",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (15-foot cube)",
    "components": "V, S, 2 ki points",
    "duration": "Instantaneous",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "You can spend 2 ki points to cast thunderwave.  Thunderwave: A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.  Additional Ki Points: When you cast this spell by spending 3 or more ki points, the damage increases by 1d8 for each ki point above 2.."
  },
  {
    "id": "165a5987-f98d-44aa-be35-0c6a9304fbaa",
    "name": "Fist of Unbroken Air",
    "level": 1,
    "ritual": false,
    "time": "1 action",
    "range": "30 feet",
    "components": "",
    "duration": "Instantaneous",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "You can create a blast of compressed air that strikes like a mighty fist. As an action, you can spend 2 ki points and choose a creature within 30 feet of you. That creature must make a Strength saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can push the creature up to 20 feet away from you and knock it prone. On a successful save, the creature takes half as much damage, and you don't push it or knock it prone."
  },
  {
    "id": "7ae0671f-e824-471f-b54c-3834980f986e",
    "name": "Flame Blade",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V, S, M (leaf of sumac)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Sorcerer"
    ],
    "sources": [
      "Player's Handbook p. 242"
    ],
    "text": "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action. You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage. The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd."
  },
  {
    "id": "5e5c3cae-d41e-4104-be94-46e1f9fa85d6",
    "name": "Flame Strike",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (pinch of sulfur)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Warlock (Fiend)",
      "Warlock (Celestial)"
    ],
    "sources": [
      "Player's Handbook p. 242"
    ],
    "text": "A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th."
  },
  {
    "id": "d1eabb3e-1040-47d2-bc43-11a4eb32d160",
    "name": "Flames of the Phoenix",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, 4 ki points",
    "duration": "Instantaneous",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "Prerequisite: 11th level You can spend 4 ki points to cast fireball.  Fireball: A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
  },
  {
    "id": "b8246a4a-0670-436d-b3c8-44dbe64b232b",
    "name": "Flaming Sphere",
    "level": 2,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a bit of tallow, a pinch of brimstone, and a dusting of powdered iron)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Warlock (Celestial)",
      "Wizard",
      "Sorcerer"
    ],
    "sources": [
      "Player's Handbook p. 242"
    ],
    "text": "A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one. As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn. When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
  },
  {
    "id": "f1b615a5-5c86-4101-9127-e7015d7f87a3",
    "name": "Flesh to Stone",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a pinch of lime, water, and earth)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock",
      "Wizard",
      "Druid",
      "Sorcerer"
    ],
    "sources": [
      "Player's Handbook p. 243"
    ],
    "text": "You attempt to turn one creature that you can see within range into stone. If the targets body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected. A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive, keep track of both until the target collects three of a kind. If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state. If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed."
  },
  {
    "id": "832e3663-7b0f-4c80-a56e-cef9f8ac79ec",
    "name": "Fly",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a wing feather from any bird)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 243"
    ],
    "text": "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
  },
  {
    "id": "bf6d36ad-edea-45e6-bbae-20e8c16c20ab",
    "name": "Fog Cloud",
    "level": 1,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 243"
    ],
    "text": "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured, It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st."
  },
  {
    "id": "6a2dfe54-6be0-44a1-9ab7-7808f7720749",
    "name": "Forbiddance",
    "level": 6,
    "ritual": true,
    "school": "abjuration",
    "time": "10 minutes",
    "range": "Touch",
    "components": "V, S, M (a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp)",
    "duration": "1 day",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 243"
    ],
    "text": "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell. In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell's area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell). When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell. The spell's area can't overlap with the area of another forbiddance spell. If you cast forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting."
  },
  {
    "id": "5d3c1d3d-bf04-4457-b8c0-bbf4aaeb887f",
    "name": "Forbiddance (Ritual Only)",
    "level": 6,
    "ritual": true,
    "school": "abjuration",
    "time": "10 minutes",
    "range": "Touch",
    "components": "V, S, M (a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp)",
    "duration": "1 day",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 243"
    ],
    "text": "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell. In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell's area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell). When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell. The spell's area can't overlap with the area of another forbiddance spell. If you cast forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting.  On spell lists: Cleric"
  },
  {
    "id": "1fec3b39-c761-4d4b-b6b3-501461157315",
    "name": "Forcecage",
    "level": 7,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "100 feet",
    "components": "V, S, M (ruby dust worth 1,500 gp)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 243"
    ],
    "text": "An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box as you choose. A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out of the area. When you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area. A creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel. This spell can't be dispelled by dispel magic."
  },
  {
    "id": "0ea7b5ad-b9b6-422b-8375-2040ffc77e44",
    "name": "Foresight",
    "level": 9,
    "ritual": false,
    "school": "divination",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a hummingbird feather)",
    "duration": "8 hours",
    "classes": [
      "Bard",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 244"
    ],
    "text": "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration. This spell immediately ends if you cast it again before its duration ends."
  },
  {
    "id": "5e0cf58b-7d05-4a9e-9077-b26f45981d90",
    "name": "Freedom of Movement",
    "level": 4,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a leather strap, bound around the arm or a similar appendage)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Ranger",
      "Artificer",
      "Sorcerer (Clockwork)"
    ],
    "sources": [
      "Player's Handbook p. 244"
    ],
    "text": "You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained. The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target's movement or attacks."
  },
  {
    "id": "dec58700-ddc9-4c47-abc8-ff2e39a60b43",
    "name": "Friends",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "Self",
    "components": "S, M (a small amount of makeup applied to the face as this spell is cast)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 244"
    ],
    "text": "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it."
  },
  {
    "id": "181715ca-55cc-493d-98a0-e85fe84d906e",
    "name": "Gaseous Form",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a bit of gauze and a wisp of smoke)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Ranger (Swarmkeeper)"
    ],
    "sources": [
      "Player's Handbook p. 244"
    ],
    "text": "You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected. While in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated. While in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. The target can't attack or cast spells."
  },
  {
    "id": "b7c2ef3c-e12f-4f2d-bb6c-4c3eafc82d0c",
    "name": "Gate",
    "level": 9,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a diamond worth at least 5,000 gp)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Sorcerer",
      "Wizard",
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 244"
    ],
    "text": "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration. The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal. Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains. When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens in the named creature's immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you."
  },
  {
    "id": "d1edd443-94c2-476b-83e9-29a3510f8e86",
    "name": "Geas",
    "level": 5,
    "ritual": false,
    "school": "enchantment",
    "time": "1 minute",
    "range": "60 feet",
    "components": "V",
    "duration": "30 days",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 244"
    ],
    "text": "You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell. You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends. You can end the spell early by using an action to dismiss it. A remove curse, greater restoration, or wish spell also ends it.  At Higher Levels: When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of the spell lasts until it is ended by one of the spells mentioned above."
  },
  {
    "id": "0c57d6b3-efab-4b06-8bf9-27f4603778db",
    "name": "Gentle Repose",
    "level": 2,
    "ritual": true,
    "school": "necromancy",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of salt and one copper piece placed on each of the corpse's eyes, which must remain there for the duration)",
    "duration": "10 days",
    "classes": [
      "Cleric",
      "Wizard",
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 245"
    ],
    "text": "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as raise dead."
  },
  {
    "id": "2dc4554c-0c4d-482b-a359-105eea0f4999",
    "name": "Gentle Repose (Ritual Only)",
    "level": 2,
    "ritual": true,
    "school": "necromancy",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of salt and one copper piece placed on each of the corpse's eyes, which must remain there for the duration)",
    "duration": "10 days",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 245"
    ],
    "text": "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as raise dead.  On spell lists: Cleric, Wizard"
  },
  {
    "id": "54ef536e-7e3c-4a40-9a70-4fe8185665ab",
    "name": "Giant Insect",
    "level": 4,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Ranger (Primeval Guardian)"
    ],
    "sources": [
      "Player's Handbook p. 245"
    ],
    "text": "You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion. Each creature obeys your verbal commands, and in combat, they act on your turn each round. The DM has the statistics for these creatures and resolves their actions and movement. A creature remains in its giant size for the duration, until it drops to 0 hit points, or until you use an action to dismiss the effect on it. The DM might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a giant wasp."
  },
  {
    "id": "d9c85bd2-9dd0-4011-bfb0-841242574e2f",
    "name": "Glibness",
    "level": 8,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 245"
    ],
    "text": "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful."
  },
  {
    "id": "bedfaf74-02d8-4128-98af-1e9b35e64ee2",
    "name": "Globe of Invulnerability",
    "level": 6,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self (10-foot radius)",
    "components": "V, S, M (a glass or crystal bead that shatters when the spell ends)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 245"
    ],
    "text": "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration. Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells.  At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th."
  },
  {
    "id": "c21566bd-caa1-4539-a1ea-8f62b3ce7ac6",
    "name": "Glyph of Warding",
    "level": 3,
    "ritual": false,
    "school": "abjuration",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (incense and powdered diamond worth at least 200 gp, which the spell consumes)",
    "duration": "Until dispelled or triggered",
    "classes": [
      "Bard",
      "Cleric",
      "Fighter (Eldritch Knight)",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 245"
    ],
    "text": "When you cast this spell, you inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends. You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose explosive runes or a spell glyph. Explosive Runes: When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the aura must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one. Spell Glyph: You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding."
  },
  {
    "id": "2038763c-6007-4eb6-8666-47210ef71140",
    "name": "Goading Attack",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn."
  },
  {
    "id": "c63b28ea-481b-44e2-ab40-55cf61e387bb",
    "name": "Gong of the Summit",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, 3 ki points",
    "duration": "Instantaneous",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "Prerequisite: 6th level You can spend 3 ki points to cast shatter.  Shatter: A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.  Additional Ki Points: When you cast this spell using 4 or more ki points, the damage increases by 1d8 for each ki point above 3."
  },
  {
    "id": "31da5278-832d-4673-be65-3f48be50039a",
    "name": "Goodberry",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a sprig of mistletoe)",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 246"
    ],
    "text": "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell."
  },
  {
    "id": "062a1359-9f59-496a-af1c-920e55df513e",
    "name": "Grasping Vine",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 bonus action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 246"
    ],
    "text": "You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine. Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns."
  },
  {
    "id": "b19a6567-256f-4bc9-8948-35c068ca1651",
    "name": "Grease",
    "level": 1,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a bit of pork rind or butter)",
    "duration": "1 minute",
    "classes": [
      "Wizard",
      "Sorcerer",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 246"
    ],
    "text": "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone."
  },
  {
    "id": "3dcb0abb-322d-4490-8953-898f7c55586b",
    "name": "Greater Invisibility",
    "level": 4,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Ranger (Gloom Stalker)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock (Archfey)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 246"
    ],
    "text": "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person."
  },
  {
    "id": "ccc11b5e-6004-4f33-ae13-d324fc2087f1",
    "name": "Greater Restoration",
    "level": 5,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (diamond dust worth 100 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Warlock (Celestial)",
      "Ranger",
      "Artificer",
      "Sorcerer (Clockwork)"
    ],
    "sources": [
      "Player's Handbook p. 246"
    ],
    "text": "You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target: •  One effect that charmed or petrified the target •  One effect that charmed or petrified the target •  One curse, including the target's attunement to a cursed magic item •  Any reduction to one of the target's ability scores •  One effect reducing the target's hit point maximum"
  },
  {
    "id": "7e309309-811c-4216-819d-b00131f8ab03",
    "name": "Guardian of Faith",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "8 hours",
    "classes": [
      "Cleric",
      "Warlock (Celestial)"
    ],
    "sources": [
      "Player's Handbook p. 246"
    ],
    "text": "A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity. Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage."
  },
  {
    "id": "29f7911e-4592-470d-93d9-cdb4efd2cfe5",
    "name": "Guards and Wards",
    "level": 6,
    "ritual": false,
    "school": "abjuration",
    "time": "10 minutes",
    "range": "Touch",
    "components": "V, S, M (burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp)",
    "duration": "24 hours",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 248"
    ],
    "text": "You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell. When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects. Guards and wards creates the following effects within the warded area. Corridors: Fog fills all the warded corridors, making them heavily obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you will believe it is going in the opposite direction from the one it chooses. Doors: All doors in the warded area are magically locked, as if sealed by an arcane lock spell. In addition, you can cover up to ten doors with an illusion (equivalent to the illusory object function of the minor illusion spell) to make them appear as plain sections of wall. Stairs: Webs fill all stairs in the warded area from top to bottom, as the web spell. These strands regrow in 10 minutes if they are burned or torn away while guards and wards lasts. Other Spell Effect: You can place your choice of one of the following magical effects within the warded area of the stronghold. • Place dancing lights in four corridors. You can designate a simple program that the lights repeat as long as guards and wards lasts. • Place magic mouth in two locations. • Place stinking cloud in two locations. The vapors appear in the places you designate they return within 10 minutes if dispersed by wind while guards and wards lasts. • Place a constant gust of wind in one corridor or room. Place a suggestion in one location. You select an area of up to 5 feet square, and any creature that enters or passes through the area receives the suggestion mentally. The whole warded area radiates magic. A dispel magic cast on a specific effect, if successful, removes only that effect. You can create a permanently guarded and warded structure by casting this spell there every day for one year."
  },
  {
    "id": "86fd4554-4819-4dbf-9ff9-243b42047a82",
    "name": "Guidance",
    "level": 0,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 248"
    ],
    "text": "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
  },
  {
    "id": "010bcb0a-d9bd-48ab-be01-99801b6d4f90",
    "name": "Guiding Bolt",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "1 round",
    "classes": [
      "Cleric",
      "Warlock (Celestial)"
    ],
    "sources": [
      "Player's Handbook p. 248"
    ],
    "text": "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
  },
  {
    "id": "c5bf1fb8-8570-4444-8c11-87d66c4221b3",
    "name": "Gust of Wind",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (60-foot line)",
    "components": "V, S, M (a legume seed)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Druid",
      "Sorcerer",
      "Wizard",
      "Ranger",
      "Warlock (Fathomless)"
    ],
    "sources": [
      "Player's Handbook p. 248"
    ],
    "text": "A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line. Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you. The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you."
  },
  {
    "id": "ee72e4a2-1fbf-427f-a192-b11c4eab7006",
    "name": "Hail of Thorns",
    "level": 1,
    "ritual": false,
    "school": "conjuration",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 249"
    ],
    "text": "The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.  At Higher Levels: If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10)."
  },
  {
    "id": "cd34f98e-2b78-4a39-b5f6-f4710cd3023c",
    "name": "Hallow",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "24 hours",
    "range": "Touch",
    "components": "V, S, M (herbs, oils, and incense worth at least 1,000 gp, which the spell consumes)",
    "duration": "Until dispelled",
    "classes": [
      "Cleric",
      "Warlock (Fiend)"
    ],
    "sources": [
      "Player's Handbook p. 249"
    ],
    "text": "You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a hallow spell. The affected area is subject to the following effects. First, celestials, elementals, fey, fiends, and undead can't enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect. Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the DM. Some of these effects apply to creatures in the area, you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as ores or trolls. When a creature that would be affected enters the spell's area for the first time on a turn or starts its turn there, it can make a Charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area. Courage: Affected creatures can't be frightened while in the area. Darkness: Darkness fills the area. Normal light, as well as magical light created by spells of a lower level than the slot you used to cast this spell, can't illuminate the area. Daylight: Bright light fills the area. Magical darkness created by spells of a lower level than the slot you used to cast this spell can't extinguish the light. Energy Protection:. Affected creatures in the area have resistance to one damage type of your choice, except for bludgeoning, piercing, or slashing. Energy Vulnerability: Affected creatures in the area have vulnerability to one damage type of your choice, except for bludgeoning, piercing, or slashing. Everlasting Rest: Dead bodies interred in the area can't be turned into undead. Extradimensional Interference: Affected creatures can't move or travel using teleportation or by extradimensional or interplanar means. Fear: Affected creatures are frightened while in the area. Silence: No sound can emanate from within the area, and no sound can reach into it. Tongues: Affected creatures can communicate with any other creature in the area, even if they don't share a common language."
  },
  {
    "id": "22efe7a4-088e-41b8-81a4-2b84817bb062",
    "name": "Hallucinatory Terrain",
    "level": 4,
    "ritual": false,
    "school": "illusion",
    "time": "10 minutes",
    "range": "300 feet",
    "components": "V, S, M (a stone, a twig, and a bit of green plant)",
    "duration": "24 hours",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 249"
    ],
    "text": "You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance. The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isn't obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain."
  },
  {
    "id": "aec8c416-8915-4d24-9cc5-1b4cc4d2bcae",
    "name": "Harm",
    "level": 6,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 249"
    ],
    "text": "You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes."
  },
  {
    "id": "fe96e396-c58b-44ed-b5b3-c89cff3c2d06",
    "name": "Haste",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a shaving of licorice root)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger (Horizon Walker)",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 250"
    ],
    "text": "Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it."
  },
  {
    "id": "c01b705d-c2a9-4248-8876-b9a98fd460a6",
    "name": "Heal",
    "level": 6,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 250"
    ],
    "text": "Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. The spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead.  At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th."
  },
  {
    "id": "f28311f8-5526-422d-b64b-ecc8336ac4e1",
    "name": "Healing Word",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 250"
    ],
    "text": "A creature of your choice that you can see within range regains hit points equal to 1d4+your spellcasting ability modifier. This spell has no effect on undead or constructs.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st."
  },
  {
    "id": "d8c439a2-4ee1-48dc-97f5-1826935495e8",
    "name": "Heat Metal",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a piece of iron and a flame)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Druid",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 250"
    ],
    "text": "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again. If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot above 2nd."
  },
  {
    "id": "ae086d7d-4e89-4c49-b67c-d0cefbfb080e",
    "name": "Hellish Rebuke",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 250"
    ],
    "text": "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
  },
  {
    "id": "5db3a69c-8d0d-4836-9417-a8dca20885a3",
    "name": "Heroes' Feast",
    "level": 6,
    "ritual": false,
    "school": "conjuration",
    "time": "10 minutes",
    "range": "30 feet",
    "components": "V, S, M (a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 250"
    ],
    "text": "You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve creatures can partake of the feast. A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours."
  },
  {
    "id": "fe8d1e01-0cd5-45de-ad99-d12494cff63f",
    "name": "Heroism",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 250"
    ],
    "text": "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
  },
  {
    "id": "b5cbe4f8-55e9-4b74-aa6a-f621a77e025f",
    "name": "Hex",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 bonus action",
    "range": "90 feet",
    "components": "V, S, M (the petrified eye of a newt)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 251"
    ],
    "text": "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature. A remove curse cast on the target ends this spell early.  At Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
  },
  {
    "id": "ffb9f023-e1db-4192-8296-bfaa6fa7394d",
    "name": "Hold Monster",
    "level": 5,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a small, straight piece of iron)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Ranger (Monster Slayer)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 251"
    ],
    "text": "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, you can target on additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them."
  },
  {
    "id": "8ac18495-e6d6-408c-9530-905849d4eb7c",
    "name": "Hold Person",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a small, straight piece of iron)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Cleric",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 251"
    ],
    "text": "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target on additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
  },
  {
    "id": "29bcab7f-7c24-4939-9a25-9bfeca6b0755",
    "name": "Holy Aura",
    "level": 8,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint's robe or a piece of parchment from a religious text)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 251"
    ],
    "text": "Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends."
  },
  {
    "id": "1708c8fa-60bc-4203-97cc-5adae54a25be",
    "name": "Hunger of Hadar",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a pickled octopus tentacle)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock",
      "Sorcerer (Aberrant)"
    ],
    "sources": [
      "Player's Handbook p. 251"
    ],
    "text": "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded. The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it."
  },
  {
    "id": "f506a65f-d024-465c-8cef-09e0bfe18f71",
    "name": "Hunter's Mark",
    "level": 1,
    "ritual": false,
    "school": "divination",
    "time": "1 bonus action",
    "range": "90 feet",
    "components": "V",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 251"
    ],
    "text": "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.  At Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
  },
  {
    "id": "628d2377-1c7b-4a58-9463-b73f344ef339",
    "name": "Hypnotic Pattern",
    "level": 3,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "120 feet",
    "components": "S, M (a glowing stick o f incense or a crystal vial filled with phosphorescent material)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 252"
    ],
    "text": "You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0. The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor."
  },
  {
    "id": "412463e7-9f03-48e5-8383-d5a5918b5b8d",
    "name": "Ice Storm",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "300 feet",
    "components": "V, S, M (a pinch of dust and a few drops of water)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Druid",
      "Sorcerer",
      "Wizard",
      "Warlock (Raven Queen)"
    ],
    "sources": [
      "Player's Handbook p. 252"
    ],
    "text": "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one. Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th."
  },
  {
    "id": "607dcacc-066b-490b-830f-c6f6c5958133",
    "name": "Identify",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a pearl worth at least 100 gp and an owl feather)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 252"
    ],
    "text": "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it."
  },
  {
    "id": "b6cf05d4-4584-4ac0-8299-e9f9217c1af5",
    "name": "Identify (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a pearl worth at least 100 gp and an owl feather)",
    "duration": "Instantaneous",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 252"
    ],
    "text": "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.  On spell lists: Bard, Wizard"
  },
  {
    "id": "9b87bc01-5bec-4b5f-88c1-376e07f97ace",
    "name": "Illusory Script",
    "level": 1,
    "ritual": true,
    "school": "illusion",
    "time": "1 minute",
    "range": "Touch",
    "components": "S, M (a lead-based ink worth at least 10 gp, which the spell consumes)",
    "duration": "10 days",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 252"
    ],
    "text": "You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know. Should the spell be dispelled, the original script and the illusion both disappear. A creature with truesight can read the hidden message."
  },
  {
    "id": "7e4fd9ff-adbf-4d2f-a41d-620389aa269f",
    "name": "Illusory Script (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "illusion",
    "time": "1 minute",
    "range": "Touch",
    "components": "S, M (a lead-based ink worth at least 10 gp, which the spell consumes)",
    "duration": "10 days",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 252"
    ],
    "text": "You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know. Should the spell be dispelled, the original script and the illusion both disappear. A creature with truesight can read the hidden message.  On spell lists: Rogue (Arcane Trickster), Bard, Warlock, Wizard"
  },
  {
    "id": "db1e54b6-e38a-4bc8-a0b1-be3d5d50921f",
    "name": "Imprisonment",
    "level": 9,
    "ritual": false,
    "school": "abjuration",
    "time": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target)",
    "duration": "Until dispelled",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 252"
    ],
    "text": "You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell, if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target. When you cast the spell, you choose one of the following forms of imprisonment. Burial: The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it. The special component for this version of the spell is a small mithral orb. Chaining: Heavy chains, firmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it can't move or be moved by any means until then. The special component for this version of the spell is a fine chain of precious metal. Hedged Prison: The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar confined structure or area of your choice. The special component for this version of the spell is a miniature representation of the prison made from jade. Minimus Containment: The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone can't be cut or broken while the spell remains in effect. The special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby. Slumber: The target falls asleep and can't be awoken. The special component for this version of the spell consists of rare soporific herbs. Ending the Spell: During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature's name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points. A dispel magic spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it. You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding."
  },
  {
    "id": "f19db531-d753-4fac-9a14-7889e4d6a4ad",
    "name": "Incendiary Cloud",
    "level": 8,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 253"
    ],
    "text": "A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there. The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns."
  },
  {
    "id": "3582fec6-cbef-43e6-9d2e-464a5f865883",
    "name": "Inflict Wounds",
    "level": 1,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 253"
    ],
    "text": "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
  },
  {
    "id": "5726118a-47ba-41e8-add2-8153e1da64a9",
    "name": "Insect Plague",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "300 feet",
    "components": "V, S, M (a few grains of sugar, some kernels of grain, and a smear of fat)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer",
      "Ranger (Swarmkeeper)",
      "Ranger (Primeval Guardian)"
    ],
    "sources": [
      "Player's Handbook p. 254"
    ],
    "text": "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain. When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th."
  },
  {
    "id": "ff52e5b4-f230-4497-a890-e32f8d719a04",
    "name": "Invisibility",
    "level": 2,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (an eyelash encased in gum arabic)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 254"
    ],
    "text": "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
  },
  {
    "id": "e87e3b04-825e-4a84-8d4a-8dd9139c5029",
    "name": "Jump",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a grasshopper's hind leg)",
    "duration": "1 minute",
    "classes": [
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard",
      "Artificer",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 254"
    ],
    "text": "You touch a creature. The creature's jump distance is tripled until the spell ends."
  },
  {
    "id": "c9e91c7d-1d8c-466f-988e-3fad2b0a2ac3",
    "name": "Knock",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 254"
    ],
    "text": "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access. A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked. If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally. When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object."
  },
  {
    "id": "3bfc27d4-64ec-4319-921a-1a58459b6070",
    "name": "Legend Lore",
    "level": 5,
    "ritual": false,
    "school": "divination",
    "time": "10 minutes",
    "range": "Self",
    "components": "V, S, M (incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Warlock (Undying)",
      "Wizard",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 254"
    ],
    "text": "Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is. The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand, the spell might yield this information: Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word Rudnogg on the lips."
  },
  {
    "id": "16947f44-7bb5-4bee-8285-4afc86defebf",
    "name": "Leomund's Secret Chest",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 254"
    ],
    "text": "You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet). While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica. After 60 days, there is a cumulative 5 percent chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost."
  },
  {
    "id": "7a2f9d18-8bb9-46ff-a165-c04767dba311",
    "name": "Leomund's Tiny Hut",
    "level": 3,
    "ritual": true,
    "school": "evocation",
    "time": "1 minute",
    "range": "Self (10-foot-radius hemisphere)",
    "components": "V, S, M (a small crystal bead)",
    "duration": "8 hours",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 255"
    ],
    "text": "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area. Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside."
  },
  {
    "id": "0da1ab87-ae0a-4ba5-b93b-c7bb63ffb29c",
    "name": "Leomund's Tiny Hut (Ritual Only)",
    "level": 3,
    "ritual": true,
    "school": "evocation",
    "time": "1 minute",
    "range": "Self (10-foot-radius hemisphere)",
    "components": "V, S, M (a small crystal bead)",
    "duration": "8 hours",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 255"
    ],
    "text": "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area. Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside.  On spell lists: Fighter (Eldritch Knight), Bard, Wizard"
  },
  {
    "id": "58d57d39-e9f1-4a93-bb89-720c4dea9f05",
    "name": "Lesser Restoration",
    "level": 2,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Warlock (Celestial)",
      "Artificer",
      "Sorcerer (Clockwork)"
    ],
    "sources": [
      "Player's Handbook p. 255"
    ],
    "text": "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned."
  },
  {
    "id": "2fca24fc-4ee5-4c07-b241-c78543bebbfd",
    "name": "Levitate",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Artificer",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 255"
    ],
    "text": "One creature or loose object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected. The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range. When the spell ends, the target floats gently to the ground if it is still aloft."
  },
  {
    "id": "9b64c04c-2729-48c9-b943-6965b76f8b05",
    "name": "Light",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, M (a firefly or phosphorescent moss)",
    "duration": "1 hour",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Cleric",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 255"
    ],
    "text": "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell."
  },
  {
    "id": "bb5d7afa-800a-443a-8c6e-835fd2e625ce",
    "name": "Lightning Arrow",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 255"
    ],
    "text": "The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal, The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage. Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one. The piece of ammunition or weapon then returns to its normal form.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd."
  },
  {
    "id": "3ab617cf-d696-4aad-b3fa-77e24598c44a",
    "name": "Lightning Bolt",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (100-foot line)",
    "components": "V, S, M (a bit of fur and a rod of amber, crystal, or glass)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard",
      "Warlock (Fathomless)"
    ],
    "sources": [
      "Player's Handbook p. 255"
    ],
    "text": "A stroke of lightning forming a line of 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren't being worn or carried.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot above 3rd."
  },
  {
    "id": "e216d813-3ddd-4b53-84dc-7e8af2973447",
    "name": "Locate Animals or Plants",
    "level": 2,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a bit of fur from a bloodhound)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 256"
    ],
    "text": "Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present."
  },
  {
    "id": "47d57ec4-c89c-4d26-b785-942130e569ef",
    "name": "Locate Animals or Plants (Ritual Only)",
    "level": 2,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a bit of fur from a bloodhound)",
    "duration": "Instantaneous",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 256"
    ],
    "text": "Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.  On spell lists: Bard, Druid, Ranger"
  },
  {
    "id": "5a153b8b-7c2a-43e7-adc7-2958418cc1f1",
    "name": "Locate Creature",
    "level": 4,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a bit of fur from a bloodhound)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Wizard",
      "Warlock (Raven Queen)",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 256"
    ],
    "text": "Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement. The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close — within 30 feet — at least once. If the creature you described or named is in a different form, such as being under the effects of a polymorph spell, this spell doesn't locate the creature. This spell can't locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature."
  },
  {
    "id": "84b4ffc0-9011-4dec-b179-2c7ae146cae8",
    "name": "Locate Object",
    "level": 2,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a forked twig)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Wizard",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 256"
    ],
    "text": "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement. The spell can locate a specific object known to you, as long as you have seen it up close — within 30 feet — at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon. This spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object."
  },
  {
    "id": "68150f52-99fa-4ff4-863d-4d2c060f7ba1",
    "name": "Longstrider",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of dirt)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Druid",
      "Ranger",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 256"
    ],
    "text": "You touch a creature. The target's speed increases by 10 feet until the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
  },
  {
    "id": "507adb02-f755-41d9-aaec-099d65936417",
    "name": "Lunging Attack",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack's damage roll."
  },
  {
    "id": "115db6c5-8b26-4681-80ee-9c03d1340856",
    "name": "Mage Armor",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a piece of cured leather)",
    "duration": "8 hours",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 256"
    ],
    "text": "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13+its Dexterity modifier. The spell ends it if the target dons armor or if you dismiss the spell as an action."
  },
  {
    "id": "583ee75a-06fb-4bee-b207-69c005d6e786",
    "name": "Mage Hand",
    "level": 0,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer",
      "Ranger (Swarmkeeper)"
    ],
    "sources": [
      "Player's Handbook p. 256"
    ],
    "text": "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand can't attack, activate magical items, or carry more than 10 pounds."
  },
  {
    "id": "81b737eb-09b0-490f-a374-2a6268f17516",
    "name": "Magic Circle",
    "level": 3,
    "ritual": false,
    "school": "abjuration",
    "time": "1 minute",
    "range": "10 feet",
    "components": "V, S, M (holy water or powdered silver and iron worth at least 100 gp, which the spell consumes)",
    "duration": "1 hour",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Cleric",
      "Paladin",
      "Ranger (Monster Slayer)",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 256"
    ],
    "text": "You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface. Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways: • The creature can't willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw. • The creature has disadvantage on attack rolls against targets within the cylinder. • Targets within the cylinder can't be charmed, frightened, or possessed by the creature. When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd."
  },
  {
    "id": "10241b3f-f39e-491b-b925-f21b7be16d5f",
    "name": "Magic Jar",
    "level": 6,
    "ritual": false,
    "school": "necromancy",
    "time": "1 minute",
    "range": "Self",
    "components": "V, S, M (a gem, crystal, reliquary, or some other ornamental container worth at least 500 gp)",
    "duration": "Until dispelled",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 257"
    ],
    "text": "Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoids body. You can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a protection from evil and good or magic circle spells can't be possessed). The target must make a Charisma saving throw. On a failure, your soul moves into the target's body, and the target's soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can't attempt to possess it again for 24 hours. Once you possess a creature's body, you control it. Your game statistics are replaced by the statistics of the creature though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class feature. If the target has any class levels, you can't use any of its class features. Meanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move or take actions at all. While possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you must make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die. If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you, or if your body is dead when you attempt to return to it, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies. When the spell ends, the container is destroyed."
  },
  {
    "id": "9153ffaf-a070-49ac-baeb-1fcba48bab25",
    "name": "Magic Missile",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 257"
    ],
    "text": "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4+1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot above 1st."
  },
  {
    "id": "d59e8ed6-40c9-4019-a24d-c6752c7be27c",
    "name": "Magic Mouth",
    "level": 2,
    "ritual": true,
    "school": "illusion",
    "time": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes)",
    "duration": "Until dispelled",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 257"
    ],
    "text": "You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message. When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so that words appear to come from the object's mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeats its message whenever the trigger occurs. The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it."
  },
  {
    "id": "ded86775-f9ef-4417-b28b-c4318f48eedb",
    "name": "Magic Mouth (Ritual Only)",
    "level": 2,
    "ritual": true,
    "school": "illusion",
    "time": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes)",
    "duration": "Until dispelled",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 257"
    ],
    "text": "You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message. When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so that words appear to come from the object's mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeats its message whenever the trigger occurs. The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it.  On spell lists: Rogue (Arcane Trickster), Bard, Wizard"
  },
  {
    "id": "234d2cd9-99dc-41fd-ba3a-e4617d4227eb",
    "name": "Magic Weapon",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Paladin",
      "Wizard",
      "Ranger",
      "Sorcerer",
      "Artificer",
      "Sorcerer (Stone Sorcery)"
    ],
    "sources": [
      "Player's Handbook p. 257"
    ],
    "text": "You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3."
  },
  {
    "id": "12083695-fe0d-4581-824c-02da481b3827",
    "name": "Major Image",
    "level": 3,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a bit of fleece)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 258"
    ],
    "text": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench). As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration."
  },
  {
    "id": "d16aa328-f1d6-437d-ba04-5552654cf4c5",
    "name": "Maneuvering Attack",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack's damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack."
  },
  {
    "id": "a4c53c25-9f19-4241-9ed8-f6aecea21d02",
    "name": "Mass Cure Wounds",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 258"
    ],
    "text": "A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8+your spellcasting ability modifier. This spell has no effect on undead or constructs.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th."
  },
  {
    "id": "570783c4-19e5-4479-9982-e4ae66c86684",
    "name": "Mass Heal",
    "level": 9,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 258"
    ],
    "text": "A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs."
  },
  {
    "id": "bee80f47-e9ff-44b0-ae43-b137ab468188",
    "name": "Mass Healing Word",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 258"
    ],
    "text": "As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4+your spellcasting ability modifier. This spell has no effect on undead or constructs.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd."
  },
  {
    "id": "0805e061-2e8e-44d7-a691-969a7da87447",
    "name": "Mass Suggestion",
    "level": 6,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, M (a snake's tongue and either a bit of honeycomb or a drop of sweet oil)",
    "duration": "24 hours",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 258"
    ],
    "text": "You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell. Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends w hen the subject finishes what it was asked to do. You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn't met before the spell ends, the activity isn't performed. If you or any of your companions damage a creature affected by this spell, the spell ends for that creature.  At Higher Levels: When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day."
  },
  {
    "id": "182a5912-944a-4685-8cd6-9a05db7deae6",
    "name": "Maze",
    "level": 8,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 258"
    ],
    "text": "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze. The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds). When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space."
  },
  {
    "id": "129cf3e9-cc90-4a58-bd79-1542399d3c4d",
    "name": "Meld into Stone",
    "level": 3,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "classes": [
      "Cleric",
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 259"
    ],
    "text": "You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses. While merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move. Minor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered."
  },
  {
    "id": "f36c0649-8663-4e6b-8641-dea0c55fffe6",
    "name": "Meld into Stone (Ritual Only)",
    "level": 3,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 259"
    ],
    "text": "You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses. While merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move. Minor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered.  On spell lists: Cleric, Druid"
  },
  {
    "id": "8586f1f0-aebf-454f-86d0-317ca07dd3ef",
    "name": "Melf's Acid Arrow",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (powdered rhubarb leaf and an adder's stomach)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 259"
    ],
    "text": "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
  },
  {
    "id": "4841b35c-8076-47b8-b558-7e7deba40f72",
    "name": "Menacing Attack",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn."
  },
  {
    "id": "db7024c8-aad6-44d1-bfd8-277642d483d9",
    "name": "Mending",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S, M (two lodestones)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Cleric",
      "Druid",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 259"
    ],
    "text": "This spell repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object."
  },
  {
    "id": "0254b30a-d6da-479e-8ff5-aec096f3efbc",
    "name": "Message",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a short piece of copper wire)",
    "duration": "1 round",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 259"
    ],
    "text": "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings."
  },
  {
    "id": "12bcbced-8b5d-489a-a956-96acee8085a7",
    "name": "Meteor Swarm",
    "level": 9,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "1 mile",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 259"
    ],
    "text": "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once. The spell damages objects in the area and ignites flammable objects that aren't being worn or carried."
  },
  {
    "id": "62ee8d2b-39ca-4056-aebb-bca1cfdb27c7",
    "name": "Mind Blank",
    "level": 8,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "24 hours",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 259"
    ],
    "text": "Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils wish spells and spells or effects of similar power used to affect the target's mind or to gain information about the target."
  },
  {
    "id": "c6bce795-cff9-4948-8db6-e86908efd215",
    "name": "Minor Illusion",
    "level": 0,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "30 feet",
    "components": "S, M (a bit of fleece)",
    "duration": "1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 260"
    ],
    "text": "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. If you create an image of an object, such as a chair, muddy footprints, or a small chest, it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."
  },
  {
    "id": "df79fc79-c3d9-4e4a-8aa7-0ff657897022",
    "name": "Mirage Arcane",
    "level": 7,
    "ritual": false,
    "school": "illusion",
    "time": "10 minutes",
    "range": "Sight",
    "components": "V, S",
    "duration": "10 days",
    "classes": [
      "Bard",
      "Druid",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 260"
    ],
    "text": "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures. The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately. Creatures with truesight can see through the illusion to the terrain's true form, however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion."
  },
  {
    "id": "56c9004c-233b-47c7-8635-b356c7893e9d",
    "name": "Mirror Image",
    "level": 2,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 260"
    ],
    "text": "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates. Each time a creature targets you with an attack during the spell's duration, roll a d20 to determine whether the attack instead targets one of your duplicates. If you have three duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher. A duplicate's AC equals 10+your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed. A creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight."
  },
  {
    "id": "499dd1ee-22e1-4210-b1ad-a01269f65b4c",
    "name": "Mislead",
    "level": 5,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Self",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Wizard",
      "Warlock",
      "Ranger (Fey Wanderer)"
    ],
    "sources": [
      "Player's Handbook p. 260"
    ],
    "text": "You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell. You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose. You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings."
  },
  {
    "id": "5ab3ebf8-efc5-448d-9621-4dcdce575add",
    "name": "Mist Stance",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, 4 ki points",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "Prerequisite: 11th level You can spend 4 ki points to cast gaseous form, targeting yourself.  Gaseous Form: You transform yourself, along with everything you're wearing and carrying, into a misty cloud for the duration. The spell ends if you drop to 0 hit points. While in this form, your only method of movement is a flying speed of 10 feet. You can enter and occupy the space of another creature. You have resistance to nonmagical damage, and you have advantage on Strength, Dexterity, and Constitution saving throws. You can pass through small holes, narrow openings, and even mere cracks, though you treat liquids as though they were solid surfaces. You can't fall and remains hovering in the air even when stunned or otherwise incapacitated. While in the form of a misty cloud, you can't talk or manipulate objects, and any objects you were carrying or holding can't be dropped, used, or otherwise interacted with. You can't attack or cast spells."
  },
  {
    "id": "6f899fe7-4144-4e7e-9e98-3779ce7981c2",
    "name": "Misty Step",
    "level": 2,
    "ritual": false,
    "school": "conjuration",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Ranger (Horizon Walker)",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Ranger (Fey Wanderer)"
    ],
    "sources": [
      "Player's Handbook p. 260"
    ],
    "text": "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see."
  },
  {
    "id": "bb1487ab-cff2-4d8a-9f82-3f6140684da8",
    "name": "Modify Memory",
    "level": 5,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 261"
    ],
    "text": "You attempt to reshape another creature's memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none o f the target's m emeries are modified. While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory o f the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event. You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends. A modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory o f how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner. A remove curse or greater restoration spell cast on the target restores the creature's true memory.  At Higher Levels: If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories o f an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level)."
  },
  {
    "id": "0dbaa6d4-c770-4a0e-bb10-1210d99e1cca",
    "name": "Moonbeam",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (several seeds of any moonseed plant and a piece of opalescent feldspar)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 261"
    ],
    "text": "A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder. When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one. A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light. On each of your turns after you cast this spell, you can use an action to move the beam up to 60 feet in any direction.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
  },
  {
    "id": "41abc501-20e5-4041-a2f9-dd52f1c007a6",
    "name": "Mordenkainen's Faithful Hound",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a tiny silver whistle, a piece of bone, and a thread)",
    "duration": "8 hours",
    "classes": [
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 261"
    ],
    "text": "You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it. The hound is invisible to all creatures except you and can't be harmed. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions. At the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hound's attack bonus is equal to your spellcasting ability modifier+your proficiency bonus. On a hit, it deals 4d8 piercing damage."
  },
  {
    "id": "615eee15-15e3-4c3d-9f7b-9447641b774f",
    "name": "Mordenkainen's Magnificent Mansion",
    "level": 7,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "300 feet",
    "components": "V, S, M (a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp)",
    "duration": "24 hours",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 261"
    ],
    "text": "You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible. Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm. You can create any floor plan you like, but the space can't exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can't leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures inside the extradimensional space are expelled into the open spaces nearest to the entrance."
  },
  {
    "id": "3ecefffa-90b8-4c70-8b23-0332092d655f",
    "name": "Mordenkainen's Private Sanctum",
    "level": 4,
    "ritual": false,
    "school": "abjuration",
    "time": "10 minutes",
    "range": "120 feet",
    "components": "V, S, M (a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite)",
    "duration": "24 hours",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 262"
    ],
    "text": "You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it. When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties: • Sound can't pass through the barrier at the edge of the warded area. • The barrier of the warded area appears dark and foggy, preventing vision (including darkvision) through it. • Sensors created by divination spells can't appear inside the protected area or pass through the barrier at its perimeter. • Creatures in the area can't be targeted by divination spells. • Nothing can teleport into or out of the warded area. • Planar travel is blocked within the warded area. Casting this spell on the same spot every day for a year makes this effect permanent.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level."
  },
  {
    "id": "39e104c9-6a34-4246-98d7-b9fe0272b2c5",
    "name": "Mordenkainen's Sword",
    "level": 7,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 262"
    ],
    "text": "You create a sword-shaped plane of force that hovers within range. It lasts for the duration. When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit. the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one."
  },
  {
    "id": "fb5901f9-9234-4fa6-b2e4-7a3832d31409",
    "name": "Move Earth",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (an iron blade and a small bag containing a mixture of soils — clay, loam, and sand)",
    "duration": "Concentration, up to 2 hours",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 263"
    ],
    "text": "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete. At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect. Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement. This spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse. Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it."
  },
  {
    "id": "6b89667e-bef6-40ea-aa4e-0a749cdb0d0d",
    "name": "Nondetection",
    "level": 3,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes)",
    "duration": "8 hours",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Bard",
      "Ranger",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 263"
    ],
    "text": "For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors."
  },
  {
    "id": "b8cd60be-a8c2-40bf-a561-61542ca3db29",
    "name": "Nystul's Magic Aura",
    "level": 2,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a small square of silk)",
    "duration": "24 hours",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 263"
    ],
    "text": "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature. When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled. False Aura: You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item. Mask: You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment."
  },
  {
    "id": "eccc7224-e24b-4815-b9a6-71ccdf99d892",
    "name": "Otiluke's Freezing Sphere",
    "level": 6,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "300 feet",
    "components": "V, S, M (a small crystal sphere)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 263"
    ],
    "text": "A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On successful save, it takes half as much damage. If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free. You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes.  At Higher Levels: W hen you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th"
  },
  {
    "id": "ee137f8b-a920-48b6-a540-5866b8ed6a7b",
    "name": "Otiluke's Resilient Sphere",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 264"
    ],
    "text": "A sphere of shimmering force encloses a creature or object o f Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration. Nothing, not physical objects, energy, or other spell effects, can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it. The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere's walls and thus roll the sphere at up to half the creature's speed. Similarly, the globe can be picked up and moved by other creatures. A disintegrate spell targeting the globe destroys it without harming anything inside it."
  },
  {
    "id": "2b074c3e-ade0-4843-8c12-1f778f8794b7",
    "name": "Otto's Irresistible Dance",
    "level": 6,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 264"
    ],
    "text": "Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can't be charmed are immune to this spell. A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a Wisdom saving throw to regain control o f itself. On a successful save, the spell ends."
  },
  {
    "id": "9000f911-5bc3-44ca-a3fb-8c373b7aa64d",
    "name": "Parry",
    "level": 1,
    "ritual": false,
    "time": "1 reaction",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier."
  },
  {
    "id": "951dc741-cd79-4e39-bf34-345589c281bf",
    "name": "Pass Without Trace",
    "level": 2,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 264"
    ],
    "text": "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage."
  },
  {
    "id": "f5b38039-28c5-44a4-892c-a00ffca3e82e",
    "name": "Passwall",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a pinch of sesame seeds)",
    "duration": "1 hour",
    "classes": [
      "Wizard",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 264"
    ],
    "text": "A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening's dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it. When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell."
  },
  {
    "id": "0022abb5-a8bf-43b1-be45-44617f5f6fe5",
    "name": "Phantasmal Force",
    "level": 2,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a bit of fleece)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock (Archfey)",
      "Warlock (Great Old One)",
      "Wizard",
      "Warlock (Genie)"
    ],
    "sources": [
      "Player's Handbook p. 264"
    ],
    "text": "You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs. The phantasm includes sound, temperature, and other stimuli, also evident only to the creature. The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends. While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall—it was pushed, it slipped, or a strong wind might have knocked it off. An affected target is so convinced of the phantasm's reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion."
  },
  {
    "id": "2564dab1-2acf-4200-9228-1deb4e9e126d",
    "name": "Phantasmal Killer",
    "level": 4,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Warlock (Hexblade)",
      "Wizard",
      "Bard",
      "Warlock (Genie)"
    ],
    "sources": [
      "Player's Handbook p. 265"
    ],
    "text": "You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the end of each of the target’s turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
  },
  {
    "id": "756d8c9d-b5b8-4729-acd5-db932001583b",
    "name": "Phantom Steed",
    "level": 3,
    "ritual": true,
    "school": "illusion",
    "time": "1 minute",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 265"
    ],
    "text": "A Large quasi-real, horse-like creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed. For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage."
  },
  {
    "id": "525083dc-7e17-4d69-b951-3a5954c062ec",
    "name": "Phantom Steed (Ritual Only)",
    "level": 3,
    "ritual": true,
    "school": "illusion",
    "time": "1 minute",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 265"
    ],
    "text": "A Large quasi-real, horse-like creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed. For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage.  On spell lists: Rogue (Arcane Trickster), Wizard"
  },
  {
    "id": "30376efc-9e03-4cf8-b31b-d839e22b1962",
    "name": "Planar Ally",
    "level": 6,
    "ritual": false,
    "school": "conjuration",
    "time": "10 minutes",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 265"
    ],
    "text": "You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM's choice). When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services. Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you. As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task m measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal. After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane. A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded."
  },
  {
    "id": "0128cfc8-c780-4396-8a2c-62e9a54d382f",
    "name": "Planar Binding",
    "level": 5,
    "ritual": false,
    "school": "abjuration",
    "time": "1 hour",
    "range": "60 feet",
    "components": "V, S, M (a jewel worth at least 1,000 gp, which the spell consumes)",
    "duration": "24 hours",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Wizard",
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 265"
    ],
    "text": "With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature w as summoned or created by another spell, that spell's duration is extended to match the duration of this spell. A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends.  At Higher Levels: When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot."
  },
  {
    "id": "e31f5bda-7be2-43e2-b5a5-0dec6b5b3022",
    "name": "Plane Shift",
    "level": 7,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 266"
    ],
    "text": "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion. Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle. You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails the save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence."
  },
  {
    "id": "5bd59532-d99f-4bff-8a4c-48c0a8790cfc",
    "name": "Plant Growth",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action or 8 hours",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Ranger",
      "Warlock (Archfey)"
    ],
    "sources": [
      "Player's Handbook p. 266"
    ],
    "text": "This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits. If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves. You can exclude one or more areas of any size within the spell's area from being affected. If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested."
  },
  {
    "id": "5873cf26-e99c-4d62-9b99-5ef545759dd0",
    "name": "Poison Spray",
    "level": 0,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 266"
    ],
    "text": "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage. This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17 level (4d12)."
  },
  {
    "id": "b3bbf809-c473-41a7-ae6d-f6d893c5686f",
    "name": "Polymorph",
    "level": 4,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a caterpillar cocoon)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 266"
    ],
    "text": "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell has no effect on a shapechanger or a creature with 0 hit points. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech. The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment. This spell can’t affect a target that has 0 hit points."
  },
  {
    "id": "4448ffce-3686-4c2f-9450-06f4bff88c71",
    "name": "Power Word Heal",
    "level": 9,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 266"
    ],
    "text": "A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs."
  },
  {
    "id": "947cc412-ff67-4ffd-a598-98143a62eef2",
    "name": "Power Word Kill",
    "level": 9,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 266"
    ],
    "text": "You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you chose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect."
  },
  {
    "id": "ba8f9ad5-4933-4204-8b6c-35e5b4b94488",
    "name": "Power Word Stun",
    "level": 8,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 267"
    ],
    "text": "You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect. The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends."
  },
  {
    "id": "96d1a2d7-74d4-45b7-b4a3-57a500d14fd7",
    "name": "Prayer of Healing",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "10 minutes",
    "range": "30 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 267"
    ],
    "text": "Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8+your spellcasting ability modifier. This spell has no effect on undead or constructs.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd."
  },
  {
    "id": "a7567503-696a-446a-b9c6-3d483287e826",
    "name": "Precision Attack",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied."
  },
  {
    "id": "d45ce53a-c95f-45fe-9152-34cefce616cb",
    "name": "Prestidigitation",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "Up to 1 hour",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 267"
    ],
    "text": "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:  • You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. • You instantaneously light or snuff out a candle, a torch, or a small campfire. • You instantaneously clean or soil an object no larger than 1 cubic foot. • You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. • You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. • You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.  If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
  },
  {
    "id": "e4c6c5bd-7c3f-429f-a6ea-66926f89b7b1",
    "name": "Prismatic Spray",
    "level": 7,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (60 foot cone)",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 267"
    ],
    "text": "Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it. 1 Red: The target takes 10d6 fire damage on a failed save, or half as much damage on a successful one. 2 Orange: The target takes 10d6 acid damage on a failed save, or half as much damage on a successful one. 3 Yellow: The target takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. 4 Green: The target takes 10d6 poison damage on a failed save, or half as much damage on a successful one. 5 Blue: The target takes 10d6 cold damage on a failed save, or half as much damage on a successful one. 6 Indigo: On a failed save, the target is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive, keep track of both until the target collects three of a kind. 7 Violet: On a failed save, the target is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) 8 Special: The target is struck by two rays. Roll twice more, rerolling any 8."
  },
  {
    "id": "93c17b56-af79-4149-9a7b-1f6d6b80c599",
    "name": "Prismatic Wall",
    "level": 9,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "10 minutes",
    "classes": [
      "Wizard",
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 267"
    ],
    "text": "A shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.  The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute. The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall’s layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer’s properties as described below. The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. Antimagic field has no effect on the wall, and dispel magic can affect only the violet layer.  1. Red: The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can’t pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it.  2. Orange; The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can’t pass through the wall. The layer is destroyed by a strong wind.  3. Yellow: The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it.  4. Green: The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.  5. Blue: The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it.  6. Indigo: On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don’t need to be consecutive; keep track of both until the creature collects three of a kind. While this layer is in place, spells can’t be cast through the wall. The layer is destroyed by bright light shed by a daylight spell or a similar spell of equal or higher level.  7. Violet: On a failed save, the creature is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM’s choosing and is no longer blinded. (Typically, a creature that is on a plane that isn’t its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a dispel magic spell or a similar spell of equal or higher level that can end spells and magical effects."
  },
  {
    "id": "08926ab0-4976-42e9-a677-d8401ead837f",
    "name": "Produce Flame",
    "level": 0,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 269"
    ],
    "text": "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again. You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  },
  {
    "id": "ca5f0d97-d9f6-4de4-b17b-643527dd49b5",
    "name": "Programmed Illusion",
    "level": 6,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a bit of fleece and jade dust worth at least 25 gp)",
    "duration": "Until dispelled",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 269"
    ],
    "text": "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes. When the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again. The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
  },
  {
    "id": "a74eca15-1ba7-4973-848f-eae61e24bb79",
    "name": "Project Image",
    "level": 7,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "500 miles",
    "components": "V, S, M (a small replica of you made from materials worth at least 5 gp)",
    "duration": "Concentration, up to 1 day",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 270"
    ],
    "text": "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends. You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly. You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
  },
  {
    "id": "f417ba7a-26e4-40a5-87a2-3ed6df2ca64a",
    "name": "Protection from Energy",
    "level": 3,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Cleric",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard",
      "Artificer",
      "Sorcerer (Clockwork)"
    ],
    "sources": [
      "Player's Handbook p. 270"
    ],
    "text": "For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder."
  },
  {
    "id": "0bbcaf8f-6f5d-4376-8274-b4b64fabd1ca",
    "name": "Protection from Evil and Good",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (holy water or powdered silver and iron, which the spell consumes)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Cleric",
      "Paladin",
      "Ranger (Horizon Walker)",
      "Ranger (Monster Slayer)",
      "Warlock",
      "Wizard",
      "Druid",
      "Sorcerer (Clockwork)"
    ],
    "sources": [
      "Player's Handbook p. 270"
    ],
    "text": "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead. The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect."
  },
  {
    "id": "f6b4d4ac-5b32-426f-be68-91615265de0c",
    "name": "Protection from Poison",
    "level": 2,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 hour",
    "classes": [
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 270"
    ],
    "text": "You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random. For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage."
  },
  {
    "id": "62216101-57b3-478c-81c4-bafbd045874f",
    "name": "Purify Food and Drink",
    "level": 1,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Paladin",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 270"
    ],
    "text": "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease."
  },
  {
    "id": "be4ecbff-6052-4f3b-ae16-a6ea8686e769",
    "name": "Purify Food and Drink (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 270"
    ],
    "text": "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.  On spell lists: Cleric, Druid, Paladin"
  },
  {
    "id": "e56ed16a-485e-4929-8f3b-604415042ec2",
    "name": "Pushing Attack",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you."
  },
  {
    "id": "509b1a8c-070f-47e7-a09d-7f63c4b8a5c1",
    "name": "Raise Dead",
    "level": 5,
    "ritual": false,
    "school": "necromancy",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a diamond worth at least 500 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 270"
    ],
    "text": "You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point. This spell also neutralizes any poison and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects, if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life. This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival — its head, for instance — the spell automatically fails. Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears."
  },
  {
    "id": "7a11aad2-10d4-469a-acd5-b40cbf71e2ef",
    "name": "Rally",
    "level": 1,
    "ritual": false,
    "time": "1 bonus action",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier."
  },
  {
    "id": "a627557c-0689-45c2-a318-4ceb8cae9613",
    "name": "Rary's Telepathic Bond",
    "level": 5,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (pieces of eggshell from two different kinds of creatures)",
    "duration": "1 hour",
    "classes": [
      "Wizard",
      "Bard",
      "Sorcerer (Aberrant)"
    ],
    "sources": [
      "Player's Handbook p. 270"
    ],
    "text": "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell. Until the spell ends, the targets can communicated telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence."
  },
  {
    "id": "0d29374b-2d78-4698-a73e-b44d034d008c",
    "name": "Rary's Telepathic Bond (Ritual Only)",
    "level": 5,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (pieces of eggshell from two different kinds of creatures)",
    "duration": "1 hour",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 270"
    ],
    "text": "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell. Until the spell ends, the targets can communicated telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence.  On spell lists: Wizard"
  },
  {
    "id": "3eb500e4-9fcd-4d15-aef9-667e0f38f30e",
    "name": "Ray of Enfeeblement",
    "level": 2,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 271"
    ],
    "text": "A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends. At the end of each of the target's turns, it can make a Constitution saving throw against the spell. On a success, the spell ends."
  },
  {
    "id": "f4c1ecf0-76d2-4d2b-9ef6-306bafd8ea47",
    "name": "Ray of Frost",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 271"
    ],
    "text": "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  },
  {
    "id": "0a815c53-e085-40e5-b43c-f7fc0ea49949",
    "name": "Ray of Sickness",
    "level": 1,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock (Undying)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 271"
    ],
    "text": "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
  },
  {
    "id": "4db10e17-e5de-4b54-a790-fa1129c56619",
    "name": "Regenerate",
    "level": 7,
    "ritual": false,
    "school": "transmutation",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a prayer wheel and holy water)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 271"
    ],
    "text": "You touch a creature and stimulate its natural healing ability. The target regains 4d8+15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute). The target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump."
  },
  {
    "id": "7ad67fec-7abe-43e6-aa8e-7a17a4ac0bba",
    "name": "Reincarnate",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (rare oils and unguents worth at least 1,000 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 271"
    ],
    "text": "You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing to do so, the spell fails. The magic fashions a new body for the creature to inhabit, which likely causes the creature's race to change. The DM rolls a d100 and consults the following table to determine what form the creature takes when restored to life, or the DM chooses a form. 01-04 — Dragonborn 05-13 — Dwarf, hill 14-21 — Dwarf, mountain 22-25 — Elf, dark 26-34 — Elf, high 35-42 — Elf, wood 43-46 — Gnome, forest 47-52 — Gnome, rock 53-56 — Half-elf 57-60 — Half-orc 61-68 — Halfling, lightfoot 69-76 — Halfling, stout 77-96 — Human 97-00 — Tiefling The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly."
  },
  {
    "id": "4b46d98b-a233-443d-8359-8470b16768ef",
    "name": "Remove Curse",
    "level": 3,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Cleric",
      "Paladin",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 271"
    ],
    "text": "At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded."
  },
  {
    "id": "662ec183-88f4-4f3d-b342-8628142364db",
    "name": "Resistance",
    "level": 0,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a miniature cloak)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 272"
    ],
    "text": "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after the saving throw. The spell then ends."
  },
  {
    "id": "e424033e-68aa-4b8b-8b88-825173280304",
    "name": "Resurrection",
    "level": 7,
    "ritual": false,
    "school": "necromancy",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a diamond worth at least 1,000 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 272"
    ],
    "text": "You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points. This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't, however, remove magical diseases, curses, and the like, if such affects aren't removed prior to casting the spell, they afflict the target on its return to life. This spell closes all mortal wounds and restores any missing body parts. Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears. Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws."
  },
  {
    "id": "cc09dded-8b66-41d8-907c-7782580d61d1",
    "name": "Reverse Gravity",
    "level": 7,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "100 feet",
    "components": "V, S, M (a lodestone and iron filings)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 272"
    ],
    "text": "This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall. If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration. At the end of the duration, affected objects and creatures fall back down."
  },
  {
    "id": "ca106a94-d7ec-4719-88ff-cade1cd77433",
    "name": "Revivify",
    "level": 3,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (diamonds worth 300 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Paladin",
      "Warlock (Celestial)",
      "Druid",
      "Ranger",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 272"
    ],
    "text": "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts."
  },
  {
    "id": "97e76fa3-4c58-4cf4-8026-72dd508d8c3c",
    "name": "Ride the Wind",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, 4 ki points",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "Prerequisite: 11th level You can spend 4 ki points to cast fly, targeting yourself.  Fly: You gain a flying speed of 60 feet for the duration. When the spell ends, you fall if you are still aloft, unless you can stop the fall."
  },
  {
    "id": "ed7a0df6-513b-4c53-89fd-153c09b742b2",
    "name": "Riposte",
    "level": 1,
    "ritual": false,
    "time": "1 reaction",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll."
  },
  {
    "id": "246b864d-e168-467b-815f-51c11e3046c2",
    "name": "River of Hungry Flame",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, 5 ki points",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "Prerequisite: 17th level You can spend 5 ki points to cast wall of fire.  Wall of Fire: You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot think, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot think. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save. One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.  Additional Ki Points: When you cast this spell using 6 ki points, the damage increases to 6d8."
  },
  {
    "id": "3aae2b49-accd-43cf-8500-52885398e4bb",
    "name": "Rope Trick",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (powdered corn extract and a twisted loop of parchment)",
    "duration": "1 hour",
    "classes": [
      "Ranger (Gloom Stalker)",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 272"
    ],
    "text": "You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends. The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space. Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope. Anything inside the extradimensional space drops out when the spell ends."
  },
  {
    "id": "9a52f4b8-ea92-4705-9850-cda63b6382db",
    "name": "Rush of the Gale Spirits",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (60-foot line)",
    "components": "V, S, 2 ki points",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "You can spend 2 ki points to cast gust of wind.  Gust of Wind: A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line. Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you. The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you."
  },
  {
    "id": "3e4e59a6-bfbb-4584-8d64-c6ad70fa5b46",
    "name": "Sacred Flame",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 272"
    ],
    "text": "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  },
  {
    "id": "589582de-ea6d-45b2-9a14-bfd9f938454f",
    "name": "Sanctuary",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "1 bonus action",
    "range": "30 feet",
    "components": "V, S, M (a small silver mirror)",
    "duration": "1 minute",
    "classes": [
      "Cleric",
      "Artificer",
      "Warlock (Raven Queen)"
    ],
    "sources": [
      "Player's Handbook p. 272"
    ],
    "text": "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends."
  },
  {
    "id": "a024433f-7d21-47ee-a58e-58aaec6d0334",
    "name": "Scorching Ray",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Warlock (Fiend)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 273"
    ],
    "text": "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd."
  },
  {
    "id": "2fed12ac-9227-485f-a4b4-a1766ef917a0",
    "name": "Scrying",
    "level": 5,
    "ritual": false,
    "school": "divination",
    "time": "10 minutes",
    "range": "Self",
    "components": "V, S, M (a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 273"
    ],
    "text": "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.  Knowledge — Save Modifier: Secondhand (you have heard of the target) — +5 Firsthand (you have met the target) — +0 Familiar (you know the target well) — -5  Connection — Save Modifier: Likeness or picture — -2 Possession or garment — -4 Body part, lock of hair, bit of nail, or the like — -10  On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours. On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist. Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move."
  },
  {
    "id": "48af6378-fa4a-476e-af63-ad323447eb64",
    "name": "Searing Smite",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Ranger",
      "Sorcerer (Stone Sorcery)"
    ],
    "sources": [
      "Player's Handbook p. 274"
    ],
    "text": "The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot above the 1st."
  },
  {
    "id": "b186e6e8-6bac-4790-bf04-8b927b36c347",
    "name": "See Invisibility",
    "level": 2,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (A pinch of Talc and a small sprinkling of powdered silver)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 274"
    ],
    "text": "For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent."
  },
  {
    "id": "92ca8d60-fcd9-4e5d-bd8b-af0f84457a0e",
    "name": "Seeming",
    "level": 5,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "8 hours",
    "classes": [
      "Bard",
      "Ranger (Gloom Stalker)",
      "Sorcerer",
      "Warlock (Archfey)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 274"
    ],
    "text": "This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell. The spell disguises physical appearances as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in-between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner. The changes wrought by this spell fail to hold up to physical inspections. For example, if you use this spell to add a hat to a creature's outfit objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner then you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised."
  },
  {
    "id": "ef626bc3-4c6e-46eb-bc39-ced14b82bc83",
    "name": "Sending",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Unlimited",
    "components": "V, S, M (A short piece of fine copper wire)",
    "duration": "1 round",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Cleric",
      "Warlock (Great Old One)",
      "Wizard",
      "Sorcerer (Aberrant)",
      "Warlock (Seeker)"
    ],
    "sources": [
      "Player's Handbook p. 274"
    ],
    "text": "You send a short message of twenty-five words or less to a creature with you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message. You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive."
  },
  {
    "id": "069d8fe2-7a88-45ec-b89e-65d0ab713ea2",
    "name": "Sequester",
    "level": 7,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes)",
    "duration": "Until dispelled",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 274"
    ],
    "text": "By means of this spell, a willing creature of an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by the divination of spells. If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older. You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include after 1,000 years or when the tarrasque awakes. This spells also ends if the target takes any damage."
  },
  {
    "id": "5872baa0-48a0-4e8c-81b3-91caf305e408",
    "name": "Shape of the Flowing River",
    "level": 1,
    "ritual": false,
    "time": "1 action",
    "range": "120 feet",
    "components": "1 ki point",
    "duration": "Instantaneous",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "As an action, you can spend 1 ki point to choose an area of ice or water no larger than 30 feet on a side within 120 feet of you. You can change water to ice within the area and vice versa, and you can reshape ice in the area in any manner you choose. You can raise or lower the ice's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. For example, if you affect a 30-foot square, you can create a pillar up to 15 feet high, raise or lower the square's elevation by up to 15 feet, dig a trench up to 15 feet deep, and so on. You can't shape the ice to trap or injure a creature in the area."
  },
  {
    "id": "1aed3ef5-b966-4363-8e92-c2771017d1d9",
    "name": "Shapechange",
    "level": 9,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 274"
    ],
    "text": "You assume the form of a different creature for the duration. The new form can be any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait. Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature, If the creature has the same proficiency as you, and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form. You assume the hit points and Hit Dice of the new form. When you revert to your normal, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious. When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state. During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit pints than your current one, your hit points remain at their current value."
  },
  {
    "id": "4fa77881-d92f-4d80-a829-08d6d83d590e",
    "name": "Shatter",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a chip of mica)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 275"
    ],
    "text": "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.  At Higher Levels: When you cast this spell using a spell slot of or higher, the damage increases by 1d8 for each slot level above 2nd."
  },
  {
    "id": "491a6801-59b7-4013-a7fd-b065fb0c413b",
    "name": "Shield",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell",
    "range": "Self",
    "components": "V, S",
    "duration": "1 round",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Warlock (Hexblade)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 275"
    ],
    "text": "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile."
  },
  {
    "id": "7179492e-b265-4a19-96b7-e146901ce24c",
    "name": "Shield of Faith",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "1 bonus action",
    "range": "60 feet",
    "components": "V, S, M (a small parchment with a bit of holy text written on it)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 275"
    ],
    "text": "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
  },
  {
    "id": "72590130-2962-4550-ad92-bee50abb210c",
    "name": "Shillelagh",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Touch",
    "components": "V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)",
    "duration": "1 minute",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 275"
    ],
    "text": "The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon."
  },
  {
    "id": "4a9b8c8a-2d93-4109-97ae-fdbdd389663d",
    "name": "Shocking Grasp",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 275"
    ],
    "text": "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  },
  {
    "id": "8d8e5f56-a918-4fea-9716-b22845126901",
    "name": "Silence",
    "level": 2,
    "ritual": true,
    "school": "illusion",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Bard",
      "Cleric",
      "Ranger",
      "Warlock (Undying)",
      "Warlock (Fathomless)",
      "Warlock (Raven Queen)"
    ],
    "sources": [
      "Player's Handbook p. 275"
    ],
    "text": "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there."
  },
  {
    "id": "8479eb0d-be4d-48e0-befc-60bb38ee12ba",
    "name": "Silence (Ritual Only)",
    "level": 2,
    "ritual": true,
    "school": "illusion",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 275"
    ],
    "text": "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.  On spell lists: Bard, Cleric, Ranger, Warlock (Undying)"
  },
  {
    "id": "0cb2b518-4762-4aff-a684-31729dc56c78",
    "name": "Silent Image",
    "level": 1,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a bit of fleece)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 276"
    ],
    "text": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual, it isn't accompanied by sound, smell, or other sensory effects. You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image."
  },
  {
    "id": "5f7d5479-ff6a-4a63-a3f3-f60eee4f813e",
    "name": "Simulacrum",
    "level": 7,
    "ritual": false,
    "school": "illusion",
    "time": "12 hours",
    "range": "Touch",
    "components": "V, S, M (snow or ice in quantities sufficient to made a life-size copy of the duplicated creature some hair, fingernail clippings, or other piece of that creature's body placed inside the snow or ice and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell)",
    "duration": "Until dispelled",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 276"
    ],
    "text": "You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates, except that it is a construct. The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots. If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly. If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed."
  },
  {
    "id": "378de2df-e34f-467c-b7a3-b1a4a0f91eea",
    "name": "Sleep",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a pinch of find sand, rose petals, or a cricket)",
    "duration": "1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock (Archfey)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 276"
    ],
    "text": "This spell sends creatures into a magical slumber. Roll 5d8, the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren't affected by this spell.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
  },
  {
    "id": "00156731-b209-44da-bd82-0e2aebfc3824",
    "name": "Sleet Storm",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a pinch of dust and a few drops of water)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard",
      "Warlock (Fathomless)"
    ],
    "sources": [
      "Player's Handbook p. 276"
    ],
    "text": "Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused. The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone. If a creature starts its turn in the spell’s area and is concentrating on a spell, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration."
  },
  {
    "id": "2319cf1e-ec01-4e7d-855f-c0dcd78c7cf6",
    "name": "Slow",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a drop of molasses)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 277"
    ],
    "text": "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration. An affected target's speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted. A creature affected by this spell makes another Wisdom saving throw at the end of each of its turns. On a successful save, the effect ends for it."
  },
  {
    "id": "04e9d1e9-9984-418f-b52f-5ed77ef923bb",
    "name": "Spare the Dying",
    "level": 0,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 277"
    ],
    "text": "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."
  },
  {
    "id": "6f0fc240-feab-4388-9ae9-fa11e44f1240",
    "name": "Speak with Animals",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 277"
    ],
    "text": "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion."
  },
  {
    "id": "b1f64041-e31b-4c00-b2b5-e8ab423172a8",
    "name": "Speak with Animals (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 277"
    ],
    "text": "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.  On spell lists: Bard, Druid, Ranger"
  },
  {
    "id": "6c1a1486-2fa0-4b5c-98b2-c875e2f760aa",
    "name": "Speak with Dead",
    "level": 3,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "10 feet",
    "components": "V, S, M (burning incense)",
    "duration": "10 minutes",
    "classes": [
      "Bard",
      "Cleric",
      "Warlock (Undying)",
      "Wizard",
      "Warlock (Raven Queen)"
    ],
    "sources": [
      "Player's Handbook p. 277"
    ],
    "text": "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days. Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events."
  },
  {
    "id": "a5b29c25-6d0e-40e8-bc71-fec20963c6e2",
    "name": "Speak with Plants",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V, S",
    "duration": "10 minutes",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 277"
    ],
    "text": "You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances. You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example. Plants might be able to perform other tasks on your behalf, at the DM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks. If a plant creature is in the area, you can communicate with it as if you shard a common language, but you gain no magical ability to influence it. This spell can cause the plants created by the entangle spell to release a restrained creature."
  },
  {
    "id": "c12ab5f1-05c6-4c8d-8a41-6a1e43db0185",
    "name": "Spider Climb",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a drop of bitumen and a spider)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 277"
    ],
    "text": "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed."
  },
  {
    "id": "553b3e5b-08d3-4220-aa5b-900aab40da98",
    "name": "Spike Growth",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (seven sharp thorns or seven small twigs, each sharpened to a point)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 277"
    ],
    "text": "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels. The transformation of the ground is camouflaged to look natural. Any creature that can't see the area at the time the spell is case must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it."
  },
  {
    "id": "134ce435-785b-425b-9cf2-45230fc4d776",
    "name": "Spirit Guardians",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Self (15-foot-radius)",
    "components": "V, S, M (a holy symbol)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 278"
    ],
    "text": "You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
  },
  {
    "id": "0c3ada6f-a3b7-40ea-b164-4bada63fedcf",
    "name": "Spiritual Weapon",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "1 minute",
    "classes": [
      "Cleric",
      "Warlock (Raven Queen)"
    ],
    "sources": [
      "Player's Handbook p. 278"
    ],
    "text": "You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8+your spellcasting ability modifier. As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it. The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon.  At Higher Levels: When you cast this spell using a spell slot 3rd level of or higher, the damage increases by 1d8 for every two slot levels above the 2nd."
  },
  {
    "id": "20d27386-4238-462b-90f7-a168c2a6c566",
    "name": "Staggering Smite",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Warlock (Hexblade)",
      "Sorcerer (Stone Sorcery)"
    ],
    "sources": [
      "Player's Handbook p. 278"
    ],
    "text": "The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn."
  },
  {
    "id": "c0409168-6311-482d-ba83-26475ac6c7ac",
    "name": "Stinking Cloud",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a rotten egg or several skunk cabbage leaves)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock (Fiend)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 278"
    ],
    "text": "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration. Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw. A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
  },
  {
    "id": "e900d67f-db25-4b94-a041-119cf0aa7bcc",
    "name": "Stone Shape",
    "level": 4,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (soft clay, which must be worked into roughly the desired shape of the stone object)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 278"
    ],
    "text": "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible."
  },
  {
    "id": "d351332c-8fbe-4519-bd4e-7812a9ba1528",
    "name": "Stoneskin",
    "level": 4,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (diamond dust worth 100 gp, which the spell consumes)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 278"
    ],
    "text": "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage."
  },
  {
    "id": "1be71774-4318-45f3-b5e2-f26152a6d595",
    "name": "Storm of Vengeance",
    "level": 9,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Sight",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 279"
    ],
    "text": "A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes. Each round you maintain concentration on this spell, the storm produces different effects on your turn. Round 2: Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage. Round 3: You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. Round 4: Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage. Round 5-10: Gusts and freezing rain assail the area under the cloud. the area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area whether mundane or magical."
  },
  {
    "id": "14b66dc0-afb3-4e2a-bedb-1db8394b3a6b",
    "name": "Suggestion",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, M (a snake's tongue and either a bit of honeycomb or a drop of sweet oil)",
    "duration": "Concentration, up to 8 hours",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 279"
    ],
    "text": "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell. The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do. You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight five her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't preformed. If you or any of your companions damage the target, the spell ends."
  },
  {
    "id": "44314b22-fb07-4b41-8fb5-45c6183e0e0a",
    "name": "Sunbeam",
    "level": 6,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (60-foot line)",
    "components": "V, S, M (a magnifying glass)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard",
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 279"
    ],
    "text": "A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw. You can create a new line of radiance as your action on any turn until the spell ends. For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. The light is sunlight."
  },
  {
    "id": "fd66fd08-2b28-4edd-9f2d-d58ceb764ac7",
    "name": "Sunburst",
    "level": 8,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (fire and a piece of sunstone)",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard",
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 279"
    ],
    "text": "Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded. This spell dispels any darkness in its area that was created by a spell."
  },
  {
    "id": "804b2c36-afdc-4bb9-a61f-9019c0ac183b",
    "name": "Sweeping Attack",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack."
  },
  {
    "id": "ffab846d-6bfe-4ced-9b56-89b534a6ac39",
    "name": "Sweeping Cinder Strike",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (15-foot cone)",
    "components": "V, S, 2 ki points",
    "duration": "Instantaneous",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "You can spend 2 ki points to cast burning hands.  Burning Hands: As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.  Additional Ki Points: When you cast this spell using a or more ki points, the damage increases by 1d6 for each ki point above 2.."
  },
  {
    "id": "3bd90e95-d934-4eed-8d9f-77e6be0a25e0",
    "name": "Swift Quiver",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Touch",
    "components": "V, S, M (a quiver containing at least one piece of ammunition)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 279"
    ],
    "text": "You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it. On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends."
  },
  {
    "id": "1f2193ea-841b-4071-a24e-e83a2a78559e",
    "name": "Symbol",
    "level": 7,
    "ritual": false,
    "school": "abjuration",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S, M (mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes)",
    "duration": "Until dispelled or triggered",
    "classes": [
      "Bard",
      "Cleric",
      "Wizard",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 280"
    ],
    "text": "When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place, if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph. You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there. Death: Each target must make a Constitution saving throw, taking 10d10 necrotic damage on a failed save, or half as much damage on a successful save. Discord: Each target must make a Constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks. Fear: Each target must make a Wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able. Hopelessness: Each target must make a Charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects. Insanity; Each target must make an Intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The DM controls its movement, which is erratic. Pain: Each target must make a Constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save. Sleep: Each target must make a Wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake."
  },
  {
    "id": "1380a06d-3762-4429-996a-9c7cbc25d8aa",
    "name": "Tasha's Hideous Laughter",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (tiny tarts and a feather that waved in the air)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Bard",
      "Warlock (Great Old One)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 280"
    ],
    "text": "A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laugher if this spell affects it. The target must succeed on a Wisdom saving throw of fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected. At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it's triggered by damage. On a success, the spell ends."
  },
  {
    "id": "81147033-9a72-4685-9652-89f96def6e01",
    "name": "Telekinesis",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Sorcerer",
      "Warlock (Great Old One)",
      "Wizard",
      "Sorcerer (Aberrant)"
    ],
    "sources": [
      "Player's Handbook p. 280"
    ],
    "text": "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell. Creature: You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air. On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest. Object: You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell. If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell. You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial."
  },
  {
    "id": "1d0a8576-eda2-4100-b086-5670acdc4a07",
    "name": "Telepathy",
    "level": 8,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Unlimited",
    "components": "V, S, M (a pair of linked silver rings)",
    "duration": "24 hours",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 281"
    ],
    "text": "You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane. Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it."
  },
  {
    "id": "313d68f8-c46b-4884-8224-e179240193ab",
    "name": "Teleport",
    "level": 7,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "10 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 281"
    ],
    "text": "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature. The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table. Familiarity: Permanent Circle — On Target 01-100 Associated object — On Target 01-100 Very familiar — Mishap 01-05, Similar Area 06-13, Off Target 14-24, On Target 25-100 Seen casually — Mishap 1-33, Similar Area 34-43, Off Target 44-53, On Target 54-100 Viewed once — Mishap 01-43, Similar Area 44-53, Off Target 54-73, On Target 74-100 Description — Mishap 01-43, Similar Area 44-53, Off Target 54-73, On Target 74-100 False destination — Mishap 01-50, Similar Area 51-100 Familiarity: \"Permanent circle\" means a permanent teleportation circle whose sigil sequence you know. \"Associated object\" means that you possess an object taken from the desired destination within the last six months, such as a book from a wizard's library, bed linen from a royal suite, or a chunk of marble from a lich's secret tomb. \"Very familiar\" is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell. \"Seen casually\" is someplace you have seen more than once but with which you aren't very familiar. \"Viewed once\" is a place you have seen once, possibly using magic. \"Description\" is a place whose location and appearance you know through someone else's description, perhaps from a map. \"False destination\" is a place that doesn't exist. Perhaps you tried to scry an enemy's sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists. On Target: You and your group (or the target object) appear where you want to. Off Target: You and your group (or the target object) appear a random distance away from the destination in a random direction. Distance off target is 1d10 x 1d10 percent of the distance that was to be traveled. For example, if you tried to travel 120 miles, landed off target, and rolled a 5 and 3 on the two d 10s, then you would be off target by 15 percent, or 18 miles. The DM determines the direction off target randomly by rolling a d8 and designating 1 as north, 2 as northeast, 3 as east, and so on around the points of the compass. If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble. Similar Area: You and your group (or the target object) wind up in a different area that's visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizard's laboratory or in an alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane. Mishap: The spell's unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 force damage, and the DM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time)."
  },
  {
    "id": "6a0299ee-d5d0-4533-b9fe-ea914e0e015d",
    "name": "Teleportation Circle",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "10 feet",
    "components": "V, M (rare chalks and inks infused with precious gems with 50 gp, which the spell consumes)",
    "duration": "1 round",
    "classes": [
      "Bard",
      "Sorcerer",
      "Ranger (Horizon Walker)",
      "Wizard",
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 282"
    ],
    "text": "As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied. Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence — a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute. You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way."
  },
  {
    "id": "cd7f736b-3fd8-4a63-ab56-014687e435b7",
    "name": "Tenser's Floating Disk",
    "level": 1,
    "ritual": true,
    "school": "conjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of mercury)",
    "duration": "1 hour",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 282"
    ],
    "text": "This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground. The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can more across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom. If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends."
  },
  {
    "id": "6f0310f1-46ec-4cd0-a7b0-b4e1029eba9e",
    "name": "Tenser's Floating Disk (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "conjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of mercury)",
    "duration": "1 hour",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 282"
    ],
    "text": "This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground. The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can more across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom. If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends.  On spell lists: Wizard"
  },
  {
    "id": "5fd2ae03-bba2-4b35-973c-3f89f137549b",
    "name": "Thaumaturgy",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "Up to 1 minute",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 282"
    ],
    "text": "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range: • Your voice booms up to three times as loud as normal for 1 minute. • You cause flames to flicker, brighten, dim, or change color for 1 minute. • You cause harmless tremors in the ground for 1 minute. • You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers. • You instantaneously cause an unlocked door or window to fly open or slam shut. • You alter the appearance of your eyes for 1 minute. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."
  },
  {
    "id": "485191ae-e9fb-41ad-9cba-4e75f1c874f3",
    "name": "Thorn Whip",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (the stem of a plant with thorns)",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 282"
    ],
    "text": "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  },
  {
    "id": "a814b386-f022-4506-9765-d14d30a7286f",
    "name": "Thunderous Smite",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Sorcerer (Stone Sorcery)"
    ],
    "sources": [
      "Player's Handbook p. 282"
    ],
    "text": "The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone."
  },
  {
    "id": "3461f003-fbcb-4610-8f20-66dd35c547c4",
    "name": "Thunderwave",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (15-foot cube)",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Bard",
      "Druid",
      "Sorcerer",
      "Wizard",
      "Warlock (Fathomless)"
    ],
    "sources": [
      "Player's Handbook p. 282"
    ],
    "text": "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
  },
  {
    "id": "352bd1ab-3291-492e-a229-6e5a42a5dc5b",
    "name": "Time Stop",
    "level": 9,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 283"
    ],
    "text": "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4+1 turns in a row, during which you can use actions and move as normal. This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it."
  },
  {
    "id": "14db5422-fe21-4fab-af81-7d782177d57a",
    "name": "Tongues",
    "level": 3,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Touch",
    "components": "V, M (a small clay model of a ziggurat)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 283"
    ],
    "text": "This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says."
  },
  {
    "id": "45f39eb2-188b-4a7d-948e-7be228b27f6e",
    "name": "Transport via Plants",
    "level": 6,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "1 round",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 283"
    ],
    "text": "This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement."
  },
  {
    "id": "80827b30-eed3-400d-a595-e622d74e4d95",
    "name": "Tree Stride",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 283"
    ],
    "text": "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered. You can use this transportation ability once per round for the duration. You must end each turn outside a tree."
  },
  {
    "id": "78ccc0c4-75e1-485a-aeda-65ee79620e51",
    "name": "Trip Attack",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept",
      "Ranger (No Spells)"
    ],
    "sources": [
      "Player's Handbook p. 74"
    ],
    "text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone."
  },
  {
    "id": "d6cc4eae-1ded-450d-8de0-94931cf026df",
    "name": "True Polymorph",
    "level": 9,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of mercury, a dollop of gum arabic, and a wisp of smoke)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 283"
    ],
    "text": "Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into a nonmagical object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation lasts until it is dispelled. This spell has no effect on a shapechanger or a creature with 0 hit points. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn’t affected by this spell. Creature into Creature: If you turn a creature into another kind of creature, the new form can be any kind you choose whose challenge rating is equal to or less than the target's (or its level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality. The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech unless its new form is capable of such actions. The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment. Object into Creature: You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature's challenge rating is 9 or lower. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The DM has the creature's statistics and resolves all of its actions and movement. If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it. Creature into Object: If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form, as long as the object’s size is no larger than the creature’s size. The creature's statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form. This spell can’t affect a target that has 0 hit points."
  },
  {
    "id": "726c6cf1-29ba-4e44-9087-dd178920bbdc",
    "name": "True Resurrection",
    "level": 9,
    "ritual": false,
    "school": "necromancy",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 284"
    ],
    "text": "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature’s soul is free and willing, the creature is restored to life with all its hit points. This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. If the creature was undead, it is restored to its non-undead form. The spell can even provide a new body if the original no longer exists, in which case you must speak the creature’s name. The creature then appears in an unoccupied space you choose within 10 feet of you."
  },
  {
    "id": "59334b9d-ce90-419a-a9f9-1601b2c2bbba",
    "name": "True Seeing",
    "level": 6,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (an ointment for the eyes that costs 25 gp, is made from mushroom powder, saffron, and fat, and is consumed by the spell)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 284"
    ],
    "text": "This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet."
  },
  {
    "id": "23a741f5-8770-4e41-9d53-5ad53520fab8",
    "name": "True Strike",
    "level": 0,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "30 feet",
    "components": "S",
    "duration": "Concentration, up to 1 round",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 284"
    ],
    "text": "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended."
  },
  {
    "id": "bfa51c61-e6f7-4520-8b24-46d9dda222b5",
    "name": "Tsunami",
    "level": 8,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "Sight",
    "components": "V, S",
    "duration": "Concentration, up to 6 rounds",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 284"
    ],
    "text": "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration. When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save. At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends. A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground."
  },
  {
    "id": "6b8e4445-4f4c-43cd-bb32-21c13b285d8a",
    "name": "Unseen Servant",
    "level": 1,
    "ritual": true,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a piece of string and a bit of wood)",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 284"
    ],
    "text": "This spell creates an invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends."
  },
  {
    "id": "cb79ba9e-4ec4-4313-b57e-607e9d447b27",
    "name": "Unseen Servant (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a piece of string and a bit of wood)",
    "duration": "1 hour",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 284"
    ],
    "text": "This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.  On spell lists: Bard, Warlock, Wizard"
  },
  {
    "id": "222bec1b-1006-403a-9972-81f3ea526a53",
    "name": "Vampiric Touch",
    "level": 3,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock",
      "Wizard",
      "Sorcerer"
    ],
    "sources": [
      "Player's Handbook p. 285"
    ],
    "text": "The touch of your shadow-wreathed hand can siphon force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
  },
  {
    "id": "d969319d-44c3-44f0-98d0-376d81c6db16",
    "name": "Vicious Mockery",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard"
    ],
    "sources": [
      "Player's Handbook p. 285"
    ],
    "text": "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (thought it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn. This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4) and 17th level (4d4)."
  },
  {
    "id": "c622a7dc-7947-402a-8d0e-6236c37fd8ac",
    "name": "Wall of Fire",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a small piece of phosphorus)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Druid",
      "Sorcerer",
      "Warlock (Celestial)",
      "Warlock (Fiend)",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 285"
    ],
    "text": "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot think, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot think. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save. One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
  },
  {
    "id": "153ae77e-7456-41fa-83e7-89e828bc7803",
    "name": "Wall of Force",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a pinch of powder made by crushing a clear gemstone)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Wizard",
      "Sorcerer (Clockwork)"
    ],
    "sources": [
      "Player's Handbook p. 285"
    ],
    "text": "An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side). Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall."
  },
  {
    "id": "3e6738b4-67d0-4116-b6e5-a52c4dc702db",
    "name": "Wall of Ice",
    "level": 6,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a small piece of quartz)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 285"
    ],
    "text": "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with radium of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration. If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save. The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. The creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one.  At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6 for each slot level above 6th."
  },
  {
    "id": "9738ffd7-8ea9-4298-89a5-2b4cbb64d2bf",
    "name": "Wall of Stone",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a small block of granite)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 287"
    ],
    "text": "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least on other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall. The wall can have any shape you desire, though it can't occupy the same space as a creature or object. the wall doesn't need to be vertical or resting on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus you can use this spell to bridge a chasm or create a ramp. If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on. The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion. If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends."
  },
  {
    "id": "ece40466-3069-485d-849c-9caf066e906d",
    "name": "Wall of Thorns",
    "level": 6,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a handful of thorns)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 287"
    ],
    "text": "You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much on a successful save.  At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th."
  },
  {
    "id": "f603e7ee-ebc7-41c7-b968-d96b61c96294",
    "name": "Warding Bond",
    "level": 2,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pair of platinum rings worth at least 50 gp each, which you and target must wear for the duration)",
    "duration": "1 hour",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "sources": [
      "Player's Handbook p. 287"
    ],
    "text": "This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage. The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action."
  },
  {
    "id": "c4814710-e7b3-4d9e-a512-863c9a648a1b",
    "name": "Water Breathing",
    "level": 3,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a short reed or piece of straw)",
    "duration": "24 hours",
    "classes": [
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 287"
    ],
    "text": "This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration."
  },
  {
    "id": "1a2c3189-19ca-4ac9-9bb0-c53200fd5bcb",
    "name": "Water Breathing (Ritual Only)",
    "level": 3,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a short reed or piece of straw)",
    "duration": "24 hours",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 287"
    ],
    "text": "This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.  On spell lists: Druid, Ranger, Sorcerer, Wizard"
  },
  {
    "id": "a21e6d99-f7ff-4698-9266-8cfccfa6baa9",
    "name": "Water Walk",
    "level": 3,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a piece of cork)",
    "duration": "1 hour",
    "classes": [
      "Cleric",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Artificer"
    ],
    "sources": [
      "Player's Handbook p. 287"
    ],
    "text": "This spell grants the ability to move across any liquid surface — such as water, acid, mud, snow, quicksand, or lava — as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration. If your target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round."
  },
  {
    "id": "37cf1f82-1ac6-4dfd-a43b-7c3e1a7baf03",
    "name": "Water Walk (Ritual Only)",
    "level": 3,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a piece of cork)",
    "duration": "1 hour",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Player's Handbook p. 287"
    ],
    "text": "This spell grants the ability to move across any liquid surface — such as water, acid, mud, snow, quicksand, or lava — as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration. If your target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round.  On spell lists: Cleric, Druid, Ranger, Sorcerer"
  },
  {
    "id": "bb977a5b-a120-44a7-b684-298bf427ffb6",
    "name": "Water Whip",
    "level": 1,
    "ritual": false,
    "time": "1 action",
    "range": "30 feet",
    "components": "2 ki points",
    "duration": "Instantaneous",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "You can spend 2 ki points as an action to create a whip of water that shoves and pulls a creature to unbalance it. A creature that you can see that is within 30 feet of you must make a Dexterity saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can either knock it prone or pull it up to 25 feet closer to you. On a successful save, the creature takes half as much damage, and you don’t pull it or knock it prone."
  },
  {
    "id": "8d7fa0a9-faa3-407a-9f5a-1c701aedf565",
    "name": "Wave of Rolling Earth",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, 6 ki points",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Monk (Way of the Four Elements)"
    ],
    "sources": [
      "Player's Handbook p. 81"
    ],
    "text": "Prerequisite: 17th level You can spend 6 ki points to cast wall of stone.  Wall of Stone: A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least on other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall. The wall can have any shape you desire, though it can't occupy the same space as a creature or object. the wall doesn't need to be vertical or resting on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus you can use this spell to bridge a chasm or create a ramp. If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on. The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion. If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends."
  },
  {
    "id": "d8af4177-9661-48f3-b970-2293f15d324e",
    "name": "Web",
    "level": 2,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a bit of spider web)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Artificer",
      "Ranger (Swarmkeeper)"
    ],
    "sources": [
      "Player's Handbook p. 287"
    ],
    "text": "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area. If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet. Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free. A creature restrained by the webs can use its actions to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained. The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire."
  },
  {
    "id": "dbed11ac-67c9-452c-ade3-0c52eca484ec",
    "name": "Weird",
    "level": 9,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Wizard",
      "Warlock"
    ],
    "sources": [
      "Player's Handbook p. 288"
    ],
    "text": "Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature’s deepest fears, manifesting its worst nightmares as an implacable threat. At the end of each of the frightened creature’s turns, it must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature."
  },
  {
    "id": "8fbc86ec-f5a2-44e9-9fee-1ada56c918dd",
    "name": "Wind Walk",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (fire and holy water)",
    "duration": "8 hours",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Player's Handbook p. 288"
    ],
    "text": "You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation. If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance."
  },
  {
    "id": "335985e3-865f-47fa-810b-441e3a210211",
    "name": "Wind Wall",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a tiny fan and a feather of exotic origin)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Player's Handbook p. 288"
    ],
    "text": "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration. When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one. The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it."
  },
  {
    "id": "233b6389-7416-4419-af69-afa4f46c52c0",
    "name": "Wish",
    "level": 9,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Warlock (Genie)"
    ],
    "sources": [
      "Player's Handbook p. 288"
    ],
    "text": "Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires. The basic use of this spell is to duplicate any other spell of or lower. You don't need to meet any requirements in that spell, including costly components. The spell simply takes effect. Alternatively, you can create one of the following effects of your choice: • You create one object of up to 25,000 gp in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground. • You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the greater restoration spell. • You grant up to ten creatures that you can see resistance to a damage type you choose. • You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich's life drain attack. • You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish spell could undo an opponent's successful save, a foe's critical hit, or a friend's failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll.  You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance, the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item's current owner. The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn't 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress."
  },
  {
    "id": "2ad38458-ac32-4b88-b423-dad0ca143bc2",
    "name": "Witch Bolt",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a twig from a tree that has been struck by lightning)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Player's Handbook p. 289"
    ],
    "text": "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
  },
  {
    "id": "44b3f165-6528-4a19-944d-dd11f5d6c795",
    "name": "Word of Recall",
    "level": 6,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "5 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Player's Handbook p. 289"
    ],
    "text": "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect. You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect."
  },
  {
    "id": "f4b80d87-294c-42c2-b148-5e3d3b5ee4ea",
    "name": "Wrathful Smite",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Warlock (Hexblade)",
      "Sorcerer (Stone Sorcery)"
    ],
    "sources": [
      "Player's Handbook p. 289"
    ],
    "text": "The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell."
  },
  {
    "id": "61562e51-fe16-4b7b-a638-0846cbcce7e8",
    "name": "Zone of Truth",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "10 minutes",
    "classes": [
      "Bard",
      "Cleric",
      "Paladin",
      "Ranger (Monster Slayer)"
    ],
    "sources": [
      "Player's Handbook p. 289"
    ],
    "text": "You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw. An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such creatures can be evasive in its answers as long as it remains within the boundaries of the truth."
  },
  {
    "id": "e36c18d6-d157-4f7b-b0eb-0683007a91f3",
    "name": "Invocation: Agonizing Blast",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "Prerequisite: Eldritch Blast cantrip  When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
  },
  {
    "id": "3e6688f2-3341-4bad-9989-2191f48b8986",
    "name": "Invocation: Armor of Shadows",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "You can cast mage armor on yourself at will, without expending a spell slot or material components."
  },
  {
    "id": "bcef2b0f-4c0e-4823-9cc7-b99e5a6c7be9",
    "name": "Invocation: Ascendant Step",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "Prerequisite: 9th level  You can cast levitate on yourself at will, without expending a spell slot or material components."
  },
  {
    "id": "53f8ff6f-cab8-4109-be1f-2eea339e97d3",
    "name": "Invocation: Beast Speech",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "You can cast speak with animals at will, without expending a spell slot."
  },
  {
    "id": "b53a1bf2-0bab-48a7-b9f3-95f452563ad1",
    "name": "Invocation: Beguiling Influence",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "You gain proficiency in the Deception and Persuasion skills."
  },
  {
    "id": "822aac3d-3ea8-47e9-8aff-becc04657464",
    "name": "Invocation: Bewitching Whispers",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "Prerequisite: 7th level  You can cast compulsion once using a warlock spell slot. You can't do so again until you finish a long rest."
  },
  {
    "id": "40c79235-001d-4c6d-953c-8fa3b8e927bc",
    "name": "Invocation: Book of Ancient Secrets",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "Prerequisite: Pact of the Tome feature You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class’s spell list (the two needn’t be from the same list). The spells appear in the book and don’t count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can’t cast the spells except as rituals, unless you’ve learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag. On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell’s level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
  },
  {
    "id": "a05a82e3-a466-4f44-9aa0-12005f2c3225",
    "name": "Invocation: Chains of Carceri",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "Prerequisite: 15th level, Pact of the Chain  You can cast hold monster at will — targeting a celestial, fiend, or elemental — without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again."
  },
  {
    "id": "cf28ffc2-d098-4f71-a1f8-6f80a1a03312",
    "name": "Invocation: Devil's Sight",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
  },
  {
    "id": "1f65e226-cbd6-4747-8b3e-c807560d7937",
    "name": "Invocation: Dreadful Word",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "Prerequisite: 7th level  You can cast confusion once using a warlock spell slot. You can't do so again until you finish a long rest."
  },
  {
    "id": "32797ad5-67f8-4c6b-9db4-ec5d9e5b5abc",
    "name": "Invocation: Eldritch Sight",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 110"
    ],
    "text": "You can cast detect magic at will, without expending a spell slot."
  },
  {
    "id": "884975c9-9c0b-4342-8f6b-d28c4c207239",
    "name": "Invocation: Eldritch Spear",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: Eldritch Blast cantrip  When you cast eldritch blast, its range is 300 feet."
  },
  {
    "id": "ed46d2f5-59e3-4c70-bff4-7a5523267e10",
    "name": "Invocation: Eyes of the Rune Keeper",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "You can read all writing."
  },
  {
    "id": "538481e6-fdd5-4140-b85f-dd295834d144",
    "name": "Invocation: Fiendish Vigor",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
  },
  {
    "id": "ee4bd372-c0bc-4f3f-bebd-c1bde6b42161",
    "name": "Invocation: Gaze of Two Minds",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
  },
  {
    "id": "639778c2-d468-4eb8-9653-560908848db8",
    "name": "Invocation: Lifedrinker",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 12th level, Pact of the Blade  When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1)."
  },
  {
    "id": "11d31425-c31d-4c7f-a4dc-94f962102f93",
    "name": "Invocation: Mask of Many Faces",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "You can cast disguise self at will, without expending a spell slot."
  },
  {
    "id": "8ba316a9-931a-45ac-8b40-88d575c2288a",
    "name": "Invocation: Master of Myriad Forms",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 15th level  You can cast alter self at will, without expending a spell slot."
  },
  {
    "id": "e2079421-8174-442e-adfb-b29c0d9e3416",
    "name": "Invocation: Minions of Chaos",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 9th level  You can cast conjure elemental once using a warlock spell slot. You can't do so again until you finish a long rest."
  },
  {
    "id": "af6beee2-c73f-4394-8f69-cd94caea05a9",
    "name": "Invocation: Mire the Mind",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 5th level  You can cast slow once using a warlock spell slot. You can't do so again until you finish a long rest."
  },
  {
    "id": "6640d8fa-63dc-473d-8cb0-278981f47add",
    "name": "Invocation: Misty Visions",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "You can cast silent image at will, without expending a spell slot or material components."
  },
  {
    "id": "6010035a-24c4-4640-85c9-52e89710f25f",
    "name": "Invocation: One With Shadows",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 5th level  When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction."
  },
  {
    "id": "8f3a7674-ea3f-4769-88ff-b31feabd7dbf",
    "name": "Invocation: Otherworldly Leap",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 9th level  You can cast jump on yourself at will, without expending a spell slot or material components."
  },
  {
    "id": "6b00db97-7575-4b00-a164-82341a9d007b",
    "name": "Invocation: Repelling Blast",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: Eldritch Blast cantrip  When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
  },
  {
    "id": "8e2509e3-099b-4609-8072-57c692c78d4d",
    "name": "Invocation: Sculptor of Flesh",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 7th level  You can cast polymorph once using a warlock spell slot. You can't do so again until you finish a long rest."
  },
  {
    "id": "8773e844-e629-4828-a912-c0ea98446fcc",
    "name": "Invocation: Sign of Ill Omen",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 5th level  You can cast bestow curse once using a warlock spell slot. You can't do so again until you finish a long rest."
  },
  {
    "id": "1d33a07a-f232-492d-8025-fcac897e35bd",
    "name": "Invocation: Thief of Five Fates",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest."
  },
  {
    "id": "4ced764b-889e-4ba0-aa94-20df264c7fea",
    "name": "Invocation: Thirsting Blade",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 5th level  Prerequisite: Pact of the Blade  You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn."
  },
  {
    "id": "b223ce92-f57d-4ef2-aa30-3c688cce92dd",
    "name": "Invocation: Visions of Distant Realms",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 15th level  You can cast arcane eye at will, without expending a spell slot."
  },
  {
    "id": "db459e39-192b-4115-9ebf-23da6f92258a",
    "name": "Invocation: Voice of the Chain Master",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: Pact of the Chain  You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
  },
  {
    "id": "520a2900-895b-440b-a7fc-07894f86a13f",
    "name": "Invocation: Whispers of the Grave",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 9th level  You can cast speak with dead at will, without expending a spell slot."
  },
  {
    "id": "5c8e20e9-1432-440f-88ba-2a834ab32c3b",
    "name": "Invocation: Witch Sight",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Player's Handbook p. 111"
    ],
    "text": "Prerequisite: 15th level  You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight."
  },
  {
    "id": "9b3788d8-4831-4a9a-a037-ab2e5282c273",
    "name": "Abi-Dalzim’s Horrid Wilting",
    "level": 8,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a bit of sponge)",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 150",
      "Elemental Evil Player's Companion p. 15",
      "Princes of the Apocalypse p. 233"
    ],
    "text": "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren’t affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one.  Nonmagical plants in the area that aren’t creatures, such as trees and shrubs, wither and die instantly."
  },
  {
    "id": "e61a8f9d-2954-4f79-911e-92a9da896523",
    "name": "Absorb Elements",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage",
    "range": "Self",
    "components": "S",
    "duration": "1 round",
    "classes": [
      "Druid",
      "Fighter (Eldritch Knight)",
      "Ranger",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 150",
      "Elemental Evil Player's Companion p. 15",
      "Princes of the Apocalypse p. 233"
    ],
    "text": "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
  },
  {
    "id": "958d3029-ddd7-49c6-8f9b-772f5d02ded7",
    "name": "Aganazzar’s Scorcher",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a red dragon’s scale)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 150",
      "Elemental Evil Player's Companion p. 15",
      "Princes of the Apocalypse p. 233"
    ],
    "text": "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
  },
  {
    "id": "901de8c2-21c6-4ef2-bbcf-1a370a37f617",
    "name": "Banishing Arrow",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "part of the Attack action to fire a magic arrow",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Arcane Archer)"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 29"
    ],
    "text": "You use abjuration magic to try to temporarily banish your target to a harmless location in the Feywild. The creature hit by the arrow must also succeed on a Charisma saving throw or be banished. While banished in this way, the target's speed is 0, and it is incapacitated. At the end of its next turn, the target reappears in the space it vacated or in the nearest unoccupied space if that space is occupied. After you reach 18th level in this class, a target also takes 2d6 force damage when the arrow hits it."
  },
  {
    "id": "6adcd44f-0979-4d76-9f43-84d33aa54b9e",
    "name": "Beast Bond",
    "level": 1,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (a bit of fur wrapped in a cloth)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 150",
      "Elemental Evil Player's Companion p. 15",
      "Princes of the Apocalypse p. 233"
    ],
    "text": "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast’s Intelligence score is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see."
  },
  {
    "id": "36d7653a-c183-41d7-ab4c-c48c0c8e641b",
    "name": "Beguiling Arrow",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "part of the Attack action to fire a magic arrow",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Arcane Archer)"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 29"
    ],
    "text": "Your enchantment magic causes this arrow to temporarily beguile its target. The creature hit by the arrow takes an extra 2d6 psychic damage, and choose one of your allies within 30 feet of the target. The target must succeed on a Wisdom saving throw, or it is charmed by the chosen ally until the start of your next turn. This effect ends early if the chosen ally attacks the charmed target, deals damage to it, or forces it to make a saving throw. The psychic damage increases to 4d6 when you reach 18th level in this class."
  },
  {
    "id": "4146de34-1667-4d85-afad-2177648155df",
    "name": "Bones of the Earth",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 150",
      "Elemental Evil Player's Companion p. 15 Princes of the Apocalypse p. 233"
    ],
    "text": "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand.  If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.  If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature’s choice) against the spell’s save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it.  At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th."
  },
  {
    "id": "9f891ef6-630b-4bce-8f4e-9b3d535ab9e6",
    "name": "Bursting Arrow",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "part of the Attack action to fire a magic arrow",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Arcane Archer)"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 29"
    ],
    "text": "You imbue your arrow with force energy drawn from the school of evocation. The energy detonates after your attack. Immediately after the arrow hits the creature, the target and all other creatures within 10 feet of it take 2d6 force damage. The force damage increases to 4d6 when you reach 18th level in this class."
  },
  {
    "id": "0688458a-8a2d-4bd7-9653-81a914502af8",
    "name": "Catapult",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 150",
      "Elemental Evil Player's Companion p. 15",
      "Princes of the Apocalypse p. 233"
    ],
    "text": "Choose one object weighing 1 to 5 pounds within range that isn’t being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st."
  },
  {
    "id": "674fa1d1-c9a9-497a-b7ff-75fcd46b168f",
    "name": "Catnap",
    "level": 3,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "S, M (a pinch of sand)",
    "duration": "10 minutes",
    "classes": [
      "Bard",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 151"
    ],
    "text": "You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the spell’s duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can’t be affected by this spell again until it finishes a long rest.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd."
  },
  {
    "id": "6d35f570-7a65-4f4e-9c93-37cc5515eb2e",
    "name": "Cause Fear",
    "level": 1,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 151"
    ],
    "text": "You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
  },
  {
    "id": "6f82db32-4cea-4894-b213-b3a443373ebd",
    "name": "Ceremony",
    "level": 1,
    "ritual": true,
    "school": "abjuration",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (25 gp worth of powdered silver, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 151"
    ],
    "text": "You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting.  Atonement: You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment.  Bless Water: You touch one vial of water and cause it to become holy water.  Coming of Age: You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this rite only once.  Dedication: You touch one humanoid who wishes to be dedicated to your god’s service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this rite only once.  Funeral Rite: You touch one corpse, and for the next 7 days, the target can’t become undead by any means short of a wish spell.  Wedding: You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed."
  },
  {
    "id": "8458dbbb-5bae-46a5-a370-3fec339158be",
    "name": "Ceremony (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "abjuration",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (25 gp worth of powdered silver, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 151"
    ],
    "text": "You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting.  Atonement: You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment.  Bless Water: You touch one vial of water and cause it to become holy water.  Coming of Age: You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this rite only once.  Dedication: You touch one humanoid who wishes to be dedicated to your god’s service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this rite only once.  Funeral Rite: You touch one corpse, and for the next 7 days, the target can’t become undead by any means short of a wish spell.  Wedding: You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed.  On spell lists: Cleric, Paladin"
  },
  {
    "id": "95ac1c9b-931a-4f3e-a60b-4e62505a0119",
    "name": "Chaos Bolt",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 151"
    ],
    "text": "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the type of damage, as shown below.  1 — Acid 2 — Cold 3 — Fire 4 — Force 5 — Lightning 6 — Poison 7 — Psychic 8 — Thunder  If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again. A creature can be targeted only once by this mass of chaotic energy. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, each target takes 1d6 extra damage of the type rolled for each slot level above first."
  },
  {
    "id": "10b45338-8bd7-4863-b34c-cef62a12bcba",
    "name": "Charm Monster",
    "level": 4,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Druid",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 151"
    ],
    "text": "You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and it does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature is friendly to you. When the spell ends, the creature knows it was charmed by you.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
  },
  {
    "id": "27af6254-6c53-4f51-a3c3-4309c84f48f5",
    "name": "Control Flames",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "Instantaneous or 1 hour (see below)",
    "classes": [
      "Druid",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 152",
      "Elemental Evil Player's Companion p. 16",
      "Princes of the Apocalypse p. 234"
    ],
    "text": "You choose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:  You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location. You instantaneously extinguish the flames within the cube. You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour. You cause simple shapes — such as the vague form of a creature, an inanimate object, or a location — to appear within the flames and animate as you like. The shapes last for 1 hour. If you cast this spell multiple times, you can have up to three non-instantaneous effects created by it active at a time, and you can dismiss such an effect as an action."
  },
  {
    "id": "3da62b2a-0339-46bf-8e05-f136feb040d6",
    "name": "Control Winds",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "300 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 152",
      "Elemental Evil Player's Companion p. 16",
      "Princes of the Apocalypse p. 234"
    ],
    "text": "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell’s duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you’ve halted.  Gusts: A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.  Downdraft: You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.  Updraft: You cause a sustained updraft within the cube, rising upward from the cube’s bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal."
  },
  {
    "id": "9037ee5c-de28-4407-bc0b-df7a4fbc0e1a",
    "name": "Create Bonfire",
    "level": 0,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 152",
      "Elemental Evil Player's Companion p. 16",
      "Princes of the Apocalypse p. 234"
    ],
    "text": "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire’s space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire’s space for the first time on a turn or ends its turn there.  The bonfire ignites flammable objects in its area that aren’t being worn or carried.  The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  },
  {
    "id": "bfb2545f-078f-41a8-9c20-1de0664ac488",
    "name": "Create Homunculus",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 152"
    ],
    "text": "While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking 2d4 piercing damage that can’t be reduced in any way. You then drip your blood on the spell’s other components and touch them, transforming them into a special construct called a homunculus.  The statistics of the homunculus are in the Monster Manual. It is your faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by the total, and the homunculus’s hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point, and the change to your and the homunculus’s hit points ends when you finish your next long rest. The reduction to your hit point maximum can’t be removed by any means before then, except by the homunculus’s death.  You can have only one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails."
  },
  {
    "id": "6ee7833c-a6a2-4360-be99-ac22995dce1a",
    "name": "Crown of Stars",
    "level": 7,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 152"
    ],
    "text": "Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote.  If you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius.  At Higher Levels: When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th."
  },
  {
    "id": "5c487836-3ebe-4585-ab7b-f142cccd56b5",
    "name": "Danse Macabre",
    "level": 5,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 153"
    ],
    "text": "Threads of dark power leap from your fingers to pierce up to five Small or Medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a zombie or a skeleton (the statistics for zombies and skeletons are in the Monster Manual), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier.  You can use a bonus action to mentally command the creatures you make with this spell, issuing the same command to all of them. To receive the command, a creature must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creatures do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete.  The creatures are under your control until the spell ends, after which they become inanimate once more.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, you animate up to two additional corpses for each slot level above 5th."
  },
  {
    "id": "d1628544-6b3c-4a4f-a101-012c1d976407",
    "name": "Dawn",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a sunburst pendant worth at least 100 gp)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 153"
    ],
    "text": "The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight.  When the cylinder appears, each creature in it must make a Constitution saving throw, taking 4d10 radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder.  If you’re within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn."
  },
  {
    "id": "ff297b70-eff1-4563-8c15-29ece85435ad",
    "name": "Dragon’s Breath",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Touch",
    "components": "V, S, M (a hot pepper)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 154"
    ],
    "text": "You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save, or half as much damage on a successful one.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
  },
  {
    "id": "d7843ff3-ae9d-400f-bc0a-ed0b3cd64ae3",
    "name": "Druid Grove",
    "level": 6,
    "ritual": false,
    "school": "abjuration",
    "time": "10 minutes",
    "range": "Touch",
    "components": "V, S, M (mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon)",
    "duration": "24 hours",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 154"
    ],
    "text": "You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled.  The spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.  The entire warded area radiates magic. A dispel magic cast on the area, if successful, removes only one of the following effects, not the entire area. That spell’s caster chooses which effect to end. Only when all its effects are gone is this spell dispelled.  Solid Fog. You can fill any number of 5-foot squares on the ground with thick fog, making them heavily obscured. The fog reaches 10 feet high. In addition, every foot of movement through the fog costs 2 extra feet. To a creature immune to this effect, the fog obscures nothing and looks like soft mist, with motes of green light floating in the air.  Grasping Undergrowth. You can fill any number of 5-foot squares on the ground that aren’t filled with fog with grasping weeds and vines, as if they were affected by an entangle spell. To a creature immune to this effect, the weeds and vines feel soft and reshape themselves to serve as temporary seats or beds.  Grove Guardians. You can animate up to four trees in the area, causing them to uproot themselves from the ground. These trees have the same statistics as an awakened tree, which appears in the Monster Manual, except they can’t speak, and their bark is covered with druidic symbols. If any creature not immune to this effect enters the warded area, the grove guardians fight until they have driven off or slain the intruders. The grove guardians also obey your spoken commands (no action required by you) that you issue while in the area. If you don’t give them commands and no intruders are present, the grove guardians do nothing. The grove guardians can’t leave the warded area. When the spell ends, the magic animating them disappears, and the trees take root again if possible.  Additional Spell Effect. You can place your choice of one of the following magical effects within the warded area:  A constant gust of wind in two locations of your choice Spike growth in one location of your choice Wind wall in two locations of your choice To a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of spike growth is harmless."
  },
  {
    "id": "6708253c-c11b-4bc2-9f4c-f7ae8103c2dc",
    "name": "Dust Devil",
    "level": 2,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a pinch of dust)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 154",
      "Elemental Evil Player's Companion p. 17",
      "Princes of the Apocalypse p. 235"
    ],
    "text": "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell’s duration.  Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn’t pushed.  As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
  },
  {
    "id": "1ba0ae03-6be5-43fb-a3b2-b8a40fe51963",
    "name": "Earth Tremor",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 155",
      "Elemental Evil Player's Companion p. 17",
      "Princes of the Apocalypse p. 235"
    ],
    "text": "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
  },
  {
    "id": "77df8f6c-a1dd-4530-adfe-7dc2ad316cbd",
    "name": "Earthbind",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "300 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 154",
      "Elemental Evil Player's Companion p. 17",
      "Princes of the Apocalypse p. 235"
    ],
    "text": "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell’s duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends."
  },
  {
    "id": "27b03f2d-ebf4-4df4-ad3d-323b08ab26b6",
    "name": "Elemental Bane",
    "level": 4,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 155",
      "Elemental Evil Player's Companion p. 17",
      "Princes of the Apocalypse p. 235"
    ],
    "text": "Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
  },
  {
    "id": "7d168533-fa73-42b5-82e3-4133b4aaad0b",
    "name": "Enemies Abound",
    "level": 3,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 155"
    ],
    "text": "You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.  Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it’s using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to."
  },
  {
    "id": "9f0bfff6-f869-48e8-9c8e-e2ee8235df23",
    "name": "Enervation",
    "level": 5,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 155"
    ],
    "text": "A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes 2d8 necrotic damage, and the spell ends. On a failed save, the target takes 4d8 necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal 4d8 necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell’s range, or if the target has total cover from you.  Whenever the spell deals damage to a target, you regain hit points equal to half the amount of necrotic damage the target takes.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
  },
  {
    "id": "8ac43984-91a0-4e7b-abe3-c004e6853f7e",
    "name": "Enfeebling Arrow",
    "level": 1,
    "ritual": false,
    "school": "necromancy",
    "time": "part of the Attack action to fire a magic arrow",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Arcane Archer)"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 29"
    ],
    "text": "You weave necromantic magic into your arrow. The creature hit by the arrow takes an extra 2d6 necrotic damage. The target must also succeed on a Constitution saving throw, or the damage dealt by its weapon attacks is halved until the start of your next turn. The necrotic damage increases to 4d6 when you reach 18th level in this class."
  },
  {
    "id": "42786ad8-94f5-4ed4-beea-6b976fdfc4f6",
    "name": "Erupting Earth",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a piece of obsidian)",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 155",
      "Elemental Evil Player's Companion p. 17",
      "Princes of the Apocalypse p. 235"
    ],
    "text": "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
  },
  {
    "id": "e7016385-8e63-45e0-8f06-c748afeb1045",
    "name": "Far Step",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 155"
    ],
    "text": "You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again."
  },
  {
    "id": "0545c60f-e734-4c1c-ac90-923b48eeb34c",
    "name": "Find Greater Steed",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "10 minutes",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Paladin"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 156"
    ],
    "text": "You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a griffon, a pegasus, a peryton, a dire wolf, a rhinoceros, or a saber-toothed tiger. The creature has the statistics provided in the Monster Manual for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 or lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.  You control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount.  The mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re-summons the bonded mount, with all its hit points restored and any conditions removed.  You can’t have more than one mount bonded by this spell or find steed at the same time. As an action, you can release a mount from its bond, causing it to disappear permanently.  Whenever the mount disappears, it leaves behind any objects it was wearing or carrying."
  },
  {
    "id": "6ec19e62-c309-4b81-a9b0-c86d8869d16b",
    "name": "Flame Arrows",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p.",
      "Elemental Evil Player's Companion p. 18",
      "Princes of the Apocalypse p. 236"
    ],
    "text": "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell’s magic ends on a piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
  },
  {
    "id": "dd70f55f-89c3-47dd-b631-a5c0f09e5507",
    "name": "Frostbite",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 156",
      "Elemental Evil Player's Companion p. 18",
      "Princes of the Apocalypse p. 236"
    ],
    "text": "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.  The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  },
  {
    "id": "84194b7e-c0e6-4a11-bb94-882ed9048da6",
    "name": "Grasping Arrow",
    "level": 1,
    "ritual": false,
    "school": "conjuration",
    "time": "part of the Attack action to fire a magic arrow",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Arcane Archer)"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 29"
    ],
    "text": "When this arrow strikes its target, conjuration magic creates grasping, poisonous brambles, which wrap around the target. The creature hit by the arrow takes an extra 2d6 poison damage, its speed is reduced by 10 feet, and it takes 2d6 slashing damage the first time on each turn it moves 1 foot or more without teleporting. The target or any creature that can reach it can use its action to remove the brambles with a successful Strength (Athletics) check against your Arcane Shot save DC. Otherwise, the brambles last for 1 minute or until you use this option again. The poison damage and slashing damage both increase to 4d6 when you reach 18th level in this class."
  },
  {
    "id": "b570657b-f11a-41be-a66b-a6b88a28842a",
    "name": "Guardian of Nature",
    "level": 4,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 157"
    ],
    "text": "A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree.  Primal Beast: Bestial fur covers your body, your facial features become feral, and you gain the following benefits:  •Your walking speed increases by 10 feet. You gain darkvision with a range of 120 feet. •You make Strength-based attack rolls with advantage. •Your melee weapon attacks deal an extra 1d6 force damage on a hit.  Great Tree: Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:  •You gain 10 temporary hit points. •You make Constitution saving throws with advantage. •You make Dexterity- and Wisdom-based attack rolls with advantage. •While you are on the ground, the ground within 15 feet of you is difficult terrain for your enemies."
  },
  {
    "id": "602fb03b-3c28-4c6a-8662-490fdb9cb570",
    "name": "Gust",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 157",
      "Elemental Evil Player's Companion p. 19",
      "Princes of the Apocalypse p. 236"
    ],
    "text": "You seize the air and compel it to create one of the following effects at a point you can see within range:  •One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you. •You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn’t pushed with enough force to cause damage. •You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters closed, or your clothing to ripple in a breeze."
  },
  {
    "id": "e31b4d31-7b42-46a9-a9e3-5c3969a90243",
    "name": "Healing Spirit",
    "level": 2,
    "ritual": false,
    "school": "conjuration",
    "time": "1 bonus action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 157"
    ],
    "text": "You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice).  Until the spell ends, whenever you or a creature you can see moves into the spirit’s space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can’t heal constructs or undead. The spirit can heal a number of times equal to 1 + your spellcasting ability modifier (minimum of twice). After healing that number of times, the spirit disappears.  As a bonus action on your turn, you can move the spirit up to 30 feet to a space you can see.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d6 for each slot level above 2nd."
  },
  {
    "id": "dab655b6-a3f9-46b7-beba-9670584821c1",
    "name": "Holy Weapon",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 bonus action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 157"
    ],
    "text": "You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn’t already a magic weapon, it becomes one for the duration.  As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of the weapon must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn’t blinded. At the end of each of its turns, a blinded creature can make a Constitution saving throw, ending the effect on itself on a success."
  },
  {
    "id": "86de8a1d-468d-4138-bccc-b8a68181c4f6",
    "name": "Ice Knife",
    "level": 1,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "S, M (a drop of water or a piece of ice)",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 157",
      "Elemental Evil Player's Companion p. 19",
      "Princes of the Apocalypse p. 237"
    ],
    "text": "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage.  At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st."
  },
  {
    "id": "e0149f31-b81a-480e-8259-1302f481dbe1",
    "name": "Illusory Dragon",
    "level": 8,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "120 feet",
    "components": "S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 157"
    ],
    "text": "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell’s duration and occupies its space, as if it were a creature.  When the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become frightened of it for 1 minute. If a frightened creature ends its turn in a location where it doesn’t have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success.  As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking 7d6 damage of the chosen damage type on a failed save, or half as much damage on a successful one.  The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically, it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath."
  },
  {
    "id": "20131447-d45e-4f9d-beca-71ec39d1ff6d",
    "name": "Immolation",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "90 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 158",
      "Elemental Evil Player's Companion p. 19",
      "Princes of the Apocalypse p. 237"
    ],
    "text": "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell’s duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can’t be extinguished by nonmagical means.  If damage from this spell kills a target, the target is turned to ash."
  },
  {
    "id": "cb8bc7e8-7ca0-4e5a-9a02-04c4745512a5",
    "name": "Infernal Calling",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "90 feet",
    "components": "V, S, M (a ruby worth at least 999 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 158"
    ],
    "text": "Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil’s type, which must be one of challenge rating 6 or lower, such as a barbed devil or a bearded devil. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends.  The devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the Dungeon Master’s control and acts according to its nature on each of its turns, which might result in its attacking you if it thinks it can prevail, or trying to tempt you to undertake an evil act in exchange for limited service. The DM has the creature’s statistics.  On each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma (Deception, Intimidation, or Persuasion) check contested by its Wisdom (Insight) check. You make the check with advantage if you say the devil’s true name. If your check fails, the devil becomes immune to your verbal commands for the duration of the spell, though it can still carry out your commands if it chooses. If your check succeeds, the devil carries out your command — such as “attack my enemies,” “explore the room ahead,” or “bear this message to the queen” — until it completes the activity, at which point it returns to you to report having done so.  If your concentration ends before the spell reaches its full duration, the devil doesn’t disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for 3d6 minutes, and then it disappears.  If you possess an individual devil’s talisman, you can summon that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands, with no Charisma checks required.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
  },
  {
    "id": "d9a5008e-55ec-4633-ac1c-0577fc5de3bb",
    "name": "Infestation",
    "level": 0,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a living flea)",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 158"
    ],
    "text": "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn’t provoke opportunity attacks, and if the direction rolled is blocked, the target doesn’t move.  The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  },
  {
    "id": "bf542350-36cc-4ad1-9aa2-050f0d04c688",
    "name": "Investiture of Flame",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 158",
      "Elemental Evil Player's Companion p. 19",
      "Princes of the Apocalypse p. 237"
    ],
    "text": "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell’s duration. The flames don’t harm you. Until the spell ends, you gain the following benefits:  •You are immune to fire damage and have resistance to cold damage.  • Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage.  • You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one."
  },
  {
    "id": "a2e04f18-75ad-4fbd-b346-ed273e6c5f45",
    "name": "Investiture of Ice",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 159",
      "Elemental Evil Player's Companion p. 19",
      "Princes of the Apocalypse p. 237"
    ],
    "text": "Until the spell ends, ice rimes your body, and you gain the following benefits:  • You are immune to cold damage and have resistance to fire damage.  • You can move across difficult terrain created by ice or snow without spending extra movement.  • The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you.  • You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn."
  },
  {
    "id": "1657bf6b-0a30-4561-8f81-dc7a86f4d1c7",
    "name": "Investiture of Stone",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 159",
      "Elemental Evil Player's Companion p. 19",
      "Princes of the Apocalypse p. 237"
    ],
    "text": "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:  • You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.  • You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone.  • You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can’t end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn."
  },
  {
    "id": "73c6069e-5be3-4886-ab98-fe8dbcd5ff42",
    "name": "Investiture of Wind",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 160",
      "Elemental Evil Player's Companion p. 20",
      "Princes of the Apocalypse p. 238"
    ],
    "text": "Until the spell ends, wind whirls around you, and you gain the following benefits:  • Ranged weapon attacks made against you have disadvantage on the attack roll.  • You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it.  • You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube."
  },
  {
    "id": "75ccbe1e-9be1-445e-9226-195e895485cb",
    "name": "Invulnerability",
    "level": 9,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a small piece of adamantine worth at least 500 gp, which the spell consumes)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 160"
    ],
    "text": "You are immune to all damage until the spell ends."
  },
  {
    "id": "d3fa3259-3332-42d8-bc76-df399ab60342",
    "name": "Life Transference",
    "level": 3,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 160"
    ],
    "text": "You sacrifice some of your health to mend another creature’s injuries. You take 4d8 necrotic damage, which can't be reduced in any way, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
  },
  {
    "id": "f932dbbf-6c70-4e11-a386-950f4b7a625a",
    "name": "Maddening Darkness",
    "level": 8,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, M (a drop of pitch mixed with a drop of mercury)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 160"
    ],
    "text": "Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with darkvision can’t see through this darkness. Nonmagical light, as well as light created by spells of 8th level or lower, can’t illuminate the area.  Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one."
  },
  {
    "id": "d86dfd65-028d-4dbc-89ea-3ed4acb52212",
    "name": "Maelstrom",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (paper or leaf in the shape of a funnel)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 160",
      "Elemental Evil Player's Companion p. 20",
      "Princes of the Apocalypse p. 238"
    ],
    "text": "A swirling mass of 5-foot-deep water appears in a 30-foot radius centered on a point you can see within range. The point must be on the ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center."
  },
  {
    "id": "ae043486-f0a2-44ae-9279-aa322612e5ee",
    "name": "Magic Stone",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 minute",
    "classes": [
      "Druid",
      "Warlock",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 160",
      "Elemental Evil Player's Companion p. 20",
      "Princes of the Apocalypse p. 238"
    ],
    "text": "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, a pebble has a range of 60 feet. If someone else attacks with a pebble, that attacker adds your spellcasting ability modifier, not the attacker’s, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Whether the attack hits or misses, the spell then ends on the stone.  If you cast this spell again, the spell ends on any pebbles still affected by your previous casting."
  },
  {
    "id": "edd7c6d6-a964-4c04-b115-7449bbc7bf0f",
    "name": "Mass Polymorph",
    "level": 9,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a caterpillar cocoon)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 160"
    ],
    "text": "You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save.  Each target assumes a beast form of your choice, and you can choose the same form or different ones for each target. The new form can be any beast you have seen whose challenge rating is equal to or less than the target’s (or half the target’s level, if the target doesn’t have a challenge rating). The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast, but the target retains its hit points, alignment, and personality.   The creature is limited in the actions it can perform by the nature of its new form. It can’t speak, cast spells, or do anything else that requires hands or speech.  The target’s gear melds into the new form. The target can’t activate, use, wield, or otherwise benefit from any of its equipment."
  },
  {
    "id": "c4991d9a-8fa8-4ff4-9fd6-22a3b7662334",
    "name": "Maximilian’s Earthen Grasp",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a miniature hand sculpted from clay)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 161",
      "Elemental Evil Player's Companion p. 20",
      "Princes of the Apocalypse p. 238"
    ],
    "text": "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell’s duration.  As an action, you can cause the hand to crush the restrained target, which must make a Strength saving throw. The target takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.  To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand.  As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either."
  },
  {
    "id": "ab8c3df2-a4d3-4bf4-8107-764e76430e70",
    "name": "Melf’s Minute Meteors",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (niter, sulfur, and pine tar formed into a bead)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 161",
      "Elemental Evil Player's Companion p. 20",
      "Princes of the Apocalypse p. 238"
    ],
    "text": "You create six tiny meteors in your space. They float in the air and orbit you for the spell’s duration. When you cast the spell — and as a bonus action on each of your turns thereafter — you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd."
  },
  {
    "id": "b8c18996-f5b6-459a-9c7b-735e6e2f2a4e",
    "name": "Mental Prison",
    "level": 6,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 161"
    ],
    "text": "You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being charmed. On a successful save, the target takes 5d10 psychic damage, and the spell ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target’s space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can’t see or hear anything beyond it and is restrained for the spell’s duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the spell ends."
  },
  {
    "id": "831f9957-85bb-4bd0-ba34-ff4dfc006767",
    "name": "Mighty Fortress",
    "level": 8,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "1 mile",
    "components": "V, S, M (a diamond worth at least 500 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 161"
    ],
    "text": "A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises.  The fortress has four turrets with square bases, each one 20 feet on a side and 30 feet tall, with one turret on each corner. The turrets are connected to each other by stone walls that are each 80 feet long, creating an enclosed area. Each wall is 1 foot thick and is composed of panels that are 10 feet wide and 20 feet tall. Each panel is contiguous with two other panels or one other panel and a turret. You can place up to four stone doors in the fortress’s outer wall.  A small keep stands inside the enclosed area. The keep has a square base that is 50 feet on each side, and it has three floors with 10-foot-high ceilings. Each of the floors can be divided into as many rooms as you like, provided each room is at least 5 feet on each side. The floors of the keep are connected by stone staircases, its walls are 6 inches thick, and interior rooms can have stone doors or open archways as you choose. The keep is furnished and decorated however you like, and it contains sufficient food to serve a nine-course banquet for up to 100 people each day. Furnishings, food, and other objects created by this spell crumble to dust if removed from the fortress.  A staff of one hundred invisible servants obeys any command given to them by creatures you designate when you cast the spell. Each servant functions as if created by the unseen servant spell.  The walls, turrets, and keep are all made of stone that can be damaged. Each 10-foot-by-10-foot section of stone has AC 15 and 30 hit points per inch of thickness. It is immune to poison and psychic damage. Reducing a section of stone to 0 hit points destroys it and might cause connected sections to buckle and collapse at the DM’s discretion.  After 7 days or when you cast this spell somewhere else, the fortress harmlessly crumbles and sinks back into the ground, leaving any creatures that were inside it safely on the ground.  Casting this spell on the same spot once every 7 days for a year makes the fortress permanent."
  },
  {
    "id": "35a8b13b-d187-4f02-94f8-7bf23fc69300",
    "name": "Mind Spike",
    "level": 2,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 162"
    ],
    "text": "You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking 3d8 psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target’s location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can’t become hidden from you, and if it’s invisible, it gains no benefit from that condition against you.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
  },
  {
    "id": "ed3c83ec-7525-47e1-a3a8-32cda429b7d7",
    "name": "Mold Earth",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "S",
    "duration": "Instantaneous or 1 hour (see below)",
    "classes": [
      "Druid",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 162",
      "Elemental Evil Player's Companion p. 21",
      "Princes of the Apocalypse p. 238"
    ],
    "text": "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:  • If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn’t involve enough force to cause damage.  • You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.  • If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.  If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
  },
  {
    "id": "b1566bdb-2220-40e8-88b5-2fb1827c4e82",
    "name": "Negative Energy Flood",
    "level": 5,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, M (a broken bone and a square of black silk)",
    "duration": "Instantaneous",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 163"
    ],
    "text": "You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking 5d12 necrotic damage on a failed save, or half as much damage on a successful one. A target killed by this damage rises up as a zombie at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it. Statistics for the zombie are in the Monster Manual.  If you target an undead with this spell, the target doesn’t make a saving throw. Instead, roll 5d12. The target gains half the total as temporary hit points."
  },
  {
    "id": "1ddd2d8b-5f65-402d-ae0e-9896355bdbdf",
    "name": "Piercing Arrow",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "part of the Attack action to fire a magic arrow",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Arcane Archer)"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 29"
    ],
    "text": "You use transmutation magic to give your arrow an ethereal quality. When you use this option, you don’t make an attack roll for the attack. Instead, the arrow shoots forward in a line, which is 1 foot wide and 30 feet long, before disappearing. The arrow passes harmlessly through objects, ignoring cover. Each creature in that line must make a Dexterity saving throw. On a failed save, a creature takes damage as if it were hit by the arrow, plus an extra 1d6 piercing damage. On a successful save, a target takes half as much damage. The piercing damage increases to 2d6 when you reach 18th level in this class."
  },
  {
    "id": "5b7260bc-7110-46ca-8eef-ebd20510456f",
    "name": "Power Word Pain",
    "level": 7,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 163"
    ],
    "text": "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being charmed.  While the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted.  A target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends."
  },
  {
    "id": "bfc39490-aaae-4283-998a-207910201d83",
    "name": "Primal Savagery",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "S",
    "duration": "Instantaneous",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 163"
    ],
    "text": "You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal.  The spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
  },
  {
    "id": "02d72765-cb04-476d-9e08-098ca9c49d9f",
    "name": "Primordial Ward",
    "level": 6,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 163",
      "Elemental Evil Player's Companion p. 21",
      "Princes of the Apocalypse p. 239"
    ],
    "text": "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell’s duration.  When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends."
  },
  {
    "id": "beba638d-0afb-44e8-99d1-d1922677fb63",
    "name": "Psychic Scream",
    "level": 9,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "90 feet",
    "components": "S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 163"
    ],
    "text": "You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected.  Each target must make an Intelligence saving throw. On a failed save, a target takes 14d6 psychic damage and is stunned. On a successful save, a target takes half as much damage and isn’t stunned. If a target is killed by this damage, its head explodes, assuming it has one.  A stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the stunning effect ends."
  },
  {
    "id": "9dcb5e1b-554a-46d7-89b6-6975fb208f5b",
    "name": "Pyrotechnics",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 163",
      "Elemental Evil Player's Companion p. 21",
      "Princes of the Apocalypse p. 239"
    ],
    "text": "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.  Fireworks: The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.  Smoke: Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it."
  },
  {
    "id": "835d8017-13a5-4c19-9457-b8ff94474e52",
    "name": "Scatter",
    "level": 6,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 164"
    ],
    "text": "The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor."
  },
  {
    "id": "d10affcb-bbbc-4455-b214-db594eaa8ba6",
    "name": "Seeking Arrow",
    "level": 1,
    "ritual": false,
    "school": "divination",
    "time": "part of the Attack action to fire a magic arrow",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Arcane Archer)"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 29"
    ],
    "text": "Using divination magic, you grant your arrow the ability to seek out a target. When you use this option, you don’t make an attack roll for the attack. Instead, choose one creature you have seen in the past minute. The arrow flies toward that creature, moving around corners if necessary and ignoring three-quarters cover and half cover. If the target is within the weapon’s range and there is a path large enough for the arrow to travel to the target, the target must make a Dexterity saving throw. Otherwise, the arrow disappears after traveling as far as it can. On a failed save, it takes damage as if it were hit by the arrow, plus an extra 1d6 force damage, and you learn the target’s current location. On a successful save, the target takes half as much damage, and you don’t learn its location. The force damage increases to 2d6 when you reach 18th level in this class."
  },
  {
    "id": "a5203768-cd51-4162-9b36-43ed211c3b5b",
    "name": "Shadow Arrow",
    "level": 1,
    "ritual": false,
    "school": "illusion",
    "time": "part of the Attack action to fire a magic arrow",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Arcane Archer)"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 29"
    ],
    "text": "You weave illusion magic into your arrow, causing it to occlude your foe’s vision with shadows. The creature hit by the arrow takes an extra 2d6 psychic damage, and it must succeed on a Wisdom saving throw or be unable to see anything farther than 5 feet away until the start of your next turn. The psychic damage increases to 4d6 when you reach 18th level in this class."
  },
  {
    "id": "b2b05ad6-a2f0-485d-8bc0-d3a88165ca1e",
    "name": "Shadow Blade",
    "level": 2,
    "ritual": false,
    "school": "illusion",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 164"
    ],
    "text": "You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage. If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.  At Higher Levels: When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to 3d8. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8."
  },
  {
    "id": "78464efd-ddd0-4c0f-816f-2ae6ea99fffa",
    "name": "Shadow of Moil",
    "level": 4,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (an undead eyeball encased in a gem worth at least 150 gp)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 164"
    ],
    "text": "Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light.  Until the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it 2d8 necrotic damage."
  },
  {
    "id": "2387b41f-14c3-4ea2-bd99-c74703d86c3a",
    "name": "Shape Water",
    "level": 0,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "30 feet",
    "components": "S",
    "duration": "Instantaneous or 1 hour (see below)",
    "classes": [
      "Druid",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 164",
      "Elemental Evil Player's Companion p. 21",
      "Princes of the Apocalypse p. 239"
    ],
    "text": "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:  • You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn’t have enough force to cause damage.  • You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.:  • You change the water’s color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.  • You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.  If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
  },
  {
    "id": "93e3d492-d84e-4f88-9545-d08f4318990f",
    "name": "Sickening Radiance",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 164"
    ],
    "text": "Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends.  When a creature moves into the spell’s area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take 4d10 radiant damage, and it suffers one level of exhaustion and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being invisible. The light and any levels of exhaustion caused by this spell go away when the spell ends."
  },
  {
    "id": "a364b076-d293-40cd-a2c4-147a43eb659a",
    "name": "Skill Empowerment",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 165"
    ],
    "text": "Your magic deepens a creature’s understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill.  You must choose a skill in which the target is proficient and that isn’t already benefiting from an effect, such as Expertise, that doubles its proficiency bonus."
  },
  {
    "id": "d1480e26-ef8f-43b4-8198-eade423b2a6a",
    "name": "Skywrite",
    "level": 2,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "Sight",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Druid",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 165",
      "Elemental Evil Player's Companion p. 22",
      "Princes of the Apocalypse p. 240"
    ],
    "text": "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell’s duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early."
  },
  {
    "id": "2479f8df-0aab-4930-976b-63e9921189e1",
    "name": "Skywrite (Ritual Only)",
    "level": 2,
    "ritual": true,
    "school": "transmutation",
    "time": "1 action",
    "range": "Sight",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 165",
      "Elemental Evil Player's Companion p. 22",
      "Princes of the Apocalypse p. 240"
    ],
    "text": "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell’s duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.  On spell lists: Bard, Druid, Wizard"
  },
  {
    "id": "7ef4f75a-bbf7-4efd-a274-7e3b416605e4",
    "name": "Snare",
    "level": 1,
    "ritual": false,
    "school": "abjuration",
    "time": "1 minute",
    "range": "Touch",
    "components": "S, M (25 feet of rope, which the spell consumes)",
    "duration": "8 hours",
    "classes": [
      "Druid",
      "Ranger",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 165"
    ],
    "text": "As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap.  This trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned.  The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell’s radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends.  A restrained creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect ends.  After the trap is triggered, the spell ends when no creature is restrained by it."
  },
  {
    "id": "3c0bc945-9657-41d0-8ad2-67601b161dce",
    "name": "Snilloc’s Snowball Swarm",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a piece of ice or a small white rock chip)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 165",
      "Elemental Evil Player's Companion p. 21",
      "Princes of the Apocalypse p. 240"
    ],
    "text": "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one.  At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
  },
  {
    "id": "7a7c2390-a682-4341-ab4a-006fbb9bf77b",
    "name": "Soul Cage",
    "level": 6,
    "ritual": false,
    "school": "necromancy",
    "time": "1 reaction, which you take when a humanoid you can see within 60 feet of you dies",
    "range": "60 feet",
    "components": "V, S, M (a tiny silver cage worth 100 gp)",
    "duration": "8 hours",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 165"
    ],
    "text": "This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can’t be revived.  Steal Life: You can use a bonus action to drain vigor from the soul and regain 2d8 hit points.  Query Soul: You ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic.  Borrow Experience: You can use a bonus action to bolster yourself with the soul’s life experience, making your next attack roll, ability check, or saving throw with advantage. If you don’t use this benefit before the start of your next turn, it is lost.  Eyes of the Dead: You can use an action to name a place the humanoid saw in life, which creates an invisible sensor somewhere in that place if it is on the plane of existence you’re currently on. The sensor remains for as long as you concentrate, up to 10 minutes (as if you were concentrating on a spell). You receive visual and auditory information from the sensor as if you were in its space using your senses.  A creature that can see the sensor (such as one using see invisibility or truesight) sees a translucent image of the tormented humanoid whose soul you caged."
  },
  {
    "id": "115678dd-7165-4df2-9e62-b4c856684bb2",
    "name": "Spare the Dying (Grave Domain)",
    "level": 0,
    "ritual": false,
    "school": "necromancy",
    "time": "1 bonus action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric (Grave)"
    ],
    "sources": [
      "Player's Handbook p. 277",
      "Xanathar's Guide to Everything p. 20"
    ],
    "text": "You target a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."
  },
  {
    "id": "81f3f175-7166-4bca-ba78-28bd29d87c02",
    "name": "Steel Wind Strike",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "S, M (a melee weapon worth at least 1 sp)",
    "duration": "Instantaneous",
    "classes": [
      "Ranger",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 166"
    ],
    "text": "You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 force damage.  You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed."
  },
  {
    "id": "15f4b557-351e-4aa7-8cfa-ad5945777f22",
    "name": "Storm Sphere",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 166",
      "Elemental Evil Player's Companion p. 22"
    ],
    "text": "A 20-foot-radius sphere of whirling air springs into existence, centered on a point you choose within range. The sphere remains for the spell’s duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere’s space is difficult terrain.  Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage.  Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage for each of its effects increases by 1d6 for each slot level above 4th."
  },
  {
    "id": "402e28e1-0c2f-4b91-9f6e-72d96ca2ee7c",
    "name": "Summon Greater Demon",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a vial of blood from a humanoid killed within the past 24 hours)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 166"
    ],
    "text": "You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon’s type, which must be one of challenge rating 5 or lower, such as a shadow demon or a barlgura. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends.  Roll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do on its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it.  At the end of each of the demon’s turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop concentrating on the spell before it reaches its full duration, an uncontrolled demon doesn’t disappear for 1d6 rounds if it still has hit points.  As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can’t cross the circle or harm it, and it can’t target anyone within it. Using the material component in this manner consumes it when the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the challenge rating increases by 1 for each slot level above 4th."
  },
  {
    "id": "e4ae26c1-e1d0-423c-91af-61fa4a2f3826",
    "name": "Summon Lesser Demons",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a vial of blood from a humanoid killed within the past 24 hours)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 167"
    ],
    "text": "You utter foul words, summoning demons from the chaos of the Abyss. Roll on the following table to determine what appears.  d6 — Demons Summoned: 1-2 — Two demons of challenge rating 1 or lower 3-4 — Four demons of challenge rating 1/2 or lower 5-6 — Eight demons of challenge rating 1/4 or lower  The DM chooses the demons, such as manes or dretches, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends.  The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability.  As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can’t cross the circle or harm it, and they can’t target anyone within it. Using the material component in this manner consumes it when the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons."
  },
  {
    "id": "5005716a-f237-44fd-b725-68e396a6577b",
    "name": "Synaptic Static",
    "level": 5,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 167"
    ],
    "text": "You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can’t be affected by this spell. A target takes 8d6 psychic damage on a failed save, or half as much damage on a successful one.  After a failed save, a target has muddled thoughts for 1 minute. During that time, it rolls a d6 and subtracts the number rolled from all its attack rolls and ability checks, as well as its Constitution saving throws to maintain concentration. The target can make an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success."
  },
  {
    "id": "0989cdfc-bcc3-49fe-ac9b-f6463633cbcb",
    "name": "Temple of the Gods",
    "level": 7,
    "ritual": false,
    "school": "conjuration",
    "time": "1 hour",
    "range": "120 feet",
    "components": "V, S, M (a holy symbol worth at least 5 gp)",
    "duration": "24 hours",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 167"
    ],
    "text": "You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting.  You make all decisions about the temple’s appearance. The interior is enclosed by a floor, walls, and a roof, with one door granting access to the interior and as many windows as you wish. Only you and any creatures you designate when you cast the spell can open or close the door.  The temple’s interior is an open space with an idol or altar at one end. You decide whether the temple is illuminated and whether that illumination is bright light or dim light. The smell of burning incense fills the air within, and the temperature is mild.  The temple opposes types of creatures you choose when you cast this spell. Choose one or more of the following: celestials, elementals, fey, fiends, or undead. If a creature of the chosen type attempts to enter the temple, that creature must make a Charisma saving throw. On a failed save, it can’t enter the temple for 24 hours. Even if the creature can enter the temple, the magic there hinders it; whenever it makes an attack roll, an ability check, or a saving throw inside the temple, it must roll a d4 and subtract the number rolled from the d20 roll.  In addition, the sensors created by divination spells can’t appear inside the temple, and creatures within can’t be targeted by divination spells.  Finally, whenever any creature in the temple regains hit points from a spell of 1st level or higher, the creature regains additional hit points equal to your Wisdom modifier (minimum 1 hit point).  The temple is made from opaque magical force that extends into the Ethereal Plane, thus blocking ethereal travel into the temple’s interior. Nothing can physically pass through the temple’s exterior. It can’t be dispelled by dispel magic, and antimagic field has no effect on it. A disintegrate spell destroys the temple instantly.  Casting this spell on the same spot every day for a year makes this effect permanent."
  },
  {
    "id": "ef53ea6a-6c4f-4657-82f0-a922538e3d1b",
    "name": "Tenser's Transformation",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Self",
    "components": "V, S, M (a few hairs from a bull)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 168"
    ],
    "text": "You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can’t cast spells, and you gain the following benefits:  • You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost.  • You have advantage on attack rolls that you make with simple and martial weapons.  • When you hit a target with a weapon attack, that target takes an extra 2d12 force damage.  • You have proficiency with all armor, shields, simple weapons, and martial weapons.  • You have proficiency in Strength and Constitution saving throws.  • You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.  Immediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion.  Exhaustion: Some special abilities and environmental hazards, such as starvation and the long-term effects of freezing or scorching temperatures, can lead to a special condition called exhaustion. Exhaustion is measured in six levels. An effect can give a creature one or more levels of exhaustion, as specified in the effect's description.  Level — Effect: 1 —Disadvantage on ability checks 2 —Speed halved 3 —Disadvantage on attack rolls and saving throws 4 —Hit point maximum halved 5 —Speed reduced to 0 6 —Death  If an already exhausted creature suffers another effect that causes exhaustion, its current level of exhaustion increases by the amount specified in the effect's description. A creature suffers the effect of its current level of exhaustion as well as all lower levels. For example, a creature suffering level 2 exhaustion has its speed halved and has disadvantage on ability checks. An effect that removes exhaustion reduces its level as specified in the effect's description, with all exhaustion effects ending if a creature's exhaustion level is reduced below 1. Finishing a long rest reduces a creature's exhaustion level by 1, provided that the creature has also ingested some food and drink."
  },
  {
    "id": "e439fd0b-030c-49e7-ac25-5120ae0dee0a",
    "name": "Thunder Step",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 168"
    ],
    "text": "You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away.  You can bring along objects as long as their weight doesn’t exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd."
  },
  {
    "id": "853d6d56-8b89-42a4-aec0-c40009774ca2",
    "name": "Thunderclap",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "5 feet",
    "components": "S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 168",
      "Elemental Evil Player's Companion p. 22",
      "Princes of the Apocalypse p. 240"
    ],
    "text": "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage.  The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  },
  {
    "id": "d19e1ab6-7214-4c83-9b0e-568aafdb74c6",
    "name": "Tidal Wave",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a drop of water)",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 168",
      "Elemental Evil Player's Companion p. 22",
      "Princes of the Apocalypse p. 240"
    ],
    "text": "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn’t knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes."
  },
  {
    "id": "d114718c-cc32-45d5-b1d0-d6916941d8ad",
    "name": "Tiny Servant",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "classes": [
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 168"
    ],
    "text": "You touch one Tiny, nonmagical object that isn’t attached to another object or a surface and isn’t being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the stat block for its statistics.  As a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete.  When the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd."
  },
  {
    "id": "20e9e23b-07c4-4951-acd7-1721ef2790b8",
    "name": "Toll the Dead",
    "level": 0,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 169"
    ],
    "text": "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.  The spell’s damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
  },
  {
    "id": "161d7c1e-36c3-490b-aba8-ffcf91a11802",
    "name": "Transmute Rock",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (clay and water)",
    "duration": "Until dispelled",
    "classes": [
      "Druid",
      "Wizard",
      "Artificer"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 169",
      "Elemental Evil Player's Companion p. 22",
      "Princes of the Apocalypse p. 240"
    ],
    "text": "You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects.  Transmute Rock to Mud: Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell’s duration.  The ground in the spell’s area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud.  If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one.  Transmute Mud to Rock: Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell’s duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage."
  },
  {
    "id": "ef6c1b80-b66f-4e6c-a810-b2a4a239b049",
    "name": "Vitriolic Sphere",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a drop of giant slug bile)",
    "duration": "Instantaneous",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 170",
      "Elemental Evil Player's Companion p. 23",
      "Princes of the Apocalypse p. 241"
    ],
    "text": "You point at a location within range, and a glowing, 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and another 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn.  At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th."
  },
  {
    "id": "176bc029-4250-4203-8c73-2f3df3f77140",
    "name": "Wall of Light",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a hand mirror)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 170"
    ],
    "text": "A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet.  When the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, it takes half as much damage and isn’t blinded. A blinded creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.  A creature that ends its turn in the wall’s area takes 4d8 radiant damage.  Until the spell ends, you can use an action to launch a beam of radiance from the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes 4d8 radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the wall’s length drops to 0 feet, the spell ends.  At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
  },
  {
    "id": "b9ad75f0-c413-4476-8bfc-97727805efee",
    "name": "Wall of Sand",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a handful of sand)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Fighter (Eldritch Knight)",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 170",
      "Elemental Evil Player's Companion p. 23",
      "Princes of the Apocalypse p. 241"
    ],
    "text": "You create a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall’s space and must spend 3 feet of movement for every 1 foot it moves there."
  },
  {
    "id": "98b9cd80-f10b-425b-a61b-9fb360ad910d",
    "name": "Wall of Water",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a drop of water)",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Druid",
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 170",
      "Volo's Guide to Monsters p. 116",
      "Elemental Evil Player's Companion p. 23",
      "Princes of the Apocalypse p. 241"
    ],
    "text": "You create a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall’s space is difficult terrain.  Any ranged weapon attack that enters the wall’s space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot-square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall’s water doesn’t fill it."
  },
  {
    "id": "12134f37-ee8a-4622-ac44-c4d06a0d3952",
    "name": "Warding Wind",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Bard",
      "Druid",
      "Fighter (Eldritch Knight)",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 170",
      "Elemental Evil Player's Companion p. 23",
      "Princes of the Apocalypse p. 241"
    ],
    "text": "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell’s duration.  The wind has the following effects:  • It deafens you and other creatures in its area.  • It extinguishes unprotected flames in its area that are torch-sized or smaller.  • It hedges out vapor, gas, and fog that can be dispersed by strong wind.  • The area is difficult terrain for creatures other than you.  • The attack rolls of ranged weapon attacks have disadvantage if the attacks pass in or out of the wind."
  },
  {
    "id": "6d026f4b-2616-4f26-bf73-6e71402cd252",
    "name": "Watery Sphere",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a droplet of water)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 170",
      "Elemental Evil Player's Companion p. 23",
      "Princes of the Apocalypse p. 241"
    ],
    "text": "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell’s duration.  Any creature in the sphere’s space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature’s choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.  The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.  As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.  When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes."
  },
  {
    "id": "48fd6a2d-2a95-43c0-82e5-a163dcaa628b",
    "name": "Whirlwind",
    "level": 7,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "300 feet",
    "components": "V, M (a piece of straw)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 171",
      "Elemental Evil Player's Companion p. 24",
      "Princes of the Apocalypse p. 242"
    ],
    "text": "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren’t secured to anything and that aren’t worn or carried by anyone.  A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft.  A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 _ 10 feet away from it in a random direction."
  },
  {
    "id": "adc453bf-33b6-4ae0-b378-7dd3efbbb3b1",
    "name": "Word of Radiance",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "5 feet",
    "components": "V, M (a holy symbol)",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 171"
    ],
    "text": "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.  The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  },
  {
    "id": "cd89e5ff-d977-4130-a897-c16f6e1f49cc",
    "name": "Wrath of Nature",
    "level": 5,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 171"
    ],
    "text": "You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends.  Grasses and Undergrowth: Any area of ground in the cube that is covered by grass or undergrowth is difficult terrain for your enemies.  Trees: At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take 4d6 slashing damage from whipping branches.  Roots and Vines: At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become restrained until the spell ends. A restrained creature can use an action to make a Strength (Athletics) check against your spell save DC, ending the effect on itself on a success.  Rock:. As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes 3d8 nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall prone."
  },
  {
    "id": "79fab502-78bd-4c6e-a16c-95e819417743",
    "name": "Zephyr Strike",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 171"
    ],
    "text": "You move like the wind. Until the spell ends, your movement doesn’t provoke opportunity attacks.  Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn."
  },
  {
    "id": "88e06e5f-2200-4a22-9e53-1eec1fd59c4d",
    "name": "Invocation: Aspect of the Moon",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 56"
    ],
    "text": "Prerequisite: Pact of the Tome feature  You no longer need to sleep and can’t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading your Book of Shadows and keeping watch."
  },
  {
    "id": "8422eb1a-9560-4f54-9585-a8bda5e192ec",
    "name": "Invocation: Cloak of Flies",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 56"
    ],
    "text": "Prerequisite: 5th level  As a bonus action, you can surround yourself with a magical aura that looks like buzzing flies. The aura extends 5 feet from you in every direction, but not through total cover. It lasts until you’re incapacitated or you dismiss it with a bonus action. The aura grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. Any other creature that starts its turn in the aura takes poison damage equal to your Charisma modifier (minimum of 0 damage). Once you use this invocation, you can’t use it again until you finish a short or long rest."
  },
  {
    "id": "f9bad7b4-6dec-439f-816d-a884a1d9e88a",
    "name": "Invocation: Eldritch Smite",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 56"
    ],
    "text": "Prerequisite: 5th level, Pact of the Blade feature  Once per turn when you hit a creature with your pact weapon, you can expend a warlock spell slot to deal an extra 1d8 force damage to the target, plus another 1d8 per level of the spell slot, and you can knock the target prone if it is Huge or smaller."
  },
  {
    "id": "9c498167-7b37-4fa4-9d46-fa547a69f3ba",
    "name": "Invocation: Ghostly Gaze",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 56"
    ],
    "text": "Prerequisite: 7th level  As an action, you gain the ability to see through solid objects to a range of 30 feet. Within that range, you have darkvision if you don’t already have it. This special sight lasts for 1 minute or until your concentration ends (as if you were concentrating on a spell). During that time, you perceive objects as ghostly, transparent images. Once you use this invocation, you can’t use it again until you finish a short or long rest."
  },
  {
    "id": "3f13a8af-53ef-479d-96dc-6a376ac7fe2a",
    "name": "Invocation: Gift of the Depths",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: 5th level  You can breathe underwater, and you gain a swimming speed equal to your walking speed. You can also cast waterbreathing once without expending a spell slot. You regain the ability to do so when you finish a long rest."
  },
  {
    "id": "ebb1c964-4613-4102-bca1-c3046e998682",
    "name": "Invocation: Gift of the Ever-Living Ones",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: Pact of the Chain feature  Whenever you regain hit points while your familiar is within 100 feet of you, treat any dice rolled to determine the hit points you regain as having rolled their maximum value for you."
  },
  {
    "id": "c11a547f-c205-49f6-a62d-b61998939f6c",
    "name": "Invocation: Grasp of Hadar",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: eldritch blast cantrip  Once during your turn when you hit a creature with your eldritch blast cantrip, you can move that creature in a straight line 10 feet closer to you."
  },
  {
    "id": "c797926e-55e8-4f88-933a-4e8579415a8d",
    "name": "Invocation: Improved Pact Weapon",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: Pact of the Blade feature  You can use any weapon you summon with your Pact of the Blade feature as a spellcasting focus for your warlock spells. In addition, the weapon gains a +1 bonus to its attack and damage rolls, unless it is a magic weapon that already has a bonus to those rolls. Finally, the weapon you conjure can be a shortbow, longbow, light crossbow, or heavy crossbow."
  },
  {
    "id": "1a49b03a-ec33-45e5-9ab3-d63503c2a673",
    "name": "Invocation: Lance of Lethargy",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: eldritch blast cantrip  Once on each of your turns when you hit a creature with your eldritch blast, you can reduce that creature's speed by 10 feet until the end of your next turn."
  },
  {
    "id": "28ff4d46-9a03-4bbe-9927-c90d551e47a2",
    "name": "Invocation: Maddening Hex",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: 5th level, hex spell or a warlock feature that curses  As a bonus action, you cause a psychic disturbance around the target cursed by your hex spell or by a warlock feature of yours, such as Hexblade’s Curse or Sign of Ill Omen. When you do so, you deal psychic damage to the target and each creature of your choice within 5 feet of it. The psychic damage equals your Charisma modifier (minimum of 1 damage). To use this invocation, you must be able to see the cursed target, and it must be within 30 feet of you."
  },
  {
    "id": "9d5941ea-d019-468c-9363-4236125fd1bd",
    "name": "Invocation: Relentless Hex",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: 7th level, hex spell or a warlock feature that curses  Your curse creates a temporary bond between you and your target. As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see within 5 feet of the target cursed by your hex spell or by a warlock feature of yours, such as Hexblade’s Curse or Sign of Ill Omen. To teleport in this way, you must be able to see the cursed target."
  },
  {
    "id": "87ff3811-96e3-4a66-a753-a6b42c2f2bd6",
    "name": "Invocation: Shroud of Shadow",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: 15th level  You can cast invisibility at will, without expending a spell slot."
  },
  {
    "id": "b6a526ba-93a0-4ce8-88c7-813a79f6c6b8",
    "name": "Invocation: Tomb of Levistus",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: 5th level  As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. Immediately after you take this damage, you gain vulnerability to fire damage, your speed is reduced to 0, and you are incapacitated. These effects, including any remaining temporary hit points, all end when the ice melts. Once you use this invocation, you can’t use it again until you finish a short or long rest."
  },
  {
    "id": "32da18c8-7dca-4e2c-8e39-45adc5e71670",
    "name": "Invocation: Trickster's Escape",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Xanathar's Guide to Everything p. 57"
    ],
    "text": "Prerequisite: 7th level  You can cast freedom of movement once on yourself without expending a spell slot. You regain the ability to do so when you finish a long rest."
  },
  {
    "id": "47f93f22-f9a7-41e5-b8d0-19a4725bba2d",
    "name": "Encode Thoughts",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "Self",
    "components": "S",
    "duration": "8 hours",
    "classes": [
      ""
    ],
    "sources": [
      "Guildmasters' Guide to Ravnica p. 47"
    ],
    "text": "Putting a finger to your head, you pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. It is otherwise stationary. If you cast this spell while concentrating on a spell or an ability that allows you to read or manipulate the thoughts of others (such as detect thoughts or modify memory), you can transform the thoughts or memories you read, rather than your own, into a thought strand. Casting this spell while holding a thought strand allows you to instantly receive whatever memory, idea, or message the thought strand contains. (Casting detect thoughts on the strand has the same effect.)"
  },
  {
    "id": "ae33f8f2-46a5-42b8-98ec-2dbfad63c046",
    "name": "Distort Value",
    "level": 1,
    "ritual": false,
    "school": "illusion",
    "time": "1 minute",
    "range": "Touch",
    "components": "V",
    "duration": "8 hours",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard",
      "Warlock"
    ],
    "sources": [
      "Acquisitions Incorporated p. 75"
    ],
    "text": "Do you need to squeeze a few more gold pieces out of a merchant as you try to sell that weird octopus statue you liberated from the chaos temple? Do you need to downplay the worth of some magical assets when the tax collector stops by? Distort value has you covered. You cast this spell on an object no more than 1 foot on a side, doubling the object's perceived value by adding illusory flourishes or polish to it, or reducing its perceived value by half with the help of illusory scratches, dents, and other unsightly features. Anyone examining the object can ascertain its true value with a successful Intelligence (Investigation) check against your spell save DC. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the maximum size of the object increases by 1 foot for each slot level above 1st."
  },
  {
    "id": "db048aa2-e481-45b8-b743-99829802d138",
    "name": "Fast Friends",
    "level": 3,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Wizard"
    ],
    "sources": [
      "Acquisitions Incorporated p. 75"
    ],
    "text": "When you need to make sure something gets done, you can't rely on vague promises, sworn oaths, or binding contracts of employment. When you cast this spell, choose one humanoid within range that can see and hear you, and that can understand you. The creature must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed in this way, it undertakes to perform any services or activities you ask of it in a friendly manner, to the best of its ability. You can set the creature new tasks when a previous task is completed, or if you decide to end its current task. If the service or activity might cause harm to the creature, or if it conflicts with the creature's normal activities and desires, the creature can make another Wisdom saving throw to try to end the effect. This save is made with advantage if you or your companions are fighting the creature. If the activity would result in certain death for the creature, the spell ends. When the spell ends, the creature knows it was charmed by you.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
  },
  {
    "id": "c8d4eabc-539e-4b95-af72-88eb696b7d3b",
    "name": "Gift of Gab",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 reaction, which you cake when you speak to another creature",
    "range": "Self",
    "components": "V, S, M (2 gp which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "sources": [
      "Acquisitions Incorporated p. 76"
    ],
    "text": "When I met Jim Darkmagic, I wondered how he got anything done in that outfit. I have since learned that most of his talents involve standing and talking. His outfit is perfect for that. Jim Darkmagic is said to have invented this spell, originally calling it I said what?! Have you ever been talking to the local monarch and accidentally mentioned how their son looks like your favorite hog from when you were growing up on the family farm? We've all been there! But rather than being beheaded for an honest slip of the tongue, you can pretend it never happened—by ensuring that no one knows it happened. When you cast this spell, you skillfully reshape the memories of listeners in your immediate area, so that each creature of your choice within 5 feet of you forgets everything you said within the last 6 seconds. Those creatures then remember that you actually said the words you speak as the verbal component of the spell."
  },
  {
    "id": "78398eb6-2ba8-422e-a736-68f48f326a9d",
    "name": "Incite Greed",
    "level": 3,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a gem worth at least 50 gp)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Wizard",
      "Warlock"
    ],
    "sources": [
      "Acquisitions Incorporated p. 76"
    ],
    "text": "When you cast this spell, you present the gem used as the material component and choose any number of creatures within range that can see you. Each target must succeed on a Wisdom saving throw or be charmed by you until the spell ends, or until you or your companions do anything harmful to it. While charmed in this way, a creature can do nothing but use its movement to approach you in a safe manner. While an affected creature is within 5 feet of you, it cannot move, but simply stares greedily at the gem you present. At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target."
  },
  {
    "id": "64654d05-8f73-4d48-bd98-cba1cfe95e44",
    "name": "Jim's Glowing Coin",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "S, M (a coin and 2 gp which the spell consumes)",
    "duration": "1 minute",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Acquisitions Incorporated p. 76"
    ],
    "text": "Of the many tactics employed by master magician and renowned adventurer Jim Darkmagic, the old glowing coin trick is a time-honored classic. When you cast the spell, you hurl the coin that is the spell's material component to any spot within range. The coin lights up as if under the effect of a light spell. Each creature of your choice that you can see within 30 feet of the coin must succeed on a Wisdom saving throw or be distracted for the duration. While distracted, a creature has disadvantage on Wisdom (Perception) checks and initiative rolls."
  },
  {
    "id": "e44f1ef8-15db-461a-bfdf-a4ea6f382c47",
    "name": "Jim's Magic Missile",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (1 gp which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Acquisitions Incorporated p. 76"
    ],
    "text": "Jim's magic missile is an ancient and powerful spell, as well as being the name of my band in Wizard Academy. Any apprentice wizard can cast a boring old magic missile. Sure, it always strikes its target. Yawn. Do away with the drudgery of your grandfather's magic with this improved version of the spell, as used by Jim Darkmagic! You create three twisting, whistling, hypoallergenic, gluten-free darts of magical force. Each dart targets a creature of your choice that you can see within range. Make a ranged spell attack for each missile. On a hit, a missile deals 2d4 force damage to its target. If the attack roll scores a critical hit, the target of that missile takes 5d4 force damage instead of you rolling damage twice for a critical hit. If the attack roll for any missile is a 1, all missiles miss their targets and blow up in your face, dealing 1 force damage per missile to you. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart, and the royalty component increases by 1 gp, for each slot level above 1st."
  },
  {
    "id": "3301d438-f344-45dd-9dc3-1ad55eac21ff",
    "name": "Motivational Speech",
    "level": 3,
    "ritual": false,
    "school": "enchantment",
    "time": "1 minute",
    "range": "60 feet",
    "components": "V",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "sources": [
      "Acquisitions Incorporated p. 77"
    ],
    "text": "I once heard a motivational speech by Jim and it was the worst ninety seconds of my life. What does Omin see in him, anyway? You address allies, staff, or innocent bystanders to exhort and inspire them to greatness, whether they have anything to get excited about or not. Choose up to five creatures within range that can hear you. For the duration, each affected creature gains 5 temporary hit points and has advantage on Wisdom saving throws. If an affected creature is hit by an attack, it has advantage on the next attack roll it makes. Once an affected creature loses the temporary hit points granted by this spell, the spell ends for that creature.  At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the temporary hit points increase by 5 for each slot level above 3rd."
  },
  {
    "id": "f630b06e-77f6-41db-892a-19f9a4a199df",
    "name": "Dark Star",
    "level": 8,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a shard of onyx and a drop of the caster's blood, both of which the spell consumes)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 186"
    ],
    "text": "This spell creates a sphere centered on a point you choose within range. The sphere can have a radius of up to 40 feet. The area within this sphere is filled with magical darkness and crushing gravitational force. For the duration, the spell's area is difficult terrain. A creature with darkvision can't see through the magical darkness, and nonmagical light can't illuminate it. No sound can be created within or pass through the area. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there. Any creature that enters the spell's area for the first time on a turn or starts its turn there must make a Constitution saving throw. The creature takes 8d10 force damage on a failed save, or half as much damage on a successful one. A creature reduced to 0 hit points by this damage is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust."
  },
  {
    "id": "0f312b71-ee74-4d4e-b473-84fdecd94c0e",
    "name": "Fortune's Favor",
    "level": 2,
    "ritual": false,
    "school": "divination",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a white pearl worth at least 100 gp, which the spell consumes)",
    "duration": "1 hour",
    "classes": [
      "Wizard (Chronurgy)",
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 186"
    ],
    "text": "You impart latent luck to yourself or one willing creature you can see within range. When the chosen creature makes an attack roll, an ability check, or a saving throw before the spell ends, it can dismiss this spell on itself to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the chosen creature, it can dismiss this spell on itself to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled. If the original d20 roll has advantage or disadvantage, the creature rolls the additional d20 after advantage or disadvantage has been applied to the original roll.  At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
  },
  {
    "id": "8fe2acde-62f4-4c02-8f6a-c7e8ffd25047",
    "name": "Gift of Alacrity",
    "level": 1,
    "ritual": false,
    "school": "divination",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "classes": [
      "Wizard (Chronurgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 186"
    ],
    "text": "You touch a willing creature. For the duration, the target can add 1d8 to its initiative rolls."
  },
  {
    "id": "963a998b-4807-4281-8062-ae60b489294d",
    "name": "Gravity Fissure",
    "level": 6,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (100-foot line)",
    "components": "V, S, M (a fistful of iron filings)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 187"
    ],
    "text": "You manifest a ravine of gravitational energy in a line originating from you that is 100 feet long and 5 feet wide. Each creature in that line must make a Constitution saving throw, taking 8d8 force damage on a failed save, or half as much damage on a successful one. Each creature within 10 feet of the line but not in it must succeed on a Constitution saving throw or take 8d8 force damage and be pulled toward the line until the creature is in its area.  At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d8 for each slot level above 6th."
  },
  {
    "id": "b3d387f0-b7da-48d2-9ed6-4d9644d717c6",
    "name": "Gravity Sinkhole",
    "level": 4,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a black marble)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 187"
    ],
    "text": "A 20-foot-radius sphere of crushing force forms at a point you can see within range and tugs at the creatures there. Each creature in the sphere must make a Constitution saving throw. On a failed save, the creature takes 5d10 force damage and is pulled in a straight line toward the center of the sphere, ending in an unoccupied space as close to the center as possible (even if that space is in the air). On a successful save, the creature takes half as much damage and isn't pulled.  At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
  },
  {
    "id": "b1670f76-d35b-4e5f-9d8b-80086eab2986",
    "name": "Immovable Object",
    "level": 2,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S, M (gold dust worth at least 25 gp, which the spell consumes)",
    "duration": "1 hour",
    "classes": [
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 187"
    ],
    "text": "You touch an object that weighs no more than 10 pounds and cause it to become magically fixed in place. You and the creatures you designate when you cast this spell can move the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. If the object is fixed in the air, it can hold up to 4,000 pounds of weight. More weight causes the object to fall. Otherwise, a creature can use an action to make a Strength check against your spell save DC. On a success, the creature can move the object up to 10 feet.  At Higher Levels. If you cast this spell using a spell slot of 4th or 5th level, the DC to move the object increases by 5, it can carry up to 8,000 pounds of weight, and the duration increases to 24 hours. If you cast this spell using a spell slot of 6th level or higher, the DC to move the object increases by 10, it can carry up to 20,000 pounds of weight, and the effect is permanent until dispelled."
  },
  {
    "id": "3e19e92e-3d38-44a5-b6a1-dd61a5fba9aa",
    "name": "Magnify Gravity",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "1 round",
    "classes": [
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 188"
    ],
    "text": "The gravity in a 10-foot-radius sphere centered on a point you can see within range increases for a moment. Each creature in the sphere on the turn when you cast the spell must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed. Until the start of your next turn, any object that isn't being worn or carried in the sphere requires a successful Strength check against your spell save DC to pick up or move.  At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
  },
  {
    "id": "404323e4-c583-4d58-85c6-d0435565f1e1",
    "name": "Pulse Wave",
    "level": 3,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (30-foot cone)",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Wizard (Chronurgy)",
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 188"
    ],
    "text": "You create intense pressure, unleash it in a 30-foot cone, and decide whether the pressure pulls or pushes creatures and objects. Each creature in that cone must make a Constitution saving throw. A creature takes 6d6 force damage on a failed save, or half as much damage on a successful one. And every creature that fails the save is either pulled 15 feet toward you or pushed 15 feet away from you, depending on the choice you made for the spell. In addition, unsecured objects that are completely within the cone are likewise pulled or pushed 15 feet.  At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 and the distance pulled or pushed increases by 5 feet for each slot level above 3rd."
  },
  {
    "id": "f530eeab-0cc4-4f43-8135-411e05ca9764",
    "name": "Ravenous Void",
    "level": 9,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "1000 feet",
    "components": "V, S, M (a small, nine-pointed star made of iron)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 188"
    ],
    "text": "You create a 20-foot-radius sphere of destructive gravitational force centered on a point you can see within range. For the spell's duration, the sphere and any space within 100 feet of it are difficult terrain, and nonmagical objects fully inside the sphere are destroyed if they aren't being worn or carried. When the sphere appears and at the start of each of your turns until the spell ends, unsecured objects within 100 feet of the sphere are pulled toward the sphere's center, ending in an unoccupied space as close to the center as possible. A creature that starts its turn within 100 feet of the sphere must succeed on a Strength saving throw or be pulled straight toward the sphere's center, ending in an unoccupied space as close to the center as possible. A creature that enters the sphere for the first time on a turn or starts its turn there takes 5d10 force damage and is restrained until it is no longer in the sphere. If the sphere is in the air, the restrained creature hovers inside the sphere. A creature can use its action to make a Strength check against your spell save DC, ending this restrained condition on itself or another creature in the sphere that it can reach. A creature reduced to 0 hit points by this spell is annihilated, along with any nonmagical items it is wearing or carrying."
  },
  {
    "id": "3e784d95-c1e3-4466-beec-c5d7f212d3b8",
    "name": "Reality Break",
    "level": 8,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a crystal prism)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Wizard (Chronurgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 189"
    ],
    "text": "You shatter the barriers between realities and timelines, thrusting a creature into turmoil and madness. The target must succeed on a Wisdom saving throw, or it can't take reactions until the spell ends. The affected target must also roll a d10 at the start of each of its turns; the number rolled determines what happens to the target, as shown on the Reality Break Effects table. At the end of each of its turns, the affected target can repeat the Wisdom saving throw, ending the spell on itself on a success.  d10 | Effect 1-2 | Vision of the Far Realm. The target takes 6d12 psychic damage, and it is stunned until the end of the turn. 3-5 | Rending Rift. The target must make a Dexterity saving throw, taking 8d12 force damage on a failed save, or half as much damage on a successful one. 6-8 | Wormhole. The target is teleported, along with everything it is wearing and carrying, up to 30 feet to an unoccupied space of your choice that you can see. The target also takes 10d12 force damage and is knocked prone. 9-10 | Chill of the Dark Void. The target takes 10d12 cold damage, and it is blinded until the end of the turn."
  },
  {
    "id": "f1467d67-b438-48a7-b903-21d1627ec834",
    "name": "Sapping Sting",
    "level": 0,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Wizard (Chronurgy)",
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 189"
    ],
    "text": "You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone. This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
  },
  {
    "id": "929c39cd-9116-4f92-a70d-ce1a9a664145",
    "name": "Temporal Shunt",
    "level": 5,
    "ritual": false,
    "school": "transmutation",
    "time": "1 reaction, taken when a creature you can see makes an attack roll or starts to cast a spell",
    "range": "120 feet",
    "components": "V, S",
    "duration": "1 round",
    "classes": [
      "Wizard (Chronurgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 189"
    ],
    "text": "You target the triggering creature, which must succeed on a Wisdom saving throw or vanish, being thrown to another point in time and causing the attack to miss or the spell to be wasted. At the start of its next turn, the target reappears where it was or in the closest unoccupied space. The target doesn't remember you casting the spell or being affected by it.  At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. All targets must be within 30 feet of each other."
  },
  {
    "id": "66514ef3-431c-4e9c-b9af-51a7b8281885",
    "name": "Tether Essence",
    "level": 7,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a spool of platinum cord worth at least 250 gp, which the spell consumes)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Wizard (Chronurgy)",
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 189"
    ],
    "text": "Two creatures you can see within range must make a Constitution saving throw, with disadvantage if they are within 30 feet of each other. Either creature can willingly fail the save. If either save succeeds, the spell has no effect. If both saves fail, the creatures are magically linked for the duration, regardless of the distance between them. When damage is dealt to one of them, the same damage is dealt to the other one. If hit points are restored to one of them, the same number of hit points are restored to the other one. If either of the tethered creatures is reduced to 0 hit points, the spell ends on both. If the spell ends on one creature, it ends on both."
  },
  {
    "id": "d5d4a135-0ac9-44d5-b26d-f344d1218b90",
    "name": "Time Ravage",
    "level": 9,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (an hourglass filled with diamond dust worth at least 5,000 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard (Chronurgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 189"
    ],
    "text": "You target a creature you can see within range, putting its physical form through the devastation of rapid aging. The target must make a Constitution saving throw, taking 10d12 necrotic damage on a failed save, or half as much damage on a successful one. If the save fails, the target also ages to the point where it has only 30 days left before it dies of old age. In this aged state, the target has disadvantage on attack rolls, ability checks, and saving throws, and its walking speed is halved. Only the wish spell or the greater restoration cast with a 9th-level spell slot can end these effects and restore the target to its previous age."
  },
  {
    "id": "2f3ed7ca-4a51-4123-a1f3-b9663a96a156",
    "name": "Wristpocket",
    "level": 2,
    "ritual": true,
    "school": "conjuration",
    "time": "1 action",
    "range": "Self",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Wizard (Chronurgy)",
      "Wizard (Graviturgy)"
    ],
    "sources": [
      "Explorer's Guide to Wildemount p. 190"
    ],
    "text": "You flick your wrist, causing one object in your hand to vanish. The object, which only you can be holding and can weigh no more than 5 pounds, is transported to an extradimensional space, where it remains for the duration. Until the spell ends, you can use your action to summon the object to your free hand, and you can use your action to return the object to the extradimensional space. An object still in the pocket plane when the spell ends appears in your space, at your feet."
  },
  {
    "id": "56a08fbe-106d-4535-90b1-8264e9f37494",
    "name": "Ashardalon's Stride",
    "level": 3,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Fizban's Treasury of Dragons p. 19"
    ],
    "text": "The billowing flames of a dragon blast from your feet, granting you explosive speed. For the duration, your speed increases by 20 feet and moving doesn't provoke opportunity attacks. When you move within 5 feet of a creature or an object that isn't being worn or carried, it takes 1d6 fire damage from your trail of heat. A creature or object can take this damage only once during a turn.  At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, increase your speed by 5 feet for each spell slot level above 3rd. The spell deals an additional 1d6 fire damage for each slot level above 3rd."
  },
  {
    "id": "e8385222-acbf-4e8b-8d23-43ab3da48af2",
    "name": "Draconic Transformation",
    "level": 7,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V, S, M ((a statuette of a dragon, worth at least 500 gp))",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Fizban's Treasury of Dragons p. 19"
    ],
    "text": "With a roar, you draw on the magic of dragons to transform yourself, taking on draconic features. You gain the following benefits until the spell ends:  Blindsight. You have blindsight with a range of 30 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature, unless the creature successfully hides from you. Breath Weapon. When you cast this spell, and as a bonus action on subsequent turns for the duration, you can exhale shimmering energy in a 60-foot cone. Each creature in that area must make a Dexterity saving throw, taking 6d8 force damage on a failed save, or half as much damage on a successful one. Wings. Incorporeal wings sprout from your back, giving you a flying speed of 60 feet."
  },
  {
    "id": "895a78d6-0a61-4e92-8076-f54d085a8a88",
    "name": "Fizban's Platinum Shield",
    "level": 6,
    "ritual": false,
    "school": "abjuration",
    "time": "1 bonus action",
    "range": "60 feet",
    "components": "V, S, M (a platinum-plated dragon scale, worth at least 500 gp)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Fizban's Treasury of Dragons p. 20"
    ],
    "text": "You create a field of silvery light that surrounds a creature of your choice within range (you can choose yourself). The field sheds dim light out to 5 feet. While surrounded by the field, a creature gains the following benefits:  Cover. The creature has half cover. Damage Resistance. The creature has resistance to acid, cold, fire, lightning, and poison damage. Evasion. If the creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the creature instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.  As a bonus action on subsequent turns, you can move the field to another creature within 60 feet of the field."
  },
  {
    "id": "e2c0762a-43ad-40bf-b4c4-8be7e5ab02cb",
    "name": "Nathair's Mischief",
    "level": 2,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "60 feet",
    "components": "S, M (a piece of crust from an apple pie)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Fizban's Treasury of Dragons p. 20"
    ],
    "text": "You fill a 20-foot cube you can see within range with fey and draconic magic. Roll on the Mischievous Surge table to determine the magical effect produced, and roll again at the start of each of your turns until the spell ends. You can move the cube up to 10 feet before you roll.  d4 | Effect 1 | The smell of apple pie fills the air, and each creature in the cube must succeed on a Wisdom saving throw or become charmed by you until the start of your next turn. 2 | Bouquets of flowers appear all around, and each creature in the cube must succeed on a Dexterity saving throw or be blinded until the start of your next turn as the flowers spray water in their faces. 3 | Each creature in the cube must succeed on a Wisdom saving throw or begin giggling until the start of your next turn. A giggling creature is incapacitated and uses all its movement to move in a random direction. 4 | Drops of molasses hover in the cube, making it difficult terrain until the start of your next turn."
  },
  {
    "id": "18e8022a-3c40-44c7-b1b7-dec7ef160d7f",
    "name": "Raulothim's Psychic Lance",
    "level": 4,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "120 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Fizban's Treasury of Dragons p. 21"
    ],
    "text": "You unleash a shimmering lance of psychic power from your forehead at a creature that you can see within range. Alternatively, you can utter a creature's name. If the named target is within range, it becomes the spell's target even if you can't see it. If the named target isn't within range, the lance dissipates without effect. The target must make an Intelligence saving throw. On a failed save, the target takes 7d6 psychic damage and is incapacitated until the start of your next turn. On a successful save, the creature takes half as much damage and isn't incapacitated.  At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th."
  },
  {
    "id": "15cf2106-2805-44cf-8b8c-faf2f4dc3543",
    "name": "Rime's Binding Ice",
    "level": 2,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (30-foot cone)",
    "components": "S, M (a vial of meltwater)",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Fizban's Treasury of Dragons p. 21"
    ],
    "text": "A burst of cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage and is hindered by ice formations for 1 minute, or until it or another creature within reach of it uses an action to break away the ice. A creature hindered by ice has its speed reduced to 0. On a successful save, a creature takes half as much damage and isn't hindered by ice.  At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by 1d8 for each slot level above 2nd."
  },
  {
    "id": "061236a2-6278-4181-882f-968c761f8770",
    "name": "Summon Draconic Spirit",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (an object with the image of a dragon engraved on it, worth at least 500 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Fizban's Treasury of Dragons p. 21"
    ],
    "text": "You call forth a draconic spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Draconic Spirit stat block. When you cast this spell, choose a family of dragon: chromatic, gem, or metallic. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.  At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "2388fd5a-8668-48d7-a882-16ed3b9e959c",
    "name": "Booming Blade",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (5-foot radius)",
    "components": "V, M (a melee weapon worth at least 1 sp)",
    "duration": "1 round",
    "classes": [
      "Artificer",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Sword Coast Adventurer's Guide p. 142",
      "Tasha's Cauldron of Everything p. 106"
    ],
    "text": "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends. This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8)."
  },
  {
    "id": "3edecbeb-e128-443c-8ecb-408744c8f29f",
    "name": "Greenflame Blade",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (5-foot radius)",
    "components": "V, M (a melee weapon worth at least 1 sp)",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Sword Coast Adventurer's Guide p. 143",
      "Tasha's Cauldron of Everything p. 107"
    ],
    "text": "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier. This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8)."
  },
  {
    "id": "b917ca1c-1b58-4864-902b-a81634dbd33b",
    "name": "Lightning Lure",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (15-foot radius)",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Fighter (Eldritch Knight)",
      "Rogue (Arcane Trickster)",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Sword Coast Adventurer's Guide p. 143",
      "Tasha's Cauldron of Everything p. 107"
    ],
    "text": "You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  },
  {
    "id": "a23175d2-cd53-4442-b61c-a2c2b0ae2219",
    "name": "Blade of Disaster",
    "level": 9,
    "ritual": false,
    "school": "conjuration",
    "time": "1 bonus action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Icewind Dale"
    ],
    "text": "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage). As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again. The blade can harmlessly pass through any barrier, including a wall of force."
  },
  {
    "id": "f628a1f5-fb7c-4596-a318-3924f716b0ee",
    "name": "Dream Of The Blue Veil",
    "level": 7,
    "ritual": false,
    "school": "conjuration",
    "time": "10 minutes",
    "range": "20 feet",
    "components": "V, S, M (a magic item or a willing creature from the destination world)",
    "duration": "6 hours",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 106"
    ],
    "text": "You and up to eight willing creatures within range fall unconscious for the spell's duration and experience visions of another world on the Material Plane, such as Oerth, Toril, Krynn, or Eberron. If the spell reaches its full duration, the visions conclude with each of you encountering and pulling back a mysterious blue curtain. The spell then ends with you mentally and physically transported to the world that was in the visions. To cast this spell, you must have a magic item that originated on the world you wish to reach, and you must be aware of the world's existence, even if you don't know the world's name. Your destination in the other world is a safe location within 1 mile of where the magic item was created. Alternatively, you can cast the spell if one of the affected creatures was born on the other world, which causes your destination to be a safe location within 1 mile of where that creature was born. The spell ends early on a creature if that creature takes any damage, and the creature isn't transported. If you take any damage, the spell ends for you and all the other creatures, with none of you being transported."
  },
  {
    "id": "3b640514-f9a1-420c-a193-4c9387c720dd",
    "name": "Intellect Fortress",
    "level": 3,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 107"
    ],
    "text": "For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them."
  },
  {
    "id": "b9b0a793-8486-4147-b740-a1146118acaf",
    "name": "Mind Sliver",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "1 round",
    "classes": [
      "Sorcerer",
      "Sorcerer (Aberrant)",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 108"
    ],
    "text": "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn. This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  },
  {
    "id": "08707cd2-dd9b-4218-8607-61664602f92d",
    "name": "Spirit Shroud",
    "level": 3,
    "ritual": false,
    "school": "necromancy",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Paladin",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 108"
    ],
    "text": "You call forth spirits of the dead, which flit around you for the spell's duration. The spirits are intangible and invulnerable. Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can't regain hit points until the start of your next turn. In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd."
  },
  {
    "id": "67700aa5-99f8-4a58-8ecf-e7ee2a6f0c89",
    "name": "Summon Aberration",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a pickled tentacle and an eyeball in a platinum-inlaid vial worth at least 400 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer (Aberrant)",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 109"
    ],
    "text": "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaad, or Star Spawn. The creature resembles an aberration of that kind, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "c2a8e10c-f4b2-42a5-88fd-cb773960f9bf",
    "name": "Summon Beast",
    "level": 2,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 109"
    ],
    "text": "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "1c511e52-dd8a-43b3-bc86-a305301ce8eb",
    "name": "Summon Celestial",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a golden reliquary worth at least 500 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 110"
    ],
    "text": "You call forth a celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature's attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "17ecb7bb-ac95-4c5b-a65f-957c054d6e3f",
    "name": "Summon Construct",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (an ornate stone and metal lockbox worth at least 400 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Sorcerer (Clockwork)",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 111"
    ],
    "text": "You call forth the spirit of a construct. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles a golem or a modron (your choice) made of the chosen material, which determines certain traits in its stat block. The creature disappears when it drops to O hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "329c309c-2424-49ac-82f1-5d59ee17c61f",
    "name": "Summon Elemental",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger",
      "Warlock (Fathomless)",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 111"
    ],
    "text": "You call forth an elemental spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain traits in its stat block. The creature disappears when it drops to O hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "b1bd6460-b25f-462b-a9f0-d6f0aac0b6d7",
    "name": "Summon Fey",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a gilded flower worth at least 300 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 112"
    ],
    "text": "You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood, which determines one of the traits in its stat block. The creature disappears when it drops to O hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "ff09cde3-c912-4d61-878f-2567bae12e43",
    "name": "Summon Fiend",
    "level": 6,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (humanoid blood inside a ruby vial worth at least 600 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 112"
    ],
    "text": "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a fiend of the chosen type, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "9379fbaa-71ac-49fa-9d18-1b3ed322eae1",
    "name": "Summon Shadow Spawn",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (tears inside a gem worth at least 300 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 113"
    ],
    "text": "You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "a2374bd0-3507-4ddc-903a-98d77c34f991",
    "name": "Summon Undead",
    "level": 3,
    "ritual": false,
    "school": "necromancy",
    "time": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a gilded skull worth at least 300 gp)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 114"
    ],
    "text": "You call forth an undead spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
  },
  {
    "id": "b48239b8-4aee-439c-b435-49620a67d23c",
    "name": "Sword Burst",
    "level": 0,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "Self (5-foot radius)",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Sword Coast Adventurer's Guide p. 143",
      "Tasha's Cauldron of Everything p. 115"
    ],
    "text": "You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must each succeed on a Dexterity saving throw or take 1d6 force damage. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  },
  {
    "id": "7604dee7-b4fc-44a9-8936-be0e78ef22f5",
    "name": "Tasha's Caustic Brew",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (30-foot line)",
    "components": "V, S, M (a bit of rotten food)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 115"
    ],
    "text": "A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at start of each of its turns. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
  },
  {
    "id": "6b3efe58-2a7f-4ab1-90ef-b65171b3e77a",
    "name": "Tasha's Mind Whip",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "90 feet",
    "components": "V",
    "duration": "1 round",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 115"
    ],
    "text": "You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can't take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell's other effects. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
  },
  {
    "id": "2a5dd225-2ed4-4dc3-918e-1befbdf704e6",
    "name": "Tasha's Otherworldly Guise",
    "level": 6,
    "ritual": false,
    "school": "transmutation",
    "time": "1 bonus action",
    "range": "Self",
    "components": "V, S, M (an object engraved with a symbol of the Outer Planes, worth at least 500 gp)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 116"
    ],
    "text": "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:  • You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes). • You are immune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes). • Spectral wings appear on your back, giving you a flying speed of 40 feet. • You have a +2 bonus to AC. • All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls. • You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that lets you attack more than once when you take the Attack action on your turn."
  },
  {
    "id": "7afea6d2-919f-41f6-9dcf-b7b00a06c427",
    "name": "Infusion: Arcane Propulsion Armor (Level 14)",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 20"
    ],
    "text": "Item: A suit of armor (requires attunement)  The wearer of this armor gains these benefits:  • The wearer's walking speed increases by 5 feet. • The armor includes gauntlets, each of which is a magic melee weapon that can be wielded only when the hand is holding nothing. The wearer is proficient with the gauntlets, and each one deals 1d8 force damage on a hit and has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When thrown, the gauntlet detaches and flies at the attack's target, then immediately returns to the wearer and reattaches. • The armor can't be removed against the wearer's will. • If the wearer is missing any limbs, the armor replaces those limbs—hands, arms, feet, legs, or similar appendages. The replacements function identically to the body parts they replace."
  },
  {
    "id": "58f954d7-8a33-4f88-b37b-78086e1608fd",
    "name": "Infusion: Armor of Magical Strength",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 20"
    ],
    "text": "Item: A suit of armor (requires attunement)  This armor has 6 charges. The wearer can expend the armor's charges in the following ways:  • When the wearer makes a Strength check or a Strength saving throw, it can expend 1 charge to add a bonus to the roll equal to its Intelligence modifier. • If the creature would be knocked prone, it can use its reaction to expend 1 charge to avoid being knocked prone.  The armor regains 1d6 expended charges daily at dawn."
  },
  {
    "id": "0be52820-a039-4682-8616-2f73c3334193",
    "name": "Infusion: Helm of Awareness (Level 10)",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 21"
    ],
    "text": "While wearing this helmet, a creature has advantage on initiative rolls. In addition, the wearer can't be surprised, provided it isn't incapacitated."
  },
  {
    "id": "d74ac86f-ac46-402a-8d08-b4ec23a0fc5f",
    "name": "Infusion: Mind Sharpener",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 22"
    ],
    "text": "Item: A suit of armor or robes  The infused item can send a jolt to the wearer to refocus their mind. The item has 4 charges. When the wearer fails a Constitution saving throw to maintain concentration on a spell, the wearer can use its reaction to expend 1 of the item's charges to succeed instead. The item regains 1d4 expended charges daily at dawn."
  },
  {
    "id": "14d0f911-e764-4fdc-a716-5ff12b1534ec",
    "name": "Infusion: Spell-Refueling Ring (Level 6)",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 23"
    ],
    "text": "Item: A ring (requires attunement)  While wearing this ring, the creature can recover one expended spell slot as an action. The recovered slot can be of 3rd level or lower. Once used, the ring can't be used again until the next dawn."
  },
  {
    "id": "187b2245-bb5d-4747-80f0-fdd96f4226f4",
    "name": "Infusion: Enhanced Arcane Focus",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: Item: A rod, staff, or wand (requires attunement)  While holding this item, a creature gains a + 1 bonus to spell attack rolls. In addition, the creature ignores half cover when making a spell attack. The bonus increases to +2 when you reach 10th level in this class."
  },
  {
    "id": "21cd5b6d-1e99-4dd0-89ce-de850356a166",
    "name": "Infusion: Enhanced Defense",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: A suit of armor or a shield.  A creature gains a +1 bonus to Armor Class while wearing (armor) or wielding (shield) the infused item.  The bonus increases to +2 when you reach 10th level in this class."
  },
  {
    "id": "b07176ff-c4e4-41ee-be01-6d0bcd84d836",
    "name": "Infusion: Enhanced Weapon",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: A simple or martial weapon  This magic weapon grants a +1 bonus to attack and damage rolls made with it. The bonus increases to +2 when you reach 10th level in this class."
  },
  {
    "id": "4cc44423-3d01-440e-9a29-bccd67168146",
    "name": "Infusion: Repeating Shot",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: A simple or martial weapon with the ammunition property (requires attunement)  This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the loading property if it has it. If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target."
  },
  {
    "id": "d92c481d-d340-4d70-b146-00253b5a8bcb",
    "name": "Infusion: Replicate Magic Item",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Using this infusion, you replicate a particular magic item. You can learn this infusion multiple times; each time you do so, choose a different magic item that you can make with it, picking from the Replicable Magic Items tables below. A table's title tells you the level you must be in the class to choose an item from the table. Alternatively, you can choose the magic item from among the common magic items in the game, not including potions or scrolls. In the tables, an item's entry tells you whether the item requires attunement. See the item's description in the Dungeon Master's Guide for more information about it, including the type of object required for its making.  Replicable Items (2nd-level Artificer)  Magic item | Attunement Alchemy jug | No Bag of holding | No Cap of water breathing | No Goggles of night | No Rope of climbing | No Sending stones | No Wand of magic detection | No Wand of secrets | No  Replicable Items (6th-level Artificer)  Magic item | Attunement Boots of elvenkind | No Cloak of elvenkind | Yes Cloak of the manta ray | No Eyes of charming | Yes Gloves of thievery | No Lantern of revealing | No Pipes of haunting | No Ring of water walking | No  Replicable Items (10th-level Artificer)  Magic item | Attunement Boots of striding and springing | Yes Boots of the winterlands | Yes Bracers of archery | Yes Brooch of shielding | Yes Cloak of protection | Yes Eyes of the eagle | Yes Gauntlets of ogre power | Yes Gloves of missile snaring | Yes Gloves of swimming and climbing | Yes Hat of disguise | Yes Headband of intellect | Yes Helm of telepathy | Yes Medallion of thoughts | Yes Necklace of adaptation | Yes Periapt of wound closure | Yes Pipes of the sewers | Yes Quiver of Ehlonna | No Ring of jumping | Yes Ring of mind shielding | Yes Slippers of spider climbing | Yes Ventilating lung (detailed in chapter 5) | Yes Winged boots | Yes  Replicable Items (14th-level Artificer)  Magic item | Attunement Amulet of health | Yes Arcane propulsion arm (detailed in chapter 5) | Yes Belt of hill giant strength | Yes Boots of levitation | Yes Boots of speed | Yes Bracers of defense | Yes Cloak of the bat | Yes Dimensional shackles | No Gem of seeing | Yes Horn of blasting | No Ring of free action | Yes Ring of protection | Yes Ring of the ram | Yes"
  },
  {
    "id": "34a79319-b9b1-49d5-89b3-d7ea40e750f5",
    "name": "Infusion: Boots Of The Winding Path (Level 6)",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: Pair of Boots (requires attunement)  While wearing these boots, a creature can teleport up to 15 feet as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn."
  },
  {
    "id": "20f77e74-1a44-413f-bebf-e14bffba0a7b",
    "name": "Infusion: Homunculus Servant",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: A gem or crystal worth at least 100 gp  You learn intricate methods for magically creating a special homunculus that serves you. The item you infuse serves as the creature's heart, around which the creature's body instantly forms. You determine the homunculus's appearance. Some artificers prefer mechanical-looking birds, whereas some like winged vials or miniature, animate cauldrons. The homunculus is friendly to you and your companions, and it obeys your commands. See this creature's game statistics in the Homunculus Servant stat block, which uses your proficiency bonus (PB) in several places. In combat, the homunculus shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the homunculus can take any action of its choice, not just Dodge. The homunculus regains 2d6 hit points if the mending spell is cast on it. If you or the homunculus dies, it vanishes, leaving its heart in its space."
  },
  {
    "id": "463a1040-4832-4e25-a211-c31ddddfb604",
    "name": "Infusion: Radiant Weapon (Level 6)",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: A simple or martial weapon (requires attunement)  This magic weapon grants a +1 bonus to attack and damage rolls made with it. While holding it, the wielder can take a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet. The wielder can extinguish the light as a bonus action. The weapon has 4 charges. As a reaction immediately after being hit by an attack, the wielder can expend 1 charge and cause the attacker to be blinded until the end of the attacker's next turn, unless the attacker succeeds on a Constitution saving throw against your spell save DC. The weapon regains 1d4 expended charges daily at dawn."
  },
  {
    "id": "8a56b2f4-23c5-4968-a910-408520f768af",
    "name": "Infusion: Repulsion Shield (Level 6)",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: A shield (requires attunement)  A creature gains a +1 bonus to Armor Class while wielding this shield. The shield has 4 charges. While holding it, the wielder can use a reaction immediately after being hit by a melee attack to expend 1 of the shield's charges and push the attacker up to 15 feet away. The shield regains 1d4 expended charges daily at dawn."
  },
  {
    "id": "bcda27f4-c196-49de-b03e-1fb03c7f0ed5",
    "name": "Infusion: Resistant Armor (Level 6)",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: A suit of armor (requires attunement)  While wearing this armor, a creature has resistance to one of the following damage types, which you choose when you infuse the item: acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder."
  },
  {
    "id": "ac568237-c1c3-4b94-a93e-097270784836",
    "name": "Infusion: Returning Weapon",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Eberron"
    ],
    "text": "Item: A simple or martial weapon with the thrown property  This magic weapon grants a +1 bonus to attack and damage rolls made with it, and it returns to the wielder's hand immediately after it is used to make a ranged attack. The bonus increases to +2 when you reach 10th level in this class."
  },
  {
    "id": "19bb71ce-636c-4615-acb4-cea484861e42",
    "name": "Ambush",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 42"
    ],
    "text": "When you make a Dexterity (Stealth) check or an initiative roll, you can expend one superiority die and add the die to the roll, provided you aren't incapacitated."
  },
  {
    "id": "36402796-c82f-4149-97fe-0045e91c83df",
    "name": "Bait and Switch",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 42"
    ],
    "text": "When you're within 5 feet of a creature on your turn, you can expend one superiority die and switch places with that creature, provided you spend at least 5 feet of movement and the creature is willing and isn't incapacitated. This movement doesn't provoke opportunity attacks. Roll the superiority die. Until the start of your next turn, you or the other creature (your choice) gains a bonus to AC equal to the number rolled."
  },
  {
    "id": "df72ad74-061e-4324-b8db-7d4670726620",
    "name": "Brace",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 42"
    ],
    "text": "When a creature you can see moves into the reach you have with the melee weapon you're wielding, you can use your reaction to expend one superiority die and make one attack against the creature, using that weapon. If the attack hits, add the superiority die to the weapon's damage roll."
  },
  {
    "id": "079848e8-2a6c-4133-865c-a6bcc0c43b8d",
    "name": "Commanding Presence",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 42"
    ],
    "text": "When you make a Charisma (Intimidation), a Charisma (Performance), or a Charisma (Persuasion) check, you can expend one superiority die and add the superiority die to the ability check."
  },
  {
    "id": "c5712cbd-abc0-490b-9cda-23062fdfc3e0",
    "name": "Grappling Strike",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 42"
    ],
    "text": "Immediately after you hit a creature with a melee attack on your turn, you can expend one superiority die and then try to grapple the target as a bonus action (see the Player's Handbook for rules on grappling). Add the superiority die to your Strength (Athletics) check."
  },
  {
    "id": "1a70e194-53b6-4786-9495-44a4277a1b11",
    "name": "Quick Toss",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 42"
    ],
    "text": "As a bonus action, you can expend one superiority die and make a ranged attack with a weapon that has the thrown property. You can draw the weapon as part of making this attack. If you hit, add the superiority die to the weapon's damage roll."
  },
  {
    "id": "24f3c4a7-326f-43eb-bf8b-fa6fe7d1bb1a",
    "name": "Tactical Assessment",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Fighter (Battle Master)",
      "Martial Adept"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 42"
    ],
    "text": "When you make an Intelligence (Investigation), an Intelligence (History), or a Wisdom (Insight) check, you can expend one superiority die and add the superiority die to the ability check."
  },
  {
    "id": "a408c640-c77e-418b-8f3e-2ce5e29fd323",
    "name": "Invocation: Bond of the Talisman",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 70"
    ],
    "text": "Prerequisite: 12th level, Pact of the Talisman feature  While someone else is wearing your talisman, you can use your action to teleport to the unoccupied space closest to them, provided the two of you are on the same plane of existence. The wearer of your talisman can do the same thing, using their action to teleport to you. The teleportation can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest."
  },
  {
    "id": "1182a693-302a-4a01-a94c-d37ac47e2e30",
    "name": "Invocation: Eldritch Mind",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 71"
    ],
    "text": "You have advantage on Constitution saving throws that you make to maintain your concentration on a spell."
  },
  {
    "id": "732e57c6-c72d-4bf4-a8cb-0aa92bedcf9e",
    "name": "Invocation: Far Scribe",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 71"
    ],
    "text": "Prerequisite: 5th-level, Pact of the Tome feature  A new page appears in your Book of Shadows. With your permission, a creature can use its action to write its name on that page, which can contain a number of names equal to your proficiency bonus. You can cast the sending spell, targeting a creature whose name is on the page, without using a spell slot and without using material components. To do so, you must write the message on the page. The target hears the message in their mind, and if the target replies, their message appears on the page, rather than in your mind. The writing disappears after 1 minute. As an action, you can magically erase a name on the page by touching it."
  },
  {
    "id": "bdb00569-01f5-4df4-b532-1847edae4151",
    "name": "Invocation: Gift of the Protectors",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 71"
    ],
    "text": "Prerequisite: 9th-level, Pact of the Tome feature  A new page appears in your Book of Shadows. With your permission, a creature can use its action to write its name on that page, which can contain a number of names equal to your proficiency bonus. When any creature whose name is on the page is reduced to 0 hit points but not killed outright, the creature magically drops to 1 hit point instead. Once this magic is triggered, no creature can benefit from it until you finish a long rest. As an action, you can magically erase a name on the page by touching it."
  },
  {
    "id": "9213c9e3-8c09-42d3-9a10-575fd9bfdb65",
    "name": "Invocation: Investment of the Chain Master",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 71"
    ],
    "text": "Prerequisite: Pact of the Chain feature  When you cast find familiar, you infuse the summoned familiar with a measure of your eldritch power, granting the creature the following benefits:  • The familiar gains either a flying speed or a swimming speed (your choice) of 40 feet. • As a bonus action, you can command the familiar to take the Attack action. • The familiar's weapon attacks are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks. • If the familiar forces a creature to make a saving throw, it uses your spell save DC. • When the familiar takes damage, you can use your reaction to grant it resistance against that damage."
  },
  {
    "id": "d55ab946-8048-4d13-bed5-b79129b56edc",
    "name": "Invocation: Protection of the Talisman",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 71"
    ],
    "text": "Prerequisite: 7th-level, Pact of the Talisman feature  When the wearer of your talisman fails a saving throw, they can add a d4 to the roll, potentially turning the save into a success. This benefit can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest."
  },
  {
    "id": "02b97cb1-d2bf-4af3-8793-d208d09274a8",
    "name": "Invocation: Rebuke of the Talisman",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 71"
    ],
    "text": "Prerequisite: Pact of the Talisman feature  When the wearer of your talisman is hit by an attacker you can see within 30 feet of you, you can use your reaction to deal psychic damage to the attacker equal to your proficiency bonus and push it up to 10 feet away from the talisman's wearer."
  },
  {
    "id": "8c6c7592-fc43-470c-bd89-cc9b0b50cda2",
    "name": "Invocation: Undying Servitude",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Tasha's Cauldron of Everything p. 71"
    ],
    "text": "Prerequisite: 5th-level  You can cast animate dead without using a spell slot. Once you do so, you can't cast it in this way again until you finish a long rest."
  },
  {
    "id": "c7c28cad-e0d6-44e4-a5a0-4dc6c563a68e",
    "name": "Create Magen",
    "level": 7,
    "ritual": false,
    "school": "transmutation",
    "time": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a vial of quicksilver worth 500 gp and a life sized human doll, both of which the spell consumes, and an intricate crystal rod worth at least 1,500 gp that is not consumed)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Icewind Dale"
    ],
    "text": "While casting the spell, you place a vial of quicksilver in the chest of a life-sized human doll stuffed with ash or dust. You then stitch up the doll and drip your blood on it. At the end of the casting, you tap the doll with a crystal rod, transforming it into a magen clothed in whatever the doll was wearing. The type of magen is chosen by you during the casting of the spell. See appendix C for different kinds of magen and their statistics. When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a wish spell can undo this reduction to your hit point maximum. Any magen you create with this spell obeys your commands without question."
  },
  {
    "id": "41c3c44f-d1af-46fe-9a0c-06c2bf422ee9",
    "name": "Frost Fingers",
    "level": 1,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (15-foot cone",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Icewind Dale"
    ],
    "text": "Freezing cold blasts from your fingertips in a 15-foot cone. Each creature in that area must make a Constitution saving throw, taking 2d8 cold damage on a failed save, or half as much damage on a successful one. The cold freezes nonmagical liquids in the area that aren't being worn or carried. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
  },
  {
    "id": "d02e6908-3bfe-4660-8fa2-3273e7241de6",
    "name": "Flock of Familiars",
    "level": 2,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Lost Laboratory of Kwalish p. 57"
    ],
    "text": "You temporarily summon three familiars—spirits that take animal forms of your choice. Each familiar uses the same rules and options for a familiar conjured by the find familiar spell. All the familiars conjured by this spell must be the same type of creature (celestials, fey, or fiends; your choice). If you already have a familiar conjured by the find familiar spell or similar means, then one fewer familiars are conjured by this spell. Familiars summoned by this spell can telepathically communicate with you and share their visual or auditory senses while they are within 1 mile of you. When you cast a spell with a range of touch, one of the familiars conjured by this spell can deliver the spell, as normal. However, you can cast a touch spell through only one familiar per turn. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you conjure an additional familiar for each slot level above 2nd."
  },
  {
    "id": "636991ef-1b7e-4841-a5c6-60310ed33d53",
    "name": "Galder's Speedy Courier",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "10 feet",
    "components": "V, S, M (25 gold pieces, or mineral goods of equivalent value, which the spell consumes)",
    "duration": "10 minutes",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Lost Laboratory of Kwalish p. 57"
    ],
    "text": "You summon a Small air elemental to a spot within range. The air elemental is formless, nearly transparent, immune to all damage, and cannot interact with other creatures or objects. It carries an open, empty chest whose interior dimensions are 3 feet on each side. While the spell lasts, you can deposit as many items inside the chest as will fit. You can then name a living creature you have met and seen at least once before, or any creature for which you possess a body part, lock of hair, clipping from a nail, or similar portion of the creature's body. As soon as the lid of the chest is closed, the elemental and the chest disappear, then reappear adjacent to the target creature. If the target creature is on another plane, or if it is proofed against magical detection or location, the contents of the chest reappear on the ground at your feet. The target creature is made aware of the chest's contents before it chooses whether or not to open it, and knows how much of the spell's duration remains in which it can retrieve them. No other creature can open the chest and retrieve its contents. When the spell expires or when all the contents of the chest have been removed, the elemental and the chest disappear. The elemental also disappears if the target creature orders it to return the items to you. When the elemental disappears, any items not taken from the chest reappear on the ground at your feet. At Higher Levels. When you cast this spell using an 8th-level spell slot, you can send the chest to a creature on a different plane of existence from you."
  },
  {
    "id": "c7a00f03-7437-4470-b621-a0a533057b5a",
    "name": "Galder's Tower",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "10 minutes",
    "range": "30 feet",
    "components": "V, S, M (a fragment of stone, wood, or other building material)",
    "duration": "24 hours",
    "classes": [
      "Wizard"
    ],
    "sources": [
      "Lost Laboratory of Kwalish p. 57"
    ],
    "text": "You conjure a two-story tower made of stone, wood, or similar suitably sturdy materials. The tower can be round or square in shape. Each level of the tower is 10 feet tall and has an area of up to 100 square feet. Access between levels consists of a simple ladder and hatch. Each level takes one of the following forms, chosen by you when you cast the spell: • A bedroom with a bed, chairs, chest, and magical fireplace • A study with desks, books, bookshelves, parchments, ink, and ink pens • A dining space with a table, chairs, magical fireplace, containers, and cooking utensils • A lounge with couches, armchairs, side tables and footstools • A washroom with toilets, washtubs, a magical brazier, and sauna benches • An observatory with a telescope and maps of the night sky • An unfurnished, empty room The interior of the tower is warm and dry, regardless of conditions outside. Any equipment or furnishings conjured with the tower dissipate into smoke if removed from it. At the end of the spell's duration, all creatures and objects within the tower that were not created by the spell appear safely outside on the ground, and all traces of the tower and its furnishings disappear. You can cast this spell again while it is active to maintain the tower's existence for another 24 hours. You can create a permanent tower by casting this spell in the same location and with the same configuration every day for one year. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the tower can have one additional story for each slot level beyond 3rd."
  },
  {
    "id": "3a729ea4-383b-4fb0-bbac-d68dd956db64",
    "name": "Conjure Barlgura",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Up to 10 minutes",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You summon a barlgura that appears in an unoccupied space you can see within range. The barlgura disappears when it drops to 0 hit points or when the spell ends. The barlgura is hostile to all non-demons. Roll initiative for the barlgura, which has its own turns. At the start of its turn, it moves toward and attacks the nearest non-demon it can perceive. If two or more creatures are equally near, it picks one at random. If it cannot see any potential enemies, the barlgura moves in a random direction in search of foes. As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned barlgura cannot cross the circle or target anyone in it while the spell lasts."
  },
  {
    "id": "0b2458cc-70f9-43a2-b15e-349de1b7ff48",
    "name": "Conjure Hezrou",
    "level": 7,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (food worth at least 100 gp, which the spell consumes)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You summon a hezrou that appears in an unoccupied space you can see within range. The hezrou disappears when it drops to 0 hit points or when the spell ends. The hezrou’s attitude depends on the value of the food used as a material component for this spell. Roll initiative for the hezrou, which has its own turns. At the start of the hezrou’s turn, the DM makes a secret Charisma check on your behalf, with a bonus equal to the food’s value divided by 20. The check DC starts at 10 and increases by 2 each round. You can issue orders to the hezrou and have it obey you as long as you succeed on the Charisma check. If the check fails, the spell no longer requires concentration and the demon is no longer under your control. The hezrou then focuses on devouring any corpses it can see. If there are no such meals at hand, it attacks the nearest creatures and eats anything it kills. If its hit points are reduced to below half its hit point maximum, it returns to the Abyss. As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned hezrou cannot cross the circle or target anyone in it while the spell lasts."
  },
  {
    "id": "eb6d70fa-c27f-440a-b5f3-30f3132768de",
    "name": "Conjure Lesser Demon",
    "level": 3,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a vial of blood from an intelligent humanoid killed within the past 24 hours)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You summon up to a total of eight manes or dretches that appear in unoccupied spaces you can see within range. A manes or dretch disappears when it drops to 0 hit points or when the spell ends. The demons are hostile to all creatures. Roll initiative for the summoned demons as a group, which has its own turns. The demons attack the nearest non-demons to the best of their ability. As part of casting the spell, you can scribe a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. The summoned demons cannot cross the circle or target anyone in it while the spell lasts. Using the material component in this manner consumes it.  At Higher Levels: When you cast this spell using a spell slot of 6th or 7th level, you summon sixteen demons. If you cast it using a spell slot of 8th or 9th level, you summon thirty-two demons."
  },
  {
    "id": "ed166017-3988-4d30-91de-f4f6e20b8e97",
    "name": "Conjure Shadow Demon",
    "level": 4,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a vial of blood from an intelligent humanoid killed within the past 24 hours)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You summon a shadow demon that appears in an unoccupied space you can see within range. The shadow demon disappears when it drops to 0 hit points or when the spell ends. Roll initiative for the shadow demon, which has its own turns. You can issue orders to the shadow demon, and it obeys you as long as it can attack a creature on each of its turns and does not start its turn in an area of bright light. If either of these conditions is not met, the shadow demon immediately makes a Charisma check contested by your Charisma check. If you fail the check, the spell no longer requires concentration and the demon is no longer under your control. The demon automatically succeeds on the check if it is more than 100 feet away from you. As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned shadow demon cannot cross the circle or target anyone in it while the spell lasts."
  },
  {
    "id": "70c004db-3323-4a1f-8f69-f98cb0bc8bbb",
    "name": "Conjure Vrock",
    "level": 5,
    "ritual": false,
    "school": "conjuration",
    "time": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a gem worth at least 100 gp, which the spell consumes)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You summon a vrock that appears in an unoccupied space you can see within range. The vrock disappears when it drops to 0 hit points or when the spell ends. The vrock’s attitude depends on the value of the gem used as a material component for this spell. Roll initiative for the vrock, which has its own turns. At the start of the vrock’s turn, the DM makes a secret Charisma check on your behalf, with a bonus equal to the gem’s value divided by 20. The check DC starts at 10 and increases by 2 each round. You can issue orders to the vrock and have it obey you as long as you succeed on the Charisma check. If the check fails, the spell no longer requires concentration and the vrock is no longer under your control. The vrock takes no actions on its next turn and uses its telepathy to tell any creature it can see that it will fight in exchange for treasure. The creature that gives the vrock the most expensive gem can command it for the next 1d6 rounds. At the end of that time, it offers the bargain again. If no one offers the vrock treasure before its next turn begins, it attacks the nearest creatures for 1d6 rounds before returning to the Abyss. As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned vrock cannot cross the circle or target anyone in it while the spell lasts."
  },
  {
    "id": "1680e5c8-ccdc-4aae-bc87-b11128f70502",
    "name": "Guiding Hand",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "5 feet",
    "components": "V, S",
    "duration": "Concentration, up to 8 hours",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You create a Tiny incorporeal hand of shimmering light in an unoccupied space you can see within range. The hand exists for the duration, but it disappears if you teleport or you travel to a different plane of existence. When the hand appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the hand, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you. If you don’t move toward the hand, it remains in place until you do and beckons for you to follow once every 1d4 minutes."
  },
  {
    "id": "2cfa4c8a-71d8-4e11-9dce-b9d950c9b856",
    "name": "Guiding Hand (Ritual Only)",
    "level": 1,
    "ritual": true,
    "school": "divination",
    "time": "1 minute",
    "range": "5 feet",
    "components": "V, S",
    "duration": "Concentration, up to 8 hours",
    "classes": [
      "Ritual Caster"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You create a Tiny incorporeal hand of shimmering light in an unoccupied space you can see within range. The hand exists for the duration, but it disappears if you teleport or you travel to a different plane of existence. When the hand appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the hand, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you. If you don’t move toward the hand, it remains in place until you do and beckons for you to follow once every 1d4 minutes.  On spell lists:"
  },
  {
    "id": "9e123b0d-8fb3-4cce-a748-2f0e9babfd26",
    "name": "Hand of Radiance",
    "level": 0,
    "ritual": false,
    "school": "evocation",
    "time": "1 action",
    "range": "Self (5-foot radius)",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You raise your hand, and burning radiance erupts from it. Each creature of your choice that you can see within 5 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage. The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d8)."
  },
  {
    "id": "b1522756-bbe2-4753-b82b-0b70809204b8",
    "name": "Healing Elixir",
    "level": 1,
    "ritual": false,
    "school": "conjuration",
    "time": "1 minute",
    "range": "Self",
    "components": "V, S, M (alchemist’s supplies)",
    "duration": "24 hours",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You create a healing elixir in a simple vial that appears in your hand. The elixir retains its potency for the duration or until it’s consumed, at which point the vial vanishes. As an action, a creature can drink the elixir or administer it to another creature. The drinker regains 2d4 + 2 hit points."
  },
  {
    "id": "a25ece05-d03d-4d2f-b085-f39fa515ff81",
    "name": "Puppet",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "120 feet",
    "components": "S",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Your gesture forces one humanoid you can see within range to make a Constitution saving throw. On a failed save, the target must move up to its speed in a direction you choose. In addition, you can cause the target to drop whatever it is holding. This spell has no effect on a humanoid that is immune to being charmed."
  },
  {
    "id": "b8346421-7ec0-4963-b379-cb22d1cf1ff1",
    "name": "Sense Emotion",
    "level": 1,
    "ritual": false,
    "school": "divination",
    "time": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You attune your senses to pick up the emotions of others for the duration. When you cast the spell, and as your action on each turn until the spell ends, you can focus your senses on one humanoid you can see within 30 feet of you. You instantly learn the target’s prevailing emotion, whether it’s love, anger, pain, fear, calm, or something else. If the target isn’t actually humanoid or it is immune to being charmed, you sense that it is calm."
  },
  {
    "id": "d5e50c3b-930f-491b-947e-5659783ce8d5",
    "name": "Sudden Awakening",
    "level": 1,
    "ritual": false,
    "school": "enchantment",
    "time": "1 bonus action",
    "range": "10 feet",
    "components": "V",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Each sleeping creature you choose within range awakens, and then each prone creature within range can stand up without expending any movement."
  },
  {
    "id": "3e742967-658b-4ff5-a85a-0fbdc165e848",
    "name": "Unearthly Chorus",
    "level": 1,
    "ritual": false,
    "school": "illusion",
    "time": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "classes": [
      "Bard"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Music of a style you choose fills the air around you in a 30-foot radius. The music spreads around corners and can be heard from up to 100 feet away. The music moves with you, centered on you for the duration. Until the spell ends, you make Charisma (Performance) checks with advantage. In addition, you can use a bonus action on each of your turns to beguile one creature you choose within 30 feet of you that can see you and hear the music. The creature must make a Charisma saving throw. If you or your companions are attacking it, the creature automatically succeeds on the saving throw. On a failure, the creature becomes friendly to you for as long as it can hear the music and for 1 hour thereafter. You make Charisma (Deception) checks and Charisma (Persuasion) checks against creatures made friendly by this spell with advantage."
  },
  {
    "id": "bc978c6d-6c05-4c49-89dd-efa6d9a5d308",
    "name": "Virtue",
    "level": 0,
    "ritual": false,
    "school": "abjuration",
    "time": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 round",
    "classes": [
      "Cleric"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to 1d4 + your spellcasting ability modifier. The temporary hit points are lost when the spell ends."
  },
  {
    "id": "a57b927a-2edf-4b44-ad7c-e8c9de11d760",
    "name": "Wild Cunning",
    "level": 1,
    "ritual": false,
    "school": "transmutation",
    "time": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "You call out to the spirits of nature to aid you. When you cast this spell, choose one of the following effects: • If there are any tracks on the ground within range, you know where they are, and you make Wisdom (Survival) checks to follow these tracks with advantage for 1 hour or until you cast this spell again. • If there is edible forage within range, you know it and where to find it. • If there is clean drinking water within range, you know it and where to find it. • If there is suitable shelter for you and your companions with range, you know it and where to find. • Send the spirits to bring back wood for a fire and to set up a campsite in the area using your supplies. The spirits build the fire in a circle of stones, put up tents, unroll bedrolls, and put out any rations and water for consumption. • Have the spirits instantly break down a campsite, which includes putting out a fire, taking down tents, packing up bags, and burying any rubbish."
  },
  {
    "id": "f8343ce8-9277-42f7-affd-f249dd0cc9e0",
    "name": "Invocation: Burning Hex",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Hexblade patron  As a bonus action, you cause a target cursed by your Hexblade’s Curse to take fire damage equal to your Charisma modifier (minimum of 1).  (deprecated)"
  },
  {
    "id": "ab14b52e-dc4e-44b0-ac2e-e1ea8935b8d8",
    "name": "Invocation: Caiphon’s Beacon",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Great Old One patron  The purple star Caiphon is the doom of inexperienced mariners. Those who use its deceptive light to guide their travels invariably come to ruin. You gain proficiency in the Deception and Stealth skills, and you have advantage on attack rolls against charmed creatures.  (deprecated)"
  },
  {
    "id": "19c41cfd-a38f-4b5b-8fec-0789c6868646",
    "name": "Invocation: Chilling Hex",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Hexblade patron  As a bonus action, you cause frost to swirl around a target cursed by your Hexblade’s Curse, dealing cold damage to each of your enemies within 5 feet of the target. The cold damage equals your Charisma modifier (minimum of 1).  (deprecated)"
  },
  {
    "id": "741cd4c7-7bda-4b00-b0e1-b80001123c17",
    "name": "Invocation: Chronicle of the Raven Queen",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: Raven Queen patron, Pact of the Tome feature  You can place a corpse’s hand or similar appendage on your Book of Shadows and ask one question aloud. After 1 minute, the answer appears written in blood in your book. The answer is provided by the dead creature’s spirit to the best of its knowledge and is translated into a language of your choice. You must use this ability within 1 minute of a creature’s death, and a given creature can only be asked one question in this manner.  (deprecated)"
  },
  {
    "id": "b6265045-2f4d-4b7b-b0a6-c586d48e6854",
    "name": "Invocation: Claw of Acamar",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Great Old One patron, Pact of the Blade feature  You can create a black, lead flail using your Pact of the Blade feature. The flail’s head is sculpted to resemble a pair of grasping tentacles. The weapon has the reach property. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 necrotic damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn.  (deprecated)"
  },
  {
    "id": "3fdf12ca-4a45-41ab-bca7-8d54c51ff090",
    "name": "Invocation: Curse Bringer",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Hexblade patron, Pact of the Blade feature  You can create a greatsword forged from silver, with black runes etched into its blade, using your Pact of the Blade feature. If you reduce a target cursed by your Hexblade’s Curse to 0 hit points with this sword, you can immediately change the target of the curse to a different creature. This change doesn’t extend the curse’s duration. When you hit a creature with this weapon, you can expend a spell slot to deal an additional 2d8 slashing damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn.  (deprecated)"
  },
  {
    "id": "41e131db-bcd2-47e5-8f6d-7181227692eb",
    "name": "Invocation: Frost Lance",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: eldritch blast cantrip  Once on each of your turns when you hit a creature with your eldritch blast, you can reduce that creature’s speed by 10 feet until the end of your next turn."
  },
  {
    "id": "3691ca09-e368-4bf9-8b31-c9ba39da81ae",
    "name": "Invocation: Green Lord’s Gift",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Archfey patron  The Green Lord oversees a verdant realm of everlasting summer. Your soul is linked to his power. Whenever you regain hit points, you treat any dice rolled to determine the hit points you regain as having rolled their maximum value.  (deprecated)"
  },
  {
    "id": "78fde1e6-5db4-4c4b-ae03-82786f74d858",
    "name": "Invocation: Kiss of Mephistopheles",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: 5th level, eldritch blast cantrip  When you hit a creature with your eldritch blast, you can cast fireball as a bonus action using a warlock spell slot. The spell must be centered on the creature you hit with eldritch blast."
  },
  {
    "id": "534d4a6b-c3a1-45bf-874c-0597e149cc1e",
    "name": "Invocation: Mace of Dispater",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Fiend patron, Pact of the Blade feature  When you create your pact weapon as a mace, it manifests as an iron mace forged in Dis, the second of the Nine Hells. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 force damage to the target per spell level, and you can knock the target prone if it is Huge or smaller.  (deprecated)"
  },
  {
    "id": "3b135940-1aed-4b65-a856-7f7e316d0e2b",
    "name": "Invocation: Moon Bow",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Archfey patron, Pact of the Blade feature  You can create a longbow using your Pact of the Blade feature. When you draw back its string and fire, it creates an arrow of white wood, which vanishes after 1 minute. You have advantage on attack rolls against lycanthropes with the bow. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 radiant damage to the target per spell level.  (deprecated)"
  },
  {
    "id": "3f403ea3-c191-4508-9848-559d8b2ff8c3",
    "name": "Invocation: Path of the Seeker",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Seeker patron  The Seeker bids you to travel in search of knowledge, and little can prevent you from waling this path. You ignore difficult terrain, have advantage on all checks to escape a grapple, manacles, or rope bindings, and advantage on saving throws against being paralyzed.  (deprecated)"
  },
  {
    "id": "d2068564-2c63-4907-b232-46806405199f",
    "name": "Invocation: Raven Queen’s Blessing",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: Raven Queen patron, eldritch blast cantrip  When you score a critical hit with your eldritch blast cantrip, pick yourself or an ally you can see within 30 feet of you. The chosen creature can immediately expend a Hit Die to regain hit points equal to the roll + the creature’s Constitution modifier (minimum of 1 hit point).  (deprecated)"
  },
  {
    "id": "f2365960-b552-44eb-9654-44556b110ba5",
    "name": "Invocation: Seeker’s Speech",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: The Seeker patron  Your quest for knowledge allows you to master any spoken language. When you complete a long rest, you can pick two languages. You gain the ability to speak, read, and write the chosen languages until you finish your next long rest.  (deprecated)"
  },
  {
    "id": "3b06f0f6-2883-42a4-9d07-aa751715c2b9",
    "name": "Invocation: Shroud of Ulban",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: 18th level, the Great Old One patron  The blue-white star Ulban maintains a fickle presence among the stars, fluttering into view only to herald a dire omen. As an action, you can turn invisible for 1 minute. If you attack, deal damage, or force a creature to make a saving throw, you become visible at the end of the current turn.  (deprecated)"
  },
  {
    "id": "aae18edb-20f1-468e-b6cb-7a8e5acaf0eb",
    "name": "Invocation: Superior Pact Weapon",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: 9th level, Pact of the Blade feature  Any weapon you create using your Pact of the Blade feature is a +2 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon.  (deprecated)"
  },
  {
    "id": "c0871870-5281-4bff-8c48-62385f5a8445",
    "name": "Invocation: Ultimate Pact Weapon",
    "level": 0,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "",
    "duration": "",
    "classes": [
      "Eldritch Invocations"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "Prerequisite: 15th level, Pact of the Blade feature  Any weapon you create using your Pact of the Blade feature is a +3 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon.  (deprecated)"
  },
  {
    "id": "2a13b0dc-5d34-429d-a6cb-f9d0446a166a",
    "name": "Infusion: Armor of Tools",
    "level": 0,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "touch",
    "components": "S",
    "duration": "",
    "classes": [
      "Artificer Infusions"
    ],
    "sources": [
      "Unearthed Arcana"
    ],
    "text": "As an action, a creature wearing this infused armor can integrate into it artisan’s tools or thieves’ tools. The tools remain integrated in the armor for 8 hours or until the wearer removes the tools as an action. The armor can have only one tool integrated at a time.  The wearer can add its Intelligence modifier to any ability checks it makes with the integrated tool. The wearer must have a hand free to use the tool.  Requirements: A suit of armor"
  },
  {
    "id": "7e7fc90a-12d4-4304-82d2-88158ec77a02",
    "name": "Mind Thrust",
    "level": 2,
    "ritual": false,
    "school": "enchantment",
    "time": "1 action",
    "range": "90 feet",
    "components": "V",
    "duration": "1 round",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "sources": [
      "Psionic Options p. 8"
    ],
    "text": "You thrust a lance of psychic disruption into the mind of one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can’t take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell’s other effects. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
  },
  {
    "id": "6b1506bf-75ba-4342-9024-410258c7e251",
    "name": "Bullying Shot",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Gunslinger)"
    ],
    "sources": [
      "Matthew Mercer - Gunslinger Martial Archetype 1.2 p. 2"
    ],
    "text": "You can use the powerful blast and thundering sound of your firearm to shake the resolve of a creature.  When making a Charisma (Intimidation) check, you can expend one grit point to gain advantage on the roll."
  },
  {
    "id": "897cab79-d2f3-4159-966b-056a1fe914b0",
    "name": "Dazing Shot",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Gunslinger)"
    ],
    "sources": [
      "Matthew Mercer - Gunslinger Martial Archetype 1.2 p. 2"
    ],
    "text": "When you make a firearm attack against a creature, you can expend one grit point to attempt to dizzy your opponent.  On a hit, the creature suffers normal damage and must make a Constitution saving throw or suffer disadvantage on attacks until the end of your next turn."
  },
  {
    "id": "9cb44084-54fa-4823-9c31-b0ba5fa5d3b6",
    "name": "Deadeye Shot",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Gunslinger)"
    ],
    "sources": [
      "Matthew Mercer - Gunslinger Martial Archetype 1.2 p. 2"
    ],
    "text": "When you make a firearm attack against a creature, you can expend one grit point to gain advantage on the attack roll."
  },
  {
    "id": "d3acf861-f4a9-49bb-a037-a8455054b41a",
    "name": "Disarming Shot",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Gunslinger)"
    ],
    "sources": [
      "Matthew Mercer - Gunslinger Martial Archetype 1.2 p. 2"
    ],
    "text": "When you make a firearm attack against a creature, you can expend one grit point to attempt to shoot an object from their hands.  On a hit, the creature suffers normal damage and must succeed on a Strength saving throw or drop 1 held object of your choice and have that object pushed 10 feet away from you."
  },
  {
    "id": "80414fc6-3599-4a47-826b-7c1d94440b29",
    "name": "Forceful Shot",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Gunslinger)"
    ],
    "sources": [
      "Matthew Mercer - Gunslinger Martial Archetype 1.2 p. 2"
    ],
    "text": "When you make a firearm attack against a creature, you can expend one grit point to attempt to trip them up and force them back.  On a hit, the creature suffers normal damage and must succeed on a Strength saving throw or be pushed 15 feet away from you."
  },
  {
    "id": "f6d58479-bd48-4e9c-952d-a146e32b1e24",
    "name": "Piercing Shot",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Gunslinger)"
    ],
    "sources": [
      "Matthew Mercer - Gunslinger Martial Archetype 1.2 p. 2"
    ],
    "text": "When you make a firearm attack against a creature, you can expend one grit point to attempt to fire through multiple opponents.  The initial attack gains a +1 to the firearm’s misfire score.  On a hit, the creature suffers normal damage and you make an attack roll with disadvantage against every creature in a line directly behind the target within your first range increment.  Only the initial attack can misfire."
  },
  {
    "id": "094bdb4d-f951-465d-bbb7-96fff441acd2",
    "name": "Violent Shot",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Gunslinger)"
    ],
    "sources": [
      "Matthew Mercer - Gunslinger Martial Archetype 1.2 p. 3"
    ],
    "text": "When you make a fireman attack against a creature, you can expend one or more grit points to enhance the volatility of the attack.  For each grit point expended, the attack gains a +2 to the firearm’s misfire score.  If the attack hits, you can roll one additional weapon damage per grit point spent when determining the damage."
  },
  {
    "id": "972f2b99-7e4a-4b48-9606-a490219364f1",
    "name": "Winging Shot",
    "level": 1,
    "ritual": false,
    "time": "",
    "range": "",
    "components": "None",
    "duration": "",
    "classes": [
      "Fighter (Gunslinger)"
    ],
    "sources": [
      "Matthew Mercer - Gunslinger Martial Archetype 1.2 p. 2"
    ],
    "text": "When you make a firearm attack against a creature, you can expend one grit point to attempt to topple a moving target.  On a hit, the creature suffers normal damage and must make a Strength saving throw or be knocked prone."
  }
];