import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import RedditRepository from '../../repositories/reddit/reddit.repo';
import RedditService from '../../services/reddit/reddit.svc';

export default class RedditlistViewControl extends BaseViewControl {

	constructor(private redditService: RedditService) {
		super();
	}
	
    templateString: string = require('./redditlist.vc.html');

    context: any = {
		redditList: <Array<any>> []
	};

	navigatedTo(): void {
		this.redditService.getRedditList().then((redditList) => {
			this.context.redditList = redditList;
		});
	};

}

register.viewControl('redditlist-vc', RedditlistViewControl, [RedditService]);
