import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

/**
 * This component displays a line of code. It provides a "copy" button and basic code styles.
 */
@Component({
  selector: 'docs-code-line',
  templateUrl: './code-line.component.html',
  styleUrls: ['./code-line.component.sass']
})
export class CodeLineComponent implements OnDestroy {
  @ViewChild('code', { static: false }) code: ElementRef;
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
