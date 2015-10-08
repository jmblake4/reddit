import {async, register} from 'platypus';
import BaseService from '../base/base.svc';
import RedditRepository from '../../repositories/reddit/reddit.repo';

export default class RedditService extends BaseService {

    constructor(private redditRepository: RedditRepository) {
        super();
    }

    getRedditList(): async.IThenable<Array<any>> {
        return this.http.json<models.IResponse>({
            method: 'GET',
            url: this.host,
        }).then((success) => {
			var res: any = success;
			// console.log(res);
            return <Array<any>>res.response.data.children;
        });
    }

}

register.injectable('reddit-svc', RedditService, [RedditRepository]);
