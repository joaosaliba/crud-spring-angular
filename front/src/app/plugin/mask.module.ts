import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe],
  exports: [NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
})
export class MaskModule {}
