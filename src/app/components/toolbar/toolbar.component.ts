import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColumnInfo } from 'src/app/monsters/models/column-info';
import { ColumnManagerService } from '../../monsters/services/column-manager.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  public columns = this.columnManager.columns;

  private updatesSub$!: Subscription;

  constructor(private columnManager: ColumnManagerService) { }

  ngOnInit(): void {
    this.updatesSub$ = this.columnManager.columnUpdates$.subscribe(update => {
      this.columns = update.allColumns;
    });
  }

  ngOnDestroy(): void {
    this.updatesSub$?.unsubscribe();
  }

  toggleColumn(column: ColumnInfo): void {
    column.isShown = !column.isShown;
    this.columnManager.patchColumn(column);
  }

  stopPropagation($event: Event) {
    $event.stopPropagation();
  }
}
