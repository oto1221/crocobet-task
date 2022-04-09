import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details:any = []
  //grab id
  Id: number = this.activatedrouter.snapshot.params['id'];
  constructor(private http:HttpClient,private data:DataService, private activatedrouter: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getUsers(this.Id)
    console.log(this.Id);  
  }//get users
  getUsers(id:any){
    this.data.getData().subscribe((data) => 
      {
        this.details = data;
        console.log(data);
        //filtering data by id
        this.details = this.details.filter((el: { id: any; }) => el.id == this.activatedrouter.snapshot.params['id'])
      });
      
  }//back
  back() {
    this.router.navigate(['../']);
  }
}
