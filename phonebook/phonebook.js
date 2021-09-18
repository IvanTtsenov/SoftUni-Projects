/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

const Contact = require('./models/Contact')

let contacts = [
	new Contact('Peter','35964531413'),
	new Contact('Pavel', '3595553112'),
	new Contact('Ivan', '35921321132')
];

function getContacts(){
	return contacts
}

function addContact(name,phone){
	let contact = new Contact(name,phone);
	contacts.push(contact);
}

module.exports = {
	getContacts,
	addContact
}