class SecretDiary {
	constructor() {
		this.padlockClose = true;
		this.notes = [];
	}

	unlock() {
		this.padlockClose = false;
	}

	getEntry(note) {
		if (this.padlockClose === true) {
			throw new Error("The diary is locked !!!");
		} else {
			this.notes.push(note);
		}
	}
}

module.exports = SecretDiary;
