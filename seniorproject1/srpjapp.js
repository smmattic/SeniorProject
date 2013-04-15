var databaseUrl = "ihateyoumongo"; // renamethis
var collections = ["users"]
var db = require("mongojs").connect(databaseUrl, collections);


//Skill Points

BarbarianSkill("Barbarian",1, 1,1,1,3,2,2,2,3,1, 1,2,0,0);
BarbarianSkill("Barbarian",2, 2,1,2,4,2,3,2,3,1, 2,3,0,0);
BarbarianSkill("Barbarian",3, 2,1,2,5,3,3,2,4,2, 3,3,1,1);
BarbarianSkill("Barbarian",4, 2,1,3,5,3,4,3,5,2, 4,4,1,1);

BardSkill("Bard",1, 1,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,2,2,1,1,1,1,2, 0,0,2,2);
BardSkill("Bard",2, 2,1,2,1,2,1,2,2,1,2,2,1,1,2,1,2,2,2,2,2,1,2,1,1,2, 1,0,3,3);
BardSkill("Bard",3, 2,1,2,1,3,1,2,2,2,2,2,2,1,2,2,2,3,2,2,3,2,2,1,2,2, 2,1,3,3);
BardSkill("Bard",4, 2,2,2,2,4,1,2,2,2,3,2,2,2,2,2,2,4,2,2,3,2,3,1,2,3, 3,1,4,4);

ClericSkill("Cleric",1, 1,1,1,2,1,2,1,1,1,1, 0,2,0,2);
ClericSkill("Cleric",2, 2,1,2,2,2,2,1,1,1,1, 1,3,0,3);
ClericSkill("Cleric",3, 2,1,2,2,2,2,2,2,1,2, 2,3,1,3);
ClericSkill("Cleric",4, 2,1,2,3,2,2,2,2,2,3, 3,4,1,4);

DruidSkill("Druid",1, 2,1,1,2,2,1,2,1,2,1,2,2,1, 0,2,0,2);
DruidSkill("Druid",2, 2,1,2,2,3,2,2,1,2,2,2,3,1, 1,3,0,3);
DruidSkill("Druid",3, 3,1,2,2,3,2,3,1,3,2,3,3,2, 2,3,1,3);
DruidSkill("Druid",4, 3,1,3,3,4,3,3,1,3,2,3,4,2, 3,4,1,4);

FighterSkill("Fighter",1, 1,1,1,2,1,1,1, 1,2,0,0);
FighterSkill("Fighter",2, 2,1,2,2,1,1,1, 2,3,0,0);
FighterSkill("Fighter",3, 2,1,2,2,2,2,1, 3,3,1,1);
FighterSkill("Fighter",4, 2,1,3,3,2,2,1, 4,4,1,1);

MonkSkill("Monk",1, 1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1, 0,2,2,2);
MonkSkill("Monk",2, 2,2,2,1,1,1,1,2,1,1,1,2,1,1,2,1,1,2, 1,3,3,3);
MonkSkill("Monk",3, 2,2,2,1,2,2,1,2,1,2,2,2,1,1,2,2,1,2, 2,3,3,3);
MonkSkill("Monk",4, 3,2,3,1,2,2,1,2,2,2,2,2,2,1,2,2,2,2, 3,4,4,4);

PaladinSkill("Paladin",1, 2,1,2,1,2,2,2,1,1,2, 1,2,0,0);
PaladinSkill("Paladin",2, 2,1,3,2,3,2,2,1,2,2, 2,3,0,0);
PaladinSkill("Paladin",3, 3,1,3,2,4,2,3,1,2,3, 3,3,1,1);
PaladinSkill("Paladin",4, 3,1,4,3,5,3,3,1,2,3, 4,4,1,1);

RangerSkill("Ranger",1, 1,2,1,2,2,2,1,1,1,2,2,1,1,1,1,2,2,1,2, 1,2,0,0);
RangerSkill("Ranger",2, 2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,1,2, 2,3,0,0);
RangerSkill("Ranger",3, 2,3,1,2,3,2,2,2,2,2,3,3,1,2,3,3,3,1,2, 3,3,1,1);
RangerSkill("Ranger",4, 3,3,1,3,3,3,3,2,2,3,3,3,1,3,3,3,3,2,2, 4,4,1,1);

