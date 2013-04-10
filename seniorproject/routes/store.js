// our 'database'
var items = {
    Barbarian1:{name: 'Barbarian', level:1, climb:1, craft:1, handle_animal:1, intimidate:3, jump:2, listen:2, ride:2, survival:3, swim:1, base_attack_bonus:1, fort_save:2, ref_save:0, will_save:0, base_int:10, stat_points:16},
    Barbarian2:{name: 'Barbarian', level:2, climb:2, craft:1, handle_animal:2, intimidate:4, jump:2, listen:3, ride:2, survival:3, swim:1, base_attack_bonus:2, fort_save:3, ref_save:0, will_save:0, base_int:10, stat_points:20},
    Barbarian3:{name: 'Barbarian', level:3, climb:2, craft:1, handle_animal:2, intimidate:5, jump:3, listen:3, ride:2, survival:4, swim:2, base_attack_bonus:3, fort_save:3, ref_save:1, will_save:1, base_int:10, stat_points:24},
    Barbarian4:{name: 'Barbarian', level:4, climb:2, craft:1, handle_animal:3, intimidate:5, jump:3, listen:4, ride:3, survival:5, swim:2, base_attack_bonus:4, fort_save:4, ref_save:1, will_save:1, base_int:10, stat_points:28},
    
    Bard1:{name: 'Bard', level:1, appraise:1, balance:1, bluff:2, climb:1, concentration:2, craft:1, decipher_script:1, diplomacy:1, disguise:1,  escape_artist:1, gather_information:1, hide:1, jump:1, knowledge:2, listen:1, move_silently:1, perform:1, profession:2, sense_motive:2, sleight_of_hand:2, speak_language:1, spellcraft:1, swim:1, tumble:1, use_magic_device: 2, base_attack_bonus:0, fort_save:0, ref_save:2, will_save:2, base_int:14, stat_points:32},
    Bard2:{name: 'Bard', level:2, appraise:2, balance:1, bluff:2, climb:1, concentration:2, craft:1, decipher_script:2, diplomacy:2, disguise:1,  escape_artist:2, gather_information:2, hide:1, jump:1, knowledge:2, listen:1, move_silently:2, perform:2, profession:2, sense_motive:2, sleight_of_hand:2, speak_language:1, spellcraft:2, swim:1, tumble:1, use_magic_device: 2, base_attack_bonus:1, fort_save:0, ref_save:3, will_save:3, base_int:14, stat_points:40},
    Bard3:{name: 'Bard', level:3, appraise:2, balance:1, bluff:2, climb:1, concentration:3, craft:1, decipher_script:2, diplomacy:2, disguise:2,  escape_artist:2, gather_information:2, hide:2, jump:1, knowledge:2, listen:2, move_silently:2, perform:3, profession:2, sense_motive:2, sleight_of_hand:3, speak_language:2, spellcraft:2, swim:1, tumble:2, use_magic_device: 2, base_attack_bonus:2, fort_save:1, ref_save:3, will_save:3, base_int:14, stat_points:48},
    Bard4:{name: 'Bard', level:4, appraise:2, balance:2, bluff:2, climb:2, concentration:4, craft:1, decipher_script:2, diplomacy:2, disguise:2,  escape_artist:3, gather_information:2, hide:2, jump:2, knowledge:2, listen:2, move_silently:2, perform:4, profession:2, sense_motive:2, sleight_of_hand:3, speak_language:2, spellcraft:3, swim:1, tumble:2, use_magic_device: 3, base_attack_bonus:3, fort_save:1, ref_save:4, will_save:4, base_int:14, stat_points:56},
    
    Cleric1:{name: 'Cleric', level:1, concentration:1, craft:1, diplomacy:1, heal:2, knowledge_arcana:1, knowledge_history:2, knowledge_religion: 1, knowledge_planes:1, profession:1, spellcraft:1, base_attack_bonus:0 , fort_save:2 , ref_save:0 , will_save:2, base_int:13, stat_points:12},
    Cleric2:{name: 'Cleric', level:2, concentration:2, craft:1, diplomacy:2, heal:2, knowledge_arcana:2, knowledge_history:2, knowledge_religion: 1, knowledge_planes:1, profession:1, spellcraft:1, base_attack_bonus:1 , fort_save:2 , ref_save:0 , will_save:3, base_int:13, stat_points:15},
    Cleric3:{name: 'Cleric', level:3, concentration:2, craft:1, diplomacy:2, heal:2, knowledge_arcana:2, knowledge_history:2, knowledge_religion: 2, knowledge_planes:2, profession:1, spellcraft:2, base_attack_bonus:2 , fort_save:3 , ref_save:1 , will_save:3, base_int:13, stat_points:18},
    Cleric4:{name: 'Cleric', level:4, concentration:2, craft:1, diplomacy:2, heal:3, knowledge_arcana:2, knowledge_history:2, knowledge_religion: 2, knowledge_planes:2, profession:2, spellcraft:3, base_attack_bonus:3 , fort_save:4 , ref_save:1 , will_save:4, base_int:13, stat_points:21},
   
    Druid1:{name: 'Druid', level:1, concentration:2, craft:1, diplomacy:1, handle_animal:2, heal:2, knowledge_nature:1, listen:2, profession:1, ride:2, spellcraft:1, spot:2, survival:2, swim:1, base_attack_bonus:0, fort_save:2, ref_save:0, will_save:2, base_int:13, stat_points:20},
    Druid2:{name: 'Druid', level:2, concentration:2, craft:1, diplomacy:2, handle_animal:2, heal:3, knowledge_nature:2, listen:2, profession:1, ride:2, spellcraft:2, spot:2, survival:3, swim:1, base_attack_bonus:1, fort_save:3, ref_save:0, will_save:3, base_int:13, stat_points:25},
    Druid3:{name: 'Druid', level:3, concentration:3, craft:1, diplomacy:2, handle_animal:2, heal:3, knowledge_nature:2, listen:3, profession:1, ride:3, spellcraft:2, spot:3, survival:3, swim:2, base_attack_bonus:2, fort_save:3, ref_save:1, will_save:3, base_int:13, stat_points:30},
    Druid4:{name: 'Druid', level:4, concentration:3, craft:1, diplomacy:3, handle_animal:3, heal:4, knowledge_nature:3, listen:3, profession:1, ride:3, spellcraft:2, spot:3, survival:4, swim:2, base_attack_bonus:3, fort_save:4, ref_save:1, will_save:4, base_int:13, stat_points:35},
    
    Fighter1:{name: 'Fighter', level:1, climb:1, craft:1, handle_animal:1, intimidate:2, jump:1, ride:1 , swim: 1, base_attack_bonus:1 , fort_save:2 , ref_save:0 , will_save:0, base_int:10, stat_points:8},
    Fighter2:{name: 'Fighter', level:2, climb:2, craft:1, handle_animal:2, intimidate:2, jump:1, ride:1 , swim: 1, base_attack_bonus:2 , fort_save:3 , ref_save:0 , will_save:0, base_int:10, stat_points:10},
    Fighter3:{name: 'Fighter', level:3, climb:2, craft:1, handle_animal:2, intimidate:2, jump:2, ride:2 , swim: 1, base_attack_bonus:3 , fort_save:3 , ref_save:1 , will_save:1, base_int:10, stat_points:12},
    Fighter4:{name: 'Fighter', level:4, climb:1, craft:1, handle_animal:3, intimidate:3, jump:2, ride:2 , swim: 1, base_attack_bonus:4 , fort_save:4 , ref_save:1 , will_save:1, base_int:10, stat_points:14},
    
    Monk1:{name: 'Monk', level:1, balance:1, climb:1, concentration:2, craft:1, diplomacy:1, escape_artist:1, hide:1, jump:2, knowledge_arcana:1, knowledge_religion:1, listen:1, move_silently:1, perform:1, profession:1, sense_motive:1, spot:1, swim: 1, tumble:1, base_attack_bonus:0, fort_save:2, ref_save:2, will_save:2, base_int:13, stat_points:20},
    Monk2:{name: 'Monk', level:2, balance:2, climb:2, concentration:2, craft:1, diplomacy:1, escape_artist:1, hide:1, jump:2, knowledge_arcana:1, knowledge_religion:1, listen:1, move_silently:2, perform:1, profession:1, sense_motive:2, spot:1, swim: 1, tumble:2, base_attack_bonus:1, fort_save:3, ref_save:3, will_save:3, base_int:13, stat_points:25},
    Monk3:{name: 'Monk', level:3, balance:2, climb:2, concentration:2, craft:1, diplomacy:2, escape_artist:2, hide:1, jump:2, knowledge_arcana:1, knowledge_religion:2, listen:2, move_silently:2, perform:1, profession:1, sense_motive:2, spot:2, swim: 1, tumble:2, base_attack_bonus:2, fort_save:3, ref_save:3, will_save:3, base_int:13, stat_points:30},
    Monk4:{name: 'Monk', level:4, balance:3, climb:2, concentration:3, craft:1, diplomacy:2, escape_artist:2, hide:1, jump:2, knowledge_arcana:2, knowledge_religion:2, listen:2, move_silently:2, perform:2, profession:1, sense_motive:2, spot:2, swim: 2, tumble:2, base_attack_bonus:3, fort_save:4, ref_save:4, will_save:4, base_int:13, stat_points:35},

    Paladin1:{name: 'Paladin', level:1, concentration:2, craft:1, diplomacy:2, handle_animal:1, heal:2, knowledge_nobility_and_royalty:2, knowledge_religion:2, profession:1, ride:1, sense_motive:2, base_attack_bonus:1, fort_save:2, ref_save:0, will_save:0, base_int:14, stat_points:16},
    Paladin2:{name: 'Paladin', level:2, concentration:2, craft:1, diplomacy:3, handle_animal:2, heal:3, knowledge_nobility_and_royalty:2, knowledge_religion:2, profession:1, ride:2, sense_motive:2, base_attack_bonus:2, fort_save:3, ref_save:0, will_save:0, base_int:14, stat_points:20},
    Paladin3:{name: 'Paladin', level:3, concentration:1, craft:1, diplomacy:3, handle_animal:2, heal:4, knowledge_nobility_and_royalty:2, knowledge_religion:3, profession:1, ride:2, sense_motive:3, base_attack_bonus:3, fort_save:3, ref_save:1, will_save:1, base_int:14, stat_points:24},
    Paladin4:{name: 'Paladin', level:4, concentration:1, craft:1, diplomacy:4, handle_animal:3, heal:5, knowledge_nobility_and_royalty:3, knowledge_religion:3, profession:1, ride:2, sense_motive:3, base_attack_bonus:4, fort_save:4, ref_save:1, will_save:1, base_int:14, stat_points:28},
     
    Ranger1:{name: 'Ranger', level:1, climb:1, concentration:2, craft:1, handle_animal:2, heal:2, hide:2, jump:1, knowledge_dungeoneering:1, knowledge_geography:1, knowledge_nature:2, listen:2, move_silently:1, profession:1, ride:1, search:1, spot:2, survival:2, swim:1, use_rope:2, base_attack_bonus:0, fort_save:2, ref_save:0, will_save:2, base_int:13, stat_points:28},
    Ranger2:{name: 'Ranger', level:2, climb:2, concentration:2, craft:1, handle_animal:2, heal:2, hide:2, jump:2, knowledge_dungeoneering:2, knowledge_geography:2, knowledge_nature:2, listen:2, move_silently:2, profession:1, ride:2, search:2, spot:2, survival:2, swim:1, use_rope:2, base_attack_bonus:1, fort_save:3, ref_save:0, will_save:3, base_int:13, stat_points:35},
    Ranger3:{name: 'Ranger', level:3, climb:2, concentration:3, craft:1, handle_animal:2, heal:3, hide:2, jump:2, knowledge_dungeoneering:2, knowledge_geography:2, knowledge_nature:2, listen:3, move_silently:3, profession:1, ride:2, search:3, spot:3, survival:3, swim:1, use_rope:2, base_attack_bonus:2, fort_save:3, ref_save:1, will_save:3, base_int:13, stat_points:42},
    Ranger4:{name: 'Ranger', level:4, climb:3, concentration:3, craft:1, handle_animal:3, heal:3, hide:3, jump:3, knowledge_dungeoneering:2, knowledge_geography:2, knowledge_nature:3, listen:3, move_silently:3, profession:1, ride:3, search:3, spot:3, survival:3, swim:2, use_rope:2, base_attack_bonus:3, fort_save:4, ref_save:1, will_save:4, base_int:13, stat_points:49},
    
    Rogue1:{name: 'Rogue', level:1, appraise:1, balance:2, bluff:1, climb:2, craft:1, decipher_script:1, diplomacy:1, disable_device:2, disguise:2, escsape_artist:2, forgery:2, gather_information:1, hide:2, intimidate:1, jump:1, knowledge_local:1, listen:1, move_silently:1, open_lock:2, perform:1, profession:1, search:1, sense_motive:2, sleight_of_hand:2, spot:2, swim:1, tumble:1, use_magic_device: 1, use_rope: 1, base_attack_bonus:0, fort_save:2, ref_save:0, will_save:2, base_int:14, stat_points:40},
    Rogue2:{name: 'Rogue', level:2, appraise:2, balance:2, bluff:2, climb:2, craft:1, decipher_script:1, diplomacy:1, disable_device:2, disguise:2, escsape_artist:2, forgery:2, gather_information:1, hide:2, intimidate:1, jump:2, knowledge_local:2, listen:2, move_silently:2, open_lock:2, perform:1, profession:1, search:2, sense_motive:2, sleight_of_hand:2, spot:2, swim:1, tumble:2, use_magic_device: 2, use_rope: 2, base_attack_bonus:1, fort_save:3, ref_save:0, will_save:3, base_int:14, stat_points:50},
    Rogue3:{name: 'Rogue', level:3, appraise:2, balance:2, bluff:3, climb:3, craft:1, decipher_script:2, diplomacy:2, disable_device:2, disguise:2, escsape_artist:2, forgery:2, gather_information:1, hide:2, intimidate:1, jump:2, knowledge_local:2, listen:2, move_silently:2, open_lock:3, perform:1, profession:1, search:2, sense_motive:3, sleight_of_hand:3, spot:3, swim:1, tumble:2, use_magic_device: 3, use_rope: 3, base_attack_bonus:2, fort_save:3, ref_save:1, will_save:3, base_int:14, stat_points:60},
    Rogue4:{name: 'Rogue', level:4, appraise:2, balance:2, bluff:3, climb:3, craft:1, decipher_script:2, diplomacy:2, disable_device:3, disguise:3, escsape_artist:3, forgery:2, gather_information:3, hide:3, intimidate:2, jump:2, knowledge_local:2, listen:2, move_silently:3, open_lock:3, perform:2, profession:1, search:2, sense_motive:3, sleight_of_hand:3, spot:3, swim:2, tumble:2, use_magic_device: 3, use_rope: 3, base_attack_bonus:3, fort_save:4, ref_save:1, will_save:4, base_int:14, stat_points:70},
    
    Sorcerer1:{name: 'Sorcerer', level:1, bluff:2, concentration:2, craft:1, knowledge_arcana:2, profession:2, spellcraft:3, base_attack_bonus:0, fort_save:0, ref_save:2, will_save:2, base_int:13, stat_points:12},
    Sorcerer2:{name: 'Sorcerer', level:2, bluff:3, concentration:3, craft:1, knowledge_arcana:2, profession:2, spellcraft:4, base_attack_bonus:1, fort_save:0, ref_save:3, will_save:3, base_int:13, stat_points:15},
    Sorcerer3:{name: 'Sorcerer', level:3, bluff:4, concentration:4, craft:1, knowledge_arcana:3, profession:2, spellcraft:4, base_attack_bonus:2, fort_save:1, ref_save:3, will_save:3, base_int:13, stat_points:18},
    Sorcerer4:{name: 'Sorcerer', level:4, bluff:4, concentration:5, craft:1, knowledge_arcana:4, profession:2, spellcraft:5, base_attack_bonus:3, fort_save:1, ref_save:4, will_save:4, base_int:13, stat_points:21},
    
    Wizard1:{name: 'Wizard', level:1, concentration:2, craft:1, decipher_script:1, knowledge_arcana:1, knowledge_architecture_and_engineering:1, knowledge_dungeoneering: 1, knowledge_geography:1, knowledge_history: 1, knowledge_local: 1, knowledge_nobility_and_royalty:1, knowledge_religion:1, knowledge_planes:1, profession:1, spellcraft:2, base_attack_bonus:0, fort_save:0, ref_save:2, will_save:2, base_int:12, stat_points:16},
    Wizard2:{name: 'Wizard', level:2, concentration:2, craft:1, decipher_script:2, knowledge_arcana:2, knowledge_architecture_and_engineering:1, knowledge_dungeoneering: 1, knowledge_geography:1, knowledge_history: 1, knowledge_local: 1, knowledge_nobility_and_royalty:2, knowledge_religion:1, knowledge_planes:2, profession:1, spellcraft:2, base_attack_bonus:1, fort_save:0, ref_save:3, will_save:3, base_int:12, stat_points:20},
    Wizard3:{name: 'Wizard', level:3, concentration:3, craft:1, decipher_script:2, knowledge_arcana:2, knowledge_architecture_and_engineering:2, knowledge_dungeoneering: 1, knowledge_geography:2, knowledge_history: 1, knowledge_local: 1, knowledge_nobility_and_royalty:2, knowledge_religion:1, knowledge_planes:2, profession:1, spellcraft:3, base_attack_bonus:2, fort_save:1, ref_save:3, will_save:3, base_int:12, stat_points:24},
    Wizard4:{name: 'Wizard', level:4, concentration:3, craft:1, decipher_script:2, knowledge_arcana:2, knowledge_architecture_and_engineering:2, knowledge_dungeoneering: 2, knowledge_geography:2, knowledge_history: 2, knowledge_local: 2, knowledge_nobility_and_royalty:2, knowledge_religion:2, knowledge_planes:2, profession:1, spellcraft:3, base_attack_bonus:3, fort_save:1, ref_save:4, will_save:4, base_int:12, stat_points:28}
    

};

