const assert = require("node:assert/strict");
const test = require("node:test");
const prettier = require("prettier");
const options = require("../index.json");

test("formats code with the shared Prettier 3 options", async () => {
    const formatted = await prettier.format(
        "const example=(value)=>{return {value,}}",
        { ...options, parser: "babel" },
    );

    assert.equal(formatted, "const example = value => {\n  return { value }\n}\n");
});
