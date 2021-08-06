class Padlock {
	unlock(diary) {
		diary.padlockClose = false;
	}

	lock(diary) {
		if (diary.padlockClose === true) {
			throw new Error("The diary is locked !!!");
		} else {
			diary.padlockClose = true;
		}
	}
}

module.exports = Padlock;
