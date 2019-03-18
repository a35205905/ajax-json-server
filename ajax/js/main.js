console.log('Hello world!');

$(function(){
    // getUser();
});

function getUser(){
    $.ajax({
        url: "http://localhost:3000/user/",
        type: "GET",
        dataType: "json",
        data: {},
        success: function(items){
            $.each(items, function(i, item){
                alert(
                    "first_name: " + item.first_name + "\n" +
                    "last_name: " + item.last_name + "\n" +
                    "password: " + item.password + "\n" +
                    "email: " + item.email
                )
            });
        }
    });
}

function postUser(){
    if($('#userForm').valid()){
        $.ajax({
            url: "http://localhost:3000/user/",
            type: "POST",
            dataType: "json",
            data: $('#userForm').serialize(),
            async :false, //同步
            success: function(items){
                alert('success');
            },
            error: function(error){
                alert('error');
            }
        });
    }
}