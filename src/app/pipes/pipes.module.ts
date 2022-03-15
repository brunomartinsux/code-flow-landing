import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneBrPipe } from './phone.pipe';
import { DictionaryPipe } from './dictionary.pipe';


@NgModule({
  declarations: [PhoneBrPipe, DictionaryPipe],
  imports: [
    CommonModule
  ],
  exports: [PhoneBrPipe, DictionaryPipe]
})
export class PipesModule { }
