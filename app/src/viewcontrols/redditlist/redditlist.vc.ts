import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import RedditRepository from '../../repositories/reddit/reddit.repo';

export default class RedditlistViewControl extends BaseViewControl {

	constructor(private redditRepository: RedditRepository) {
		super();
	}
	
    templateString: string = require('./redditlist.vc.html');

    context: any = {
		redditList: <Array<any>> []
	};

	navigatedTo(): void {
		this.redditRepository.getRedditList().then((redditList) => {
			this.context.redditList = redditList;
		});
	};

}

register.viewControl('redditlist-vc', RedditlistViewControl, [RedditRepository]);
