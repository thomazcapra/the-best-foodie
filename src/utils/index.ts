import { asyncScheduler, fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

export const documentScroll$ = fromEvent(document, 'scroll')
    .pipe(
        throttleTime(50, asyncScheduler, { leading: false, trailing: true }),
        map((e: any) => e.target.scrollingElement as HTMLElement)
    )