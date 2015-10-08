import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import RedditListViewControl from '../viewcontrols/redditlist/redditlist.vc';
import RedditDetailViewControl from '../viewcontrols/redditdetail/redditdetail.vc';

export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: RedditListViewControl },
            { pattern: 'redditdetail/:id', view: RedditDetailViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
