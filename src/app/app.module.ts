import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {
  MatDialogModule, MatInputModule,
  MatSnackBarModule, MatButtonModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { EntriesComponent } from './entries/entries.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddEntryComponent } from './add-entry/add-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    AddEntryComponent,
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEntryComponent]
})
export class AppModule { }
