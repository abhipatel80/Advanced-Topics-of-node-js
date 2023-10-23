const assert = require('assert');
const sum = require('./app'); 

describe('sum', () => {
    it('should return true', () => {
        assert.strictEqual(sum(), true); // fail
    });

    it('should return the correct value', () => {
        assert.strictEqual(sum(), 18); // pass
    });
});
