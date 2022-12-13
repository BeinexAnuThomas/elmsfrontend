import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

  export class ViewComponent  implements OnInit {
    id:any;
    data:any;
    constructor(private service:PublicService,private route:  ActivatedRoute) { }
    ngOnInit(){
      this.id=this.route.snapshot.params['id'];
      this.getOne();
    }

    getOne()
{
  this.service.getEmpListbyid(this.id).subscribe(data=>
    {
      this.data=data;
      console.log(this.data);
     
    })
}

}