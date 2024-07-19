// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list. splice
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break (new line character), like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//a.
//I: id, nameFirst, NameLast
//O: returns a contact object
//C:
//E:
function makeContact(id, nameFirst, nameLast) {
    var contact = { };

    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;

    return contact;
} 


//b.
//I:
//O: returns an Object that manages contacts
//C: the last full name should have no new-line char added after it
//E: methods: length, addContact(contact), findContact(fullName), removeContact(contact), add a printAllContactNames() function to makeContactList() factory. This function should return a string formatted with all the full-names of them separated with a line break (new line character)
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
       length: function(){
        return contacts.length;
       },
       addContact: function(contact) {
        console.log(contact);
        contacts.push(contact);
       },
       findContact: function(fullName) {
        for(var i = 0; i < contacts.length; i++) {
            if(contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName) {
                return contacts[i];
            }
        }
        return undefined;
       },
       removeContact: function(contact) {
        for(var i = 0; i < contacts.length; i++) {
            if(contacts[i] === contact) {
                contacts.splice(i, 1);
            }
            break
        }
       },
       printAllContactNames: function() {
        var fullNames = [];
        for(var i = 0; i < contacts.length; i++) {
            var contact = contacts[i];
            var fullName = contact.nameFirst + ' ' + contact.nameLast;
            fullNames.push(fullName);
        }
        return fullNames.join('\n');
       }
    }
}

makeContactList(); // => { length: function(){}, addContact: function(){}, findContact: function(){}  }



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}