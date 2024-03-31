import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  delayTimeout: any = null;
  @Input() hasSearch = true;
  @Output() onSearch = new EventEmitter();
  searchValue = '';
  constructor() { }

  ngOnInit(): void {
  }

  delaySearch() {
    clearTimeout(this.delayTimeout);
    this.delayTimeout = setTimeout(() => {
      this.onSearch.emit(this.searchValue);
    }, 500);
  }

}
