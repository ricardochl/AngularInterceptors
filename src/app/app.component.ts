import { MyService } from './services/my.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular Intercerptors';
  public response : any;
  constructor(private myService : MyService, private toastr : ToastrService) {

  }

  ngOnInit(): void {
  
  }
  getUser(){
    this.myService.getUser().subscribe(res=>{
      this.response = res;
    });  
  }
}
