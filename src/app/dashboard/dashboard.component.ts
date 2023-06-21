import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Association } from '../interfaces/association';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  columns = 4;
  associations: Association[] = []
  tiles: any = []

  constructor(private http: ApiService) {}

  ngOnInit() {
    this.initAssociations();
  }

  public getStyles() {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.columns}, 1fr)`,
      'justify-items': 'center',
    };
  }

  private initAssociations() {
    this.http.getAssociations().subscribe(response => {
      this.associations = response
      const associationsNOK = response.filter(association => association.status === 'nok')
      const associationsOK = response.filter(associations => associations.status === 'ok')

      this.tiles.push({
        "tileName": "Associations",
        "statusOK": associationsOK.length,
        "statusNOK": associationsNOK.length
      })
    })
  }

}
