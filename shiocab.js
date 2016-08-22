$(document).ready(

function ()
{
	
	var shiocabtoggle=".shiocab-toggle";
	var i = 0 ;
	//alert($(shiocabtoggle).length);
	while($(shiocabtoggle).length>0)
	{
		var obj = $("body").find(shiocabtoggle);
		$(obj).each(
		function (){
			//alert($(this).prop('outerHTML'));
			$(this).removeClass("shiocab-toggle");
			var htmlTxt = $(this).prop('outerHTML');
			var source = $(this).attr("value");
			var btnCls = $(this).attr("ButtonClass");
			var ctnCls = $(this).attr("ContentClass");
			var func = $(this).attr("Function");

			if(source == undefined)
			{
				source = "Open|Close";
			}

			if(btnCls == undefined)
			{
				btnCls = "";
			}

			if(ctnCls == undefined)
			{
				ctnCls = "";
			}

			if(func == undefined)
			{
				func = "javascript:slideToggle()";
			}

			var kekka = source.split("|");
			var id = "shiocab_toggle"+ i +"";
			//var str;
			var text = "<div>";
			text += returnString(
				"button",
				{
					class: btnCls + " shiocab_toggle",
					value: source,
					//function: func,
					id: id
				},
				kekka[0],
				0
			);
			//alert(text);
			text += returnString(
				"div",
				{
					class: ctnCls + " shiocab_toggle",
					style: "display:none;",
					function: func,
					id: id
				},
				htmlTxt
			);
			//alert(text);
			text += "</div>";

			$(this).replaceWith(text);
		//alert(text);
			i++;
		});
	}

	function returnString(bgn,mp,cnt,end)
	{
		var str = "";
		str += "<" + bgn;
		for(var k in mp)
		{
			str += " " + k + "=\"" + mp[k] + "\"";
		}
		str += ">" + cnt;
		if(end != undefined)
		{
			str += "</" + bgn +">"
		}
		//alert(str);
		return str;
	}

	$("button.shiocab_toggle").click(
		function () 
		{
			var getId = $(this).attr("id");
			var source = $(this).attr("value");
			//var func = $(this).attr("function");
			//var func_name = $(this).attr("function");
			var kekka = source.split("|");
			//alert(source);
			if($("div#" + getId).css("display") != "none")
			{
				$(this).html(kekka[0]);
			}else{
				$(this).html(kekka[1]);
			}
			$("div#" + getId).slideToggle();
			//alert(func);
		}
	);
});
