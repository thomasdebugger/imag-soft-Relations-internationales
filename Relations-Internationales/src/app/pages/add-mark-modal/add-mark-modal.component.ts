import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-mark-modal',
  templateUrl: './add-mark-modal.component.html',
  styleUrls: ['./add-mark-modal.component.css']
})
export class AddMarkModalComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: String){ }

  ngOnInit() {
  }

}
