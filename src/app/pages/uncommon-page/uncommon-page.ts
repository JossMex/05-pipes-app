import { I18nSelectPipe } from '@angular/common';
import { Card } from './../../components/card/card';
import { Component, signal } from '@angular/core';


const client1 = {
  name : 'John Doe',
  gender: 'male',
  age: '30',
  address:'Ottawa, Canada',
};

const client2 = {
  name : 'Jane Smith',
  gender: 'female',
  age: '25',
  address:'Toronto, Canada',
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card, I18nSelectPipe
  ],
  templateUrl: './uncommon-page.html',
})
export  default class UncommonPage {

  //i18n Select
  client = signal(client1);

  invitationMap = {
    male : 'invitarlo',
    female : 'invitarla',
  }

  changeClient(){
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

 }
