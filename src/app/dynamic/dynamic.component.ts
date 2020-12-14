import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject, InjectionToken } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {
  public constructor(@Inject(OverlayRefToken) private readonly overlayRef: OverlayRef) { }

  public onClick(): void {
    this.overlayRef.dispose();
  }
}

export const OverlayRefToken = new InjectionToken('OVERLAY_REF');
