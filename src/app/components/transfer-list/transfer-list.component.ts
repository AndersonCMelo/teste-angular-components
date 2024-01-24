import { Component, ViewChild, OnInit } from '@angular/core';

import { TransferListComponent as SPMSTransferListComponent } from '@spms/ui-angular'

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent implements OnInit {
  @ViewChild(SPMSTransferListComponent, { static: true }) transferlistComponent!: SPMSTransferListComponent

  myItems = [
    {
      id: 1,
      title: 'List item 1',
      checkboxSelected: true,
    },
    {
      id: 2,
      title: 'List item 2',
    },
    {
      id: 3,
      title: 'List item 3',
      checkboxSelected: true,
    },
    {
      id: 4,
      title: 'List item 4',
    },
    {
      id: 5,
      title: 'List item 5',
    },
    {
      id: 6,
      title: 'List item 6',
    },
    {
      id: 7,
      title: 'List item 7',
    },
    {
      id: 8,
      title: 'List item 8',
    }
  ]

  mySelectedItems = [
    {
      id: 9,
      title: 'List item 9',
    },
    {
      id: 10,
      title: 'List item 10',
    },
  ]

  ngOnInit(): void {
    console.log(this.transferlistComponent.getSourceValue());
    console.log(this.transferlistComponent.getTargetValue());
  }

  getLeftValues() {
    const values = this.transferlistComponent.getSourceValue()
    console.log(values)
  }

  getRightValues() {
    const values = this.transferlistComponent.getTargetValue()
    console.log(values)
  }
}
