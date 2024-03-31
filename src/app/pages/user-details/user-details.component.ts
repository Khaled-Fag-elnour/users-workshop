import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: any;
  userId!: number;
  loading = true;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.getUserDetails();
    })
  }

  getUserDetails() {
    this.loading = true;
    this.dataService.getUserDetails(this.userId).subscribe((res: any) => {
      this.loading = false;
      console.log(res);
      this.user = res.data;
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }
}
