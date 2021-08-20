const SecretDiary = require("../src/diary");

let mockClose = true;

const mockPadlock = jest.fn().mockImplementation(() => {
	return {
		close: () => mockClose,
		unlock: () => (mockClose = false),
		lock: () => {
			if (mockClose === true) {
				throw new Error("The diary is locked !!!");
			} else {
				mockclose = true;
			}
		},
	};
});

beforeEach(() => {
	diary = new SecretDiary();
	padlock = mockPadlock();
});

describe("Secret Diary", () => {
	it("The diary instance born with a close padlock", () => {
		expect(diary.padlock.close).toBe(true);
	});
	it("Unlock the diary", () => {
		diary.padlock.unlock();
		expect(diary.padlock.close).toBe(false);
	});
	it("Can locks the padlock", () => {
		diary.padlock.unlock();
		expect(diary.padlock.close).toBe(false);
		diary.padlock.lock();
		expect(diary.padlock.close).toBe(true);
	});
	it("Can't lock a locked diary", () => {
		expect(() => {
			diary.padlock.lock();
		}).toThrow("The diary is locked !!!");
	});
	it("Unlock the diary, add a note and check if the note array is updated", () => {
		diary.padlock.unlock();
		diary.addEntryes("some");
		expect(diary.notes.length).toBe(1);
	});
});
// 	 SecretDiary { padlock: Padlock { close: true }, notes: [] }
//   Padlock { close: true }
