function greet(name) {
    console.log(`Hello, ${name}! I am ${this.title}.`);
  }
  
  const person = { title: 'Mr.' };
  greet.call(person, 'John');
  greet.apply(person, ["sarthak"])
  