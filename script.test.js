/**
 * @jest-environment jsdom
 */

const fs = require('fs')
// const html = require('./index.html')
const html = fs.readFileSync('./index.html')

describe('Grading', () => {
	beforeAll(() => {
		document.body.innerHTML = html;
		require('./script.js')
	})

	it('should not display throws on startup', () => {
		let xs = Array.from(document.querySelectorAll('figure'))
		xs.forEach(x => {
			expect(x.className.includes('hide')).toBe(true)
		})
	})

	function countVisibleFigures() {
		let count = 0
		let figs = Array.from(document.querySelectorAll('figure'))
		figs.forEach(f => {
			if (!f.className.includes('hide'))
				count++
		})
		return count
	}
	it('should display two figures when user clicks throw', () => {
		document.querySelector('#throw').click()

		let count = countVisibleFigures()
		expect(count).toBe(2)
	})

	it('should increase the number of throws', () => {
		const numThrows = document.querySelector('.throw-count')
		let count = Number(numThrows.innerText.split(' ')[0])

		const btn = document.querySelector('#throw')
		btn.click()
		btn.click()
		btn.click()
		expect(numThrows.innerText).toBe((count + 3) + ' throws')
	})
	it('should display a winner eventually', () => {
		const btn = document.querySelector('#throw')
		const dialog = document.querySelector('.game-over')
		const uScore = document.querySelector('.user-score')
		const cScore = document.querySelector('.computer-score')

		let tries = 30
		for( let i=0; i<tries; i++ ) {
			btn.click()
			let xs = [uScore.innerText, cScore.innerText]
			if( !dialog.className.includes('hide') ) {
				expect(xs).toContain('5 points')
				return
			}
		}
		console.log(`Noone won after ${tries} tries`)
		expect(false).toBe(true)
	})

	it('should start over with a clean slate', () => {
		// återställa alla variabler och all grafik när man klickar start over
		const startOverBtn = document.querySelector('#start-over')
		const dialog = document.querySelector('.game-over')
		const uScore = document.querySelector('.user-score')
		const cScore = document.querySelector('.computer-score')
		const numThrows = document.querySelector('.throw-count')
		
		startOverBtn.click()

		expect(dialog.className.includes('hide')).toBe(true)

		expect(countVisibleFigures()).toBe(0)

		expect(uScore.innerText).toBe('0 points')
		expect(cScore.innerText).toBe('0 points')

		let count = Number(numThrows.innerText.split(' ')[0])
		expect(count).toBe(0)
	})

/*
När användaren klickar på knappen `throw` ska följande saker hända:

- slumpa ett kast från _användaren_ (rock/paper/scissors)
- slumpa ett kast från _computer_
- båda kasten ska visas
- utvärdera vilken som får poäng efter följande logik:
- sten trumfar sax
- sax trumfar påse
- påse trumfar sten
- vid lika utdelas inget poäng
- för varje vinst ska `user` eller `computer` få 1 poäng
- först till 5 poäng vinner

När någon når 5 poäng ska dialogrutan med texten "Game over" visas. Den ska tala om vem som vann: användaren eller datorn.

När användaren klickar på "Start over" knappen ska poängen nollställas, dialogrutan göras osynlig och alla kast döljas.
*/
})
