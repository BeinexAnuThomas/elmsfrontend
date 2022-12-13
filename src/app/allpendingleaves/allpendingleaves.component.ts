import { Component,OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
@Component({
  selector: 'app-allpendingleaves',
  templateUrl: './allpendingleaves.component.html',
  styleUrls: ['./allpendingleaves.component.scss']
})
export class AllpendingleavesComponent  implements OnInit{
  constructor (private service:PublicService){}
  LeaveList:any=[];
  nature_filter!:string;
  apply_date_without_filter:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  // editClick(item: any){
  //   console.log(item);

   
  //     this.emp=item;
  //     // this.ModalTitle="Edit leave";
  //     this.ActivateAddEditEmpComp=true;
  //     this.ActivateviewEmpComp=false;
    
  //   else{
  //    alert("Can't Edit this leave");
  //   }
  // }

  refreshEmpList(){
    this.service. allpendingleaves().subscribe(data=>{
      this.LeaveList=data;
      this.apply_date_without_filter=data;
    });
  }

  deleteClick(item: { id: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteleave(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
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

}
