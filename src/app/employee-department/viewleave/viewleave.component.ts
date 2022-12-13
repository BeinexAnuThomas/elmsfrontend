import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.scss']
})
export class ViewleaveComponent implements OnInit {
  id:any;
  data:any;
  constructor(private service:PublicService,private route:  ActivatedRoute) { }
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne()
{
this.service.getleaveListbyid(this.id).subscribe(data=>
  {
    this.data=data;
    console.log(this.data);
   
  })
}
}

