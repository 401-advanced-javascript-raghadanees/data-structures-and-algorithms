'use strict';

const AnimalShelter = require('./fifo-animal-shelter');

describe('fifo Tests', () => {

  it('enqueue() check if the user enter cat ', () => {
    const animalObj = new AnimalShelter();
    animalObj.enqueue('cat');

    expect(animalObj.front.value).toBe('cat');
  });

  it('enqueue() check if the user enter  dog', () => {
    const animalObj = new AnimalShelter();
    animalObj.enqueue('dog');
    expect(animalObj.front.value).toBe('dog');
  });

  it('enqueue() check if the user enter not a dog or cat ', () => {
    const animalObj = new AnimalShelter();
    expect(animalObj.enqueue('dock')).toBe('allowed only dogs and cats');
  });

  it('dequeue() check if the user enter cat ', () => {
    const animalObj = new AnimalShelter();
    animalObj.enqueue('cat');
    animalObj.dequeue('cat');

    expect(animalObj.front).toBe(null);
  });


  it('dequeue() check if the user enter dog ', () => {
    const animalObj = new AnimalShelter();
    animalObj.enqueue('dog');
    animalObj.dequeue('dog');

    expect(animalObj.rare).toBe(null);
  });


  it('dequeue() check if the user enter not a dog or cat ', () => {
    const animalObj = new AnimalShelter();
    expect(animalObj.dequeue('dock')).toBe('allowed only dogs and cats');
  });

});