RogueSkill("Rogue",1, 1,2,1,2,1,1,1,2,2,2,2,1,2,1,1,1,1,1,2,1,1,1,2,2,2,1,1,1,1, 0,2,0,2);
RogueSkill("Rogue",2, 2,2,2,2,1,1,1,2,2,2,2,1,2,1,2,2,2,2,2,1,1,2,2,2,2,1,2,2,2, 1,3,0,3);
RogueSkill("Rogue",3, 2,2,3,3,1,2,2,2,2,2,2,1,2,1,2,2,2,2,3,1,1,2,3,3,3,1,2,3,3, 2,3,1,3);
RogueSkill("Rogue",4, 2,2,3,3,1,2,2,3,3,3,2,3,3,2,2,2,2,3,3,2,1,2,3,3,3,2,2,3,3, 3,4,1,4);

SorcererSkill("Sorcerer",1, 2,2,1,2,2,3, 0,0,2,2);
SorcererSkill("Sorcerer",2, 3,3,1,2,2,4, 1,0,3,3);
SorcererSkill("Sorcerer",3, 4,4,1,3,2,4, 2,1,3,3);
SorcererSkill("Sorcerer",4, 4,5,2,4,2,5, 3,1,4,4);

WizardSkill("Wizard",1, 2,1,1,1,1,1,1,1,1,1,1,1,1,2, 0,0,2,2);
WizardSkill("Wizard",2, 2,1,2,2,1,1,1,1,1,2,1,2,1,2, 1,0,3,3);
WizardSkill("Wizard",3, 3,1,2,2,2,1,2,1,1,2,1,2,1,3, 2,1,3,3);
WizardSkill("Wizard",4, 3,1,2,3,2,2,2,2,2,2,1,2,1,3, 3,1,4,4);


//Racial points

RaceHuman("Human", 15,14,15,13,17,12, "medium",30, 12, "+4 skill points at first level, +1 skill point at each level")
RaceDwarf("Dwarf", 17,11,14,14,10,10, "medium",20, 10, "+2 search on Stone, +2 racial save against poison, +2 racial save against spell/spell-like effects, +1 attack against orcs/goblinoids, +4 dodge (armor class) against giant size, +2 racial bonus on appraise stone/metal")
RaceElf("Elf", 10,13,14,17,16,16, "medium",30, 13, "Immune to sleep spells, +2 racial save against spells/spell-like effects, +2 racial bonus on listen, search and spot checks")
RaceHalfElf("Half-elf", 11,16,15,13,14,12, "medium",30, 13, "immunity to sleep spells, +2 racial saving throw against enchantment spells/effects, +1 racial bonus on listen, search, spot, +2 racial bonus on diplomacy/gather information")
RaceHalfOrc("Half-orc", 16,15,16,10,14,10, "medium",30, 12, "Nothing to add")
RaceHalfling("Halfling", 11,17,14,14,13,14, "small",20, 14, "+1 size bonus on attack roll, +1 on size bonus armor class, +4 size bonus on Hide checks, +2 racial bonus climb, jump, movie silently, +1 on all saving throws, +2 to Listen checks")
RaceGnome("Gnome", 12,15,14,14,12,15, "small",20, 13, "+2 racial bonus against illusions, +1 racial attack bonus against kobolds/hobgoblins, +4 dodge (amrmor class) against giant size, +2 bonus on Listen, Craft(alchemy), +1 size bonus on attack, +1 size bonus on armor class, +4 size bonus on Hide checks")








//Racial Calls

function RaceHuman(name, str,dex,con,intel,wis,cha, size,speed, armor_class, notes) {
db.users.save({
     name: name,
     str: str,
     dex: dex,
     con: con,
     intel: intel,
     wis: wis,
     cha: cha,
     size: size,
     speed: speed,
     armor_class: armor_class,
     notes: notes,
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Human saved");
});
}

function RaceDwarf(name, str,dex,con,intel,wis,cha, size,speed, armor_class, notes) {
db.users.save({
     name: name,
     str: str,
     dex: dex,
     con: con,
     intel: intel,
     wis: wis,
     cha: cha,
     size: size,
     speed: speed
     armor_class: armor_class,
     notes: notes
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Dwarf saved");
});
}

function RaceElf(name, str,dex,con,intel,wis,cha, size,speed, armor_class, notes) {
db.users.save({
     name: name,
     str: str,
     dex: dex,
     con: con,
     intel: intel,
     wis: wis,
     cha: cha,
     size: size,
     speed: speed,
     armor_class: armor_class,
     notes: notes
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Elf saved");
});
}

function RaceHalfElf(name, str,dex,con,intel,wis,cha, size,speed, armor_class, notes) {
db.users.save({
     name: name,
     str: str,
     dex: dex,
     con: con,
     intel: intel,
     wis: wis,
     cha: cha,
     size: size,
     speed: speed,
     armor_class: armor_class,
     notes: notes
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Half-elf saved");
});
}

