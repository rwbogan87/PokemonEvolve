// url = 'https://pokeapi.co/api/v2/';

// pokeOne = 4;
// basicurl = url+'pokemon/'+pokeOne+'/';

// fetch(basicurl).then(results => {return results.json();}).then(function(json) {
// 	console.log(json);
// 	// console.log(json.sprites.front_default);
// 	imageOne.src=(json.sprites.front_default);
// 	startURL = url+'evolution-chain/'+pokeOne+'/';

// 	fetch(startURL).then(results => {return results.json();}).then(function(json) {
// 		console.log(json);
// 		if (json.chain.starts_to=true) {
// 			console.log('This pokemon has another evolution')
// 			} else {
// 				console.log('This pokemon has no evolution')
// 			};
		
		
// 	}
// 	)
// }
// )


// fetch(basicurl).then(results => {return results.json();}).then(function(json) {
	// 	console.log(json);
	// 	// console.log(json.sprites.front_default);
	// 	imageOne.src=(json.sprites.front_default);
	
	
pokeOne = 1;
url = 'https://pokeapi.co/api/v2/';
startURL = url+'evolution-chain/'+pokeOne+'/';

fetch(startURL).then(results => {return results.json();}).then(function(json) {
	console.log(json);
	if (json.chain.evolves_to.length=1) {
	console.log(json.chain.species.name)} else 
	if (json.chain.evolves_to[0].evolves_to.length=1) {
	console.log(json.chain.evolves_to[0].species.name);
	} else if (json.chain.evolves_to[0].evolves_to[0].evolves_to.length=1) {
	console.log(json.chain.evolves_to[0].evolves_to[0].species.name)}
});



