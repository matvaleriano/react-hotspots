import * as COLORS from '.';

test('should have a brand color', () => {
  expect(COLORS.BRAND).toEqual('#12C1C7');
});

test('should have a primary color', () => {
  expect(COLORS.PRIMARY).toEqual('#FF6100');
});

test('should have a text color', () => {
  expect(COLORS.TEXT).toEqual('#333');
});

test('should have a grey color', () => {
  expect(COLORS.GREY).toEqual('#EBEBEB');
});
