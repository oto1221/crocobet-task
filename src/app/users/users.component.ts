import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any = []
  constructor(private http:HttpClient,private data:DataService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers()
  }
  //get users information
  getUsers(){
    this.data.getData().subscribe(data => 
      {this.users = data;
      console.log(this.users)      
      });
  }
  //for navigation and sending id to posts component
  userDetails(id: any) {
    this.router.navigate([`details/${id}`]);
    
  }
}
