class Weapon {
  constructor(name, attack, durability, range) {
  this.name = name;
  this.attack = attack;
  this.durability = durability;
  this.range = range;
  }
  
  set takeDamage(damage) {
    this.durability = durability - damage;

  }
  get takeDamage() {
    return this._durability
  }
  
 takeDamage(damage) {
   if(this.durability - damage < 0) {
        this.durability = 0;
   } else {
       this.durability = this.durability - damage
   }
 }

 getDamage() {
     if (this.durability == 'Infinity' || this.durability >= this.durability * 0.3) {
         return this.attack;
     } if (this.durability < this.durability * 0.3) {
         return this.attack / 2;
     } else {
         return 0;
     }
 }

  isBroken() {
    if (this.durability == 0) {
    return true;
    }
  }
}
  
class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);
    }
}
class Bow extends Weapon {
    constructor() {
        super('Лук', 10, 200, 3);
    }
}
class Sword extends Weapon {
    constructor() {
        super('Меч', 25, 500, 1);
    }
}
class Knife extends Weapon {
    constructor() {
        super('Нож', 5, 300, 1);
    }
}
class Stick extends Weapon {
    constructor() {
        super('Посох', 8, 300, 21);
    }
}
class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный Лук';
        this.attack = 15;
        this.range = 4;
    }
}
class Ax extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}
class StickOfStorm extends Stick {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

let arm1 = new Arm();
let bow1 = new Bow();
let sword1 = new Sword();
let knife1 = new Knife();
let stick1 = new Stick();
let longBow1 = new LongBow();
let ax1 = new Ax();
let stickOfStorm1 = new StickOfStorm();

arm1.takeDamage(20);
console.log(arm1.durability); 

bow1.takeDamage(20);
console.log(bow1.durability);

bow1.takeDamage(200);
console.log(bow1.durability); 

console.log(bow1.durability); 
console.log(bow1.getDamage()); 
console.log(arm1.durability); 
console.log(bow1.getDamage()); 
console.log(bow1.durability); 
console.log(bow1.isBroken()); 
console.log(arm1.durability); 
console.log(bow1.isBroken());
console.log(bow1.name); 
console.log(bow1.attack); 
console.log(bow1.range); 
