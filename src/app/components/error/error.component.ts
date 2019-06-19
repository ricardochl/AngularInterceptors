import { MyService } from './../../services/my.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private myService: MyService) { }

  ngOnInit() {
  }

  run(){
    this.myService.getUsers().subscribe(result=>{
      console.log(result);
    });
  }

}
