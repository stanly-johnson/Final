(function(){

    var image = document.getElementById('image-container-one');
    var url1 = document.getElementById('url-one');
    var image2 = document.getElementById('image-container-two');
    var url2 = document.getElementById('url-two');
    
    var file1;
    var file2;

    	function onComplete(data){
				

		if(data.misMatchPercentage == 0){
			$('#thesame').show();
			$('#diff-results').hide();
		} else {
			$('#mismatch').text(data.misMatchPercentage);
			if(!data.isSameDimensions){
				$('#differentdimensions').show();
			} else {
				$('#differentdimensions').hide();
			}
			$('#diff-results').show();
			$('#thesame').hide();
		}
	}





    var buttons = $('.buttons button');

	buttons.click(function(){
		var $this = $(this);

		$this.parent('.buttons').find('button').removeClass('active');
		$this.addClass('active');

		if($this.is('#raw')){
			resembleControl.ignoreNothing();
		}
		else
		if($this.is('#colors')){
			resembleControl.ignoreColors();
		}
		else
		if($this.is('#antialising')){
			resembleControl.ignoreAntialiasing();
		}
		
	});




    document.getElementById('button-1').addEventListener('click', function(){

        file1 = url1.value;
        image.src = file1;
        
        if(file2)
        {
           $('#s-button').fadeIn('slow');
           $('#diff-results').fadeIn('slow');
           resembleControl = resemble(file1).compareTo(file2).onComplete(onComplete);


        }
    });

     document.getElementById('button-2').addEventListener('click', function(){

        file2 = url2.value;
        image2.src = file2;

         if(file1)
        {
           $('#s-button').fadeIn('slow');
           $('#diff-results').fadeIn('slow');
           resembleControl = resemble(file1).compareTo(file2).onComplete(onComplete);


           
        }

    });

     




})();