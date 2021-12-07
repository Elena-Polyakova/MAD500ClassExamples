import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(updates: SwUpdate, public _snackBar: MatSnackBar) {
    updates.available.subscribe(event => {
      console.log('current version is', event.current); //displays current hash
      console.log('available version is', event.available); //displays new available hash
      //display a snackbar when an update is available to user
      let snackBarRef = _snackBar.open('An update is available!', 'Okay');
      //snackBarRef.dismiss();
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
      // snackbar after the update has been activated
      let snackBarRef = _snackBar.open('An update has been applied!', 'Okay');
      snackBarRef.onAction().subscribe(() => {
        window.location.reload();
        console.log('Load Update"');

      });

      //snackBarRef.dismiss();
    });
  }


}
