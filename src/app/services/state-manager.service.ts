import { Injectable } from '@angular/core';

@Injectable()
export class StateManagerService {

  constructor() {
    console.log('constructor oi');
  }

  load(): boolean {
    console.log('loading state');
    return true;
  }
}
