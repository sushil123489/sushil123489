const admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const xml2js = require('xml2js');
const xml_to_Json = require("../services/xml_to_json")

var admin_Login = async (req, res) => {
    try {

        let = {
            email,
            password
        } = req.body;


        var user = await admin.findOne({email: email});
        if (user == null) {
            return res.status(401).json({message: "Email does not exists.", status: 401});
        }

        const isverify = bcrypt.compareSync(password, user.password);
        if (! isverify) {
            return res.status(401).json({message: "invalid password", status: 401, data: {}});
        } else {
            const token = jwt.sign({
                email,
                _id: user._id,
                user
            }, process.env.secret_key, {expiresIn: "365d"});

            const xmlData = `
            <root>
              <person>
                <name>John Doe</name>
                <age>30</age>
              </person>
              <person>
                <name>Jane Smith</name>
                <age>25</age>
              </person>
            </root>
          `;
          
          await xml_to_Json(xmlData)
            res.status(200).json({message: "login succssefully ", token});
        }
    } catch (error) {
        console.log(error, "error found");
        res.status(500).json({message: "something went wrong", status: 500, data: {}});
    }
}

module.exports = {
    admin_Login
}
