import type { ValidCharCript, Crypt } from "./types";
import { CRYPT_ROTOR_I, CRYPT_ROTOR_II, CRYPT_ROTOR_III } from "./crypts";

class Rotor {

  private id: number;
  private notch: ValidCharCript;
  private cypto: Crypt;
  private position: Number;

  constructor(id: number, crypto: Crypt, notch: ValidCharCript) {
    this.id = id;
    this.notch = notch;
    this.cypto = crypto;
    this.position = 0;
  }
}

const ROTOR_I = new Rotor(1, CRYPT_ROTOR_I, 'Q');
const ROTOR_II = new Rotor(2, CRYPT_ROTOR_II, 'E');
const ROTOR_III = new Rotor(3, CRYPT_ROTOR_III, 'V');

export default Rotor;