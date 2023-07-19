import asyncHandler from '../middleware/asyncHandler.js'; 
import User from '../models/userModel.js';


// @desc Auth user & get token
// @route POST /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
    res.send('auth User')
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