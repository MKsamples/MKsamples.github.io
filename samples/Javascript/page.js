
function changePageLanguage($language) {
	var url = window.location.href.split('?')[0];
	
	window.location.href = url + "?lang=" + $language;
}