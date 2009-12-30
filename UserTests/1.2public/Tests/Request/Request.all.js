{
	tests: [
		{
			title: "Request",
			description: "Sends an AJAX request to the server.",
			verify: "Did the ajax log to the screen a success?",
			before: function(){
				new Request({
					url: 'Tests/Request/simple.php',
					method: 'get',
					onRequest: function(){
						new Element('hr').inject($('log'));
						new Element('li').set('html', 'attempting request...').inject($('log'));
					},
					onSuccess: function(r){
						new Element('li').set('html', 'SUCCESS: ' + r).inject($('log'));
					}
				}).send();
			}
		},
		{
			title: "Request: failure handling",
			description: "Sends an AJAX request to the server. Requests a 404 url.",
			verify: "Did the ajax log to the screen a success?",
			before: function(){
				new Request({
					url: 'Tests/Request/simplxe.php',
					method: 'get',
					onRequest: function(){
						new Element('hr').inject($('log'));
						new Element('li').set('html', 'attempting request...').inject($('log'));
					},
					onSuccess: function(r){
						new Element('li').set('html', 'FAILURE: the ajax responded with: ' + r).inject($('log'));
					},
					onFailure: function(r){
						new Element('li').set('html', 'SUCCESS: the ajax url 404ed, and this callback was executed.').inject($('log'));
					}
				}).send();
			}
		},
		{
			title: "Request + Hash",
			description: "Sends an AJAX request to the server with a fragment at the end of the URL.",
			verify: "Did the ajax log to the screen a success?",
			before: function(){
				new Element('hr').inject($('log'));
				new Request({
					url: 'Tests/Request/simple.php#test',
					method: 'get',
					onRequest: function(){
						$('log').adopt(new Element('li', {
							html: 'attempting request...'
						}))
					},
					onSuccess: function(r){
						$('log').adopt(new Element('li', {
							html: 'SUCCESS: ' + r
						}))
					}
				}).send();
			}
		},
		{
			title: "Request: cancel",
			description: "Sends an AJAX request to the server and cancels it.",
			verify: "Did the ajax log to the screen a success?",
			before: function(){
				new Element('hr').inject($('log'));
				new Request({
					url: 'Tests/Request/simple.php',
					method: 'get',
					onRequest: function(){
						new Element('hr').inject($('log'));
						new Element('li').set('html', 'attempting request...').inject($('log'));
					},
					onSuccess: function(r){
						new Element('li').set('html', 'FAILURE: the ajax responded with: ' + r).inject($('log'));
					},
					onCancel: function(){
						new Element('li').set('html', 'SUCCESS: the ajax was canceled').inject($('log'));
					}
				}).send().cancel();
			}
		},
		{
			title: "Ajax: chain",
			description: "Sends an AJAX request to the server and chains a function to fire after success.",
			verify: "Did the ajax log to the screen a success?",
			before: function(){
				new Element('hr').inject($('log'));
				new Request({
					url: 'Tests/Request/simple.php',
					method: 'get',
					onRequest: function(){
						new Element('hr').inject($('log'));
						new Element('li').set('html', 'attempting request...').inject($('log'));
					},
					onSuccess: function(r){
						new Element('li').set('html', 'ajax response: ' + r).inject($('log'));
					}
				}).send().chain(function(){
					new Element('li').set('html', 'SUCCESS: this function was chained.').inject($('log'));
				});
			}
		},
		{
			title: "Request: eval scripts",
			description: "Fetches a script from the server and evaluates it.",
			verify: "Did the ajax log to the screen a success?",
			before: function(){
				new Element('hr').inject($('log'));
				new Request({
					url: 'Tests/Request/ajax.evalscripts.js',
					method: 'get',
					onRequest: function(){
						new Element('li').set('html', 'attempting request for js file...').inject($('log'));
					},
					evalResponse: true
				}).send();
			}
		},
		{
			title: "Request: Element.send",
			description: "Sends a form.",
			verify: "Did the ajax log to the screen a success?",
			before: function(){
				new Element('hr').inject($('log'));
				var form = new Element('form', {
					action: 'Tests/Request/simple.php'
				});
				var input = new Element('input', {type: 'text', name: 'num'}).set({value: '1'}).inject(form);
				form.set('send', {
					onRequest: function(){
						new Element('li').set('html', 'attempting to submit form with .send method ...').inject($('log'));
					},
					onSuccess: function(r) {
						var msg = 'FAILURE: input values not sent';
						if (r == 'requested: 1') msg = 'SUCCESS: input values successfully posted and response received';
						new Element('li').set('html', msg).inject($('log'));
					}
				}).send();
			}
		}
	],
	otherScripts: ['Element']
}