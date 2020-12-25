$(document).ready(function(){
	// lesson 1
	$('.main_menu .hightline').click(function(event) {
	    if ($('.main_menu').hasClass('use_mobi')) {
	      $('.use_mobi .hightline').not($(this)).removeClass('active');
	    }
	    $(this).toggleClass('active');
	});
})

// lesson 3
/*const shallowMenu = [
    {
      title: '1934',
      link: '/1934',
      children: [
        {
          title: 'proin quam velit',
          link: '/dashboard/tool'
        }
    },
    {
      title: '1937',
      link: '/1937',
      children: [
        {
          title: 'proin quam velit',
          link: '/dashboard/tool'
        }
    },
    {
      title: '1940',
      link: '/1940',
      children: [
        {
          title: 'proin quam velit',
          link: '/dashboard/tool'
        }
    },    
]*/