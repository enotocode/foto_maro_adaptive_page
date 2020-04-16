document.addEventListener('DOMContentLoaded', function() {
   var ff_button = document.getElementById('Reviews'),
	   ff_close = document.getElementById('ff_close'),
	   ff_submit = document.getElementById('ff_submit');

	   ff_button.onclick = function(){
			openForm()
	   };
	   ff_close.onclick = function(){
			closeForm()
	   };
	   ff_submit.onclick = function(e){
			e.preventDefault();
			if (validateName() && validateText()) {
				alert("Спасибо за отзыв, нам очень важно ваше мнение!");
				closeForm();
			}
		};

		function validateName(){
			if (!document.getElementById('ff_name').value) { 
		 		alert("Введите ваше имя!");
		 		return false;
		 	}
			return true;
	   }
		function validateText(){
			if (!document.getElementById('ff_text').value) { 
		 		alert("Введите текст отзыва!");
		 		return false;
		 	}
			return true;
	   }
	   function openForm(){
	   		document.getElementById('feedback_form').style.visibility='visible';
			document.getElementById('ff_overlay').style.visibility='visible';
	   }
	   function closeForm(){
	   		document.getElementById('feedback_form').style.visibility='hidden';
			document.getElementById('ff_overlay').style.visibility='hidden';
	   }
});
