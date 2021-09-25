import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Monster } from './models/monster';
import { MonsterDataService } from './monster-data.service';
import { MonsterFilters } from './models/monster-filters';
import { MonsterFilterService } from './services/monster-filter.service';
import { TermsAcknowledgementService } from './services/terms-acknowledgement.service';
import { MatDialog } from '@angular/material/dialog';
import { InitializationNoticeComponent } from './components/initialization-notice/initialization-notice.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private allMonsters: Monster[] = [];
  public displayedMonsters: Monster[] = [];
  public filters!: MonsterFilters;
  public hasAcknowledgedTerms = false;
  public isLoading = true;

  public readonly currentYear = new Date().getFullYear();

  private subscriptions = new Subscription();

  constructor(
    private monsterDataService: MonsterDataService,
    private monsterFilter: MonsterFilterService,
    private termsService: TermsAcknowledgementService,
    private matDialog: MatDialog
  ) {}

  async ngOnInit() {
    this.hasAcknowledgedTerms = this.termsService.hasAcknowledgedTerms();
    if (!this.hasAcknowledgedTerms) {
      const ref = this.matDialog.open(InitializationNoticeComponent);
      const sub$ = ref.afterClosed().subscribe((hasAcknowledged) => {
        this.hasAcknowledgedTerms = hasAcknowledged;
        if (hasAcknowledged) {
          sub$?.unsubscribe();
        }
      });
      this.subscriptions.add(sub$);
    }
    // if (typeof Worker !== 'undefined') {
    //   console.log('is using worker');
    //   const worker = new Worker(
    //     new URL('./monster-loader.worker', import.meta.url)
    //   );
    //   worker.onmessage = ({ data }) => {
    //     const allMonsters = data.slice() as Monster[];
    //     this.allMonsters = allMonsters.sort((first, second) => {
    //       if (first.name > second.name) {
    //         return 1;
    //       } else if (second.name > first.name) {
    //         return -1;
    //       } else {
    //         return 0;
    //       }
    //     });
    //     this.displayedMonsters = this.allMonsters.slice();
    //     console.log('done loading all monsters', this.allMonsters.slice());
    //   };
    //   worker.postMessage('');
    // } else {
      const allMonsters = await this.monsterDataService.getAllMonsters();
      this.allMonsters = allMonsters.sort((first, second) => {
        if (first.name > second.name) {
          return 1;
        } else if (second.name > first.name) {
          return -1;
        } else {
          return 0;
        }
      });
      this.displayedMonsters = this.allMonsters.slice();
    // }
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

  filter(filters: MonsterFilters) {
    this.filters = filters;
    const filteredMonsters = this.monsterFilter.filterMonsters(
      this.allMonsters,
      this.filters
    );
    this.displayedMonsters = filteredMonsters;
  }

  tableLoading(isLoading: boolean): void {
    setTimeout(() => {
      this.isLoading = isLoading;
    });
  }
}
