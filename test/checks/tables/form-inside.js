describe('form-inside', function () {
	'use strict';

	var fixture = document.getElementById('fixture');

	afterEach(function () {
		fixture.innerHTML = '';
	});

	it('should return false when the table has a form', function () {
		fixture.innerHTML = '<table>' +
				'<tr><td><form></form></td></tr>' +
			'</table>';

		var node = fixture.querySelector('table');

		assert.isFalse(checks['form-inside'].evaluate(node));
	});

	it('should return true when the table has no form', function () {
		fixture.innerHTML = '<table>' +
				'<tr><td></td></tr>' +
			'</table>';

		var node = fixture.querySelector('table');

		assert.isTrue(checks['form-inside'].evaluate(node));
	});
});