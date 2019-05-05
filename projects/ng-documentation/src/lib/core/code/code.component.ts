import { Component, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

/**
 * This component displays code from a given file or from the template. It provides a "copy" button and basic code styles.
 */
@Component({
  selector: 'docs-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.sass']
})
export class CodeComponent implements OnDestroy {
  /**
   * Path or name of the file that you want to display.
   */
  @Input() path: string;
  @ViewChild('code') code: ElementRef;
  faCopy = faCopy;
  copied = false;
  copiedTimeout: any;

  /**
   * @ignore
   */
  ngOnDestroy() {
    clearTimeout(this.copiedTimeout);
  }

  /**
   * @ignore
   */
  copy() {
    this.copyToClipboard(this.code.nativeElement.innerText);
    this.copied = true;
    clearTimeout(this.copiedTimeout);
    this.copiedTimeout = setTimeout(() => this.copied = false, 3000);
  }

  /**
   * @ignore
   */
  private copyToClipboard(str: string) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
