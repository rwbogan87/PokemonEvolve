pokeOne = 4;
url = 'https://pokeapi.co/api/v2/';
startURL = url+'evolution-chain/'+pokeOne+'/';
basicurl = url+'pokemon/'+pokeOne+'/';

// 
fetch(basicurl).then(results => {return results.json();}).then(function(json) {
	console.log(json);
	// console.log(json.sprites.front_default);
	imageOne.src=(json.sprites.front_default);
	startURL = url+'evolution-chain/'+pokeOne+'/';})


fetch(startURL).then(results => {return results.json();}).then(function(json) {
	console.log(json);
		if (json.chain.evolves_to[0].evolves_to[0].species.name) {
			console.log(json.chain.evolves_to[0].evolves_to[0].species.name)
		} 
		if (json.chain.evolves_to[0].species.name)
		{
			console.log(json.chain.evolves_to[0].species.name)
		} 
		if (json.chain.species.name)
		{
			console.log(json.chain.species.name)
		}
		let formOne=(json.chain.species.name);
		let formTwo=(json.chain.evolves_to[0].species.name);
		console.log(formTwo);
		console.log(formOne);
});

