import { Component } from '@angular/core';

import { AppRoutes } from '@core/enums/app-routes.enum';

@Component({
  selector: 'app-unselected',
  templateUrl: './unselected.component.html',
  styleUrls: ['./unselected.component.scss']
})
export class UnselectedComponent {
  public AppRoutes: typeof AppRoutes = AppRoutes;
}
