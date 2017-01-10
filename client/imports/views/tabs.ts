'use strict';

import {Component} from "@angular/core";
import {DemoMainComponent} from './main/main';
import {DemoContactComponent} from './contact/contact';
import {DemoProfileComponent} from './profile/profile';
import {DemoDiscoveryComponent} from './discovery/discovery';

enum TabIndex{
    tab1 = 0,
    tab2 = 1,
    tab3 = 2,
    tab4 = 3
}

@Component({
    template: `<ion-tabs [selectedIndex]="defaultTab" class="tabs">
  <ion-tab tabTitle="主页" tabIcon="home-outline" [root]="tab1"></ion-tab>
  <ion-tab tabTitle="发现" tabIcon="navigate-outline" [root]="tab2"></ion-tab>
  <ion-tab tabTitle="联系人" tabIcon="contacts-outline" [root]="tab3"></ion-tab>
  <ion-tab tabTitle="我" tabIcon="contact-outline" [root]="tab4"></ion-tab>
</ion-tabs>`
})
export class TabsComponent {
    defaultTab: TabIndex = TabIndex.tab1;

    tab1 = DemoMainComponent;
    tab2 = DemoDiscoveryComponent;
    tab3 = DemoContactComponent;
    tab4 = DemoProfileComponent;

    constructor() {
    }
}


