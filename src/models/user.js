const mongoose = require("mongoose");
const user = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [2, "Ten phai co do dai toi thieu la 2"],
        maxLength: 100
    },
    lastName: {
        type: String,
        required: true,
        minLength: [2, "Ten phai co do dai toi thieu la 2"],
        maxLength: 100
    },
    mobile: {
        type: String,
        required: true,
        minLength: [10, "Ten phai co do dai toi thieu la 10"],
        maxLength: 20,
        // validate: {
        //     validator: function(v) {
        //         const mobilePattern = /^\+d$/
        //       return v.match(mobilePattern);
        //     },
        //     message: t => `${t.value} không phải là số điện thoại hợp lệ!`
        //   }
      
    },
    username: {
        type: String,
        required: true,
        minLength: [6, "Ten phai co do dai toi thieu la 6"],
        maxLength: 100
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 255
    },
});

module.exports = mongoose.model("User", user);