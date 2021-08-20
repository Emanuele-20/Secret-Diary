const SecretDiary = require("../src/diary");
const Padlock = require("../src/padlock");
jest.mock("../src/padlock");

beforeEach(() => {
	diary = new SecretDiary();
	Padlock.mockClear();
});

describe("Secret Diary", () => {
	it("Returns an empty array of notes when the instance is created", () => {
		expect(diary.notes).toEqual([]);
	});
	// xit("Trying to add a note with a closed padlock", () => {
	// 	expect(() => {
	// 		diary.addEntry("Buy Tomatoes");
	// 	}).toThrow("The diary is locked !!!");
	// });
	it("Checks if there is a call to Padlock class every time we create a new Diary", () => {
		diario = new SecretDiary();
		expect(Padlock).toHaveBeenCalledTimes(1);
	});
	it("dfdf", () => {
		diario = new SecretDiary();
		diario.padlock.unlock();
		expect(Padlock).toHaveBeenCalledTimes(1);
	});
	it("dfdf", () => {
		diario = new SecretDiary();
		diario.padlock.unlock();
		diario.padlock.lock();
		expect(Padlock).toHaveBeenCalledTimes(1);
	});
});
// 	 SecretDiary { padlock: Padlock { close: true }, notes: [] }
//   Padlock { close: true }
