import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'This is the title', content: 'And this is the content, it is good, I like it' },
    { title: 'Another one look at that', content: 'It is still content but this one is different from the previous one' },
    { title: 'I do not know', content: 'It is still content but this one is again different from the previous one' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
