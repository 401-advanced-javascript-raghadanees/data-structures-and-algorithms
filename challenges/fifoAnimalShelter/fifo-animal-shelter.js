class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
  }
}



class AnimalShelter {
  constructor() {
    this.front = null;
    this.rare = null;
    this.length = 0;
  }

  enqueue(value) {
    if (value === 'cat' || value === 'dog') {
      let newNode = new Node(value);
      if (this.front) { // if not empty 
        this.rare = newNode;
        this.front.previous = this.rare;

      } else {
        this.front = newNode;
        this.rare = newNode;

      }
      this.length++;
      return this;
    } else {
      return `allowed only dogs and cats`;
    }
  }

  isEmpty() {
    return this.length > 0 ? false : true;
  }
  dequeue(value) {
    if (value === 'cat' || value === 'dog') {

      if (this.isEmpty()) {
        throw new RangeError('quee is empty');
      }
      if (value === 'cat' && this.front.value !== 'cat') {
        return `the first animal is not cat`;
      }
      if (value === 'dog' && this.front.value !== 'dog') {
        return `the first animal is not dog`;
      }
      // console.log('****', this.front);
      if (!this.front.previous) { // if the node after the front is empty delete the front and rare
        let deleteValue = this.front.value;
        this.front = null;
        this.rare = null;
        return deleteValue;
      }
      let deleteValue = this.front.value;
      this.front = this.front.previous;
      this.length--;
      return deleteValue;
    } else {
      return `allowed only dogs and cats`;
    }

  }
}

const animalObj = new AnimalShelter();
// animalObj.enqueue('dog');
animalObj.enqueue('cat');
// animalObj.dequeue('aa');
console.log('>>>>>>>>', animalObj.dequeue('cat'));
console.log('caaaat', animalObj);


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