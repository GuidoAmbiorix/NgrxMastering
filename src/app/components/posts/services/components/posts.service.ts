import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>{
  return this.http.get<Post[]>("https://angular-rxjspost-default-rtdb.firebaseio.com/posts.json").pipe(
    map(data => {
      const posts:Post[] = [];
      for(let key in data){
        posts.push({...data[key], id:key});
      }
      return posts;
    })
  );
  }


  addPost(post:Post):Observable<{name:string}>{
    return this.http.post<{name:string}>("https://angular-rxjspost-default-rtdb.firebaseio.com/posts.json",post);
  }

  editPost(post:Post){
    const postData = {[post.id!]: {title:post.title,description:post.description}};

    return this.http.patch("https://angular-rxjspost-default-rtdb.firebaseio.com/posts.json",postData);
  }

  deletePost(id:string){
    return this.http.delete(`https://angular-rxjspost-default-rtdb.firebaseio.com/posts.json?id=${id}`);
  }

}