var races = {
    Dwarf:{racename: 'Dwarf', strength:17, dexterity:11, constitution:14, intelligence:10, wisdom:10, charisma:10, sizes:'Medium', speed:20, ac:10, statadjust:'+2 con, -2 charisma', skilladjust:'+2 search on stone, +2 racial saving throw against poison, +2 racial saving throw against spell/spell-like'},
    Elf:{racename: 'Elf', strength:10, dexterity:13, constitution:14, intelligence:17, wisdom:16, charisma:16, sizes:'Medium', speed:30, ac:13, statadjust:'+2 dex, -2 con', skilladjust:'Immune to sleep spells, +2 racial saving throw against enchantment spells/effects, +2 racial bonus on listen, search and spot'},
    Gnome:{racename: 'Gnome', strength:12, dexterity:15, constitution:14, intelligence:14, wisdom:12, charisma:15, sizes:'Small', speed:20, ac:13, statadjust:'+2 con, -2 str', skilladjust:'Immune to sleep spells, +2 racial saving throw against enchantment spells/effects, +2 racial bonus on listen, search and spot'},
    Human:{racename: 'Human', strength:15, dexterity:14, constitution:15, intelligence:13, wisdom:17, charisma:26, sizes:'Medium', speed:30, ac:12, statadjust:'None',  skilladjust:'+4 first level, +1 every level'},
    HalfElf:{racename: 'Half-Elf', strength:11, dexterity:16, constitution:15, intelligence:13, wisdom:14, charisma:12, sizes:'Medium', speed:30, ac:13, statadjust:'None', skilladjust:'immunity to sleep spells, +2 racial saving throw against enchantment spells/effects, +1 racial bonus on listen, search, spot, +2 racial bonus on diplomacy/gather information'},
    HalfOrc:{racename: 'Half-Orc', strength:16, dexterity:15, constitution:16, intelligence:10, wisdom:14, charisma:10, sizes:'Medium', speed:30, ac:12, statadjust:'+2 str, -2 int, -2 char', skilladjust:'None'},
    Halfling:{racename: 'Halfling', strength:11, dexterity:17, constitution:14, intelligence:14, wisdom:13, charisma:14, sizes:'Small', speed:20, ac:14, statadjust:'+2 dex, -2 str', skilladjust:'+1 size bonus on attack roll, +1 on size bonus armor class, +4 size bonus on Hide checks, +2 racial bonus climb, jump, movie silently, +1 on all saving throws, +2 Listen'}

};

