const Nightmare = require('nightmare')
const cheerio = require('cheerio');
const nightmare = Nightmare({ show: false });
const url = 'https://www.urbandictionary.com/';

const scraper = (cb) => {
	nightmare
		.goto(url)
		.wait('body')
		.click('a[href="/random.php"]')
		.wait('body')
		.evaluate(() => document.querySelector('body').innerHTML)
		.end()
		.then(response => {
			cb(null, getData(response));
		}).catch(err => {
			cb(err);
		});
  
	let getData = html => {
		const $ = cheerio.load(html);
		const data = {};
		data.word = $('a[class="word"]').first().text();
		data.meaning = $('div[class="meaning"]').first().text();
		data.example = $('div[class="example"]').first().text();
		data.tags = $('div[class="tags"]').first().text();
		data.contributor = $('div[class="contributor"]').first().text();
		return data;
	};
}

// scraper((err, results) => {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log(results);
// 	}
// })	

module.exports = scraper;