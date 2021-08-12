menu_list_array = ["Veg Margherita Pizza","Cheese Pizza","Hawaiian Pizza","Buffalo Pizza" ];

function getmenu(){
var htmldata = "";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var imgtags = '<img id="im1" src="https://th.bing.com/th/id/R.9839f06e4da9e9319ddbaf2e0e8514c2?rik=EDwaXUXWxOJAaA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HnDlGIk5S60%2fTjKVNo1QGOI%2fAAAAAAAACQ8%2f4IXo4C-WcL0%2fs1600%2fShurfine%2bpie.JPG&ehk=0fdsRNg1n1sKBD2gNSF8ntaLHOtCGchP%2bDk2aVkmY98%3d&risl=&pid=ImgRaw&r=0">'
var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata = htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
