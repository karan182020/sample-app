import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe( param => {
      const value = param.get('showEmail')
      console.log(value);

    })
  }

}
