let mongoose = require('mongoose')

let avatarModel = new mongoose.Schema({
    username:String,
    avatar:String
})
let avatar = mongoose.model('avatar',avatarModel)

module.exports = avatar