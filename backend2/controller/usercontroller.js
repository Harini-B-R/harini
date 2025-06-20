// 
const User = require('../module/user');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  console.log("Request body:", req.body); // ⬅️ Add this

  const { username, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered", user: newUser });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Registration failed" });
  }
};
exports.login=async(req,res)=>{
     try{
     const us = await User.findOne({username:req.body.username});
     const newpassword=await bcrypt.compare(req.body.password,us.password);
     if (newpassword && us){
        res.status(200).json("login successful")
     }
     }
     catch(err){
        console.log(err);
     }

}
exports.loginemail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

    if (isPasswordCorrect) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};

