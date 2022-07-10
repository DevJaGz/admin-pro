import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  get getValuePercentages(): string {
    return `${this.progressValue}%`
  }
  progressValue: number = 25;

  changeProgressValue(value: number): void {
    this.progressValue += value;
    if (this.progressValue > 100) this.progressValue = 100;
    if (this.progressValue < 0) this.progressValue = 0;
  }

}
