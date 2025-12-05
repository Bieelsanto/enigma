"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypts_1 = require("./crypts");
class Rotor {
    constructor(id, cypto, notch) {
        this.id = id;
        this.notch = notch;
        this.cypto = cypto;
        this.position = 0;
    }
}
const ROTOR_I = new Rotor(1, crypts_1.CRYPT_ROTOR_I, 'Q');
const ROTOR_II = new Rotor(2, crypts_1.CRYPT_ROTOR_II, 'E');
const ROTOR_III = new Rotor(3, crypts_1.CRYPT_ROTOR_III, 'V');
exports.default = Rotor;
