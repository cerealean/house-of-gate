import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewCampaignComponent } from '../new-campaign/new-campaign.component';

@Component({
  selector: 'app-campaigns-landing',
  templateUrl: './campaigns-landing.component.html',
  styleUrls: ['./campaigns-landing.component.scss']
})
export class CampaignsLandingComponent implements OnInit {
  public campaigns = [];

  constructor(
    private readonly dialog: MatDialog
    ) { }

  ngOnInit(): void {
    // Empty
    const rawr = 'rawr';
  }

  openNewCampaignDialog(): void {
    const dialog = this.dialog.open(NewCampaignComponent);
  }

}
