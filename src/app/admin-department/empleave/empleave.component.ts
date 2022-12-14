import { Component } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleave',
  templateUrl: './empleave.component.html',
  styleUrls: ['./empleave.component.scss']
})
export class EmpleaveComponent {
  constructor(private service:PublicService,private route:Router) { }

  LeaveList:any=[];

  ModalTitle!:string;
  ActivateAddEditEmpComp:boolean=false;
  ActivateviewEmpComp:boolean=false;
  emp:any;

  // employee_id_filter!:string;
  nature_filter!:string;
 apply_date_without_filter:any=[];


  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      
        // "apply_date": "",
        "id":0,
        "user": 0,
        "nature_of_leave": "",
        "first_Day": "",
        "last_Day": "",
        "number_Of_Days": 0,
        "status": "pending",
       
        
    }
    this.ModalTitle="Add Leave";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item: any){
    console.log(item);

    if (this.emp.status=="pending"){
      this.emp=item;
      this.ModalTitle="Edit leave";
      this.ActivateAddEditEmpComp=true;
      this.ActivateviewEmpComp=false;
    }
    else{
     alert("Can't Edit this leave");
    }
      
  }

  deleteClick(item: { id: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteleave(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }
  // view
  viewClick(item: any){
    console.log(item);
    this.emp=item;
    this.ModalTitle="View Leave";
    this.ActivateviewEmpComp=true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getleaveList().subscribe(data=>{
      this.LeaveList=data;
      this.apply_date_without_filter=data;
    });
  }

  FilterFn(){
    var  nature_filter = this.nature_filter;
    // var  nature_filter = this.nature_filter;

    this.LeaveList = this.apply_date_without_filter.filter(function (el:any){
        // return el.EmployeeId.toString().toLowerCase().includes(
        //  employee_id_filter.toString().trim().toLowerCase()
        // )&&
        return el.nature_of_leave.toString().toLowerCase().includes(
         nature_filter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.LeaveList = this.apply_date_without_filter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
  

  approveClick(item: { id: any; }){
    console.log(item.id);
    if(confirm('Are you sure you want to approve this leave? ')){
      this.service. approveClicked(item.id).subscribe(data=>{
        console.log(data);
        this.refreshleaveList();
      })
    }
  }
  rejectClick(item: { id: any; }){
    console.log(item.id);
    if(confirm('Are you sure you want to reject this leave? ')){
      this.service.rejectClicked(item.id).subscribe(data=>{
        console.log(data);
        this.refreshleaveList();
      })
    }
  }

  all_approved_leave(){
    this.service.allapprovedleaves().subscribe(data=>{
      console.log(data);
      this.route.navigate(['allapprovedleaves']);
      this.refreshleaveList();
    })
  }

  all_pending_leave(){
    this.service.allpendingleaves().subscribe(data=>{
      console.log(data);
      this.route.navigate(['allpendingleaves']);
      this.refreshleaveList();
    })
  }

  all_rejected_leave(){
    this.service.allrejectedleaves().subscribe(data=>{
      console.log(data);
      this.route.navigate(['allrejectedleaves']);
      this.refreshleaveList();
    })
  }

  closeleaveClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshleaveList();
  }

  refreshleaveList(){
    // this.service.getEmpList().subscribe(data=>{
      // this.leaveList=data;
    // });
  }
}
