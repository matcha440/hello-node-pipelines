class Greeter {
  public greeting :string

  constructor () {
    this.greeting = 'Hello World!'
  }

  public sayHello (): string {
    return this.greeting
  }
}

export default Greeter
