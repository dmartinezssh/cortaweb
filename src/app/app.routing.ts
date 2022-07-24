import { ExtraOptions, Routes } from "@angular/router";

export const extra: ExtraOptions = {
  useHash: true
}

export const routes: Routes = [
  { path: 'auth', loadChildren: ()=> import('@corta/auth').then( m => m.AuthModule) },
  { path: 'users', loadChildren: ()=> import('@corta/users').then( m => m.UsersModule) },
  { path: '', redirectTo: 'auth', pathMatch: 'full'  }
]
