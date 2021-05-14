import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LumpsumComponent } from './lumpsum.component';

const routes: Routes = [{ path: '', component: LumpsumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LumpsumRoutingModule { }
