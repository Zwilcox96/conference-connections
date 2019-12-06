import {Component, OnInit, ViewChild} from '@angular/core';
import {Attendee, AttendeesService} from '../attendees.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {
  attendees: Attendee[] = [];
  displayedColumns: string[] = ['name', 'email', 'phone', 'contactPreference', 'badge', 'age', 'gender', 'genderSeeking'];
  dataSource = new MatTableDataSource<Attendee>(this.attendees);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private attendeesService: AttendeesService) { }

  ngOnInit() {
    this.refreshAttendeeData();
  }

  refreshAttendeeData() {
    this.attendeesService.getAttendees().subscribe( response => {
      this.attendees = response;
      this.dataSource.data = this.attendees;
    }, error => {
      console.error(error);
    });
    this.dataSource.paginator = this.paginator;
  }

}
