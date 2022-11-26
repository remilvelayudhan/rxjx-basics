import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { FromComponent } from './from/from.component';

const routes: Routes = [
{ path: "from", component: FromComponent },
{ path: "custom", component: CustomObservableComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
