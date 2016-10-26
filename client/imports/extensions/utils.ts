'use strict';

import {Meteor} from 'meteor/meteor';

const appReadyPromise = new Promise<void>(resolve => {
    if (Meteor.isCordova) {
        document.addEventListener("deviceready", () => resolve(), false);
    } else {
        document.addEventListener("DOMContentLoaded", () => resolve(), false);
    }
});

export function appReady() {
    return appReadyPromise;
}