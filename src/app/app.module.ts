import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { AnyComponentComponent } from './any-component/any-component.component';
import { ChildTwoComponentComponent } from './child-two-component/child-two-component.component';
import { ConvChildComponent } from './conv-child/conv-child.component';
import { ConvParentComponent } from './conv-parent/conv-parent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ReactiveUserComponent } from './reactive-user/reactive-user.component';
import {SalleConferenceComponent} from "./salle-conference/salle-conference.component";
import {SallelistComponent} from "./sallelist/sallelist.component";
import {Routes, RouterModule} from "@angular/router";
import { NewslistComponent } from './newslist/newslist.component';
import { NewsComponent } from './news/news.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {CalculServiceService} from './service/calcul-service.service';
import {HttpClientModule} from "@angular/common/http";
import { UsersApiComponent } from './users-api/users-api.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [{path: 'all', component: EditBookComponent },
  {path: 'newslist', component: NewslistComponent},
  {path: 'news/:id', component: NewsComponent},
  {path: 'usersList', component: UsersApiComponent},
  {path: 'annoces', component: ListeAnnoncesComponent},
  {path: 'estimation', component: EstimationCoutComponent}];
@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    AnyComponentComponent,
    ChildTwoComponentComponent,
    ConvChildComponent,
    ConvParentComponent,
    EditBookComponent,
    ReactiveUserComponent,
    SalleConferenceComponent,
    SallelistComponent,
    NewslistComponent,
    NewsComponent,
    ToDoListComponent,
    UsersApiComponent,
    AnnoncesComponent,
    ListeAnnoncesComponent,
    EstimationCoutComponent,
    PageComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CalculServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
