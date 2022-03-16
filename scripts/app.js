const cors = 'https://cors-anywhere.herokuapp.com/'
const search = 'https://zoeken.oba.nl/api/v1/search/?q='
const key = 'dc0e2f073c03758140452044906bc818'
const categorie = 'sportvoeding'
const secret = '6b02878111c06660300798cf4c40a685'
const config = {
    Authorization: `Bearer ${secret}`
}
const url = `${cors}${search}${categorie}&authorization=${key}&sort=act_dt_asc&output=json`

fetch(url, config)
    .then(response => response.json())
    .then(data => console.table(data.results))