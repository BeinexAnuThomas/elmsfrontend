import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './admin-department/register/register.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmpleaveComponent } from './admin-department/empleave/empleave.component';
import { ViewComponent } from './admin-department/view/view.component';
import { AllapprovedleavesComponent } from './allapprovedleaves/allapprovedleaves.component';
import { AllpendingleavesComponent } from './allpendingleaves/allpendingleaves.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { ViewleaveComponent } from './employee-department/viewleave/viewleave.component';
import { AllrejectedleavesComponent } from './allrejectedleaves/allrejectedleaves.component';

const routes: Routes = [
    {path:'', component : HomePageComponent},
    {path:'profile',component : ProfileComponent},
    {path:'admin',component : AdminDepartmentComponent},
    {path:'employee',component : EmployeeDepartmentComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path: 'employeeleave',component:EmpleaveComponent},
    {path: 'viewemployee/:id',component:ViewComponent},
    {path: 'viewleave/:id',component:ViewleaveComponent},
    {path: 'allapprovedleaves',component:AllapprovedleavesComponent},
    {path: 'allpendingleaves',component:AllpendingleavesComponent},
    {path: 'allrejectedleaves',component:AllrejectedleavesComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
