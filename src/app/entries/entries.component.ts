import { Component, OnInit, Inject } from '@angular/core';
import { ENTRIES } from '../mock-entries';
import { Entry } from '../entry';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddEntryComponent } from '../add-entry/add-entry.component';

@Component({
  selector: 'app-entries',
  templateUrl:   './entries.component.html',
  styleUrls: ['./entries.component.css'],
})
export class EntriesComponent implements OnInit {
  entries = ENTRIES;
  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit() {
  }
  add(): void {
    const ref = this.dialog.open(AddEntryComponent);
    ref.afterClosed().subscribe((data) => {
      if (data) {
        ENTRIES.push({
          id: Date.now(), // tmp way of getting an ID
          name: data.name,
          userId: data.team,
          description: data.description });
        this.snack('Entry added!');
      }
    });
  }
  edit(entry: Entry): void {
    this.snack('Editing not implemented!');
  }
  delete(entry: Entry): void {
    ENTRIES.splice(ENTRIES.indexOf(entry), 1);
    this.snack('Entry removed!');
  }
  vote(entry: Entry): void {
    this.snack('Voting not implemented!');
  }
  private snack(msg: string): void {
    this.snackBar.open(msg, '', { duration: 1000 });
  }
}
