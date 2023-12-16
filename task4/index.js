$(document).ready(function() {
        $("[type=checkbox]").on("click", function(){
            let n = $("input:checked").length;
            console.log(n);
            if(n === 3){
                $("[type=checkbox]").attr("disabled","disabled");
            }
        }); 
});
