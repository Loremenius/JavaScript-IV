/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(object){
//     this.createdAt = object.createdAt;
//     this.name = object.name;
//     this.dimensions = {
//       length: object.dimensions.length,
//       width: object.dimensions.width,
//       height: object.dimensions.height
//     }
//   }
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`;
//   }
  
//   /*
//     === CharacterStats ===
//     * healthPoints
//     * takeDamage() // prototype method -> returns the string '<object name> took damage.'
//     * should inherit destroy() from GameObject's prototype
//   */
//   function CharacterStats(humanAttr){
//     GameObject.call(this,humanAttr);
//     this.healthPoints = humanAttr.healthPoints;
//   }
//   CharacterStats.prototype = new Object(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function(){
//     return `${this.name} took damage.`;
//   };
  
  
//   /*
//     === Humanoid (Having an appearance or character resembling that of a human.) ===
//     * team
//     * weapons
//     * language
//     * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//     * should inherit destroy() from GameObject through CharacterStats
//     * should inherit takeDamage() from CharacterStats
//   */
//    function Humanoid(charAttr){
//      CharacterStats.call(this,charAttr);
//      this.team = charAttr.team;
//      this.weapons = charAttr.weapons;
//      this.language = charAttr.language;
//    }
//    Humanoid.prototype = new Object(CharacterStats.prototype);
//    Humanoid.prototype.greet = function(){
//      return `${this.name} offers a greeting in ${this.language}`;
//    }
  

class GameObject{
    constructor(object){
        this.createdAt = object.createdAt;
        this.name = object.name;
        this.dimensions = {
            length: object.dimensions.length,
            width: object.dimensions.width,
            height: object.dimensions.height
        };
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject{
    constructor(humanAttr){
        super(humanAttr);
        this.healthPoints = humanAttr.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats{
    constructor(charAttr){
        super(charAttr);
        this.team = charAttr.team;
        this.weapons = charAttr.weapons;
        this.language = charAttr.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
//     function Hero(heroAttr){
//       Humanoid.call(this,heroAttr);
//       this.damage = heroAttr.damage;
//       this.callingCard = heroAttr.callingCard;
//       this.title = "Hero";
//     }
//   Hero.prototype = new Object(Humanoid.prototype);
//   Hero.prototype.attack = function(targetObj){
//     function getRandomInt(max) {
//       return Math.floor(Math.random() * Math.floor(max));
//     }
//   const attackDmg = getRandomInt(this.damage);
//   console.log(`${this.name} deals ${attackDmg} damage to the enemy!`)
//   targetObj.healthPoints = targetObj.healthPoints - attackDmg;
//   }
  
  
//     function Villain(villAttr){
//       Humanoid.call(this,villAttr);
//       this.damage = villAttr.damage;
//       this.callingCard = villAttr.callingCard
//       this.title = "Villain";
//     }
//     Villain.prototype = new Object(Humanoid.prototype);
//     Villain.prototype.attack = function(targetObj){
//       function getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//       }
//     const attackDmg = getRandomInt(this.damage);
//     console.log(`${this.name} deals ${attackDmg} damage to the enemy!`)
//     targetObj.healthPoints = targetObj.healthPoints - attackDmg;
//     }

class Hero extends Humanoid{
    constructor(heroAttr){
        super(heroAttr);
        this.damage = heroAttr.damage;
        this.callingCard = heroAttr.callingCard
        this.title = "Hero";
    }
    attack(targetObj){
        function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
        }
    const attackDmg = getRandomInt(this.damage);
    console.log(`${this.name} deals ${attackDmg} damage to the enemy!`)
    targetObj.healthPoints = targetObj.healthPoints - attackDmg;
    }
}

class Villain extends Humanoid{
    constructor(villAttr){
        super(villAttr);
        this.damage = villAttr.damage;
        this.callingCard = villAttr.callingCard
        this.title = "Villain";
    }
    attack(targetObj){
        function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
        }
    const attackDmg = getRandomInt(this.damage);
    console.log(`${this.name} deals ${attackDmg} damage to the enemy!`)
    targetObj.healthPoints = targetObj.healthPoints - attackDmg;
    }
}

  
    function Combat(Hero,Villain){
      // console.log(`A battle between the ${Hero.title} ${Hero.name} and the ${Villain.title} ${Villain.name} has begun!`);
      Hero.attack(Villain);
      Villain.attack(Hero);
      if(Villain.healthPoints <= 0){
        console.log(`The ${Villain.title} has been slain! As they die, the hero says "${Hero.callingCard}"`);
      }else if (Hero.healthPoints <= 0){
        console.log(`The ${Hero.title} has been slain! As they die, the villain says "${Villain.callingCard}"`);
    }else {
      Combat(Hero,Villain);
    }
  }
  
  const hero1 = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    damage:10,
    callingCard: "F.R.E.E. That spells FREE",
    healthPoints: 5,
    name: 'Jarry',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  
  const villain1 = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    damage:5,
    callingCard: "BAM",
    healthPoints: 10,
    name: 'Fern',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
    ],
    language: 'Common Tongue',
  });
  
  Combat(hero1,villain1);