class Counter {
    constructor() {
      this.count = 0;
    }
    increment() {
      this.count++;
      this.updateDisplay();
    }
    decrement() {
      this.count--;
      this.updateDisplay();
    }
    reset() {
      this.count = 0;
      this.updateDisplay();
    }
    updateDisplay() {
      document.getElementById("counterDisplay").textContent = this.count;
    }
  }
  const counter = new Counter();
  document.getElementById("incrementBtn").addEventListener("click", counter.increment.bind(counter));
  document.getElementById("decrementBtn").addEventListener("click", counter.decrement.bind(counter));
  document.getElementById("resetBtn").addEventListener("click", counter.reset.bind(counter));
 
