import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { MaterialModule } from 'src/shared/modules/material.module';
import { UserAddEditComponent } from './components/user-add-edit/user-add-edit.component';
import { UserDeleteDialogComponent } from './dialog/user-delete.dialog';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, UserRoutingModule],
  declarations: [
    UserListComponent,
    UserAddEditComponent,
    UserDeleteDialogComponent,
  ],
  exports: [UserDeleteDialogComponent],
})
export class UserModule {}
