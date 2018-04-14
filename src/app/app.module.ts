import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatDialogModule, MatSnackBarModule, MatButtonModule, MatIconModule, MatToolbarModule, MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { EntriesComponent } from './entries/entries.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent
  ],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
