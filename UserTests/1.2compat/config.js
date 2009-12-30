var UnitTester = {
	site: 'MooTools 1.2 - compatability for 1.1.2', //title of your site
	title: 'Unit Tests', //title of this test group
	path: '../../UnitTester/',
	ready: function(UnitTester){
		new UnitTester({
			core: '../../Libraries/core.1.2.4/', //path to Source/scripts.json
			more: '../../Libraries/more.1.2.4.2/' //path to Source/scripts.json
		}, {
			Tests: '../1.1public/Tests/' //path to tests.json
		}, {
			compatibilities: {
				core: {
					aliases: '../../Libraries/core/Compatibility/aliases.json',
					scripts: '../../Libraries/core/Compatibility/compat.json'
				}
			}
		});
	}
};