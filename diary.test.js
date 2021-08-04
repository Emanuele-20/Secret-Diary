const { SecretDiary, UnlockDiary } = require("./diary");

beforeEach(() => {
	diary = new SecretDiary();
	lockpad = new UnlockDiary();
});

describe("Secret Diary", () => {
	it("Initially the Secret Diary class is locked", () => {
		expect(diary.padlockClose).toBe(true);
	});

	it("Every new instance has a note container", () => {
		expect(diary.notes.length).toBe(0);
	});

	it("Can add a new note if the padlock is open", () => {
		lockpad.unlock(diary);
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
		lockpad.unlock(diary); // unlock diary
		diary.addEntry("Buy milk"); // add a note
		lockpad.lock(diary); // lock diary
		lockpad.unlock(diary); // unlock diary
		expect(diary.notes.length).toBe(1); // check the note container
		expect(diary.getEntries()).toBe("Buy milk"); // check the note
	});

	it("Throw an error if the padlock is close and we want to get a note", () => {
		expect(() => {
			diary.getEntries();
		}).toThrow("The diary is locked !!!");
	});
});
