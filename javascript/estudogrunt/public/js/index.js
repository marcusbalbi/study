(function() {
	var $ = document.querySelectorAll.bind(document);

	var painel = $('.painel')[0];
	painel.classList.add('invisivel');
	
	var button = $('button')[0];
	button.classList.remove('invisivel');

	button.onclick = function() {

		painel.classList.remove('invisivel');
		this.classList.add('invisivel');
	}
})();