import { Component, OnInit } from '@angular/core';
import { MydataService } from '../services/mydata.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(private MydataService: MydataService) {}

  ngOnInit() {
    this.MydataService.userData$.subscribe((data) => {
      this.userData = data;
    });
  }}
