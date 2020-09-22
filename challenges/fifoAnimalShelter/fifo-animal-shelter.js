'use strict';

class AnimalShelter{
  constructor(){
    this.catArr = new Array();// or this.catArr = [];
    this.dogArr = new Array();
  }

  
  enqueue(anim){
   
    if( anim.type === 'cat' )
      {
        this.catArr.push(anim);
        console.log('this cat : ', anim);
      }
      
    else if( anim.type === 'dog' ){
      this.dogArr.push(anim);
    }
    else {
      return 'Not valid'; 
    }
    console.log('cats : ', this.catArr);
  } 

  // remove item from the front of the queue 
  dequeue(pref){
    console.log('AnimalShelter dequeue ');
    if(pref.type === 'cat'){
      let cat = this.catArr.shift();
      return cat;
    } else if(pref.type === 'dog'){
      let dog = this.dogArr.shift();
      return dog;
    } else {
      return null;
    }
  } 

} 

module.exports = AnimalShelter;

// let AS =new AnimalShelter ();
// AS.enqueue('dog');
// AS.enqueue('cat');
// AS.enqueue('dog');
// AS.dequeue('cat');
// console.log('AnimalShelter : ', AS.catArr);
// AS.enqueue('dog');
// AS.enqueue('duck');
// AS.enqueue('elephant');
// AS.dequeue('dog');