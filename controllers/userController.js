const bcrypt = require('bcrypt');
const generateAndSetToken = require('../utils/generateAndSetToken');
const User = require('../model/user');

exports.registerUser = async (req, res) => {
    const { email, password, fullname } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        console.log(fullname);
        console.log(password);
        console.log(email);
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Generate and set JWT token as a cookie
        const token = generateAndSetToken(res, newUser.email);

        return res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Verify the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate and set access token as a cookie
        const token = generateAndSetToken(res, email);

        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
