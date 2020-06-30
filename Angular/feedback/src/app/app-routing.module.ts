import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { RouteGuardService } from './service/route-guard.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate:[RouteGuardService] },
  { path: 'teacher/:section/:category/:username', component: TeacherComponent, canActivate:[RouteGuardService] },
  { path: 'student/:section/:category', component: StudentComponent, canActivate:[RouteGuardService] },
  { path: 'user/:user_id', component: UserComponent , canActivate:[RouteGuardService]},
  { path: 'chart/:username', component: UserComponent , canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
