import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { LanguagesEnum } from '../enums/languages-enum';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  localStorageKey = 'language';
  constructor(
    private translate: TranslateService,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit(): void {
    const language = localStorage.getItem(this.localStorageKey) || LanguagesEnum.ENGLISH;
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    this.translate.onLangChange.subscribe(() => {
      this.translate.get('SITE_TITLE').subscribe((description: string) => {
        this.titleService.setTitle(description);
      });
    })
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