// handler for homepage
exports.home = function(req, res) {
    // if user is not logged in, ask them to login
    //Title for website!
    if (typeof req.session.username == 'undefined') res.render('home', { title: 'Character Sheet Character Archetype Wizard'});
    // if user is logged in already, take them straight to the items list
    else res.redirect('/select');
};

// handler for form submitted from homepage
exports.home_post_handler = function(req, res) {
    // if the username is not submitted, give it a default of "Anonymous"
    username = req.body.username || 'Anonymous';
    // store the username as a session variable
    req.session.username = username;
    // redirect the user to homepage
    res.redirect('/');
};
console.log('about to export');
exports.select = function(req, res) {
     if (typeof req.session.username == 'undefined') res.redirect('/');
    //Title for website!
    
    else res.render('select', { title: 'Character Sheet Character Archetype Wizard - select', username: req.session.username, items:items, races:races });
}

//add new export function here! must be called the same thing as the second argument/name

// handler for displaying the items
exports.items = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    if (typeof req.session.username == 'undefined') res.redirect('/');
    //Title for website!
    
    else res.render('items', { title: 'Character Sheet Character Archetype Wizard - Items', username: req.session.username, items:items });
};




// handler for displaying individual items
exports.item = function(req, res) {
    // users must be logged in to see the character stats and races
    if (typeof req.session.username == 'undefined') res.redirect('/');
    else {
        var name = items[req.params.id].name;
        var level = items[req.params.id].level;
        var appraise = items[req.params.id].appraise;
        var balance = items[req.params.id].balance;
        var bluff = items[req.params.id].bluff;
        var climb = items[req.params.id].climb;
        var concentration = items[req.params.id].concentration;
        var craft = items[req.params.id].craft;
        var decipher_script = items[req.params.id].decipher_script;
        var diplomacy = items[req.params.id].diplomacy;
        var disable_device = items[req.params.id].disable_device;
        var disguise = items[req.params.id].disguise;
        var escape_artist = items[req.params.id].escape_artist;
        var forgery = items[req.params.id].forgery;
        var gather_information = items[req.params.id].gather_information;
        var handle_animal = items[req.params.id].handle_animal;
        var heal = items[req.params.id].heal;
        var hide = items[req.params.id].hide;
        var intimidate = items[req.params.id].intimidate;
        var jump = items[req.params.id].jump;
        var knowledge_arcana = items[req.params.id].knowledge_arcana;
        var knowledge_architecture_and_engineering = items[req.params.id].knowledge_architecture_and_engineering;
        var knowledge_dungeoneering = items[req.params.id].knowledge_dungeoneering;
        var knowledge_geography = items[req.params.id].knowledge_geography;
        var knowledge_history = items[req.params.id].knowledge_history;
        var knowledge_local = items[req.params.id].knowledge_local;
        var knowledge_nature = items[req.params.id].knowledge_nature;
        var knowledge_nobility_and_royalty = items[req.params.id].knowledge_nobility_and_royalty;
        var knowledge_religion = items[req.params.id].knowledge_religion;
        var knowledge_planes = items[req.params.id].knowledge_planes;
        var listen = items[req.params.id].listen;
        var move_silently = items[req.params.id].move_silently;
        var open_lock = items[req.params.id].open_lock;
        var perform = items[req.params.id].perform;
        var profession = items[req.params.id].profession
        var ride = items[req.params.id].ride;
        var search = items[req.params.id].search;
        var sense_motive = items[req.params.id].sense_motive;
        var sleight_of_hand = items[req.params.id].sleight_of_hand;
        var spellcraft = items[req.params.id].spellcraft;
        var spot = items[req.params.id].spot;
        var survival = items[req.params.id].survival;
        var swim = items[req.params.id].swim;
        var tumble = items[req.params.id].tumble;
        var use_magic_device = items[req.params.id].use_magic_device;
        var use_rope = items[req.params.id].use_rope;
        var base_attack_bonus = items[req.params.id].base_attack_bonus;
        var fort_save = items[req.params.id].fort_save;
        var ref_save = items[req.params.id].ref_save;
        var will_save = items[req.params.id].will_save;
        var stat_points = items[req.params.id].stat_points;
        var base_int = items[req.params.id].base_int

        //Title for website!
        res.render('item', { title: 'Character Sheet Character Archetype Wizard - ' + name, username: req.session.username, name:name, level:level, appraise:appraise, balance:balance, bluff:bluff, climb:climb, concentration:concentration, craft:craft, decipher_script:decipher_script, diplomacy:diplomacy, disable_device:disable_device, disguise:disguise, escape_artist:escape_artist, forgery:forgery, gather_information:gather_information, handle_animal:handle_animal, heal:heal, hide:hide, intimidate:intimidate, jump:jump, knowledge_arcana:knowledge_arcana, knowledge_architecture_and_engineering:knowledge_architecture_and_engineering, knowledge_dungeoneering:knowledge_dungeoneering, knowledge_geography:knowledge_geography, knowledge_history:knowledge_history, knowledge_local:knowledge_local, knowledge_nature:knowledge_nature, knowledge_nobility_and_royalty:knowledge_nobility_and_royalty, knowledge_religion:knowledge_religion, knowledge_planes:knowledge_planes, listen:listen, move_silently:move_silently, open_lock:open_lock, perform:perform, profession:profession, ride:ride, search:search, sense_motive:sense_motive, sleight_of_hand:sleight_of_hand, spellcraft:spellcraft, spot:spot, survival:survival, swim:swim, tumble:tumble, use_magic_device:use_magic_device, use_rope:use_rope, base_attack_bonus:base_attack_bonus, fort_save:fort_save, ref_save:ref_save, will_save:will_save, base_int:base_int, stat_points:stat_points });
    }
};

