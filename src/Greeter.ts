class Greeter {
  public greeting :string

  constructor () {
    this.greeting = 'yo!'
  }

  public sayHello (): string {
    return this.greeting
  }
}

export default Greeter
