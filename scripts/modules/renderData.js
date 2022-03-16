export function renderBooks(data) {
    const ul = document.querySelector('ul');
	const results = data.results;
	results.forEach((book) => {
		const html = `
            <li>
                <img src="${book.coverimages[1]}">
                <h2>${book.titles[0]}</h2>
                <p>${book.summaries ? book.summaries[0] : 'Sorry, geen samenvatting beschikbaar.'}</p>
                <p>${book.authors}</p>
            </li>
          `;
		ul.insertAdjacentHTML('beforeend', html);
	});
}