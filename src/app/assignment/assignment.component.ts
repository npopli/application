import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
secretShow = false;
log = [];


  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.secretShow = !this.secretShow;
    this.log.push(new Date());
  }
}
