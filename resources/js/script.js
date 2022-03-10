
$(document).ready(function(){
    
    
        $('.js--section-features').waypoint(function(direction){
            
            if(direction=="down"){
                $('nav').addClass('sticky');
                
            }else{
                $('nav').removeClass('sticky');
                
            }
                
        }, {
      offset: '85'
        }); 
    
/****   ******/
    
// Add smooth scrolling to all links
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
 
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top
      },
      1000,
      'linear'
    );
  });
    
    
    
    
    
    
    
   /* 
   
   
   var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})   


*/
    
});