"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishPage = exports.catsPage = exports.dogsPage = exports.Home = void 0;
const Animals_1 = require("../models/Animals");
const createMenuObject_1 = require("../helpers/createMenuObject");
exports.Home = ((req, res) => {
    res.render('pages/index', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: Animals_1.Title.home,
            background: Animals_1.Imgs.home,
        },
        AnimalsSpec: Animals_1.AnimalsFunctions.getAll()
    });
});
exports.dogsPage = ((req, res) => {
    res.render('pages/index', {
        menu: (0, createMenuObject_1.createMenuObject)('dog'),
        banner: {
            title: Animals_1.Title.dogs,
            background: Animals_1.Imgs.dogs,
        },
        AnimalsSpec: Animals_1.AnimalsFunctions.getSpec('cachorro')
    });
});
exports.catsPage = ((req, res) => {
    res.render('pages/index', {
        menu: (0, createMenuObject_1.createMenuObject)('cat'),
        banner: {
            title: Animals_1.Title.cat,
            background: Animals_1.Imgs.cat,
        },
        AnimalsSpec: Animals_1.AnimalsFunctions.getSpec('gato')
    });
});
exports.fishPage = ((req, res) => {
    res.render('pages/index', {
        menu: (0, createMenuObject_1.createMenuObject)('fish'),
        banner: {
            title: Animals_1.Title.fish,
            background: Animals_1.Imgs.fish,
        },
        AnimalsSpec: Animals_1.AnimalsFunctions.getSpec('peixe')
    });
});