exports.races = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    if (typeof req.session.username == 'undefined') res.redirect('/');
    //Title for website!
    
    else res.render('races', { title: 'Character Sheet Character Archetype Wizard - Races', username: req.session.username, races:races });
};


// handler for displaying individual items
exports.race = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    if (typeof req.session.username == 'undefined') res.redirect('/');
    else {
        var racename = races[req.params.id].racename;
        var strength = races[req.params.id].strength;
        var dexterity = races[req.params.id].dexterity;
        var constitution = races[req.params.id].constitution;
        var intelligence = races[req.params.id].intelligence;
        var wisdom = races[req.params.id].wisdom;
        var charisma = races[req.params.id].charisma;
        var sizes = races[req.params.id].sizes;
        var speed = races[req.params.id].speed;
        var statadjust = races[req.params.id].statadjust;
        var skilladjust = races[req.params.id].skilladjust;
        var ac = races[req.params.id].ac
        //title for website
        res.render('race', {title: 'Character Sheet Character Archetype Wizard - ' + racename, username: req.session.username, racename:racename, strength:strength, dexterity:dexterity, constitution:constitution, intelligence:intelligence, wisdom:wisdom, charisma:charisma, sizes:sizes, speed:speed, statadjust:statadjust, skilladjust:skilladjust, ac:ac});
    }
};



