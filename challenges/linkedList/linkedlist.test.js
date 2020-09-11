'use strict';

const LinkedList = require('./linked-list.js');

describe('Linked-list Modules', () => {

    it('constructor()', () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    });

    it('insert()', () => {
        let list = new LinkedList();
        let initialValue = 'First One';
        list.insert(initialValue);
        expect(list.head.value).toEqual(initialValue);

        let newValue = 'Second Value';
        list.insert(newValue);
        expect(list.head.value).toEqual(initialValue);
        expect(list.head.next).not.toBeNull();
        expect(list.head.next.value).toEqual(newValue);

        console.log("list -----> ", list);
    });

    it('includes()', () => {
        let list = new LinkedList();
        let val1 = 'Hi';
        list.insert(val1);
        let val2 = 'I am';
        list.insert(val2);
        list.insert(23);
        expect(list.includes('I am')).toBeTruthy();
        // expect(list.includes(23)).toBe(true);
        expect(list.includes('ok')).toBe(false);
    });

    it('toString', () => {
        let list = new LinkedList();
        list.insert('Hi');
        list.insert('I am');
        list.insert(23);
        expect(list.toString()).toEqual('{Hi} -> {I am} -> {23} -> NULL')
    })
});