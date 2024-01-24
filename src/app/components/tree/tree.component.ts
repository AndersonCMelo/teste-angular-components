import { Component, ViewChild } from '@angular/core';

import { TreeComponent as TreeLibraryComponent } from '@spms/ui-angular'

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  myItems: any = [
    {
      id: 'parent',
      label: 'Parent',
      icon: 'pi-chart-bar',
      children: [
        {
          id: 'child-1',
          label: 'Child - 1',
          icon: 'users',
          children: [
            {
              id: 'child-1-item-1',
              label: 'Child 1 - Item 1',
            },
            {
              id: 'child-1-item-2',
              label: 'Child 1 - Item 2',
              children: [
                {
                  id: 'child-1-item-2-child-1-item-1',
                  label: 'Child 1 - Item 2 - Child 1 - Item 1',
                },
              ],
            },
          ],
        },
        {
          id: 'child-2',
          label: 'Child - 2',
          children: [
            {
              id: 'child-2-item-1',
              label: 'Child 2 - Item 1',
            },
          ],
        },
      ],
    },
    {
      id: 'applications',
      label: 'Applications',
      icon: 'reload',
      checkbox: {
        value: 'applications',
        checked: false,
        color: 'primary',
        size: 'small',
        disabled: false
      },
      children: [
        {
          id: 'design-system',
          label: 'Design System',
          checkbox: {
            value: 'design-system',
            checked: false,
            color: 'primary',
            size: 'small',
            disabled: false
          },
        },
      ],
    },
  ]

  @ViewChild(TreeLibraryComponent, { static: true }) treeComponent!: TreeLibraryComponent

  expandAll() {
    this.treeComponent.handleExpand()
  }

  getValues() {
    const values = this.treeComponent.getValues()
    console.log('values', values)
  }
}
