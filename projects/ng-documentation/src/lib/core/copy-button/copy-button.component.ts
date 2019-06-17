import { Component, Input } from '@angular/core';

@Component({
  selector: 'docs-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.sass']
})
export class CopyButtonComponent {
  @Input() element: HTMLElement;

  copied = false;

  private copiedTimeout: any;

  /**
   * @ignore
   */
  copy() {
    this.copyToClipboard(this.element.innerText);
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
