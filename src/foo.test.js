import foo from './foo';

test(`foo should return the max number of its arguments`, () => {
	expect(foo(1, 2, 3, 4)).toBe(4);
});
