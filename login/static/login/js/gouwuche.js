window.onload=function(){												//页面初始化；
	var shop=[{"序号":205,"商品":"Casio/卡西欧 EX-TR350","单价":20000,"数量":1,"小计":20000,"操作":"删除","src":"http://127.0.0.1/static/login/img/1.jpg"},
	{"序号":3,"商品":"Casio/卡西欧 EX-TR350","单价":20300,"数量":1,"小计":20300,"操作":"删除","src":"http://127.0.0.1/static/login/img/2.jpg"},
	{"序号":43,"商品":"Casio/卡西欧 EX-TR350","单价":20400,"数量":1,"小计":20400,"操作":"删除","src":"http://127.0.0.1/static/login/img/3.jpg"},
	{"序号":676,"商品":"Casio/卡西欧 EX-TR350","单价":20600,"数量":1,"小计":20600,"操作":"删除","src":"http://127.0.0.1/static/login/img/4.jpg"}];
	var table=document.createElement("table");							//生成表格；
	table.border="1";
	var thead=document.createElement("thead");
	table.appendChild(thead);
	var tr=document.createElement("tr");
	thead.appendChild(tr);
	for(var key in shop[0]){
		if (key=="src"){
			break;
		}else{
			switch (key){
				case "序号":
					var th=document.createElement("th");
					th.innerHTML=key;
					th.width="60px";
					break;
				case "商品":
					var th=document.createElement("th");
					th.innerHTML=key;
					th.width="240px";
					break;
				case "单价":
					var th=document.createElement("th");
					th.innerHTML=key;
					th.width="60px";
					break;
				case "数量":
					var th=document.createElement("th");
					th.innerHTML=key;
					th.width="160px";
					break;
				case "小计":
					var th=document.createElement("th");
					th.innerHTML=key;
					th.width="70px";
					break;
				case "操作":
					var th=document.createElement("th");
					th.innerHTML=key;
					th.width="60px";
				}
			tr.appendChild(th);
		}
	}
	var tbody=document.createElement("tbody");
	getin(shop,tbody,table);
	document.getElementById("data").appendChild(table);
	var div1=document.createElement("div");								//生成总计；
	var txt=document.createElement("text");
	txt.innerHTML='<input type=checkbox onclick="allof(this)" />全选<input type=checkbox onclick="inv(this)" />反选';
	div1.appendChild(txt);
	var text=document.createElement("text");
	text.innerHTML='<button onclick="delte()">删除</button><button onclick="clearall()">清除</button><span>已经选择商品<span id=num>0</span>件，共计<span id=sum>0</span>元</span>';
	div1.appendChild(text);
	document.getElementById("data").appendChild(div1);
	var form=document.createElement("form");							//生成结算；
	form.id="right";
	form.action="./tj.html";
	form.innerHTML='<button type="submit" onclick="slmt">结算</button>';
	document.getElementById("data").appendChild(form);
	var sptj=document.createElement("div");								//生成推荐商品；
	sptj.id="sptj";
	var div3=document.createElement("div");
	div3.innerHTML="推荐商品（点击加入购物车）";
	sptj.appendChild(div3);
	div4=document.createElement("div");
	div4.id="photo";
	div4.innerHTML='<img src="http://127.0.0.1/static/login/img/b1.png" class="img" onclick="add(this)" /><img src="http://127.0.0.1/static/login/img/b2.png" class="img" onclick="add(this)" /><img src="http://127.0.0.1/static/login/img/b3.png" class="img" onclick="add(this)" /><img src="http://127.0.0.1/static/login/img/b4.png" class="img" onclick="add(this)" />';
	sptj.appendChild(div4);
	document.getElementById("data").appendChild(sptj);
};
function calc(btn){														//商品个数加减；
	var td=btn.parentNode;
	var span=td.getElementsByTagName("input")[0];
	var n=parseInt(span.value);
	if (btn.innerHTML=="+"){
		n++;
	}else if(n!=1){
		n--;
	}
	span.value=n;
	var tr=td.parentNode;
	var tds=tr.getElementsByTagName("td");
	var price=parseInt(tds[2].innerHTML);
	var sub=price*n;
	tds[4].innerHTML="&yen;"+sub;
	var tab=document.getElementById("data");
	var tbd=tab.getElementsByTagName("tbody")[0];
	var trs=tbd.getElementsByTagName("tr");
	math();
	}
