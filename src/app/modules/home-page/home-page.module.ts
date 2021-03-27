import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import {SharedModule} from "../shared/shared.module";
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ContactInfoCardComponent } from './components/contact-info-card/contact-info-card.component';
import { SubscribeFormSectionComponent } from './components/subscribe-form-section/subscribe-form-section.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [HomePageComponent, HeaderComponent, ContactSectionComponent, ContactInfoCardComponent, SubscribeFormSectionComponent],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        CustomMaterialModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class HomePageModule { }
