const User = require("./../models/user");
const bcrypt = require("bcryptjs");

exports.get = async (req, res) => {
    try {
        const rs = await User.find({});
        res.render("user/list", {
            users: rs
        })
    } catch (error) {
        res.send(error);
    }
};

// Tạo ra một tài khoản mới
exports.create = (req, res) => {
    res.render("user/form");

}

exports.save = async (req, res) => {
    
    const data = req.body;
    
    try {
        // let existuser = await User.findOne({ mobile: data.mobile });
        // if (existuser) return res.status(422).send("Email is exist..");// kiểm tra số điện thoại đã tồn tại chưa
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPwd = await bcrypt.hash(data.password, salt);

        //save to db
        const user = new User({
            firstName: data.firstName,
            lastName: data.lastName,
            mobile:  data.mobile,
            username:  data.username,
            password: hashPwd
        })
        await user.save();
        
        res.redirect("/user/");
    } catch (error) {
        res.send(error);
    }
};