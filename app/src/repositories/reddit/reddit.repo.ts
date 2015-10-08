import {async, register, storage} from 'platypus';
import BaseRepository from '../base/base.repo';
import RedditService from '../../services/reddit/reddit.svc';

export default class RedditRepository extends BaseRepository {

    protected redditCache: storage.Cache<any>;

    constructor(cacheFactory: storage.ICacheFactory, private redditService: RedditService) {
		super();
        this.redditCache = cacheFactory.create<any>('redditItems');
    }

    getRedditList(): async.IThenable<Array<any>> {

		return this.redditService.getRedditList().then((redditList) => {
			for (var i=0; i<redditList.length; i++) {
				this.redditCache.put(redditList[i].data.id, redditList[i].data);
			}
			console.log(this.redditCache);
			return(redditList);
		});
	}
	
	getRedditItem(id: any) {
		var redditItem = this.redditCache.read(id);
		return redditItem;
	}

}

register.injectable('reddit-repo', RedditRepository, [storage.ICacheFactory, RedditService]);
