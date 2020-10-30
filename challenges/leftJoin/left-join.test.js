
'use strict';

const leftJoin = require ('./left-join');

let obj1 = {
  'fond': 'enamored',
  'wrath': 'anger',
  'diligent': 'employed',
  'outfit': 'garb',
  'guide': 'usher',
};

let obj2 = {
  'fond': 'averse',
  'wrath': 'delight',
  'diligent': 'idle',
  'guide': 'follow',
  'flow': 'jam',
};

let obj3 = {
  'fond': 'averse',
  'wrath': 'delight',
  'diligent': 'idle',
  'guide': 'follow',
  'flow': 'jam',
  'stuff': 'empty',
  'soft': 'hard',
};

it('should perform a left join when two objects are provided', () => {
  expect(leftJoin(obj1,obj2)).toStrictEqual(
    [
      [ 'fond', 'enamored', 'averse' ],
      [ 'wrath', 'anger', 'delight' ],
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ],
      [ 'guide', 'usher', 'follow' ] ,
    ]);
});

it('should perform a left join when the first obj contains more key value pairs than the second obj provided', () => {
  expect(leftJoin(obj3, obj1)).toStrictEqual(
    [ 
      [ 'fond', 'averse', 'enamored' ],
      [ 'wrath', 'delight', 'anger' ],
      [ 'diligent', 'idle', 'employed' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'flow', 'jam', null ],
      [ 'stuff', 'empty', null ],
      [ 'soft', 'hard', null ], 
    ]);
});