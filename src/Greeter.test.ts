import Greeter from './Greeter'

describe('greeter', () => {
  it('sayHello() should return "Hello World!"', () => {
    const greeter = new Greeter()
    expect(greeter.sayHello()).toBe('Hello World!')
  })
})
