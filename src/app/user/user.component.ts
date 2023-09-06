import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>
      user works!
    </p>
  `,
  styles: [
  ]
})
export class UserComponent implements OnInit{

  ngOnInit() {
    console.log('marche');
  }
}
