import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { TreeNode } from 'primeng/api'

interface TreeItemInterface {
	id?: string
	label?: string
	icon?: string
	expanded?: boolean
	children: TreeItemInterface[] | []
}

interface DefaultExpandedInterface {
	id: string,
	includes(searchElement?: string, fromIndex?: number): boolean
}

@Component({
  selector: 'spms-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponent implements OnInit, OnDestroy {
  checked: boolean = false
  metaKeySelection: boolean = false

  @Input() items!: TreeItemInterface[]
	@Input() isFocusSelected: boolean = true
	@Input() expandIcon: string = 'pi-angle-down'
	@Input() closeIcon: string = 'pi-angle-right'
	@Input() defaultExpanded!: DefaultExpandedInterface | undefined
	selectionMode: "single" | "multiple" | "checkbox" | null | undefined = 'single' // "single" | "multiple" | "checkbox"

	selectedItems: TreeNode[] = []
	expandedAll: boolean | false = false

  nodes!: TreeNode[] // The component items
  arrowIcon: string = 'arrow-right'

  @Input() variant: "single" | "multiple" | "checkbox" | "none" = 'single' // "single" | "multiple" | "checkbox" | "none"

  constructor() {}

  ngOnInit(): void {
    if (this.items !== undefined) {
      let tobeItems = []
      tobeItems = this.recursiveItems(this.items)

      this.nodes = tobeItems
    }

    console.log('this.variant', this.variant)

    if (this.variant === 'none') {
      this.metaKeySelection = true
    } else if (this.variant === 'single') {
      this.selectionMode = 'single'
    } else if (this.variant === 'multiple') {
      this.selectionMode = 'multiple'
    } else if (this.variant === 'checkbox') {
      this.selectionMode = 'checkbox'
    }
  }

  handleExpand() {
    this.handleExpandAll(this.expandedAll)
  }

  getValues() {
    return this.selectedItems
  }

  handleSelection(nodes: any) {
		if (nodes === undefined) return
		this.selectedItems = nodes

    if (this.variant === 'none') {
      this.selectedItems = []
    }
	}

  private handleExpandAll(isExpandAll: boolean) {
		this.expandedAll = !isExpandAll

		this.nodes.forEach((node) => {
			this.expandRecursive(node, !isExpandAll)
		})
	}

  private recursiveItems(node: TreeItemInterface[]) {
		const items: TreeNode[] = []
		node.forEach((item: any) => {
			return items.push({
				key: item.id,
				label: item.label,
				icon: item.icon,
				expanded: (this.defaultExpanded ? this.defaultExpanded.includes(item.id) : false),
				children: (item.children ? this.recursiveItems(item.children) : [])
			})
		})

		return items
	}

  private expandRecursive(node: TreeNode, isExpand: boolean) {
		node.expanded = isExpand

		if (node.children) {
			node.children.forEach((childNode) => {
				this.expandRecursive(childNode, isExpand)
			});
		}
	}

  testNode(event: {originalEvent: Event, node: TreeNode}) {
    console.log('event.node', event.node)
    console.log('this.nodes', this.nodes)

    this.nodes.forEach(item => {
      console.log('item', item)
      if (item === event.node) {
        console.log('é o mesmo')

      } else {
        console.log('NÃO é o mesmo')
      }
    })
  }

  ngOnDestroy(): void {}
}
