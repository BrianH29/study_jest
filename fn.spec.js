const fn = require('./fn')

// test('1 is 1', () => {
//   expect(1).toBe(1);
// });

// test('2 더하 3은 5이다', () => {
//   expect(fn.add(2,3)).toBe(5);
// });

// test('3 더하 3은 5가 아니야', () => {
//   expect(fn.add(3,3)).not.toBe(5);
// });

// test('2 plus 3 is 5', () =>  {
//   expect(fn.add(2,3)).toEqual(5);
// })

test('recieve name and age return object', () => {
  expect(fn.makeUser('Brian', 30)).toEqual({
    name: 'Brian',
    age: 30,
  })
})

// test('recieve name and age return object', () => {
//   expect(fn.makeUser('Brian', 30)).toStrictEqual({
//     name: 'Brian',
//     age: 30,
//   })
// })

//toBenNull
//toBeUndefined
// toBeDefined

test('null은 null 입니다.', () => {
  expect(null).toBeNull();
})

//toBeTruthy
// toBeFalsy
test('0은 false 입니다.', () => {
  expect(fn.add(1, -1)).toBeFalsy(); 
});

test('비어있지 않는 문자열은 true 입니다.', () => {
  expect(fn.add('hello', 'world')).toBeTruthy(); 
});

//toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual 
test('ID는 10자 이하여야 합니다.', () => {
  const id = 'spiderman';
  expect(id.length).toBeLessThanOrEqual(10)
})