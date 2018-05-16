function rand(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

class Node {
	constructor(elem) {
		this.elem = elem;
	}
	append(tpl) {
		this.elem.insertAdjacentHTML('beforeend', tpl);
	}
	prepend(tpl) {
		this.elem.insertAdjacentHTML('afterbegin', tpl);
	}
	insert(tpl) {
		this.elem.innerHTML = tpl;
	}
}	