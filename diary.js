class UnlockDiary {
	unlock(diary) {
		diary.padlockClose = false;
	}

	lock(diary) {
		diary.padlockClose = true;
	}
}
class SecretDiary {
	constructor() {
		this.padlockClose = true;
		this.notes = [];
	}

	addEntry(note) {
		if (this.padlockClose === true) {
			throw new Error("The diary is locked !!!");
		} else {
			this.notes.push(note);
		}
	}

	getEntries() {
		if (this.padlockClose === true) {
			throw new Error("The diary is locked !!!");
		} else {
			return this.notes.join();
		}
	}
}

module.exports = { SecretDiary, UnlockDiary };

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
