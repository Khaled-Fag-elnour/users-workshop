import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  loading = true;
  users: any = [];
  filteredUsers: any = [];
  subs: Subscription[] = [];
  pageSize = 6;
  numOfPages = 0;
  pageNumber = 1;
  totalRecords = 0;
  searchValue = '';
  constructor(
    private dataService: DataService,
    private stateService: StateService,
  ) { }

  ngOnInit(): void {
    this.subs.push(this.stateService.$users.subscribe((res: any) => {
      console.log(res);
      
      if (res.length <= 0) {
        this.getUsers();
      } else {
        this.handlePagingData(res);
        this.users = res.results;
        this.filteredUsers = res.results;
        this.loading = false;
      }
    }));
  }

  getUsers() {    
    this.loading = true;
    this.dataService.getUsers(this.pageNumber).subscribe((res: any) => {
      this.loading = false;
      console.log(res);

      let results = res?.data;
      this.handlePagingData(res);

      this.users = res.data;
      this.stateService.$users.next({...res, results});
    }, err => {
      console.log(err);
      
      this.loading = false;
    })
  }

  searchUsers(searchValue: string) {
    if (searchValue) {
      this.searchValue = searchValue.toLowerCase();
    } else {      
      this.filteredUsers = this.users;
      return;
    }

    this.loading = true;
    let searchResults = this.users.filter((u: any) => u.first_name.toLowerCase().includes(this.searchValue) || u.last_name.toLowerCase().includes(this.searchValue))
    setTimeout(() => {
      if (searchResults.length > 0) {
        this.filteredUsers = searchResults;
        console.log(this.filteredUsers);
      } else {
        this.filteredUsers = [];
      }
      this.loading = false;
    }, 250)
    
  }

  handlePagingData(data: any) {
    this.numOfPages = data.total_pages;
    this.pageNumber = data.page;
    this.totalRecords = data.total;
  }

  paginate(pageNumber: number) {
    console.log(pageNumber);
    this.pageNumber = pageNumber;
    if (this.searchValue) {
      this.searchValue = '';
      this.getUsers();
    } else {
      this.getUsers();
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
