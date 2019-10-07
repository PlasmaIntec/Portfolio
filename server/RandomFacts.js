const PythonShell = require('python-shell').PythonShell;
const scraper = require('./scrape.js');
const Nightmare = require('nightmare')
const cheerio = require('cheerio');
const nightmare = Nightmare({ show: false });
const url = 'https://www.urbandictionary.com/';

class RandomFacts {
	constructor() {
		this.facts = [];
	}

	load() {
		
		// let getData = html => {
		// 	const $ = cheerio.load(html);
		// 	const data = {};
		// 	data.word = $('a[class="word"]').first().text();
		// 	data.meaning = $('div[class="meaning"]').first().text();
		// 	data.example = $('div[class="example"]').first().text();
		// 	data.tags = $('div[class="tags"]').first().text();
		// 	data.contributor = $('div[class="contributor"]').first().text();
		// 	return data;
		// };

		// var urls = [...Array(5).keys()];
		// urls.reduce((accumulator) => {
		// return accumulator.then((results) => {
		// 	return nightmare
		// 		.goto(url)
		// 		.wait('body')
		// 		.click('a[href="/random.php"]')
		// 		.wait('body')
		// 		.evaluate(() => document.querySelector('body').innerHTML)
		// 		.then(response => {
		// 			console.log(getData(response));
		// 			results.push(getData(response));
		// 			return results;
		// 		})
		// });
		// }, Promise.resolve([])).then((results) => {
		// 	this.facts = results;
		// });
		for (var i = 0; i < 5; i++) {
			this.getRandomFact()
				.then((fact) => {
					// console.log('LOADED FACT: ', fact);
					this.facts.push(fact);
				})
				.catch((err) => {
					console.log('ERROR: ', err);
				})
		}
	}

	get() {
		console.log('THIS: ', this);
		setTimeout(() => {
			this.getRandomFact()
				.then((fact) => {
					console.log('FACT: ', fact);
					this.facts.push(fact);
				})
		});
		if (this.facts.length > 0) {
			return this.facts.pop();
		} else {
			console.log('ALTERNATIVE FACT');
			this.getRandomFact()
				.then((fact) => {
					return fact;
				})
		}
	}

	getRandomFact() {
		return new Promise((resolve, reject) => {
			PythonShell.run('./python/randomizer.py', { mode: 'json' }, (err, results) => {
				if (err) {
					console.log('PYTHONSHELL ERROR: ', err);
					reject(err);
				}
				console.log('PYTHONSHELL DUMP: ', results);
				resolve(results[0]);
			})
			// scraper((err, results) => {
			// 	if (err) {
			// 		reject(err);
			// 	} else {
			// 		resolve(results);
			// 	}
			// })
		})
	}

}

var randomFacts = new RandomFacts();
module.exports = randomFacts;