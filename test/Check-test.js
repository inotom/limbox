import assert from 'power-assert';
import Check from '../src/models/Check';

describe('Check', function() {

  let check = Check.create('foo');

  it('Initial state is false', function() {
    assert(check.getState() === false);
  });

  it('get name', function() {
    assert(check.getName() === 'foo');
  });

  it('check on', function() {
    assert(check.on().getState() === true);
  });

  it('check off', function() {
    assert(check.off().getState() === false);
  });
});
