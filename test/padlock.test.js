const Padlock = require("../src/padlock");

beforeEach(() => {
	padlock = new Padlock();
});

describe("Padlock", () => {
	it("Initially the padlock is always closed", () => {
		expect(padlock.close).toBe(true);
	});
	it("Can calls a method and unlock", () => {
		padlock.unlock();
		expect(padlock.close).toBe(false);
	});
	it("Can calls a method and unlock the padlock", () => {
		padlock.unlock();
		padlock.lock();
		expect(padlock.close).toBe(true);
	});
	xit("Throws an error if we try to lock a padlock that is already locked", () => {
		padlock.lock();
		expect(() => {
			padlock.lock();
		}).toThrow("The diary is locked !!!");
	});
});
