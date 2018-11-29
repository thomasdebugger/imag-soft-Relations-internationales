import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-private-life-modal',
  templateUrl: './add-private-life-modal.component.html',
  styleUrls: ['./add-private-life-modal.component.css']
})
export class AddPrivateLifeModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddPrivateLifeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
