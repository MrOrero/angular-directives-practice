import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .counter {
        color: white;
        background-color: blue;
      }
    `,
  ],
})
export class AppComponent {
  displayStatus = true;
  clickLogs = [];
  timeStamp = Date.now().toString();
  arrayCounter = 0;

  changeDisplayStatus() {
    this.displayStatus = !this.displayStatus;
  }

  logClick() {
    console.log(this.timeStamp);
    this.clickLogs.push(this.timeStamp);
    this.arrayCounter += 1;
  }
}
