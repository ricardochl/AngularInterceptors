import { MyService } from './../../services/my.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public response: any;
  constructor(private http: HttpClient, public loaderService: LoaderService, private myService: MyService ) { }

  ngOnInit() {
  }

  getData(){
    this.myService.getAlbum().subscribe(result=>{
      this.response = result;
    })
  }

}
