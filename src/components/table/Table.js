import { ExcelComponent } from '../../core/ExcelCompoenent'
import { createTable } from './table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return createTable(1000)
  }
}
