import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  activeState: boolean[] = [true, false, false];

  toggle(index: number) {
      this.activeState[index] = !this.activeState[index];
  }
}
