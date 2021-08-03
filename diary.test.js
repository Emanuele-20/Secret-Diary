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
});
