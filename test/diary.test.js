const SecretDiary = require("../src/diary");
const Padlock = require("../src/padlock");

beforeEach(() => {
	diary = new SecretDiary();
	padlock = new Padlock();
});

describe("Secret Diary", () => {
	it("Initially the Secret Diary class is locked", () => {
		expect(diary.padlockClose).toBe(true);
	});

	it("Every new instance has a note container", () => {
		expect(diary.notes.length).toBe(0);
	});

	it("Can add a new note if the padlock is open", () => {
		padlock.unlock(diary);
		diary.addEntry("Buy milk");
		expect(diary.notes.length).toBe(1);
	});

	it("Throw an error if the padlock is close and we want add a note", () => {
		expect(() => {
			diary.addEntry("Something");
		}).toThrow("The diary is locked !!!");
	});

	it("Throw an error if the padlock is close and we want to get a note", () => {
		expect(() => {
			diary.getEntries();
		}).toThrow("The diary is locked !!!");
	});

	it("Return an old note", () => {
		padlock.unlock(diary); // unlock diary
		diary.addEntry("Buy milk"); // add a note
		padlock.lock(diary); // lock diary
		padlock.unlock(diary); // unlock diary
		expect(diary.notes.length).toBe(1); // check the note container
		expect(diary.getEntries()).toBe("Buy milk"); // check the note
	});

	it("Throw an error if the padlock is close and we want to add a note", () => {
		expect(() => {
			diary.addEntry("Buy tomatoes");
		}).toThrow("The diary is locked !!!");
	});
});
