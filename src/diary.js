const Padlock = require("./Padlock");

class SecretDiary {
	constructor(padlock = new Padlock()) {
		this.padlock = padlock;
		this.notes = [];
	}

	addEntry(note) {
		if (this.padlock.close === true) {
			throw new Error("The diary is locked !!!");
		} else {
			this.notes.push(note);
		}
	}

	getEntries() {
		if (this.padlock.close === true) {
			throw new Error("The diary is locked !!!");
		} else {
			return this.notes.join();
		}
	}
}

module.exports = SecretDiary;

// CODE BEFORE CREATION OF 2 CLASSES

// class SecretDiary {
// 	constructor() {
// 		this.padlockClose = true;
// 		this.notes = [];
// 	}

// 	unlock() {
// 		this.padlockClose = false;
// 	}

// 	addEntry(note) {
// 		if (this.padlockClose === true) {
// 			throw new Error("The diary is locked !!!");
// 		} else {
// 			this.notes.push(note);
// 		}
// 	}

// 	getEntries() {
// 		if (this.padlockClose === true) {
// 			throw new Error("The diary is locked !!!");
// 		} else {
// 			return this.notes.join();
// 		}
// 	}
// }

// module.exports = SecretDiary;
