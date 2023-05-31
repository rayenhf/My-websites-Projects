import { Component } from '@angular/core';
import { restoredata } from "../model/restoredata";
import { MydataService } from '../services/mydata.service';
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
  animelist!:restoredata[];
  constructor (private mydata: MydataService){}
ngOnInit(): void {
  this.mydata.getanime().subscribe(
    (d:restoredata[])=>this.animelist=d);
}
toggleStory(card: any): void {
  card.showStory = !card.showStory;
}

}
