const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Validator = require("fastest-validator");

function signUp(req, res){

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
}