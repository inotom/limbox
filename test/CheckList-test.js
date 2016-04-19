import assert from 'power-assert';
import Check from '../src/Check';
import CheckList from '../src/CheckList';

describe('CheckList', function() {

  let fruits,
      cl;

  beforeEach(function() {
    fruits = ['apple', 'orange', 'banana'];
    cl = CheckList.create(2);
    fruits.forEach(function(fruit) {
      cl.add(Check.create(fruit));
    });
  });

  describe('Selectable size', function() {

    it('no selected at first', function() {
      assert(cl.getCheckedIndexList().length === 0);
    });

    it('limited select max size', function() {
      assert(cl.checkOn(0).getCheckedIndexList().length === 1);
      assert(cl.checkOn(1).getCheckedIndexList().length === 2);
      assert(cl.checkOn(2).getCheckedIndexList().length === 2);
      assert(cl.checkOff(2).getCheckedIndexList().length === 1);
      assert(cl.checkOff(1).getCheckedIndexList().length === 0);
    });
  });

  describe('Getter', function() {

    it('get all list', function() {
      let expected = ['apple', 'orange', 'banana'];
      cl.getAll().forEach(function(check, index) {
        assert(check.getName() === expected[index]);
      });
    });

    it('get checked indexes list', function() {
      let expected = ['banana', 'apple'];
      cl.checkOn(0) // => apple
        .checkOn(1) // => apple orange
        .checkOn(2) // => orange banana
        .checkOn(0) // => banana apple
        .getCheckedIndexList().forEach(function(checkedIndex, index) {
          assert(fruits[checkedIndex] === expected[index]);
        });
    });
  });
});
