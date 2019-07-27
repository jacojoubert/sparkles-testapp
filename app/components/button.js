import Component, { tracked } from 'sparkles-component';

export default class Button extends Component {
  @tracked value = true;

  test() {
    this.value = false;
  }
}
