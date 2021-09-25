import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Monster, MonsterInfo } from './models/monster';
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
    await this.loadMonsterData();
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

  private async loadMonsterData() {
    if (typeof Worker !== 'undefined') {
      this.loadDataViaWorker();
    } else {
      await this.loadDataViaHttp();
    }
  }

  private loadDataViaWorker() {
    const worker = new Worker(
      new URL('./monster-loader.worker', import.meta.url),
      { type: 'module' }
    );
    worker.onmessage = ({ data }) => {
      const allMonsters = data.map((i: MonsterInfo) => new Monster(i)) as Monster[];
      this.allMonsters = this.sortMonsters(allMonsters);
      this.displayedMonsters = this.allMonsters.slice();
    };
    worker.postMessage('');
  }

  private async loadDataViaHttp() {
    const allMonsters = await this.monsterDataService.getAllMonsters();
    this.allMonsters = this.sortMonsters(allMonsters);
    this.displayedMonsters = this.allMonsters.slice();
  }

  private sortMonsters(allMonsters: Monster[]): Monster[] {
    return allMonsters.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      } else if (second.name > first.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
