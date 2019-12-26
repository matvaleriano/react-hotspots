import { getHotspots, addHotspots } from '.';

const hotspot = { id: '1', position: { left: 0, top: 0 } };

afterEach(() => {
  localStorage.clear();
});

test('should return []', () => {
  expect(getHotspots()).toEqual('[]');
});

describe('with items', () => {
  beforeEach(() => {
    localStorage.setItem('hotspots', JSON.stringify([hotspot]));
  });

  test('should return hotspots', () => {
    expect(getHotspots()).toEqual(JSON.stringify([hotspot]));
  });
});

test.each`
  param        | expected
  ${[hotspot]} | ${[hotspot]}
  ${undefined} | ${[]}
`('should save hotspots on localstorage', ({ param, expected }) => {
  addHotspots(param);
  expect(localStorage.getItem('hotspots')).toEqual(JSON.stringify(expected));
});
