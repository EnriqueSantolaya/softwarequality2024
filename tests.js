test("IntegerToRomanOk", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: false}, "TC-1");
  assert.propEqual(convertIntegerToRoman(35), {value: "XXXV", message: '', result: true}, "TC-2");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-3");
});

test("IntegerToRomanNotOk", function(assert) {
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-4");
  assert.propEqual(convertIntegerToRoman("A"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-5");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-6");
});

test("RomanToIntegerOk", function(assert) {
  assert.propEqual(convertRomanToInteger("V"), {value: 5, message: '', result: true}, "TC-7");
  assert.propEqual(convertRomanToInteger("XXXIV"), {value: 34, message: '', result: true}, "TC-8");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-9");
});

test("RomanToIntegerNotOk", function(assert) {
  assert.propEqual(convertRomanToInteger("10"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-10");
  assert.propEqual(convertRomanToInteger("IIIII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-11");
  assert.propEqual(convertRomanToInteger("VXV"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-12");
});
