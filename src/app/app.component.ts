import { Component, Input } from '@angular/core';
import {Colors} from "./Colors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @Input()
  color: string
  // constructor(private userService: UserService) {}

  @Input()
  value: Number
  protected readonly Colors = Colors;
  protected readonly Math = Math;
}
