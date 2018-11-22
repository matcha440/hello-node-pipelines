import Greeter from './Greeter'

const greeter = new Greeter()

export default function () {
  console.log(greeter.sayHello())
}
