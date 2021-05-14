import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './layout/root';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'lumpsum',
        loadChildren: () =>
          import('./pages/lumpsum/lumpsum.module').then((m) => m.LumpsumModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./pages/notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },
      {
        path: 'transaction',
        loadChildren: () =>
          import('./pages/transaction/transaction.module').then(
            (m) => m.TransactionModule
          ),
      },
      {
        path: 'sip',
        loadChildren: () =>
          import('./pages/sip/sip.module').then((m) => m.SipModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
