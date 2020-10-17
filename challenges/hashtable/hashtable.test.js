'use strict';

const Hashtable = require('./hashtable.js');
let myHash = new Hashtable(1024);
myHash.add('Raghad' ,'Anees');
myHash.add('key1', 'value1');

describe('hashtable ....................', ()=> {
  it('Can hash a key ', () => {
    let myHash = new Hashtable(1024);
    expect(myHash.hash('raghad')).toEqual(769);
    
  });
  it('get(key) ', ()=> {
    expect(myHash.get('Raghad').head.value).toEqual( { 'Raghad': 'Anees' } );
  });

  it('get(key) not in the hash table', ()=> {
    expect(myHash.get('hi')).toEqual(null);
  });
    
  it('contains(key) in the hash table', ()=> {
    expect(myHash.contains('Raghad')).toEqual(true);
  });
  it('contains(key) not in the hash table', ()=> {
    expect(myHash.contains('hi')).toEqual(false);
  });
  

});
