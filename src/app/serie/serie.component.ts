import { Component, OnInit } from '@angular/core';
import { restoredata } from "../model/restoredata";
import { MydataService } from '../services/mydata.service';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  movielist!:restoredata[];
  constructor (private dataservice: MydataService){}
ngOnInit(): void {
  this.dataservice.getmovie().subscribe(
    (d:restoredata[])=>this.movielist=d);
}
toggleStory(card: any): void {
  card.showStory = !card.showStory;
}
}
