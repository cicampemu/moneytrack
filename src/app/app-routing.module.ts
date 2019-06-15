import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { AccountComponent } from './account/account.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  { path: 'payments', component: PaymentsComponent},
  { path: 'account', component: AccountComponent},
  { path: '', component: AccountComponent},
  { path: 'buy', component: BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
