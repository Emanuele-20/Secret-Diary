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
	it("Unlock the diary and add a note", () => {
		console.log(diary.padlock);
		console.log(padlock);
		diary.padlock.unlock();
		console.log(diary.padlock);
		diary.addEntry("Buy Bread");
		expect(diary.notes.length).toBe(1);
		//expect(diary.getEntries()).toBe("Buy Bread");
	});
	it("Can locks the padlock", () => {
		diary.padlock.unlock();
		expect(diary.padlock.close).toBe(false);
	});
	it("Can't lock a locked diary", () => {
		expect(() => {
			diary.padlock.lock();
		}).toThrow("The diary is locked !!!");
	});
});
// 	 SecretDiary { padlock: Padlock { close: true }, notes: [] }
//   Padlock { close: true }
