import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import RedditService from '../../services/reddit/reddit.svc';

export default class RedditRepository extends BaseRepository {

	// constructor(private redditService: RedditService) {
	// 	super();
	// }

    // getRedditList(): async.IThenable<Array<any>> {
	// 	return this.redditService.getRedditList().then((redditList) => {
	// 		console.log(redditList);
	// 		return(redditList);
	// 	});
	// }

}

register.injectable('reddit-repo', RedditRepository, [RedditService]);
