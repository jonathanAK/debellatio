const nonce = require("./nonce.js");

test('get unique game codes and make sure they are 4 char long and unique', () => {
    const value1 = nonce.uniqueGameCode();
    const value2 = nonce.uniqueGameCode();

    expect(value1 !== value2).toBe(true);
    expect(value1.length === 4).toBe(true);
    expect(value2.length === 4).toBe(true);
});