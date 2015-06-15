// captainup.js - Adds the Captain Up HTML5 snippet to Moodle

// Add Captain Up's `<div id='cptup-ready'></div>` to the page HTML
(function() {
  var cpt_ready = document.createElement('div');
  cpt_ready.id = 'cptup-ready';
  document.getElementsByTagName('body')[0].appendChild(cpt_ready);
})();

// Setup the Captain Up configuration options
window.captain = {up: function(fn) { captain.topics.push(fn) }, topics: []};
// Add your settings here:
captain.up({
  api_key: '5577505dcd220c9b0a00000b'
});

// Asynchronously load the Captain Up script
(function() {
  var cpt = document.createElement('script');
  cpt.type = 'text/javascript'; cpt.async = true;
  cpt.src = 'https://captainup.com/assets/embed.en.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(cpt);
})();
