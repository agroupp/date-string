'use strict';

const assert = require('chai').assert;
const dateString = require('../index');

describe('#dateString', function(){
    it('should return date string parseable by Date class', () => {
        const test = new Date(dateString(new Date()));
        const now = new Date();
        assert.equal(now.getFullYear(), test.getFullYear());
        assert.equal(now.getMonth(), test.getMonth());
        assert.equal(now.getDate(), test.getDate());
        assert.equal(now.getHours(), test.getHours());
        assert.equal(now.getMinutes(), test.getMinutes());
        assert.equal(now.getSeconds(), test.getSeconds());
    });
});