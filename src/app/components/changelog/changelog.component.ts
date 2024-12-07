import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-changelog',
    templateUrl: './changelog.component.html',
    styleUrls: ['./changelog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCard]
})
export class ChangelogComponent {

  constructor() { }
}
