import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	HomeContentComponent
} from './home-content/home-content.component';
import {
	PaginaComponent
} from './pagina/pagina.component';

const routes: Routes = [
	{
		path: '', component: HomeContentComponent
	},
	{
		path: ':slug', component: PaginaComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
