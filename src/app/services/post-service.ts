import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BaseService} from "./base-service";
import {Posts} from "../classes/posts";
import {Status} from "../classes/status";

@Injectable()
export class PostService extends BaseService {
	constructor(protected http: Http) {
		super(http);
	}

	private postsUrl = "apis/posts/";

	getAllPosts() : Observable<Posts[]> {
	return(this.http.get(this.postsUrl)
		.map(this.extractData)
		.catch(this.handleError));
	}

	getPostsByPostsId(postsId : number) : Observable<Posts> {
		return(this.http.get(this.postsUrl + postsId)
			.map(this.extractData)
			.catch(this.handleError));
	}
}