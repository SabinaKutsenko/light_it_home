function* genFunc() {
	yeld 1
	yeld 2
	yeld 3 
}

function regfunc() {
	return 1;
}

getfun(); /*( for of )*//* iterator*/

const obj = {
	
	[Symbol.iterator](){
		let ind = 0;
		return {
			next: () => {
				if(ind === 3) {
					return {done: true}  
				}
				return { done: false, value: ind++}
			}
		}
	}
}

const test = obj[Symbol.iterator]();