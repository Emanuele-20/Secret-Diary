const SecretDiary = require("./diary");

beforeEach(() => {
	diary = new SecretDiary();
});

describe("Secret Diary", () => {
	it("Initially the Secret Diary class is locked", () => {
		expect(diary.padlockClose).toBe(true);
	});

	it("Every diary has a entries container where save the notes", () => {
		expect(diary.notes.length).toBe(0);
	});

	it("Can add a new note if the padlock is open", () => {
		diary.unlock();
		diary.getEntry();
		expect(diary.notes.length).toBe(1);
	});

	it("Throw an error if the padlock is close", () => {
		expect(() => {
			diary.getEntry();
		}).toThrow("The diary is locked !!!");
	});
});
