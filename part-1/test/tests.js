const { describe, it } = require('mocha');
const { expect } = require('chai');

const functions = require('../functions.js');

const day = new Date(2017, 5, 15);

const friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

const arr = [1, 2, 3, 4, 5, 6, 7]

describe('functions.js', () => {
  describe('weekday function in action', () => {
    it('puts in a valid day', () => {
      expect(functions.weekday(day)).to.equal('Thu');
    });
    it('tries an invalid attempt', () =>{
      expect(functions.weekday('blah')).to.equal('I highly doubt you gave me a proper date.');
    });
  });
  describe('snippet tries snipping away', () => {
    it('puts in a valid entry that is longer than maxLength', () => {
      expect(functions.snippet("For the following exercises,", 10)).to.equal('For the fo...');
    });
    it('puts in valid entry shorter than max length', () => {
      expect(functions.snippet("Hello, world!", 20)).to.equal('Hello, world!');
    });
    it('shoves in invalid inputs', () => {
      expect(functions.snippet(day, 'garbage')).to.equal("Something has gone horribly wrong!")
    });
  });
  describe('numProps starts counting', () => {
    it('tries a proper object', () => {
      expect(functions.numProps(friend)).to.equal(3);
    });
    it('attempts an empty object', () => {
      expect(functions.numProps({})).to.equal(0);
    });
    it('does something unexpected', () => {
      expect(functions.numProps(999999)).to.equal("I'm not even sure you handed in an object.");
    });
  });
  describe('filterBetween attempts filtering', () => {
    it('uses a valid input', () => {
      expect(functions.filterBetween(arr, 3, 6)).to.deep.equal([3, 4, 5, 6]);
    });
    it('handles junk inputs', () => {
      expect(functions.filterBetween('junk', 3, 6)).to.equal('invalid input attempt')
    })
  })
})
