var shop=[{"商品":"光明 莫斯利安 常温酸奶酸牛奶(原味)350g*6盒/礼盒装","单价":34.80,"数量":1,"小计":34.80,"src":"{% static 'login/img/莫斯利安.png' %}"},
	{"商品":"科尔沁 休闲肉脯零食 内蒙古特产 手撕风干牛肉干孜然味400g","单价":34.80,"数量":1,"小计":34.80,"src":"{% static 'login/img/牛肉.png' %}"},
	{"商品":"德芙Dove巧克力分享碗装 什锦牛奶榛仁葡萄干巧克力 婚庆 糖果 礼品 休闲","单价":34.80,"数量":1,"小计":34.80,"src":"{% static 'login/img/德芙_03.png' %}"},
	{"商品":"网易云音乐车载蓝牙播放器 车载充电器一拖二USB车充 汽车车载mp3音乐","单价":34.80,"数量":1,"小计":34.80,"src":"{% static 'login/img/播放器_03.png' %}"}];
function allin(check){
	var all=document.getElementById("list").getElementsByTagName("input");
	if(check){
		for(i=0,len=all.length;i<len;i++){
			all[i].checked="checked";
		}
	}
	math();
}
function calc(btn){
	var td=btn.parentNode;
	var span=td.getElementsByTagName("span")[0];
	var n=parseInt(span.innerHTML);
	if (btn.innerHTML=="+"){
		n++;
	}else if(n!=1){
		n--;
	}
	span.innerHTML=n;
	var tr=td.parentNode;
	var tds=tr.getElementsByTagName("span");
	var price=parseFloat(tds[3].innerHTML.slice(1));
	var sub=price*n;
	tds[8].innerHTML="&yen;"+(sub.toFixed(2));
	var tab=document.getElementById("data");
	math();
}
function math(){
	var all=document.getElementById("list").getElementsByClassName("a");
	for(i=0,len=all.length,arr=[];i<len;i++){
		if(all[i].checked&&all[i].parentNode.className!="hide"){
			arr.push(all[i].parentNode);
		}
	}
	for(i=0,num=0,sum=0;i<arr.length;i++){
		num+=parseInt(arr[i].getElementsByClassName("num")[0].getElementsByClassName("number")[0].innerHTML);
		sum+=parseFloat(arr[i].getElementsByClassName("xj")[0].innerHTML.slice(1));
	}
	var settle=document.getElementsByTagName("span");
	settle[50].innerHTML=num;
	settle[53].innerHTML="&yen;"+sum.toFixed(2);
}
function choseit(chose){
	math();
}
function clearall(){
	var all=document.getElementsByClassName("sp");
	console.log(all);
	for(i=0,len=all.length;i<len;i++){
		all[i].className="hide";
	}
}
function del(btn){
	var div=btn.parentNode.parentNode;
	div.className="hide";
}
function chose(check){
	var div=check.parentNode.parentNode;
	var chk=div.getElementsByTagName("input");
	if(check.checked){
		for(i=0,len=chk.length;i<len;i++){
			chk[i].checked="checked";
		}
	}
	math();
}
function delet(){
	var chk=document.getElementsByTagName("input");
	for(i=0,len=chk.length;i<len;i++){
		if(chk[i].checked){
			chk[i].parentNode.className="hide";
		}
	}
	math();
}
function plus(btn){
	var getin=[],i=-1;
	switch (btn.id){
		case "mosilian":
			i=0;
			break;
		case "niurougan":
			i=1;
			break;
		case "dove":
			i=2;
			break;
		case "chezai":
			i=3;
	}
	getin=shop[i];
	var div=document.createElement("div");
	div.className="sp";
	var input=document.createElement("input");
	input.type="checkbox";
	input.className="a";
	input.setAttribute=("onclick","choseit(this)");
	div.appendChild(input);
	var img=document.createElement("img");
	img.src=getin["src"];
	div.appendChild(img);
	var name=document.createElement("div");
	name.innerHTML=getin["商品"];
	div.appendChild(name);
	var jj=document.createElement("span");
	jj.className="jj";
	div.appendChild(jj);
	var dj=document.createElement("span");
	dj.className="dj";
	var danjia=document.createElement("span");
	danjia.innerHTML="&yen;"+getin["单价"];
	dj.appendChild(danjia);
	div.appendChild(dj);
	var num=document.createElement("span");
	num.className="num";
	var but=document.createElement("button");
	but.setAttribute=("onclick","calc(this)");
	num.appendChild(but);
	var number=document.createElement("span");
	number.className="number";
	number.innerHTML=getin["数量"];
	num.appendChild(number);
	var btt=document.createElement("button");
	btt.setAttribute=("onclick","calc(this)");
	num.appendChild(btt);
	var yh=document.createElement("span");
	yh.innerHTML="有货";
	num.appendChild(yh);
	div.appendChild(num);
	var zj=document.createElement("span");
	zj.className="zj";
	var xj=document.createElement("span");
	xj.className="xj";
	xj.innerHTML=getin["小计"];
	zj.appendChild(xj);
	var gg=document.createElement("span");
	zj.appendChild(gg);
	div.appendChild(zj);
	var cz=document.createElement("span");
	cz.className="cz";
	var sc=document.createElement("button");
	sc.setAttribute=("onclick","calc(this)");
	cz.appendChild(sc);
	var a=document.createElement("a");
	a.innerHTML="移到我的关注";
	cz.appendChild(a);
	div.appendChild(cz);
	console.log(document.getElementsByTagName("div"));
	document.getElementsByTagName("div")[11].appendChild(div);
}