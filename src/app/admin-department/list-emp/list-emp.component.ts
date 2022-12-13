import { Component,OnInit,Input  } from '@angular/core';
import { PublicService } from 'src/app/services/public.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.scss']
})
export class ListEmpComponent implements OnInit {

  constructor(private service:PublicService,private route:Router) { }

  EmployeeList:any=[];

  ModalTitle!:string;
  ActivateAddEditEmpComp:boolean=false;
  ActivateviewEmpComp:boolean=false;
  emp:any;

  employee_id_filter!:string;
  employee_name_filter!:string;
  employee_list_without_filter:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      employee_Name:"",
      email:"",
      contact_Number:"",
      emergency_Contact_Number:"",
      address:"",
      position:"",
      dOB:"",
      martial_Status:"",
      job_Title:"",
      work_Location:"",
      date_Of_Joining:"",
      reporting_To:"",
      linkedin_Link:"",
      Photo_File_Name:"anonymous.png"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item: any){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
    this.ActivateviewEmpComp=false;
  }

  deleteClick(item: { EmployeeId: any; }){

    if(confirm('Are you sure want to delete this Employee ??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }
  // view
  // viewClick(item: any){
  //   console.log(item);
  //   this.emp=item;
  //   // this.ModalTitle="View Employee";
  //   this.route.navigate(['viewemployee'])
  //   this.ActivateviewEmpComp=true;
  // }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      this.employee_list_without_filter=data;
    });
  }

  FilterFn(){
    var  employee_id_filter = this.employee_id_filter;
    var  employee_name_filter = this.employee_name_filter;

    this.EmployeeList = this.employee_list_without_filter.filter(function (el:any){
        // return el.EmployeeId.toString().toLowerCase().includes(
        //  employee_id_filter.toString().trim().toLowerCase()
        // )&&
        return el.employee_Name.toString().toLowerCase().includes(
          employee_name_filter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.EmployeeList = this.employee_list_without_filter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }


}
