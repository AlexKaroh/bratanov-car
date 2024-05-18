import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-driver-benefits',
  standalone: true,
  templateUrl: './driver-benefits.component.html',
  styleUrl: './driver-benefits.component.scss',
  imports: [RouterOutlet],
})
export class DriverBenefitsComponent {
  constructor(public router: Router) {}
}
