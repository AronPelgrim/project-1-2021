export function replace() {
	for (const node of document.querySelectorAll("li:not(li:first-of-type), li h2, li p, li img")) {
		const parent = node.parentNode;
		const children = Array.from(node.children);
		for (const child of children) {
			node.removeChild(child);
			parent.insertBefore(child, node);
		}
		parent.removeChild(node);
	}
}