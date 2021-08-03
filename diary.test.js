const SecretDiary = require("./diary");

describe("Secret Diary", () => {
	it("Initially the Secret Diary class is locked", () => {
		expect(SecretDiary.padlockClose).toBe(true);
	});
});
