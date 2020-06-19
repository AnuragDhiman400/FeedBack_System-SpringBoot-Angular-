import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
<<<<<<< HEAD
import { LogoutComponent } from './logout/logout.component';
import { HttpIntercepterService } from './service/http/http-intercepter.service';
=======
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent,
<<<<<<< HEAD
    UserComponent,
    LogoutComponent
=======
    UserComponent
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule
    
  ],
<<<<<<< HEAD
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterService, multi: true}],
=======
  providers: [],
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246
  bootstrap: [AppComponent]
})
export class AppModule { }
