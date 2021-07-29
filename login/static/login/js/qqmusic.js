var timer1=null;
var timer2=null;
function play(){
	var value=document.getElementById("play-pause").className;
	var audio=document.getElementById("mpeg");
	if(value=="susp"){
		document.getElementById("play-pause").className="play";
		audio.play();
		timer1=setInterval(range,1000);
		timer2=setInterval(tranlate,3300);
	}else{
		document.getElementById("play-pause").className="susp";
		audio.pause();
		clearInterval(timer1);
		timer1=null;
		clearInterval(timer2);
		timer2=null;
	}
}
function loadin(){
	$("#denglu").css("z-index","100");
}
function closeit(){
	$("#denglu").css("z-index","-100");
}
function qq(){
	$("#qq").css("display","block");
	$("#qq").css("color","green");
	$("#weixin").css("display","none");
	$("#weixin").css("color","black");
}
function wx(){
	$("#weixin").css("display","block");
	$("#weixin").css("color","green");
	$("#qq").css("display","none");
	$("#qq").css("color","black");
}
function range(){
	var dw=parseInt($("#dingwei").val());
	$("#dingwei").val(dw+1);
}
var tr=0;
function tranlate(){
	tr-=34;
	console.log(tr);
	$("#geci").css("transform","translateY("+tr+"px)");
}
text1="[00:31.440]游历在大街和楼房\n[00:34.191]心中是骏马和猎场\n[00:37.686]最了不起的脆弱迷惘\n[00:41.191]不过就这样\n[00:43.945]天外有天有无常\n[00:47.194]山外有山有他乡\n[00:50.688]跌了撞了 心还是回老地方\n[00:56.192]游离于城市的痛痒\n[00:59.445]错过了心爱的姑娘\n[01:02.940]宣告世界的那个理想\n[01:06.444]已不知去向\n[01:09.440]为所欲为是轻狂\n[01:12.690]防不胜防是悲伤\n[01:15.943]后来才把成熟当偏方\n[01:21.445]当所有想的说的要的爱的\n[01:25.194]都挤在心脏\n[01:28.446]行李箱里装不下我 想去的远方\n[01:34.437]这来的去的给的欠的 算一种褒奖\n[01:40.695]风吹草低见惆怅 抬头至少还有光\n[02:12.692]游历在大街和楼房\n[02:15.687]心中是骏马和猎场\n[02:18.694]最了不起的脆弱迷惘\n[02:22.188]不过就这样\n[02:25.196]天外有天有无常\n[02:28.448]山外有山有他乡\n[02:31.697]跌了撞了 心还是回老地方\n[02:37.446]游离于城市的痛痒\n[02:40.695]错过了心爱的姑娘\n[02:43.691]宣告世界的那个理想\n[02:47.444]已不知去向\n[02:50.437]为所欲为是轻狂\n[02:53.444]防不胜防是悲伤\n[02:56.694]后来才把成熟当偏方\n[03:02.198]当所有想的说的要的爱的\n[03:06.447]都挤在心脏\n[03:09.198]行李箱里装不下我 想去的远方\n[03:15.445]这来的去的给的欠的算一种褒奖\n[03:21.690]风吹草低见惆怅\n[03:23.446]抬头至少还有光\n[03:27.778]把烦恼痛了吞了认了算了\n[03:31.285]不对别人讲\n[03:34.586]谁还没有辜负几段 昂贵的时光\n[03:40.843]若男孩笑了哭了累了\n[03:44.337]说要去流浪\n[03:47.114]留下大人的模样\n[03:48.857]看岁月剑拔弩张\n[03:53.362]总会有个人成为你的远方";
function lyrc(text){
	var lines=text.split("\n");
	pattern=/\[\d{2}:\d{2}.\d{3}/g;
	result=[];
	while(!pattern.test(lines[0])){
		lines=lines.slice(1);
	}
	lines[lines.length-1].length===0&&lines.pop();
	lines.forEach(function(v,i,a){
		var time=v.match(pattern);
		value=v.replace(pattern,"");
		time.forEach(function(v1,i1,a1){
			var t=v1.slice(1,-1).split(":");
			result.push(parseInt(t[0],10)*60+parseFloat(t[1],value));
		})
	})
	result.sort(function(a,b){
		return a[0]-b[0];	
	})
	return result;
}