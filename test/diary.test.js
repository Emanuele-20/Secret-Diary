const SecretDiary = require("../src/diary");
const Padlock = require("../src/padlock");
let diary = new SecretDiary();
let padlock = new Padlock();
console.log(diary);
console.log(padlock);

describe("Secret Diary", () => {
	it("Returns Something", () => {
		expect(diary.notes).toEqual([]);
	});
});
