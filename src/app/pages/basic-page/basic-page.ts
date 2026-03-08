import { AvailableLocale, LocaleService } from './../../services/locale.service';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import {  Component, effect, inject, LOCALE_ID, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe
  ],
  templateUrl: './basic-page.html',
})
export  default class BasicPage { 

  LocaleService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower= signal('angular');
  nameUpper = signal('ANGULAR');
  fullName = signal('AnGulAr FraMewOrK');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick')
    }, 1000);

    onCleanup(() => clearInterval(interval));
  })

  changeLocale(locale : AvailableLocale){
    console.log({locale})
    this.LocaleService.changeLocale(locale);
  }

}
