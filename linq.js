const Linqjs = function(selector) {
    return new Linqjs.init(selector);
};

Linqjs.prototype = {
    where(predicate) {
        const filteredElements = Array.from(this.elements).filter(predicate);
        return Linqjs(filteredElements);
    },

    select(selector) {
        const selectedElements = this.elements.map(element => element.querySelector(selector));
        return Linqjs(selectedElements);
    },

    first() {
        return Linqjs(this.elements[0]);
    },

    last() {
        return Linqjs(this.elements[this.elements.length - 1]);
    },

    orderBy(compareFunction) {
        const sortedElements = [...this.elements].sort(compareFunction);
        return Linqjs(sortedElements);
    },

    orderByDescending(compareFunction) {
        const sortedElements = [...this.elements].sort((a, b) => -compareFunction(a, b));
        return Linqjs(sortedElements);
    },

    take(count) {
        const slicedElements = this.elements.slice(0, count);
        return Linqjs(slicedElements);
    },

    skip(count) {
        const slicedElements = this.elements.slice(count);
        return Linqjs(slicedElements);
    },

    any(predicate) {
        return this.elements.some(predicate);
    },

    all(predicate) {
        return this.elements.every(predicate);
    },

    count() {
        return this.elements.length;
    },

    distinct() {
        const uniqueElements = Array.from(new Set(this.elements));
        return Linqjs(uniqueElements);
    },

    reverse() {
        const reversedElements = [...this.elements].reverse();
        return Linqjs(reversedElements);
    },

    addClass(className) {
        this.elements.forEach(element => {
            element.classList.add(className);
        });
        return this;
    },
    
    removeClass(className) {
        this.elements.forEach(element => {
            element.classList.remove(className);
        });
        return this;
    },

    toggleClass(className) {
        this.elements.forEach(element => {
            element.classList.toggle(className);
        });
        return this;
    },

    each(callback) {
        this.elements.forEach((element, index) => {
            callback(index, element);
        });
        return this;
    }
};

Linqjs.init = function(selector) {
    this.elements = Array.from(document.querySelectorAll(selector));
};

Linqjs.init.prototype = Linqjs.prototype;

window.Linqjs = Linqjs;
