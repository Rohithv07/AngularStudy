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
	serverName = 'TestServer';
	serverCreated = false;
	servers = ['TestServer', 'TestServer2']

  constructor() { 
  	setTimeout(() => { 
  		this.allowNewServer = true;
  	},2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
  	this.serverCreationStatus = this.serverName + ' Server was created';
  	this.serverCreated = true;
  	this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
