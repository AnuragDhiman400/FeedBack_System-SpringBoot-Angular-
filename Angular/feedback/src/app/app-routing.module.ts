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
<<<<<<< HEAD
import { LogoutComponent } from './logout/logout.component';
=======
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'admin', component: AdminComponent, canActivate:[RouteGuardService] },
  { path: 'teacher', component: TeacherComponent, canActivate:[RouteGuardService] },
  { path: 'student', component: StudentComponent, canActivate:[RouteGuardService] },
  { path: 'user/:user_id', component: UserComponent , canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent}
=======
  { path: 'admin', component: AdminComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'student', component: StudentComponent },
  { path: 'user/:user_id', component: UserComponent }
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
