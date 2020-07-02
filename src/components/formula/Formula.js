import { ExcelComponent } from '../../core/ExcelCompoenent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log(event.target.textContent.trim())
    // console.log('Formula: onInput', event.target.textContent.trim())
  }

  onClick() {
    console.log(this.name + ': onClick')
  }
}
