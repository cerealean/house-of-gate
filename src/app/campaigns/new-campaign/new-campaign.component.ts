import { Component } from '@angular/core';
import { Campaign } from '../models/campaign';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent {
  public readonly campaign = new Campaign();

  constructor() { }

  public onFileChange($event: Event): void {
    const element = $event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if(file) {
      this.campaign.image = file;
    }
  }

}
