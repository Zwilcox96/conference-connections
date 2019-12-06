import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../environments/environment';

export interface Attendee {
  name: string;
  email: string;
  phone: string;
  formattedPhoneNumber: string;
  contactPreferenceEmail: boolean;
  contactPreferencePhone: boolean;
  badge: string;
  age: number;
  genderSeeking: string;
  gender?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AttendeesService {

  constructor(private http: HttpClient) {}

  getAttendee(badge: string): Observable<Attendee> {
    const url = `${environment.apiUrl}/api/attendees/${badge}`;
    return this.http.get<Attendee>(url).pipe(
      tap(_ => console.log(`fetched Attendee id=${badge}`)),
      catchError(this.handleError<Attendee>(`getAttendee id=${badge}`))
    );
  }

  getAttendees(): Observable<Attendee[]> {
    return this.http.get<Attendee[]>(`${environment.apiUrl}/api/attendees`)
      .pipe(
        tap(_ => console.log('fetched Attendees')),
        catchError(this.handleError<Attendee[]>('getAttendees', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
