import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  /**
   * Fake API call that returns static JSON after a short delay.
   * This is a placeholder for a real backend call.
   */
  getFakeData(): Observable<{ message: string; timestamp: string }> {
    const payload = {
      message: 'This is fake API data -- replace with real endpoint.',
      timestamp: new Date().toISOString(),
    };

    return of(payload).pipe(delay(400));
  }
}
