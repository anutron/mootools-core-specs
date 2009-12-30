{
	tests: [
		{
			title: "Fx.Tween",
			description: "Animates a single element style.",
			verify: "Did the element change width smoothly?",
			before: function(){
				var fx = new Fx.Tween('example', {
					property: 'width',
					duration: 500
				});
				fx.start(50, 0);
				reset();
			}
		},
		{
			title: "Element.tween",
			description: "Uses the Element.tween shortcut to animate the element.",
			verify: "Did the element change width smoothly?",
			before: function(){
				$('example').set('tween', { duration: 500 }).tween('width', 50, 0);
				reset();
			}
		},
		{
			title: "Fx.Tween:set",
			description: "Calls the set method to set the element property immediately.",
			verify: "Did the element hide immediately?",
			before: function(){
				var fx = new Fx.Tween('example', {property: 'opacity'});
				fx.set(0);
				reset();
			}
		},
		{
			title: "Chained effects",
			description: "Uses the Element.tween shortcut to animate the element. Runs several animations chained together",
			verify: "Did the element change width 3 times (50 to 0, 0 to 100, 100 to 50) smoothly?",
			before: function(){
				$('example').set('tween', { duration: 500 }).tween('width', 50, 0).get('tween').chain(function(){
					$('example').tween('width', 0, 100);
				}).chain(function(){
					$('example').tween('width', 100, 50);
				});
				reset();
			}
		},
		{
			title: "Fx.Transitions test",
			description: "Shows an effect with numerous transitions.",
			verify: "Did the element change position smoothly with a different transition each time?",
			before: function(){
				var fx = $('example').get('tween', {
					duration: 1200,
					transition: Fx.Transitions.Elastic.easeOut
				});
				$('example').tween('top', 100, 200).get('tween').chain(function(){
					fx.setOptions({
						transition: 'expo:in:out'
					}).start('top', 200, 100);
				}).chain(function(){
					fx.setOptions({
						transition: 'bounce:out'
					}).start('top', 100, 200);
				}).chain(function(){
					fx.setOptions({
						transition: 'back:out'
					}).start('top', 200, 100);
				});
			}
		}
	],
	otherScripts: ['Fx.Transitions']
}