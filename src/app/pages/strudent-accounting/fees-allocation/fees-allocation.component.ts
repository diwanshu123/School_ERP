import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fees-allocation',
  templateUrl: './fees-allocation.component.html',
  styleUrls: ['./fees-allocation.component.scss']
})
export class FeesAllocationComponent implements OnInit {
constructor(private api: ApiService) {}
ngOnInit(): void {
  
}
}
