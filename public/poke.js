url = 'https://pokeapi.co/api/v2/pokemon/';

// bulbasaur
function bulbasaur() {
fetch(url).then(results => {return results.json();}).then(function(json) {
	console.log(json);
	nameOne=(json.results[0].name);
	nameTwo=(json.results[1].name);
	nameThree=(json.results[2].name);
	firstURL = url+nameOne;
	secondURL = url+nameTwo;
	thirdURL = url+nameThree;
	fetch(firstURL).then(results => {return results.json();}).then(function(json) {
		// console.log(json);
		imageOne.src=(json.sprites.front_default);
	});
	fetch(secondURL).then(results => {return results.json();}).then(function(json) {
		// console.log(json);
		imageTwo.src=(json.sprites.front_default);
	});
	fetch(thirdURL).then(results => {return results.json();}).then(function(json) {
		// console.log(json);
		imageThree.src=(json.sprites.front_default);
	});
	// let x = document.getElementsByClass("invisible-pokemon");x.div.style.display="contents";
});
}

// charmander
function charmander() {
	fetch(url).then(results => {return results.json();}).then(function(json) {
		console.log(json);
		nameFour=(json.results[3].name);
		nameFive=(json.results[4].name);
		nameSix=(json.results[5].name);
		let firstURL = url+nameFour;
		let secondURL = url+nameFive;
		let thirdURL = url+nameSix;
		fetch(firstURL).then(results => {return results.json();}).then(function(json) {
			// console.log(json);
			imageFour.src=(json.sprites.front_default);
		});
		fetch(secondURL).then(results => {return results.json();}).then(function(json) {
			// console.log(json);
			imageFive.src=(json.sprites.front_default);
		});
		fetch(thirdURL).then(results => {return results.json();}).then(function(json) {
			// console.log(json);
			imageSix.src=(json.sprites.front_default);
		});
	});
}

// squirtle
function squirtle() {
	fetch(url).then(results => {return results.json();}).then(function(json) {
		// console.log(json);
		nameSeven=(json.results[6].name);
		nameEight=(json.results[7].name);
		nameNine=(json.results[8].name);
		let firstURL = url+nameSeven;
		let secondURL = url+nameEight;
		let thirdURL = url+nameNine;
		fetch(firstURL).then(results => {return results.json();}).then(function(json) {
			// console.log(json);
			imageSeven.src=(json.sprites.front_default);
		});
		fetch(secondURL).then(results => {return results.json();}).then(function(json) {
			// console.log(json);
			imageEight.src=(json.sprites.front_default);
		});
		fetch(thirdURL).then(results => {return results.json();}).then(function(json) {
			// console.log(json);
			imageNine.src=(json.sprites.front_default);
		});
	});
	event.preventDefault();
}


// bulbasaur();
// charmander();
// squirtle();




// searchForm.addEventListener('submit', submitSearch);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);
// old code using 2 apis...too much work
// if (json.chain.evolves_to[0].evolves_to[0].species.name) {
		// 	console.log(json.chain.evolves_to[0].evolves_to[0].species.name)
		// } 
		// if (json.chain.evolves_to[0].species.name)
		// {
		// 	console.log(json.chain.evolves_to[0].species.name)
		// } 
		// if (json.chain.species.name)
		// {
		// 	console.log(json.chain.species.name)
		// }
		// let nameOne=(json.chain.species.name);
		// let nameTwo=(json.chain.evolves_to[0].species.name);
		// let nameThree=(json.chain.evolves_to[0].evolves_to[0].species.name);
		// console.log(nameOne);
		// console.log(nameTwo);
		// console.log(nameThree);
		
		// fetch(basicurl).then(results => {return results.json();}).then(function(json) {
		// 	console.log(json);
		// 	// console.log(json.sprites.front_default);
		// 	imageOne.src=(json.sprites.front_default);})