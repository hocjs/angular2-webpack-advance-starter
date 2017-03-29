// angular
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

// app
import { t } from 'shared/test/index';
import { AboutComponent } from './about.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [AboutComponent, TestComponent]
  });
};

export function main() {
  t.describe('@Component: AboutComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

            t.e(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-about></sd-about>'
})
class TestComponent { }
