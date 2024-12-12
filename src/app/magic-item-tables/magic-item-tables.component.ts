import { Component, OnInit } from '@angular/core';
import { MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { ItemWithDiceRoll, MIT_A, MIT_B, MIT_C, MIT_D, MIT_E } from '../data/static/item-tables';
import { MatFormField, MatLabel, MatOption, MatSelect } from '@angular/material/select';

@Component({
    selector: 'app-magic-item-tables',
    imports: [
        MatTable,
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderCellDef,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatSelect,
        MatOption,
        MatFormField,
        MatLabel
    ],
    templateUrl: './magic-item-tables.component.html',
    styleUrl: './magic-item-tables.component.scss'
})
export class MagicItemTablesComponent implements OnInit {
  public readonly dataSource = new MatTableDataSource<ItemWithDiceRoll>([]);
  public readonly magicItemTables = {
    A: MIT_A,
    B: MIT_B,
    C: MIT_C,
    D: MIT_D,
    E: MIT_E
  };
  public selectedMIT = this.magicItemTables.A;

  ngOnInit(): void {
    this.selectionChange();
  }

  public selectionChange() {
    this.dataSource.data = this.selectedMIT.toObjectArray();
  }
}
