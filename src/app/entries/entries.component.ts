import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '../mock-entries';
import { Entry } from '../entry';
import { MatSnackBar, MatDialog } from '@angular/material';

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
  add(entry: Entry): void {
    // this.dialog.open(
    ENTRIES.push(entry);
    this.snack('Entry added!');
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

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }