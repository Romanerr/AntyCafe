const{Router} = require('express');
const bcrypt = require('bctypt.js');
const User = require('../models/User');
const router = Router();

// / api/auth
router.post('/register',async (req,res)=>{
try{
const{email,password} = req.body

const candidates = await User.findOne({ email });
If (candidates) {
    return res.status(400).json({message:'Already exist'});
}
const hashedPassword = await bcrypt.hash(password,12)
const user = new User({email,password: hashedPassword})
await user.save()
res.status(201).json({message: 'Password created'})
}catch(e){
    res.status(500).json({message:'Something wrong'});
}
});
// / api/register
router.post('/register',async (req,res)=>{
    
});
module.exports = router