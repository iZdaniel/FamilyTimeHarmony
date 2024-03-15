const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://202110092:admin@cluster0.wzlxwtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});

// Define a schema and model for user data
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', UserSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle signup
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Create a new user document
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Signup failed:', error);
        res.status(500).json({ error: 'Signup failed' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
