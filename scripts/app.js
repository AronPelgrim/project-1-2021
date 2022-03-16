const dropDown = document.querySelector("#selectNumber")

import {
	replace
} from './modules/replaceItems.js'
import {
	getBooks
} from './modules/getData.js'

dropDown.addEventListener("change", function(e) {
	replace()
	getBooks()
});