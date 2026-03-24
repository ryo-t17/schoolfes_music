const smoothScroll = () => {
    const objName = '.js-smscroll';
    const scrollItem = $(objName);
    
    if (scrollItem.length) {  // Using `.length` to check if the element exists
      $(objName).on('click', (e) => {
        e.preventDefault();
        const speed = 500;
        const href = $(e.currentTarget).attr("href");
        let altPos = $(window).width() <= 767 ? 0 : 120;
        const target = $(href === "#" || href === "" ? 'html' : href);
        const position = target.offset().top;
        $("html, body").animate({
          scrollTop: position - altPos
        }, speed);
      });
    }
};
smoothScroll();
$(function () {
  $(".js-modal-btn").modalVideo();
})