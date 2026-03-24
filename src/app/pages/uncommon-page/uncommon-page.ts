import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe, UpperCasePipe } from '@angular/common';
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
    Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe
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

  //i18n Plural

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.'
  });

  clients = signal(['Maria', 'Pedro', 'Juan', 'Ana', 'Luis', 'Sofia', 'Carlos', 'Lucia']);

  deleteClient(){
    this.clients.update((prev) => prev.slice(1));
  }

}
