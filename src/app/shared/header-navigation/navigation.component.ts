import { Component, AfterViewInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  name: string;

  constructor() {}

  ngAfterViewInit() {
    $(function() {
      $('.preloader').fadeOut();
    });

    const set = function() {
      const width =
        window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      const topOffset = 70;
      if (width < 1170) {
        $('body').addClass('mini-sidebar');
        $('.navbar-brand span').hide();
        $('.scroll-sidebar, .slimScrollDiv')
          .css('overflow-x', 'visible')
          .parent()
          .css('overflow', 'visible');
      } else {
        $('body').removeClass('mini-sidebar');
        $('.navbar-brand span').show();
      }

      let height =
        (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
      height = height - topOffset;
      // tslint:disable-next-line:curly
      if (height < 1) height = 1;
      if (height > topOffset) {
        $('.page-wrapper').css('min-height', height + 'px');
      }
    };
    $(window).ready(set);
    $(window).on('resize', set);

    $('.search-box a, .search-box .app-search .srh-btn').on(
      'click',
      function() {
        $('.app-search').toggle(200);
      }
    );

    (<any>$('[data-toggle="tooltip"]')).tooltip();

    (<any>$('.scroll-sidebar')).slimScroll({
      position: 'left',
      size: '5px',
      height: '100%',
      color: '#dcdcdc'
    });

    $('body').trigger('resize');
  }
}
