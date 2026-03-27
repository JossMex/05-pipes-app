import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Card } from './../../components/card/card';
import { Component, signal } from '@angular/core';
import { interval, tap,  map } from 'rxjs';


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
    Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe,AsyncPipe
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

  //KeyValue Pipe
  profile = {
    name : 'Carlos',
    age : 44,
    addrrss: 'Toluca, México',
  }
  //Asyc Pipe
  promiseValue : Promise<String> = new Promise((resolve, reject) => {
  setTimeout(() => {
    //reject('Tenemos un error en la data')
    resolve('Tenemos data en la promesa')
    console.log('promesa finalizada')
  }, 3500);
});

myObservableTimer = interval(2000).pipe(
  map((value)=> value +1),
  tap((value) => console.log('tap:', value))
)

}
