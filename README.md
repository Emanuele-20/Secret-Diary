Test-drive the secret diary example:

### SecretDiary

- lock
- unlock
- addEntry
- getEntries

Initially the `SecretDiary` class is locked, meaning `add_entry` and `get_entries` should throw an error.

When the user calls `unlock`, `add_entry` and `get_entries` should work as desired.

When the user locks the diary, by calling `lock`, `add_entry` and `get_entries` should, again, throw an error.
First organise it into one class only.

Then, when all your tests are green, reorganise it into classes with high cohesion.

This will also involve reorganising your tests!
