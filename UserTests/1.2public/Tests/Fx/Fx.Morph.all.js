{
	tests: [
		{
			title: "Fx.Morph",
			description: "Animates a two element styles.",
			verify: "Did the element change width and height smoothly?",
			before: function(){
				var fx = new Fx.Morph('example', {
					duration: 500
				});
				fx.start({
					width: [50, 100],
					height: [50, 100]
				});
				reset();
			}
		},
		{
			title: "Element.morph",
			description: "Uses the Element.effects shortcut to animate the element.",
			verify: "Did the element change width and height smoothly?",
			before: function(){
				$('example').set('morph', { duration: 500 }).morph({
					width: [50, 100],
					height: [50, 100]
				});
				reset();
			}
		},
		{
			title: "Fx.Styles:set",
			description: "Calls the set method to set the element properties immediately.",
			verify: "Did the element change size immediately?",
			before: function(){
				var fx = new Fx.Morph('example');
				fx.set({
					width: 200,
					height: 200
				});
				reset();
			}
		},
		{
			title: "Chained effects",
			description: "Uses the Element.set('morph') to set options and then animates the element. Runs several animations chained together",
			verify: "Did the element change width and height 3 times (50 to 0, 0 to 100, 100 to 50) smoothly?",
			before: function(){
				$('example').get('morph', { duration: 500 });
				$('example').morph({
					width: [50, 100],
					height: [50, 100]
				}).get('morph').chain(function(){
					$('example').morph({
						width: [100, 0],
						height: [100, 0]
					});
				}).chain(function(){
					$('example').morph({
						width: [0, 50],
						height: [0, 50]
					});
				});
				reset();
			}
		},
		{
			title: "Fx.Transitions test",
			description: "Shows an effect with numerous transitions.",
			verify: "Did the element change position smoothly with a different transition each time?",
			before: function(){
				var fx = $('example').get('morph', {
					duration: 1200,
					transition: Fx.Transitions.Elastic.easeOut
				});
				fx.start({
					top: [100, 200],
					left: [100, 200]
				}).chain(function(){
					fx.setOptions({
						transition: 'expo:in:out'
					}).start({
						top: [200, 100],
						left: [200, 100]
					});
				}).chain(function(){
					fx.setOptions({
						transition: 'bounce:out'
					}).start({
						top: [100, 200],
						left: [100, 200]
					});
				}).chain(function(){
					fx.setOptions({
						transition: 'back:out'
					}).start({
						top: [200, 100],
						left: [200, 100]
					});
				});
			}
		}
	],
	otherScripts: ['Fx.Transitions']
}