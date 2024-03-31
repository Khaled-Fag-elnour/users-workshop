import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

const DECLARATIONS = [
  HeaderComponent,
  UserCardComponent
]

const MODULES = [
  CommonModule,
  FormsModule,
  NgxPaginationModule,
  RouterModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...MODULES],
  exports: [...DECLARATIONS, ...MODULES]
})
export class SharedModule { }
