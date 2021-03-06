import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]', //selector has been changed to attribute selector
 selector: '.app-servers',
  templateUrl: './servers.component.html', //template or templateURL are the must property of a component
  // template: '<app-server></app-server>',
  //` ` can be used for multi line strings in between.
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server";
  serverName ='Angular';
  userName ="********";
  username: string = "****";
  serverCreated = false;
  servers= ['testserver', 'testserver 2'];

  constructor() { 
    setTimeout(() =>
      this.allowNewServer = true ,2000);
    console.log(this.allowNewServer)
  } 

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;

  }

  onUpdateServerName(event: Event) {
 this.serverName = (< HTMLInputElement>event.target).value;
  }
  onUpdateUserName(event: Event) {
    this.userName = (< HTMLInputElement>event.target).value;

  }

}

