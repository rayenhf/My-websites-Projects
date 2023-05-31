import { Component} from '@angular/core';
import { MydataService } from '../app/services/mydata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  constructor(public MydataService: MydataService){}
  showContent: boolean = false;
  toggleContent(): void {
    this.showContent = true;
    localStorage.setItem('showContent', String(this.showContent));
  }
  title = 'AnimovativHub-Project';

}
