import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any = []
  //grab id
  Id: number = this.activatedrouter.snapshot.params['id'];
  constructor(private http:HttpClient,private data:DataService, private activatedrouter: ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    this.getPosts()
    
  }
  //to get posts
  getPosts(){
    this.data.getPosts().subscribe((data) => 
    {
      this.posts = data;
      //filter the posts by id
      this.posts = this.posts.filter((el: { userId: any; }) => el.userId == this.Id )
      
      console.log(this.posts);
    });
    
  }//back
  back() {
    this.router.navigate(['/details',this.Id]);
  }
}
