'use strict';

const LinkedList = require('./linked-list.js');

describe('Linked-list Modules', ()=> {

    it('constructor()', ()=> {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    });

    it('insert()', ()=> {
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
})