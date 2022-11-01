require('dotenv').config();
const app = require('./app');

const PORT = process.env.SERVER_PORT || 3333;

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
