import { Component, Injector, StaticProvider } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DynamicComponent, OverlayRefToken } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private readonly overlay: Overlay) { }

  public onClick(): void {
    const overlayRef = this.overlay.create();
    const providers: StaticProvider[] = [{ provide: OverlayRefToken, useValue: overlayRef }];
    const injector = Injector.create({ providers });
    const componentPortal = new ComponentPortal(DynamicComponent, null, injector);
    const componentRef = overlayRef.attach(componentPortal);
    componentRef.onDestroy(() => console.log('closed'));
  }
}