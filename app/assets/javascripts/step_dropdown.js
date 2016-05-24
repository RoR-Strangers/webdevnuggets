/*global $*/
/*global TweenMax*/
/*global TimelineMax*/
$(document).ready(step_dropdown);
$(document).on('page:load', step_dropdown); 

function step_dropdown() {
  var steps = $(".step-input"),
      step_preview = $(".step-preview");
  
  TweenMax.set(steps, {
    alpha: 0
  });
  
  step_preview.click(function(){
    step_preview.toggleClass('active');
    
    steps.each(function(index) {
      this.style.top = ((1+index)*60) + "px";
    });
  
    if(step_preview.hasClass('active')) {
      TweenMax.staggerTo(steps, 0.75, {
        alpha: 1,
        display: 'block',
      }, .1);
    }
    else {
      TweenMax.staggerTo(steps, 0.75, {
        alpha: 0,
        display: 'none',
      }, .1);
    }
  });
  
  steps.click(function() {
    var timeline = new TimelineMax({
    onComplete: done
    });
    
    var step = $(this),
    siblings = step.siblings(steps),
    data = step.data('title');
    
    siblings.removeClass("active");
    
    timeline.to(siblings, .25, {
      alpha: 0
    })
    .to(step, .25, {
      top: 0,
    })
    .set(step_preview, {
      text: data,
      alpha: 1
    })
    .to(step, .25, {
      alpha: 0,
    })
    .set(steps, {
      display: "none"
    })
    
    function done() {
    step.addClass("active");
    }
  });
}