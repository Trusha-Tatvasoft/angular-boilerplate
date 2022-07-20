import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    templateUrl: 'user-delete.dialog.html',
})
export class UserDeleteDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<UserDeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit(): void {
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    submit() {
    }


}
