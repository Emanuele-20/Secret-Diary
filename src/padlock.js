class Padlock {
	unlock(diary) {
		diary.padlockClose = false;
	}

	lock(diary) {
		diary.padlockClose = true;
	}
}

module.exports = Padlock;
