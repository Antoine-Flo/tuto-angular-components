import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
  
  data = [
    { name: 'Bob', age: 24, job: 'Designer' },
    { name: 'Pierre', age: 27, job: 'Autrice' },
    { name: 'Paul', age: 62, job: 'Gardener' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
