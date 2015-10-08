import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class RedditdetailViewControl extends BaseViewControl {
    templateString: string = require('./redditdetail.vc.html');

    context: any = {};
}

register.viewControl('redditdetail-vc', RedditdetailViewControl);
