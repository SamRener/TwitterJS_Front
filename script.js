
$(function(){
  CarregarPosts();
});



CarregarPosts = function(){
$.ajax({

        type: "GET",
        url: "https://samuelreneromnistack6.herokuapp.com/Post/Find",     
        contentType: "application/json; charset=utf-8", //O que eu espero receber?
        dataType: "json", //Em que padrão eu vou enviar os meus parametros?
        success: function (response) {
           var posts = response;

          $("#divPosts").html("");
           $.each(posts, function(index, post){
           // document.innerHtml = ""; ==   $("body").html()
            //  $("body").html(); 
            //  $("body").prepend();
              $("#divPosts").append("<h1>"+post.Texto+"</h1>" + "<h6>"+post.Likes+"</h6>" );
             // $("body").append("<h6>"+post.Likes+"</h6>" );
            // $("body").append() ==  document.innerHtml += "";

           })
        },
        error: function (error) {
           alert(error);
        }
    });
}

InserirPost = function(){
//Um objeto JS chamado Post com os atributos Texto (string) e Likes (int)
$.ajax({
        type: "POST",
        url: "https://samuelreneromnistack6.herokuapp.com/Post/Insert", 
        //DATA = Quais dados serão usados para inserir  
        data: JSON.stringify({
          Post: {
            Texto: $("#texto").val(),
            Likes: 5
        } 
      }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
           console.log(response);
           CarregarPosts();
        },
        error: function (error) {
            console.log(error);
        }
    });

}

//  var settings = {

//         type: "GET",
//         url: "https://samuelreneromnistack6.herokuapp.com/Post/Find",     
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         success: function (response) {
//            console.log(response);
//         },
//         error: function (error) {
//            alert(error);
//         }
//     };
// $.ajax(settings);