function del(btn){														//商品单项删除；
	var tr=btn.parentNode.parentNode;
	tr.className="hide";
	math();
}
function clearall(){													//商品全部清除；
	var trs=document.getElementsByTagName("tbody")[0].childNodes;
	for (i=0,len=trs.length;i<len;i++){
		trs[i].className="hide";
	}
}
function math(){														//商品数量及价格合计；
	checks=document.getElementsByTagName("tbody")[0].getElementsByClassName("ckb");
	for (i=0,len=checks.length,oncheck=[];i<len;i++){
		if (checks[i].checked){
			oncheck.push(checks[i].parentNode.parentNode.parentNode);
		}
	}
	for (i=0,num=0,sum=0;i<oncheck.length;i++){
		if (oncheck[i].className=="hide"){
		}else{
			num+=parseInt(oncheck[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].value);
			sum+=parseInt(oncheck[i].getElementsByTagName("td")[4].innerHTML.slice(1));
		}
	}
	div1=document.getElementById("num");
	div1.innerHTML=num;
	div2=document.getElementById("sum");
	div2.innerHTML=sum;
}
function allof(check){													//商品全选；
	if (check.checked){
		checks=document.getElementsByTagName("tbody")[0].getElementsByClassName("ckb");
		for(i=0,len=checks.length;i<len;i++){
			checks[i].checked="checked";
		}
		math();
	}
}
function inv(check){													//商品反选；
	checks=document.getElementsByTagName("tbody")[0].getElementsByClassName("ckb");
	for (i=0,len=checks.length,oncheck=[];i<len;i++){
		if (checks[i].checked){
			checks[i].checked="";
		}else{
			checks[i].checked="checked";
		}
	}
	math();
}
function delte(){														//商品多项删除；
	checks=document.getElementsByTagName("tbody")[0].getElementsByClassName("ckb");
	for (i=0,len=checks.length,oncheck=[];i<len;i++){
		if (checks[i].checked){
			oncheck.push(checks[i].parentNode.parentNode.parentNode);
		}
	}
	for (i=0;i<oncheck.length;i++){
		oncheck[i].className="hide";
	}
	math();
}
function getin(cve,tbody,table){										//商品添加；
	for (var i=0;i<cve.length;i++){
		var tr=document.createElement("tr");
		tbody.appendChild(tr);
		for (var key in cve[i]){
			if (key=="src"){
			}else{
				var td=document.createElement("td");
				switch (key){
					case "序号":
						var checkbox=document.createElement("text");
						checkbox.innerHTML='<input type=checkbox class="ckb" onclick="math()" />';
						td.appendChild(checkbox);
						var span=document.createElement("span");
						span.innerHTML=cve[i][key];
						td.appendChild(span);
						break;
					case "商品":
						var img=document.createElement("img");
						img.src=cve[i]["src"];
						img.width=50;
						img.height=50;
						td.appendChild(img);
						var span=document.createElement("span");
						span.innerHTML=cve[i][key];
						td.appendChild(span);
						break;
					case "单价":
						td.innerHTML=cve[i][key];
						break;
					case "数量":
						td.innerHTML='<button onclick="calc(this)">-</button><input size="1" type="text" value="1"><button onclick="calc(this)">+</button>'
						break;
					case "小计":
						td.innerHTML="&yen;"+cve[i][key];
						td.className="color";
						break;
					case "操作":
						td.innerHTML='<button onclick="del(this)">'+cve[i][key]+'</button>'
				}
			}
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}
function slmt(){														//结算;
	checks=document.getElementsByTagName("tbody")[0].getElementsByClassName("ckb");
	for (i=0,len=checks.length,oncheck=[];i<len;i++){
		if (checks[i].checked){
			oncheck.push(checks[i].parentNode.parentNode.parentNode);
		}
	}
	for (i=0,mycount=[];i<oncheck.length;i++){
		key=oncheck[i].getElementByTagName("td")[0].getElementByTagName("span")[0].innerHTML;
		mycount[key]=oncheck[i].getElementByTagName("td")[3].getElementByTagName("input")[0].value;
	}
}
function add(img){														//推荐商品添加；
	var tab=document.getElementsByTagName("table")[0];
	var tbd=tab.getElementsByTagName("tbody")[0];
	var car=[{"序号":365,"商品":"C1模型","单价":300,"数量":1,"小计":300,"操作":"删除","src":"http://127.0.0.1/static/login/img/b1.png"},
	{"序号":291,"商品":"C2模型","单价":340,"数量":1,"小计":340,"操作":"删除","src":"http://127.0.0.1/static/login/img/b2.png"},
	{"序号":4545,"商品":"C3模型","单价":260,"数量":1,"小计":260,"操作":"删除","src":"http://127.0.0.1/static/login/img/b3.png"},
	{"序号":1230,"商品":"C4模型","单价":400,"数量":1,"小计":400,"操作":"删除","src":"http://127.0.0.1/static/login/img/b4.png"}];
	var photo=img.parentNode.childNodes;
	for (i=0,cve=[];i<photo.length;i++){
		if (photo[i]==img){
			cve[0]=car[i];
			img.className="img hide";
		}
	}
	getin(cve,tbd,tab);
}