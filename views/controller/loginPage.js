 var myController=function ($scope, $http)
 {
   
    $scope.data = [];
    var request = $http.get('/data');    
    request.success(function(data) {
        $scope.data = data;
    });
    request.error(function(data){
        console.log('Error: ' + data);
    });
     
     
     
      var canvas = document.getElementById('canvas');
    var con = canvas.getContext('2d');
    
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890#!$";
    $scope.text = "";
    
    //n.font = "30pt couriernew";  
    con.font = "20pt couriernew"; 
    var x = 20
    var y = 50;
    
    for(i=0; i<5; i++) {
        var r = Math.floor(Math.random() * chars.length) ;
        var c = Math.round(Math.random());
        if(c == 1 && r < 24){
            $scope.text = chars[r].toUpperCase();
            con.fillText($scope.text, x, y);
            x += 30;
            y += 0;
        } else {
            $scope.text = chars[r];
            con.fillText($scope.text, x, y);
            x += 30;
            y += 0;
        }
    } 
     
     
     $scope.refreshCaptcha=function()
     {
         var canvas = document.getElementById('canvas');
        var con = canvas.getContext('2d');
         
         con.clearRect(0, 0, canvas.width, canvas.height);
    
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890#!$";
     $scope.text = "";
    
    //n.font = "30pt couriernew";  
    con.font = "20pt couriernew"; 
    var x = 20
    var y = 50;
    
    for(i=0; i<5; i++) {
        var r = Math.floor(Math.random() * chars.length) ;
        var c = Math.round(Math.random());
        if(c == 1 && r < 24){
            $scope.text = chars[r].toUpperCase();
            con.fillText($scope.text, x, y);
            x += 30;
            y += 0;
        } else {
            $scope.text = chars[r];
            con.fillText($scope.text, x, y);
            x += 30;
            y += 0;
        }
    }  
     }
     
     

     }
