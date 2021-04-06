import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: "Number of users" },
    { value: 900, label: "Revenue" },
    { value: 55, label: "Reviews" }
  ];

  items = [
    { image: '/assets/images/couch.jpeg', title: "couch", description: "Nice couch to sit on" },
    { image: '/assets/images/dresser.jpeg', title: "dresser", description: "Nice dresser to put stuff in" },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
