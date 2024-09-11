const { Password: PasswordIcon } = require('@mui/icons-material'); // Renaming the icon
const bcrypt = require('bcrypt');

const password = '2345678'; // Changed the variable name to avoid conflict
const hashed = bcrypt.hashSync(password, 10);

console.log(hashed);
