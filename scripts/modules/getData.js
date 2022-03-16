import {
	showLoading
} from './loading.js'
import {
	hideLoading
} from './loading.js'
import {
	renderBooks
} from './renderData.js'

export function getBooks() {
    const dropDown = document.querySelector("#selectNumber")
	const cors = 'https://cors-anywhere.herokuapp.com/';
	const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
	const valueDropdown = dropDown.options[dropDown.selectedIndex].value.toString();
	const key = '17a9c4d4d56a41b55abc2d3096e94be4';
	const secret = '4289fec4e962a33118340c888699438d';
	const detail = 'Default';
	const url = `${cors}${endpoint}${valueDropdown}&authorization=${key}&detaillevel=${detail}&output=json`;
	const config = {
		Authorization: `Bearer ${secret}`
	};
	showLoading()
	fetch(url, config).then(response => {
		return response.json();
	}).then(data => {
		renderBooks(data);
		hideLoading()
	}).catch(err => {
		console.log(err);
	});
}