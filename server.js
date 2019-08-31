const express = require('express');
const connectDB = require('./config/db');
const users = require('./routes/API/usersAPI');
const auth = require('./routes/API/authAPI');
const profile = require('./routes/API/profileAPI');
const posts = require('./routes/API/postsAPI');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.get('/', (req, res) => {
  res.send('API RUNNING');
});
app.use(express.json({ extended: false }));
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profiles', profile);
app.use('/api/posts', posts);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
