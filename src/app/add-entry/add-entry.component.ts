import { Component, OnInit } from '@angular/core';
// import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  name: string;
  team: string;
  description: string;
  constructor(private dialogRef: MatDialogRef<AddEntryComponent>) { }

  ngOnInit() {
  }
  cancel(): void {
    this.dialogRef.close();
  }
  add(): void {
    this.dialogRef.close({
      name: this.name, team: this.team, description: this.description,
    });
  }
}
