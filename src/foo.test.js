import foo from './foo';

test(`foo says 'Hello World'`, () => {
	expect(foo()).toBe('Hello World');
});
