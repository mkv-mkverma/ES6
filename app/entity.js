export class Entity {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  greet() {
    console.log(
      `Hi! I'm ${this.name} from Bangalore and my height is ${this.height}`
    );
  }
}

// export { Entity };