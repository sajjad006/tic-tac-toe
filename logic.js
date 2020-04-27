var player, data, completed
function initialize(){
    player = 1
    data = [[-1,-1,-1], [-1,-1,-1], [-1,-1,-1]];

    $("td").addClass("empty").html("<p></p>")

}
$(document).ready(function(){
    
    initialize()
    
    $("td").click(function(){

        if(completed == true){
            alert("Match has ended. Click on reset to start new match")
            return
        }

        var row = $(this).parent().index()
        var col = $(this).index()
        
        if(data[row][col]!=-1){
            alert('Box is already filled, please use another box');
            return;
        }

        $(this).removeClass("empty").addClass("filled")
    
        if (player == 1){
            player = 2
            data[row][col] = 1
            //$(this).children().addClass('far fa-circle fa-6x')
            $(this).children().html("<h1 style='text-align:center;'>O</h1>")
            $("#p1").removeClass('active').addClass('de-active')
            $("#p2").removeClass('de-active').addClass('active')
        }
        else{
            player = 1
            data[row][col] = 0
            //$(this).children().addClass('far fa-times-circle fa-6x')
            $(this).children().html("<h1 style='text-align:center;'>X</h1>")
            $("#p1").removeClass('de-active').addClass('active')    
            $("#p2").removeClass('active').addClass('de-active')
        }

        if((data[0][0]==1 && data[0][1]==1 && data[0][2]==1) || (data[1][0]==1 && data[1][1]==1 && data[1][2]==1) || 
            (data[2][0]==1 && data[2][1]==1 && data[2][2]==1) || (data[0][0]==1 && data[1][0]==1 && data[2][0]==1) ||
            (data[0][1]==1 && data[1][1]==1 && data[2][1]==1) || (data[0][2]==1 && data[1][2]==1 && data[2][2]==1) ||
            (data[0][0]==1 && data[1][1]==1 && data[2][2]==1) || (data[0][2]==1 && data[1][1]==1 && data[2][0]==1)){

            $("#result").html("<b>PLAYER 1 WINS !!</b>")
            completed = true
            return;
        }
        else if(
        (data[0][0]==0 && data[0][1]==0 && data[0][2]==0) || (data[1][0]==0 && data[1][1]==0 && data[1][2]==0) || 
        (data[2][0]==0 && data[2][1]==0 && data[2][2]==0) || (data[0][0]==0 && data[1][0]==0 && data[2][0]==0) ||
        (data[0][1]==0 && data[1][1]==0 && data[2][1]==0) || (data[0][2]==0 && data[1][2]==0 && data[2][2]==0) ||
        (data[0][0]==0 && data[1][1]==0 && data[2][2]==0) || (data[0][2]==0 && data[1][1]==0 && data[2][0]==0)){
        
            $("#result").html("<b>PLAYER 2 WINS !!</b>")
            completed = true
            return;
            }
        else{
            function tiles_empty(){
                for(var i=0;i<3;i++){
                    for(var j=0;j<3;j++){
                        if(data[i][j]==-1){
                            return true;
                        } else{
                            continue;
                        }    
                    }
                }
            }

            if(!tiles_empty()){
                $("#result").html("<b>MATCH DRAWN !</b>")
                completed = true
                return;    
            }
        }
    });

    $("button").click(function(){
        initialize();
        completed = false
        $("#result").html("")
    });
    
}); 