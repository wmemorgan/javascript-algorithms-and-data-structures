class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total + WEIRD_PRIME + value) % this.keyMap.length;
		}

		return total;
    }
    
    set(key, value) {
        if (!this.keyMap[this._hash(key)]) {
            this.keyMap[this._hash(key)] = []
        } 
        this.keyMap[this._hash(key)].push([key, value])
    }

    get(key) {
        if (!this.keyMap[this._hash(key)]) {
            return undefined
        } else {
            let value = this.keyMap[this._hash(key)].find(el => el[0] === key)[1]
            return value
        }
    }

    keys() {
        
    }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")