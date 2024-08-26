jQuery.fn.endlessRiver = function (settings) {
    settings = jQuery.extend({
        speed: 80,
		pause: true,
		buttons: true
    }, settings);
    return this.each(function(){
		var j = jQuery;
        var $line = j(this);
        var id = "ticker_id";
        $line.wrap("<div id=\""+id+"\"></div>");
		$line.css({
			margin: "0 !important",
			padding: "0 !important"
		});
        var currentSpazio,currentTempo;
        var run = true;
        var initialOffset = $line.offset().left;
		var lineWidth = 1;
        $line.children("li.tick-clones").remove();
		//elimina cloni se ci sono - Serve in caso io aggiorni dinamicamente il contenuto
        $line.addClass("newsticker");
		
		
			
        var $mask = $line.wrap("<div class='mask'></div>");
		 
		
		var $tickercontainer = $line.parent().wrap("<div class='tickercontainer'></div>");
 

		var $buttons1= j('<div class="scroll_title">Flash News</div>');
		$buttons1.insertAfter($tickercontainer);
		
		var elements = $line.children("li");
		var fill = function(){
			lineWidth = 1;
			$line.append(elements.clone(true).addClass("tick-clones"));
			$line.children("li").each(function (i) {
				lineWidth += j(this, i).outerWidth(true);
				//outherWidth con argomento true ritorna larghezza compresi margini
			});
			
		}
		var l = $tickercontainer.outerWidth(true);
		while(lineWidth<l) fill();
		$line.width(lineWidth);
        $line.height($line.parent().height());
        function scrollnews(spazio, tempo) {
            $line.animate({left: '-=' + spazio}, tempo, "linear", function () {
                $line.children("li:first").appendTo($line);
                $line.css("left", 0);
                currentSpazio = $line.children("li:first").outerWidth(true);
                currentTempo = tempo / spazio * currentSpazio;
                if(run)
                	scrollnews(currentSpazio, currentTempo);
            });
        }
        //BOOT
        currentSpazio = $line.children("li:first").outerWidth(true);
        currentTempo = currentSpazio / settings.speed * 2000;
        //x 1000 perchè tempo è in millisecondi
        scrollnews(currentSpazio, currentTempo);
		function setHover(){
			$line.hover(pause,resume);
		}

		function pause(){
			run = false;
			$line.stop();
		}

		function resume() {
			run = true;
			var offset = $line.offset().left;
			var residualSpace = offset + $line.children("li:first").outerWidth(true) - initialOffset;
			var residualTime = currentTempo / currentSpazio * residualSpace;
			scrollnews(residualSpace, residualTime);
		}
		if(settings.pause) setHover();
		
		if(settings.buttons){

			var $buttons = j('<ul class="er-controls">'+
			'<li class="prev  fa fa-chevron-left"></li>'+
			'<li class="pause fa fa-pause"></li>'+
			'<li class="next fa  fa-chevron-right"></li>'+
			'</ul>');
			
			
			$buttons.insertAfter($tickercontainer);
			
			//DELEGATE IS BETTER!
			j("body").on("click", "#"+id+" .er-controls > .pause", function(){
				
				j(this).toggleClass("pause fa fa-pause play fa fa-play ");
				
				$line.unbind('mouseenter mouseleave');
				$line.stop();
			});

			j("body").on("click", "#"+id+" .er-controls > .play", function(){
				 
				  
				j(this).toggleClass("play fa fa-play  pause fa fa-pause");
				 
				run = true;
				setHover();
				var offset = $line.offset().left;
				var residualSpace = offset + $line.children("li:first").outerWidth(true) - initialOffset;
				var residualTime = currentTempo / currentSpazio * residualSpace;
				scrollnews(residualSpace, residualTime);
			});

			var moving = false;
			
			j("body").on("click", "#"+id+" .er-controls > .next", function(){
				if(run){
					j("#"+id+" .er-controls > .pause").toggleClass("pause fa fa-pause play fa fa-play");
					run = false;
					 
				}
				if(moving) return false;
				var spazio = $line.children("li:first").outerWidth(true);
        		var tempo = 1000;
        		moving = true;
				$line.stop(true,true).animate({left: '-=' + spazio}, tempo, "linear", function () {
                	$line.children("li:first").appendTo($line);
                	$line.css("left", 0);
                	moving = false;
            	});
            });

			j("body").on("click", "#"+id+" .er-controls > .prev", function(){
				if(run){
					j("#"+id+" .er-controls > .pause").toggleClass("pause fa fa-pause play fa fa-play");
					run = false;
					return;
				} 
				if(moving) return false;
				var spazio = $line.children("li:last").outerWidth(true);
				$line.css("left", "-"+spazio+"px");
				$line.children("li:last").prependTo($line);
        		var tempo = 1000;
        		moving = true;
				$line.stop(true,true).animate({left: '+=' + spazio}, tempo, "linear", function(){
					moving = false;
				});
				
			});			
		}
			
    });
};