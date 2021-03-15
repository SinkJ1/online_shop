const { Router } = require('express')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express')
const User = require('../models/User')
const router = Router()


router.post('/register',
    [
        check('email', '').isEmail(),
        check('password', 'min legth 6 symbols').isLength({min:6})
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req)
            
            if(!errors.isEmpty()){
                return res.status(400).json({
                    
                })
            }

            const { email, password } = req.body

            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(400).json({ message: 'User exist' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: hashedPassword })

            await user.save()
            res.status(201).json({ message: 'User create' })
        } catch (e) {
            res.status(500).json({ message: "try again" })
        }
    })

module.exports = router