import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.scss']
})
export class LifecycleHookComponent {
title = 'lifecycle-hook';
inputVal: string ='';
constructor () {
  console.log('life hook called');
}

onBtnClicked(inputEl: HTMLInputElement) {
this.inputVal =inputEl.value;
}
}
