import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
