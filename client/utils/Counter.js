class Counter {
	constructor() {
		console.log("Created Counter");
		this.sequence = [];
		this.progress = 0;
	}
  
	success() {
		this.progress = 0;
		console.log("SUCCESS");
	}

	getStatus() {
		if (this.progress === 0) {
			return 'red';
		} else if (this.progress === this.sequence.length) {
			return 'green';
		} else {
			return 'yellow';
		}
	}
  
	updateCount(fromIndex, toIndex) {
		var currentKey = Object.keys(this.sequence[this.progress])[0];
		var currentValue = this.sequence[this.progress][currentKey];
		console.log(currentKey, currentValue);
		if (currentKey === fromIndex) {
			if (currentValue === toIndex) {
			console.log("PROGRESS");
			this.progress++;
			if (this.progress === this.sequence.length) {
				this.success();
			}
			}
		} else {
			console.log("RESET");
			this.progress = 0;
		}
		console.log(`from: ${fromIndex} to: ${toIndex}`);
	}
  
	updateSequence(sequence) {
		this.sequence = sequence;
		console.log(`Sequence is now: `);
		console.log(JSON.stringify(sequence));
	}
  }
  
  const counter = new Counter();
  counter.updateSequence([{ 1: 3 }]);
  export default counter;
  