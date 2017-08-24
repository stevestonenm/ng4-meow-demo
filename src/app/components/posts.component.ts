import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";
import {PostService} from "../services/post-service";
import {Posts} from "../classes/posts";

@Component({
	templateUrl: "./templates/posts.php"
})

export class PostsComponent {

	posts : Posts[]

	constructor(protected postService: PostService) {}

	getAllPosts() : void {
		this.postService.getAllPosts()
			.subscribe(posts=>this.posts=posts);
	}
}
