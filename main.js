$(function()
{
    var $list = $(".bl-list");
    var ONE_ROW_HTML = $(".one-row-template").html();
    var $left = $(".left");
    var $bought = $(".bought");

    var LEFT_HTML = $(".leftover-item-template").html();
    var BOUGHT_HTML = $(".bought-item-template").html();


//console.log("leftover html",ONE_ROW_HTML);


    function addItem(title) {
        var $node = $(ONE_ROW_HTML);
        $node.find(".title1").text(title);
        var $left_node = $(LEFT_HTML);
        var $bought_node = $(BOUGHT_HTML);
        $list.append($node);
        $left_node.find(".title1").text(title);
        var $count_label =  $left_node.find(".count-label").text(quantity);

        var quantity = 1;
        var $quantity_label = $node.find(".numberTitle");
        $quantity_label.text(quantity);


        $node.find(".plus").click(function(){
            quantity+=1;
            $bought_node.find(".count-label").text(quantity);
            $left_node.find(".count-label").text(quantity);
            $quantity_label.text(quantity);
        });
        $node.find(".minus").click(function(){
            if(quantity>1) {
                quantity -= 1;
                $bought_node.find(".count-label").text(quantity);
                $left_node.find(".count-label").text(quantity);
                $quantity_label.text(quantity);
            }
        });


        $left_node.find(".product-name").text(title);
        $left_node.find(".count-label").text(quantity);
        $bought_node.find(".product-name").text(title);
        $bought_node.find(".count-label").text(quantity);
        $left.append($left_node);
        $bought.append($bought_node);
        $bought_node.hide();


        $node.find(".x").click(function(){
            $node.hide();
            $bought_node.hide();
            $left_node.hide();
        });
        var prod = $node.find(".title1");
        var newName = $node.find(".edit");
        prod.click(function(){
            newName.val(prod.text());
            prod.hide();
            newName.show();
            newName.focus();

        });
        newName.focusout(function(){
            prod.text(newName.val());
            newName.hide();
            prod.show();
        });

        $node.find(".bl-bought").click(function () {
            $left_node.hide();
            $node.find('.x').hide();
            $node.find('.minus').hide();
            $node.find('.plus').hide();
            $node.find('.bl-bought').hide();
            $node.find('.bl-unbought').show();
            $node.find('.title1').addClass("linethrough");
            $bought_node.show();
            $left_node.hide();
            $bought_node.find(".product-name").addClass("linethrough");
            $bought_node.find(".count-label").addClass("linethrough");
        });

        $node.find(".bl-unbought").click(function () {
            $node.removeClass("is-bought");
            $node.find('.x').show();
            $node.find('.minus').show();
            $node.find('.plus').show();
            $node.find('.bl-unbought').hide();

            $node.find('.bl-bought').show();
            $left_node.show();
            // $bought_node.hide();
            $node.find('.title').removeClass("linethrough");
            $bought_node.hide();
            $left_node.show();
        });




        $list.append($node);


    };




    addItem("a");
    addItem("b");
    addItem("c");

    var $new_input = $(".input");
    $(".add").click(function(){
        var new_name = $new_input.val();
        if(new_name.trim()){
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    });
});