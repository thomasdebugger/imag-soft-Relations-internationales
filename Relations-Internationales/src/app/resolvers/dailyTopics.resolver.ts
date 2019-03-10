import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DailyTopic } from '../models/daily-topic';
import { DailyTopicsService } from '../services/back/daily-topics.service';

@Injectable()
export class DailyTopicsResolver implements Resolve<{
    dailyTopics: DailyTopic[],
    nbRows: number
}> {
    constructor(private readonly dailyTopicService: DailyTopicsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{
        dailyTopics: DailyTopic[],
        nbRows: number
    }> {
        if (localStorage.getItem('type') === 'administrator') {
            return this.dailyTopicService.getDailyTopicsByStudent(route.params.idPerson);
        }
        return this.dailyTopicService.getDailyTopicsByStudent(localStorage.getItem('idPerson'));
    }
}
