/*eslint no-console: 0*/

let renderTemplate = require('./renderTemplate');

console.log([
	renderTemplate('{{0}} | {{1}} | {{2}}', [
		'abc',
		null,
		'def',
	]) === 'abc | {{1}} | def',
	renderTemplate('{{a}} | {{b}} | {{c}}', {
		a: 777,
		b() {
			return 'abc';
		},
		d: 'def',
	}) === '777 | abc | {{c}}',
].every(b => b));