function RaceHalfOrc(name, str,dex,con,intel,wis,cha, size,speed, armor_class, notes) {
db.users.save({
     name: name,
     str: str,
     dex: dex,
     con: con,
     intel: intel,
     wis: wis,
     cha: cha,
     size: size,
     speed: speed,
     armor_class: armor_class,
     notes: notes
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Half-orc saved");
});
}

function RaceHalfling(name, str,dex,con,intel,wis,cha, size,speed, armor_class, notes) {
db.users.save({
     name: name,
     str: str,
     dex: dex,
     con: con,
     intel: intel,
     wis: wis,
     cha: cha,
     size: size,
     speed: speed,
     armor_class: armor_class,
     notes: notes
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Halfling saved");
});
}

function RaceGnome(name, str,dex,con,intel,wis,cha, size,speed, armor_class, notes) {
db.users.save({
     name: name,
     str: str,
     dex: dex,
     con: con,
     intel: intel,
     wis: wis,
     cha: cha,
     size: size,
     speed: speed,
     armor_class: armor_class,
     notes: notes
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Gnome saved");
});
}




//Class Skills


function BarbarianSkill(name, level, climb, craft, handle, intimidate, jump, listen, ride, survival, swim, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     climb: climb ,
     craft: craft,
     handle: handle,
     intimdate: intimidate,
     jump: jump,
     listen: listen,
     ride: ride,
     survival: survival,
     swim: swim,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}


function BardSkill(name, level, appraise, balance, bluff, climb, concentration, craft, decipher_script, diplomacy, disguise, escape_artist, gather_info, hide, jump, knowledge, listen, move_silently, perform, profession, sense_motive, sleight_of_hand, speak_language, spellcraft, swim, tumble, use_magic_device, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     appraise: appraise,
     balance: balance,
     bluff: bluff,
     climb: climb,
     concentration: concentration,
     craft: craft,
     decipher_script: decipher_script,
     diplomacy: diplomacy,
     disguise: disguise,
     escape_artist: escape_artist,
     gather_info: gather_info,
     hide: hide,
     jump: jump,
     knowledge: knowledge,
     listen: listen,
     move_silently: move_silently,
     perform: perform,
     profession: profession,
     sense_motive: sense_motive,
     sleight_of_hand: sleight_of_hand,
     speak_language: speak_language,
     spellcraft: spellcraft,
     swim: swim,
     tumble: tumble,
     use_magic_device: use_magic_device,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}


function ClericSkill(name, level, concentration, craft, diplomacy, heal, knowledge_arcana, knowledge_history, knowledge_religion, knowledge_planes, profession, spellcraft, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     concentration: concentration,
     craft: craft,
     diplomacy: diplomacy,
     heal: heal,
     knowledge_arcana: knowledge_arcana,
     knowledge_history: knowledge_history,
     knowledge_religion: knowledge_religion, 
     knowledge_planes: knowledge_planes,
     profession: profession,
     spellcraft: spellcraft,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}

function DruidSkill(name, level, concentration, craft, diplomacy, handle, heal, knowledge_nature, listen, profession, ride, spellcraft, spot, survival, swim, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     concentration: concentration,
     craft: craft,
     diplomacy: diplomacy,
     handle: handle,
     heal: heal,
     knowledge_nature: knowledge_nature,
     listen: listen,
     profession: profession,
     ride: ride,
     spellcraft: spellcraft,
     spot: spot,
     survival: survival,
     swim: swim,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}

function FighterSkill(name, level, climb, craft, handle, intimidate, jump, ride, swim, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     climb: climb ,
     craft: craft,
     handle: handle,
     intimdate: intimidate,
     jump: jump,
     ride: ride,
     swim: swim,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}

function MonkSkill(name, level, balance, climb, concentration, craft, diplomacy, escape_artist, knowledge_arcana, knowledge_religion, listen, move_silently, perform, profession, sense_motive, spot, swim, tumble, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     balance: balance,
     climb: climb,
     concentration: concentration,
     craft: craft,
     diplomacy: diplomacy,
     escape_artist: escape_artist,
     knowledge_arcana: knowledge_arcana,
     knowlege_religion: knowledge_religion,
     listen: listen,
     move_silently: move_silently,
     perform: perform,
     profession: profession,
     sense_motive: sense_motive,
     spot: spot,
     swim: swim,
     tumble: tumble,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}

