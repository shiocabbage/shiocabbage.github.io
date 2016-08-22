$(document).ready(

function ()
{
	
	var shiocabtoggle="shiocab.toggle";
	var i = 0 ;
	//alert($(shiocabtoggle).length);
	while($(shiocabtoggle/* + ":not(.parents(pre,code)"*/).length>0)
	{
		var obj = $("body").find(shiocabtoggle/* + ":not($(this).parents(pre,code)"*/);
		//alert(i);
		//alert($(obj).html());

		$(obj).each(

		function (){
			//alert($(this).html());
			var source = $(this).attr("value");
			var btnCls = $(this).attr("ButtonClass");
			var ctnCls = $(this).attr("ContentClass");
			var func = $(this).attr("Function");
			//alert($(this).html());

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
			//alert($(this).html() + ":35");
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
				$(this).html()
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
