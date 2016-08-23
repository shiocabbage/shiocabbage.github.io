$(document).ready(

function ()
{
	
	var shiocabtoggle=".shiocab-toggle";
	var i = 0 ;
	while($(shiocabtoggle).length>0)
	{
		var obj = $("body").find(shiocabtoggle);

		$(obj).each(

		function ()
		{
			$(this).removeClass("shiocab-toggle");
			$(this).addClass("shiocab_toggle");
			$(this).css("display","none");
			var styl = $(this).attr("style");
			
			var source = $(this).attr("value");
			var btnCls = $(this).attr("ButtonClass");
			
			var clss = $(this).attr("class");
			var id = $(this).attr("id");
			
			//alert(html);
			if(source == undefined){source = "Open|Close";}
			if(btnCls == undefined){btnCls = "";}
			if(styl == undefined){styl = "";}
			if(clss == undefined){clss = "";}
			if(id == undefined){id = "shiocab_toggle"+ i +"";$(this).attr("class",id);}

			var kekka = source.split("|");
			
			var text = returnString(
				"div",
				{
					class: clss,
					style: styl
				},
				""
			);

			var html = $(this).prop('outerHTML');
			text += returnString(
				"button",
				{
					class: btnCls + " shiocab_toggle",
					value: source,
					id: id
				},
				kekka[0],
				0
			);
			//alert(text);
			text += html
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
			var kekka = source.split("|");
			//alert($("." + getId).not("button").html());
			if($("." + getId).not("button").css("display") != "none")
			{
				$(this).html(kekka[0]);
			}else{
				$(this).html(kekka[1]);
			}
			$("." + getId).not("button").slideToggle();
		}
	);
});