function PaladinSkill(name, level, concentration, craft, diplomacy, handle, heal, knowledge_nobility_royalty, knowledge_religion, profession, ride, sense_motive, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     concentration: concentration,
     craft: craft,
     diplomacy: diplomacy,
     handle: handle,
     heal: heal,
     knowledge_nobility_royalty: knowledge_nobility_royalty,
     knowlege_religion: knowledge_religion,
     profession: profession,
     ride: ride,
     sense_motive: sense_motive,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}

function RangerSkill(name, level, climb, concentration, craft, handle, heal, hide, jump, knowledge_dungeoneering, knowledge_geography, knowledge_nature, listen, move_silently, profession, ride, search, spot, survival, swim, use_rope, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     climb: climb,
     concentration: concentration,
     craft: craft,
     handle: handle,
     heal: heal,
     hide: hide,
     jump: jump,
     knowledge_dungeoneering: knowledge_dungeoneering,
     knowledge_geography: knowledge_geography,
     knowlege_nature: knowledge_nature,
     listen: listen,
     move_silently: move_silently,
     profession: profession,
     ride: ride,
     search: search,
     spot: spot,
     survival: survival,
     swim: swim,
     use_rope: use_rope,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
will_save: will_save
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}

function RogueSkill(name, level, appraise, balance, bluff, climb, craft, decipher_script, diplomacy, disable_device, disguise, escape_artist, forgery, gather_info, hide, intimdate, jump, knowledge_local, listen, move_silently, open_lock, perform, profession, search, sense_motive, sleight_of_hand, spot, swim, tumble, use_magic_device, use_rope, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     appraise : appraise,
     balance: balance, 
     bluff: bluff, 
     climb: climb, 
     craft: craft, 
     decipher_script:  decipher_script, 
     diplomacy: diplomacy, 
     disable_device: disable_device, 
     disguise: disguise, 
     escsape_artist: escape_artist, 
     forgery: forgery,
     gather_info: gather_info,
     hide: hide, 
     intimidate: intimdate,
     jump: jump,
     knowledge_local: knowledge_local,
     listen: listen,
     move_silently: move_silently,
     open_lock: open_lock,
     perform: perform,
     profession: profession,
     search: search,
     sense_motive: sense_motive,
     sleight_of_hand: sleight_of_hand,
     spot: spot,
     swim: swim,
     tumble: tumble,
     use_magic_device: use_magic_device,
     use_rope: use_rope,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}

function SorcererSkill(name, level, bluff, concentration, craft, knowledge_arcana, profession, spellcraft, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     bluff: bluff,
     concentration: concentration,
     craft: craft,
     knowledge_arcana: knowledge_arcana, 
     profession: profession,
     spellcraft: spellcraft,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save     
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}

function WizardSkill(name, level, concentration, craft, decipher_script, knowledge_arcana, knowledge_architecture, knowledge_dungeoneering, knowledge_geography, knowledge_history, knowledge_local, knowledge_nobility_royalty, knowledge_religion, knowledge_planes, profession, spellcraft, base_attack_bonus, fort_save, ref_save, will_save) {
db.users.save({
     name: name,
     level: level,
     concentration: concentration,
     craft: craft,
     knowledge_arcana: knowledge_arcana,
     knowledge_architecture: knowledge_architecture,
     knowledge_dungeoneering: knowledge_dungeoneering,
     knowledge_geography: knowledge_geography,
     knowledge_history: knowledge_history,
     knowledge_local: knowledge_local,
     knowledge_nobility_royalty: knowledge_nobility_royalty,
     knowledge_religion: knowledge_religion,
     knowledge_planes: knowledge_planes,
     profession: profession,
     spellcraft: spellcraft,
     base_attack_bonus: base_attack_bonus, 
     fort_save: fort_save, 
     ref_save: ref_save, 
     will_save: will_save     
  }, function(err, saved) {
    if( err || !saved ){
     console.log(err); }
    else console.log("Level saved");
});
}



//Find calls

EasyFind2("Barbarian");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Bard");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Cleric");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Druid");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Fighter");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Monk");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Paladin");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Ranger");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Rogue");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Sorcerer");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Wizard");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

//Racial EasyFinds
EasyFind2("Human");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Dwarf");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Elf");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Half-elf");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}


EasyFind2("Half-orc");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}


EasyFind2("Halfling");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}

EasyFind2("Gnome");
function EasyFind2(whatyouwant){
db.users.find({getall: whatyouwant}, function(err, users) {
  if( err || !users) {console.log("Nothing found"); }
  else {
    users.forEach( function(cakemaker) {
        console.log(cakemaker);
   } );
  } 
});
}