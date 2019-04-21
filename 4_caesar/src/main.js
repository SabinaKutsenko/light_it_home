import {Prompts} from "./prompt/prompts";

export class Application {
  async init() {
    const values = await Prompts.getValues();
    this.code(values);
  }

  code(values) {
		const { text, shift, action } = values;
		let output = '';
		const alphabet_eng = "abcdefghijklmnopqrstuvwxyz";

		if(typeof text === "string" || typeof (text+"") === "string"){

			for (let i = 0; i < text.length; i++) {
				let char = text[i].toLowerCase();
				if (alphabet_eng.indexOf(char) > -1 ) {
					let number = alphabet_eng.indexOf(text[i].toLowerCase());
					let newNumber;
						if(action === "encrypt") {
							newNumber = (number + shift) ;
							newNumber = ( newNumber >= 26 ) ? newNumber - 26 : newNumber;
						} else {
							newNumber = (number - shift);
							newNumber = ( newNumber < 0 ) ? newNumber + 26 : newNumber;
						}					
					let newChar = alphabet_eng.charAt(newNumber);
					let test =( text[i] === text[i].toLowerCase() ) ? newChar : newChar.toUpperCase();
					output += test;
				} else {
					output += text[i];
				}

			}
		console.log(output);
		}
	}
}
