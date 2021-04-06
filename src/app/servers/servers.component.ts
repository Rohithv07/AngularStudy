import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', // by element
  // selector: '[app-servers]', // by attribute
  selector: '.app-servers', // by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created'

  constructor() { 
  	setTimeout(() => { 
  		this.allowNewServer = true;
  	},2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
  	this.serverCreationStatus = 'Server was created'
  }

}
