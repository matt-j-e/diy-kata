const { joinNames } = require("../src");

const arr1 = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}];
const arr2 = [
  {name: 'Hollie'}, 
  {name: 'Holly'}, 
  {name: 'Secret James'},
  {name: 'Bowling Alley James'},
  {name: 'Jenny'},
  {name: 'Jo'},
  {name: 'Kallum'},
  {name: 'Matt'},
  {name: 'Miguel'},
  {name: 'Nina'},
  {name: 'Peechaya'}
];

// construct arr3 - an array of objects each with name: of an uppercase alpha character
const a2z = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const arr3 = [];
a2z.split('').map(l => arr3.push({name: l}));

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(arr1)).toBe('Bart, Lisa & Maggie');
    expect(joinNames(arr2)).toBe('Hollie, Holly, Secret James, Bowling Alley James, Jenny, Jo, Kallum, Matt, Miguel, Nina & Peechaya');
    expect(joinNames(arr3)).toBe('A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y & Z');
  });
});
