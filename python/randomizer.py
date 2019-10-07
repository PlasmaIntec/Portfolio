from Crawler import Crawler
from pathlib import Path
from names import get_first_name, get_last_name
from random import random
from json import dumps

def random_page(url):
	crawler = Crawler()
	crawler.get(url)
	assert "Urban Dictionary" in crawler.title, "TITLE INCORRECT"
	try:
		# find random page
		random_button = crawler.findElementByXPath("//a[@class='circle-button' and @href='/random.php']")
		crawler.highlight("//a[@class='circle-button' and @href='/random.php']")
		crawler.click(random_button)

		# extract content
		content = {}
		content["word"] = crawler.findElementByXPath("(//a[@class='word'])[1]").text
		crawler.highlight("(//a[@class='word'])[1]")
		content["meaning"] = crawler.findElementByXPath("(//div[@class='meaning'])[1]").text
		crawler.highlight("(//div[@class='meaning'])[1]")
		content_dict = dumps(content)
		return content_dict
	except:
		print('MISSING', e)
	crawler.close()

if __name__ == '__main__':
	print(random_page("https://urbandictionary.com"))