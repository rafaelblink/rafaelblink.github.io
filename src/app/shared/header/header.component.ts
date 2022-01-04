import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { LanguagesEnum } from '../enums/languages-enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  localStorageKey = 'language';
  constructor(private translate: TranslateService, @Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit(): void {
    const language = localStorage.getItem(this.localStorageKey) || LanguagesEnum.ENGLISH;
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

  switchLanguage(language: string) {
    localStorage.setItem(this.localStorageKey, language);
    this.translate.use(language);
    this.document.documentElement.lang = language;
  }

  getCurrentLanguage() {
    return this.translate.currentLang === 'en' ? 'ENGLISH' : 'PORTUGUESE';
  }

}
