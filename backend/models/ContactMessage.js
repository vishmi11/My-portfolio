// models/ContactMessage.js

// This is a placeholder model.
// If you add a database (MongoDB), define the schema here.

class ContactMessage {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.createdAt = new Date();
  }
}

module.exports = ContactMessage;
