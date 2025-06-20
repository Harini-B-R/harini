// const express = require('express');
// const router = express.Router();
// const userController = require('../controller/usercontroller');

// router.post('/register', userController.register); // ✅ Make sure this matches your frontend request

// module.exports = router;
// module.exports=mongoose.model("users",userSchema);
const express = require('express');
const usercontroller = require('../controller/usercontroller');
const router = express.Router();

// Register route
router.post('/register', usercontroller.register);
router.post('/login',usercontroller.login)
router.post('/loginemail',usercontroller.loginemail)

// Test route to check request body parsing
router.post('/test', (req, res) => {
  console.log("BODY RECEIVED IN /test:", req.body);
  res.json({ bodyReceived: req.body });
});

module.exports = router;
