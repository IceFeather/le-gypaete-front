import { NgModule } from '@angular/core';
import { PremiereLettreMajPipe } from './premiere-lettre-maj.pipe';
import { TranslateSelfPipe } from './translate-self.pipe';

@NgModule({
  declarations: [
    TranslateSelfPipe,
    PremiereLettreMajPipe,
  ],
  imports: [
  ],
  exports: [
    TranslateSelfPipe,
    PremiereLettreMajPipe,
  ],
  providers: [],
  bootstrap: []
})
export class LanguesModule { }
