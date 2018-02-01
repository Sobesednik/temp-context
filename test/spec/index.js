const assert = require('assert')
const context = require('../context/')
const tempContext = require('../../src/')

const tempContextTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof tempContext, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            tempContext()
        })
    },
}

module.exports = tempContextTestSuite
