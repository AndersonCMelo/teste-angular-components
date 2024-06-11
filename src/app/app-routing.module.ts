import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { AccordionComponent } from './components/accordion/accordion.component'
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component'
import { AvatarComponent } from './components/avatar/avatar.component'
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component'
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { ButtonComponent } from './components/button/button.component'
import { CheckboxComponent } from './components/checkbox/checkbox.component'
import { ChipsComponent } from './components/chips/chips.component'
import { DividerComponent } from './components/divider/divider.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { RadioComponent } from './components/radio/radio.component'
import { SwitchComponent } from './components/switch/switch.component'
import { TableComponent } from './components/table/table.component'
import { TabsComponent } from './components/tabs/tabs.component'
import { TextInputComponent } from './components/text-input/text-input.component'
import { TransferListComponent } from './components/transfer-list/transfer-list.component'
import { TreeComponent } from './components/tree/tree.component'
import { StepperComponent } from './components/stepper/stepper.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'avatar', component: AvatarComponent },
  { path: 'bottom-navigation', component: BottomNavigationComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'radio-button', component: RadioComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'table', component: TableComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'text-input', component: TextInputComponent },
  { path: 'transfer-list', component: TransferListComponent },
  { path: 'tree', component: TreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