exports.stats = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    if (typeof req.session.username == 'undefined') res.redirect('/');
    //Title for website!
    
    else res.render('stats', { title: 'Character Sheet Character Archetype Wizard - Items', username: req.session.username, items:items });
};




// handler for displaying individual items
exports.stat = function(req, res) {
    // users must be logged in to see the character stats and races
    if (typeof req.session.username == 'undefined') res.redirect('/');
    else {
        var name = items[req.params.id].name;
        var level = items[req.params.id].level;
        var appraise = items[req.params.id].appraise;
        var balance = items[req.params.id].balance;
        var bluff = items[req.params.id].bluff;
        var climb = items[req.params.id].climb;
        var concentration = items[req.params.id].concentration;
        var craft = items[req.params.id].craft;
        var decipher_script = items[req.params.id].decipher_script;
        var diplomacy = items[req.params.id].diplomacy;
        var disable_device = items[req.params.id].disable_device;
        var disguise = items[req.params.id].disguise;
        var escape_artist = items[req.params.id].escape_artist;
        var forgery = items[req.params.id].forgery;
        var gather_information = items[req.params.id].gather_information;
        var handle_animal = items[req.params.id].handle_animal;
        var heal = items[req.params.id].heal;
        var hide = items[req.params.id].hide;
        var intimidate = items[req.params.id].intimidate;
        var jump = items[req.params.id].jump;
        var knowledge_arcana = items[req.params.id].knowledge_arcana;
        var knowledge_architecture_and_engineering = items[req.params.id].knowledge_architecture_and_engineering;
        var knowledge_dungeoneering = items[req.params.id].knowledge_dungeoneering;
        var knowledge_geography = items[req.params.id].knowledge_geography;
        var knowledge_history = items[req.params.id].knowledge_history;
        var knowledge_local = items[req.params.id].knowledge_local;
        var knowledge_nature = items[req.params.id].knowledge_nature;
        var knowledge_nobility_and_royalty = items[req.params.id].knowledge_nobility_and_royalty;
        var knowledge_religion = items[req.params.id].knowledge_religion;
        var knowledge_planes = items[req.params.id].knowledge_planes;
        var listen = items[req.params.id].listen;
        var move_silently = items[req.params.id].move_silently;
        var open_lock = items[req.params.id].open_lock;
        var perform = items[req.params.id].perform;
        var profession = items[req.params.id].profession
        var ride = items[req.params.id].ride;
        var search = items[req.params.id].search;
        var sense_motive = items[req.params.id].sense_motive;
        var sleight_of_hand = items[req.params.id].sleight_of_hand;
        var spellcraft = items[req.params.id].spellcraft;
        var spot = items[req.params.id].spot;
        var survival = items[req.params.id].survival;
        var swim = items[req.params.id].swim;
        var tumble = items[req.params.id].tumble;
        var use_magic_device = items[req.params.id].use_magic_device;
        var use_rope = items[req.params.id].use_rope;
        var base_attack_bonus = items[req.params.id].base_attack_bonus;
        var fort_save = items[req.params.id].fort_save;
        var ref_save = items[req.params.id].ref_save;
        var will_save = items[req.params.id].will_save;
        var stat_points = items[req.params.id].stat_points;
        var base_int = items[req.params.id].base_int

        //Title for website!
        res.render('stat', { title: 'Character Sheet Character Archetype Wizard - ' + name, username: req.session.username, name:name, level:level, appraise:appraise, balance:balance, bluff:bluff, climb:climb, concentration:concentration, craft:craft, decipher_script:decipher_script, diplomacy:diplomacy, disable_device:disable_device, disguise:disguise, escape_artist:escape_artist, forgery:forgery, gather_information:gather_information, handle_animal:handle_animal, heal:heal, hide:hide, intimidate:intimidate, jump:jump, knowledge_arcana:knowledge_arcana, knowledge_architecture_and_engineering:knowledge_architecture_and_engineering, knowledge_dungeoneering:knowledge_dungeoneering, knowledge_geography:knowledge_geography, knowledge_history:knowledge_history, knowledge_local:knowledge_local, knowledge_nature:knowledge_nature, knowledge_nobility_and_royalty:knowledge_nobility_and_royalty, knowledge_religion:knowledge_religion, knowledge_planes:knowledge_planes, listen:listen, move_silently:move_silently, open_lock:open_lock, perform:perform, profession:profession, ride:ride, search:search, sense_motive:sense_motive, sleight_of_hand:sleight_of_hand, spellcraft:spellcraft, spot:spot, survival:survival, swim:swim, tumble:tumble, use_magic_device:use_magic_device, use_rope:use_rope, base_attack_bonus:base_attack_bonus, fort_save:fort_save, ref_save:ref_save, will_save:will_save, base_int:base_int, stat_points:stat_points });
    }
};




// handler for showing simple pages
exports.page = function(req, res) {
    var name = req.query.name;
    var contents = {
        //about: 'Ninja Store sells the coolest ninja stuff in the world. Anyone shopping here is cool.',
        //contact: 'You can contact us at <address><strong>Ninja Store</strong>,<br>1, World Ninja Headquarters,<br>Ninja Avenue,<br>NIN80B7-JP,<br>Nihongo.</address>'
    };
    res.render('Select', { title: 'Character Sheet Character Archetype Wizard - ' + name, username: req.session.username, content:contents[name] });
};
