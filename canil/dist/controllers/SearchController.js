"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const Animals_1 = require("../models/Animals");
exports.search = ((req, res) => {
    let getNameSearchAnimal = req.query.q;
    res.render('pages/search', {
        filterInput: Animals_1.AnimalsFunctions.filterInput(getNameSearchAnimal)
    });
});
