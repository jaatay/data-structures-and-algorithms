'use strict'

const node = require('../node');

describe('#node.js', () => {
    let testNode = new node(4);

    test('test node exists', () => {
        expect(testNode).toBeTruthy();
    });

    test('test node has a value', () => {
        expect(testNode.value).toBe(4);
    });

});