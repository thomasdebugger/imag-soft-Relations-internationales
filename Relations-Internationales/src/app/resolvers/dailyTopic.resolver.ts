import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DailyTopic } from '../models/daily-topic';
import { DailyTopicsService } from '../services/back/daily-topics.service';

@Injectable()
export class DailyTopicResolver implements Resolve<DailyTopic> {
    constructor(private readonly dailyTopicService: DailyTopicsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DailyTopic> {
        return this.dailyTopicService.getDailyTopic(route.params.idDqilyTopic);
    }
}
