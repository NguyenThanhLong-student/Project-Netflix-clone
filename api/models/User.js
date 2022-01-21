const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    name: String,
    age: Number,
    numberPhone: String,
    password: { type: String, require: true },
    avatar: {type: String, default:"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/241214347_2971882606409135_4060833953803005321_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TZamUHRbWq8AX8HUOCC&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9DBPeA_rN0ZpG4iH0TxMR8RBuyFKintBUAVDYRlMKoQQ&oe=61EF13F8"},
    isAdmin: {type: Boolean, default: false},
    isVIP: {type: Boolean, default: false},
    },{ timestamps: true }
);

module.exports = mongoose.model('User',userSchema);