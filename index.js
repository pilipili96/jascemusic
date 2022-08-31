$('#pressed').on('click', function(){
    let x = document.forms["myForm"]["user_name"].value;
    let y = document.forms["myForm"]["user_email"].value;
    if (x=="")
        $('#thanks').text('Please fill out your name')
    else if (y=="")
    $('#thanks').text('Please fill out your email')
    else $('#thanks').text('Thank you!')
})

    
  
  
  
  
  
  
  
