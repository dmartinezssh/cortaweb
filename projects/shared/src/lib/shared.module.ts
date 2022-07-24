import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [

  ],
  exports: [
    SharedComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
