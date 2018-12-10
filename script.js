

function Weapon(title,physic,magic,minLevel,available){
  this.title= title ;
  this.physic= physic;
  this.magic = magic;
  this.minLevel= minLevel;
  this.available= available;
}
let zwaard = new Weapon("sword of truth",80,120,8,true);
let bijl = new Weapon("axe of Thor",120,80,12,false);
let scepter = new Weapon("sands of time",60,180,22,true);

let giveItem = function(){
  console.log(zwaard.title,zwaard.physic,zwaard.magic,zwaard.minLevel,zwaard.available);
  console.log(bijl.title,bijl.physic,bijl.magic,bijl.minLevel,bijl.available);
  console.log(scepter.title,scepter.physic,scepter.magic,scepter.minLevel,scepter.available);
}
/*deel 1 oefening shop*/
Weaponz = [zwaard,bijl,scepter];
for (var i = 0; i < Weaponz.length; i++) {
  if (Weaponz[i].available == true) {
    console.log(Weaponz[i].title);
  }
}
/*deel 2 oefening shop*/
for (var i=0; i<Weaponz.length;i++){
  if (Weaponz[i].minLevel>= 10) {
    console.log(Weaponz[i].title)
  }
}

/*-previous try-*/
/*giveItem();

let giveItem = function(){
  console.log(weaponz.available);
}*/


let zwaard = {
  title = "sword of truth",
  physic : 80,
  magic : 120,
  minLevel : 8,
  available : true,
}
let bijl = {
  title : "axe of Thor",
  physic : 120,
  magic : 80,
  minLevel : 12,
  available : true,
}
let scepter = {
  title = "sands of time",
  physic : 60,
  magic : 180,
  minLevel : 22,
  available : true,
}
for(let key in bijl,scepter,zwaard){                  // loop
        console.log( typeof key );          // displays the key type: String
        console.log( key );                 // displays each key of my object ("color", "feets"..)
        console.log( chair[key] );          // displays each value ("#FF0000", 4,...)
    }
