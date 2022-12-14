import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { ListEmpComponent } from './admin-department/list-emp/list-emp.component';
import { CreateUpdateEmpComponent } from './admin-department/create-update-emp/create-update-emp.component';
import { PublicService } from './services/public.service';
import { ViewComponent } from './admin-department/view/view.component';
import { RegisterComponent } from './admin-department/register/register.component';
import { ShowleaveComponent } from './employee-department/showleave/showleave.component';
import { EditleaveComponent } from './employee-department/editleave/editleave.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpleaveNavbarComponent } from './empleave-navbar/empleave-navbar.component';
import { EmpleaveComponent } from './admin-department/empleave/empleave.component';
import { AllapprovedleavesComponent } from './allapprovedleaves/allapprovedleaves.component';
import { AllpendingleavesComponent } from './allpendingleaves/allpendingleaves.component'
import { InterceptInterceptor } from './intercept.interceptor';
import { AllrejectedleavesComponent } from './allrejectedleaves/allrejectedleaves.component';
import { ViewleaveComponent } from './employee-department/viewleave/viewleave.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    AdminDepartmentComponent,
    EmployeeDepartmentComponent,
    ListEmpComponent,
    CreateUpdateEmpComponent,
    ViewComponent,
    RegisterComponent,
    ShowleaveComponent,
    EditleaveComponent,
    FooterComponent,
    HomePageComponent,
    HomeNavbarComponent,
    NavbarComponent,
    EmpleaveNavbarComponent,
    EmpleaveComponent,
    AllapprovedleavesComponent,
    AllpendingleavesComponent,
    AllrejectedleavesComponent,
    ViewleaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PublicService,
    {provide:HTTP_INTERCEPTORS,useClass:InterceptInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
