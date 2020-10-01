'use strict';

const multiBracketValidation = require('./multi-bracket-validation');


describe('Multi Bracket module', () => {


  it(' when user input an open and close bracket  return true ', () => {


    expect(multiBracketValidation('{()}{}[]')).toBeTruthy();

  });

  it(' when user input a wrong open or close bracket return false ', () => {


    expect(multiBracketValidation('{(}]')).toBeFalsy();

  });


});