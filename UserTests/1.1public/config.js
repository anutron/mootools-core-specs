var UnitTester = {
	site: 'MooTools 1.11', //title of your site
	title: 'Unit Tests', //title of this test group
	path: '../../UnitTester/',
	ready: function(UnitTester){
		new UnitTester({
			core: '../../Libraries/core.1.1.2/scripts.json' //path to Source/scripts.json
		}, {
			Tests: 'Tests/' //path to tests.json
		}, {
			appendSource: false
		});
	}
};