var index=1;
$(function(){
    
    var cons=$("div.button6").clone();
    var copy=$("div.column2").clone();
    $("div.column2").hide();
    $("div.button6").hide();
    var butnotbuycopy=$("button.not_buy");
    $("button.not_buy").hide();
    
    init();
    
    $(' button.button1').click(function(){
        if(document.getElementById("nededText").value!=""){
        addItem(document.getElementById("nededText").value);
        document.getElementById("nededText").value="";
        }
    });
    
    document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
        $(' button.button1').click();
    }
    return false;
    }
  
    function addItem(itemName){
        var obj= $(copy).clone();
        obj.find(".sp").text(itemName);
        obj.appendTo("div.box1");
        var obj2=$(cons).clone();
        obj2.find(".sp").text(itemName);
        obj2.appendTo( document.getElementById("first"));
        
        var obj3=$(butnotbuycopy).clone();
        
        var amount =1;
        obj.find("button.button3").click(function(){
            amount++;
            $(this).closest(".column2").find(".amountOfProduct").text(amount);
            obj2.find(".amountOfProduct2").text(amount);
            if(amount==2){
                $(this).closest(".column2").find("button.button2").css("background-color", "darkred");
            }
        });
        obj.find("button.button2").click(function(){
            if(amount<=1)
                return;
           amount--;
            $(this).closest(".column2").find(".amountOfProduct").text(amount);
            obj2.find(".amountOfProduct2").text(amount);
            if(amount==1){
                $(this).css("background-color", "lightcoral");
            }
        });
        
        obj.find("button.button5").click(function(){
           obj.hide(); 
           obj2.hide();
            obj2.appendTo("obj1");
        });
        
        obj.find("button.button4").click(function(){
            obj2.appendTo( document.getElementById("second"));
            obj2.css("text-decoration", "line-through");
            obj.find("button.button5").hide();
            $(this).hide();
            obj.find("button.button3").hide();
            obj.find("button.button2").hide();
            obj.find(".sp").css("text-decoration", "line-through");
            obj.find("button.not_buy").css("visibility", "visible");    
        });
        obj.find("button.not_buy").click(function(){
            obj.find("button.not_buy").css("visibility", "hidden"); 
            obj.find("button.button5").show();
             obj.find("button.button3").show();
            obj.find("button.button2").show();
            obj.find("button.button4").show();
            obj2.appendTo( document.getElementById("first"));
            obj2.css("text-decoration", "none");
            obj.find(".sp").css("text-decoration", "none");
            
        });
        obj.find("div.text2").click(function(){
            obj.find(".inputText2").css("visibility", "visible");
            obj.find(".inputText2").focus();
             
        });
        obj.find(".inputText2").blur(function(){
             
            var word=obj.find(".inputText2").value;
            obj.find(".sp").text(word);
             obj2.find(".sp").text(word);
            obj.find(".inputText2").css("visibility", "hidden");
           
        
        });
    }
    function init(){
        addItem("Помідор");
        addItem("Перець");
        addItem("Огірок");
    }
});