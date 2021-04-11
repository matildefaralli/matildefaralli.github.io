document.addEventListener("DOMContentLoaded", function() {

    new SweetScroll({});

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'assets/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});

}, !1);

