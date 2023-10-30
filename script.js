const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruitArray = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry',
	'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry',
	'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry',
	'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry',
	'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat',
	'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry',
	'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine',
	'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya',
	'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple',
	'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant',
	'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	if(str !== "") {
		results = fruitArray.filter((fruit) => fruit.toLowerCase().indexOf(str.toLowerCase()) !== -1);
	}

	return results;
}

function searchHandler(e) {
	const searchString = input.value;
	const searchResults = search(searchString);

	showSuggestions(searchResults, searchString);
}

function showSuggestions(results, inputVal) {
	// Change the document so that the suggestions field gains an li for every fruit in the
	// search results
	// bold the search string where it appears in the results
	
	suggestions.innerHTML = ""; // first clear the list of prior suggestions

	for(let result of results) {
		// put the mark tag into the result
		const idx = result.toLowerCase().indexOf(inputVal.toLowerCase());
		HTMLRes = result.slice(0,idx) + '<mark>' + result.slice(idx,idx+inputVal.length) +
			'</mark>' + result.slice(idx+inputVal.length);

		const newLi = document.createElement('li');
		newLi.innerHTML = HTMLRes;
		//newLi.innerHTML = result.replace(inputVal, '<mark>' + inputVal + '</mark>');
		
		suggestions.appendChild(newLi);
	}
}

function useSuggestion(e) {
	// Get which li was clicked from the event handler and copy the text from that li
	// into the search box
	if (e.target.tagName === "LI") {
		input.value = e.target.innerText;
	}

	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);