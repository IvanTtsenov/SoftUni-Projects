const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    let contacts = phonebook.getContacts();
    console.log(contacts);
    res.render('index',{contacts});
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    phonebook.addContact(req.body.name, req.body.number);
    res.redirect('/');
    console.log(req.body);
  }
}