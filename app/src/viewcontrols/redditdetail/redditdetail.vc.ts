import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import RedditRepository from '../../repositories/reddit/reddit.repo';

export default class RedditdetailViewControl extends BaseViewControl {

	constructor(private redditRepository: RedditRepository) {
		super();
	}

    templateString: string = require('./redditdetail.vc.html');

    context: any = {
		// redditItem: <any> {
		// 	title: <string> '',
		// 	author: <string> '',
		// 	id
		// }
		redditUrl: <string> '',
		redditTitle: <string> '',
		redditAuthor: <string> '',
		redditId: <string> ''
	};

	navigatedTo(params: { id: string; }, query: any): void {
		var redditItem = this.redditRepository.getRedditItem(params.id);
		this.context.redditUrl = redditItem.url;
		this.context.redditTitle = redditItem.title;
		this.context.redditAuthor = redditItem.author;
		this.context.redditId = redditItem.id;
	};

}

register.viewControl('redditdetail-vc', RedditdetailViewControl, [RedditRepository]);
