import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  
  readonly PhotoUrl = "http://localhost:8000/manager/media/";

  constructor(private http:HttpClient) { }
  
  getMessage(){
    return this.http.get('');
  }

  
  getEmpListbyid(id:any){
    return this.http.get<any[]>( 'manager/employeebyid/'+id);
  }

  getleaveListbyid(id:any){
    return this.http.get<any[]>('employee/leavebyid/'+id);
  }
  getEmpList():Observable<any[]>{
    return this.http.get<any[]>('manager/employee/');
  }
  allapprovedleaves():Observable<any[]>{
    return this.http.get<any[]>( 'employee/empleave/approved/all/');
  }
  allpendingleaves():Observable<any[]>{
    return this.http.get<any[]>( 'employee/empleave/pending/all/');
  }
  allrejectedleaves():Observable<any[]>{
    return this.http.get<any[]>( 'employee/empleave/rejected/all/');
  }
  
  approveClicked(id: any){
    console.log(id);
    return this.http.put( 'employee/approveupdate/'+id,id);
  }
  rejectClicked(id:any){
    return this.http.put( 'employee/rejectupdate/'+id,id);
  }
  addEmployee(val:any){
    return this.http.post('manager/employee/',val);
  }

  updateEmployee(val:any){
    return this.http.put('manager/employee/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete('manager/employee/'+val);
  }

  getleaveList():Observable<any[]>{
    return this.http.get<any[]>('employee/empleave/');
  }

  getleaveListbyuser(val:any){
    return this.http.get('employee/leavebyuser/',val);
  }
  
  addleave(val:any){
    return this.http.post('employee/empleave/',val);
  }

  updateleave(val:any){
    return this.http.put( 'employee/empleave/',val);
  }

  deleteleave(val:any){
    return this.http.delete('employee/empleave/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post('manager/SaveFile',val);
  }

  // getAllDepartmentNames():Observable<any[]>{
  //   return this.http.get<any[]>(this.api_url+'/department/');
  // }



}
