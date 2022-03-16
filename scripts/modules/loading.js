export function showLoading() {
	const loadingSection = document.querySelector('div');
	loadingSection.classList.add('loader');
}

export function hideLoading() {
	const loadingSection = document.querySelector('.loader');
	loadingSection.classList.remove('loader');
}