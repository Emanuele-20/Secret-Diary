class Padlock {
	constructor() {
		this.close = true;
	}

	unlock() {
		this.close = false;
	}

	lock() {
		if (this.close === true) {
			throw new Error("The diary is locked !!!");
		} else {
			this.close = true;
		}
	}
}

module.exports = Padlock;
