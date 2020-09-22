const Animal = require('./fifo-animal-shelter.js');

describe('Animal-shelter Module ..........', ()=>{
  it('enqueue()   >>> adding an animal  ', ()=>{
    let animal = new Animal();
    animal.enqueue({'type':'cat'});
    animal.enqueue({'type':'dog'});
    expect(animal.catArr).toEqual([{'type':'cat'}]);
    expect(animal.dogArr).toEqual([{'type':'dog'}]);

  });
  
  it('return an animal by using >>>>> dequeue() ', ()=>{
    let animal = new Animal();
    animal.enqueue({'type':'cat'});
    animal.enqueue({'type':'dog'});
    animal.enqueue({'type':'bird'});
    expect(animal.catArr.length).toEqual(1);
    expect(typeof(animal.dequeue('dog'))).toEqual('object');
    expect(animal.dequeue('bird')).toBeNull();
  });


});