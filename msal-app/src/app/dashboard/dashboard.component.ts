import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username = '';
  apiResponse: any;

  constructor(private apiService: ApiService, private msalService: MsalService) { }

  ngOnInit(): void {
    const accounts = this.msalService.instance.getAllAccounts();
    this.username = accounts.length ? accounts[0].username : '';

    this.apiService.getFakeData().subscribe(response => {
      this.apiResponse = response;
    });
  }
}
