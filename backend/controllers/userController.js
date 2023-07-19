import asyncHandler from '../middleware/asyncHandler.js'; 
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'


// @desc Auth user & get token
// @route POST /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
    const { email , password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        const token = jwt
            .sign({ userId: user._id },
                process.env.JWT_SECRET,{
                    expiresIn: '30d'
                });

        // Set Jwt as HTTP-Only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000 //30days
        })

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})


// @desc Register user 
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register User')
})

// @desc logout and remove user token/clear cookies
// @route POST /api/users/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout User')
})

// @desc user profile
// @route get /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('Get User Profile')
})

// @desc update user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('Update User Profile')
})

// @desc get all user
// @route get /api/users
// @access private/admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get User')
})
// @desc get user by id
// @route get /api/users/:id
// @access private/admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get User By Id')
})

// @desc delete user
// @route delete /api/users/:id
// @access private
const deleteUser = asyncHandler(async (req, res) => {
    res.send('Delete User Profile')
})

// @desc update user
// @route delete /api/users/:id
// @access private
const updateUser = asyncHandler(async (req, res) => {
    res.send('Update User Profile by id')
})


export { 
    authUser, 
    registerUser, 
    logoutUser, 
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} 