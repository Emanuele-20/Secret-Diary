const SecretDiary = require("./diary");
//const SecretDiary = require("./diary");

describe("Secret Diary", () => {
	it("Initially the Secret Diary class is locked", () => {
		let diary = new SecretDiary();
		expect(diary.padlockClose).toBe(true);
	});
});
