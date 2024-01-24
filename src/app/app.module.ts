import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SPMSAngularIconsModule } from "@spms/angular-icons";
import { SPMSModule } from "@spms/ui-angular";

import { RadioComponent } from './components/radio/radio.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { HomeComponent } from './components/home/home.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TreeComponent } from './components/tree/tree.component';
import { TransferListComponent } from './components/transfer-list/transfer-list.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioComponent,
    AccordionComponent,
    AvatarComponent,
    ButtonComponent,
    CheckboxComponent,
    // HomeComponent,
    SwitchComponent,
    TabsComponent,
    TreeComponent,
    TransferListComponent,
    BottomNavigationComponent,
    BreadcrumbComponent,
    PaginationComponent,
    StepperComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    // FormsModule,
    ReactiveFormsModule,

    SPMSAngularIconsModule,
    SPMSModule,

    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
