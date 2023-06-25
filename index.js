// const argv = require("yargs").argv;
const { program } = require("commander");
const contacts = require("./contacts.js");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);

    case "add":
      console.log("name, email, phone", name, email, phone);
      return contacts.addContact(name, email, phone);
    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// invokeAction({
//   action: "add",
//   name: "Yan",
//   email: "ytr@mainModule.com",
//   phone: 12345678,
// });
// invokeAction({
//   action: "get",
//   id: "YrDH30P6aQ4hwfUIMVfKK",
// });
// invokeAction({
//   action: "remove",
//   id: "35sVf7-WHF5EkZHTrBt7E",
// });
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");
program.parse(process.argv);
// program.parse();

const options = program.opts();
invokeAction(options);
