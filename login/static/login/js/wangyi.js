$("#changecolor").change(function(){
	color=$(this).val();
	$("#top").css("background",color);
	$("#bot").css("background",color);
})

$("#play").click(function(){
	if($("#play").hasClass("fa-play")){
		bofang();
	}else{
		zanting();
	}
})

function bofang(){
	$("#photo").addClass("rotate");
	$("#play").removeClass("fa-play");
	$("#play").addClass("fa-pause");
	$("#play").attr("title","暂停");
	$("#mpeg")[0].play();
	$("#photo")[0].style.animationPlayState="running";
}

function zanting(){
	$("#photo").addClass("rotate");
	$("#play").removeClass("fa-pause");
	$("#play").addClass("fa-play");
	$("#play").attr("title","播放");
	$("#mpeg")[0].pause();
	$("#photo")[0].style.animationPlayState="paused";
}

var load;

$("#load").click(function(){
	$("#loadin").show();
	load=$("#load").text();
})

$("#close").click(function(){
	$("#loadin").hide();
})

function range(){
	if(!mouse) return;
	var all=$("#all").text();
	var now=$("#now").text();
	var time1=all.split(":");
	var time2=now.split(":");
	var all=parseInt(time1[0])*60+parseInt(time1[1]);
	var now=parseInt(time2[0])*60+parseInt(time2[1]);
	var val=300*now/all;
	(isNaN(val))&&(val=0);
	$("#dingwei").val(val);
}

$("#jingyin").click(function(){
	if($("#jingyin>i").hasClass("fa-volume-up")){
		$("#jingyin>i").removeClass("fa-volume-up");
		$("#jingyin>i").addClass("fa-volume-off");
		$("#jingyin").attr("title","取消静音");
		$("#mpeg")[0].muted=true;
		$("#loud").val("0");
	}else{
		$("#jingyin>i").removeClass("fa-volume-off");
		$("#jingyin>i").addClass("fa-volume-up");
		$("#jingyin").attr("title","静音");
		$("#mpeg")[0].muted=false;
		$("#loud").val("80");
	}
})

text={"牧马城市 毛不易":[{"time":31,"lineLyric":"游历在大街和楼房"},{"time":34,"lineLyric":"心中是骏马和猎场"},{"time":37,"lineLyric":"最了不起的脆弱迷惘"},{"time":41,"lineLyric":"不过就这样"},{"time":43,"lineLyric":"天外有天有无常"},{"time":47,"lineLyric":"山外有山有他乡"},{"time":50,"lineLyric":"跌了撞了 心还是回老地方"},{"time":56,"lineLyric":"游离于城市的痛痒"},{"time":59,"lineLyric":"错过了心爱的姑娘"},{"time":62,"lineLyric":"宣告世界的那个理想"},{"time":66,"lineLyric":"已不知去向"},{"time":69,"lineLyric":"为所欲为是轻狂"},{"time":72,"lineLyric":"防不胜防是悲伤"},{"time":75,"lineLyric":"后来才把成熟当偏方"},{"time":81,"lineLyric":"当所有想的说的要的爱的"},{"time":85,"lineLyric":"都挤在心脏"},{"time":88,"lineLyric":"行李箱里装不下我 想去的远方"},{"time":94,"lineLyric":"这来的去的给的欠的 算一种褒奖"},{"time":100,"lineLyric":"风吹草低见惆怅 抬头至少还有光"},{"time":132,"lineLyric":"游历在大街和楼房"},{"time":135,"lineLyric":"心中是骏马和猎场"},{"time":138,"lineLyric":"最了不起的脆弱迷惘"},{"time":142,"lineLyric":"不过就这样"},{"time":145,"lineLyric":"天外有天有无常"},{"time":148,"lineLyric":"山外有山有他乡"},{"time":151,"lineLyric":"跌了撞了 心还是回老地方"},{"time":157,"lineLyric":"游离于城市的痛痒"},{"time":160,"lineLyric":"错过了心爱的姑娘"},{"time":163,"lineLyric":"宣告世界的那个理想"},{"time":167,"lineLyric":"已不知去向"},{"time":170,"lineLyric":"为所欲为是轻狂"},{"time":173,"lineLyric":"防不胜防是悲伤"},{"time":176,"lineLyric":"后来才把成熟当偏方"},{"time":182,"lineLyric":"当所有想的说的要的爱的"},{"time":186,"lineLyric":"都挤在心脏"},{"time":189,"lineLyric":"行李箱里装不下我 想去的远方"},{"time":195,"lineLyric":"这来的去的给的欠的算一种褒奖"},{"time":201,"lineLyric":"风吹草低见惆怅"},{"time":203,"lineLyric":"抬头至少还有光"},{"time":207,"lineLyric":"把烦恼痛了吞了认了算了"},{"time":211,"lineLyric":"不对别人讲"},{"time":214,"lineLyric":"谁还没有辜负几段 昂贵的时光"},{"time":220,"lineLyric":"若男孩笑了哭了累了"},{"time":224,"lineLyric":"说要去流浪"},{"time":227,"lineLyric":"留下大人的模样"},{"time":228,"lineLyric":"看岁月剑拔弩张"},{"time":233,"lineLyric":"总会有个人成为你的远方"}],
	"不染 毛不易":[{"time":19,"lineLyric":"编曲：丁培峰"},{"time":39,"lineLyric":"不愿染是与非 怎料事与愿违"},{"time":46,"lineLyric":"心中的花枯萎 时光它去不回"},{"time":53,"lineLyric":"但愿洗去浮华 掸去一身尘灰"},{"time":60,"lineLyric":"再与你一壶清酒 话一世沉醉"},{"time":68,"lineLyric":"不愿染是与非 怎料事与愿违"},{"time":74,"lineLyric":"心中的花枯萎 时光它去不回"},{"time":82,"lineLyric":"回忆辗转来回 痛不过这心扉"},{"time":89,"lineLyric":"愿只愿余生无悔 随花香远飞"},{"time":96,"lineLyric":"一壶清酒 一身尘灰"},{"time":103,"lineLyric":"一念来回度余生无悔"},{"time":110,"lineLyric":"一场春秋 生生灭灭 浮华是非"},{"time":117,"lineLyric":"待花开之时再醉一回"},{"time":152,"lineLyric":"不愿染是与非 怎料事与愿违"},{"time":159,"lineLyric":"心中的花枯萎 时光它去不回"},{"time":166,"lineLyric":"回忆辗转来回 痛不过这心扉"},{"time":173,"lineLyric":"愿只愿余生无悔 随花香远飞"},{"time":181,"lineLyric":"一壶清酒 一身尘灰"},{"time":188,"lineLyric":"一念来回度余生无悔"},{"time":195,"lineLyric":"一场春秋 生生灭灭 浮华是非"},{"time":202,"lineLyric":"待花开之时再醉一回"},{"time":209,"lineLyric":"愿这生生的时光不再枯萎 待花开之时再醉一回"},{"time":223,"lineLyric":"愿这生生的时光不再枯萎 再回首浅尝心酒余味"},{"time":238,"lineLyric":"一壶清酒 一身尘灰"},{"time":244,"lineLyric":"一念来回度余生无悔"},{"time":251,"lineLyric":"一场春秋 生生灭灭 浮华是非"},{"time":258,"lineLyric":"待花开之时再醉一回"},{"time":266,"lineLyric":"一壶清酒 一身尘灰"},{"time":273,"lineLyric":"一念来回度余生无悔"},{"time":280,"lineLyric":"一场回忆 生生灭灭 了了心扉"},{"time":287,"lineLyric":"再回首浅尝心酒余味"},{"time":294,"lineLyric":"一场回忆 生生灭灭 了了心扉"},{"time":301,"lineLyric":"再回首浅尝心酒余味"},{"time":309,"lineLyric":"制作人：萨顶顶"},{"time":310,"lineLyric":"监制：付宏声"},{"time":310,"lineLyric":"和声、弦乐编写：丁培峰"},{"time":310,"lineLyric":"吉他：王晓松"},{"time":311,"lineLyric":"贝斯：王晓松"},{"time":312,"lineLyric":"笛子：赵雪"},{"time":312,"lineLyric":"弦乐：国际首席爱乐乐团"},{"time":313,"lineLyric":"和声：高莹 王勖"},{"time":313,"lineLyric":"录音师：李牧野"},{"time":313,"lineLyric":"录音棚：CU Music中英音乐"},{"time":314,"lineLyric":"混音师：李牧野"},{"time":314,"lineLyric":"混音录音棚：CU Music中英音乐"},{"time":315,"lineLyric":"音乐制作出品：中英音乐"},{"time":315,"lineLyric":"音乐发行：智慧大狗x天才联盟"},{"time":315,"lineLyric":"统筹：张葛 王明宇"}],
	"消愁 毛不易":[{"time":23,"lineLyric":"编曲Arranger : 赵兆"},{"time":31,"lineLyric":"当你走进这欢乐场"},{"time":35,"lineLyric":"背上所有的梦与想"},{"time":39,"lineLyric":"各色的脸上各色的妆"},{"time":44,"lineLyric":"没人记得你的模样"},{"time":48,"lineLyric":"三巡酒过你在角落"},{"time":52,"lineLyric":"固执的唱着苦涩的歌"},{"time":57,"lineLyric":"听它在喧嚣里被淹没"},{"time":61,"lineLyric":"你拿起酒杯对自己说"},{"time":67,"lineLyric":"一杯敬朝阳 一杯敬月光"},{"time":71,"lineLyric":"唤醒我的向往 温柔了寒窗"},{"time":75,"lineLyric":"于是可以不回头地逆风飞翔"},{"time":80,"lineLyric":"不怕心头有雨 眼底有霜"},{"time":84,"lineLyric":"一杯敬故乡 一杯敬远方"},{"time":88,"lineLyric":"守着我的善良 催着我成长"},{"time":92,"lineLyric":"所以南北的路从此不再漫长"},{"time":97,"lineLyric":"灵魂不再无处安放"},{"time":122,"lineLyric":"躁动不安的座上客"},{"time":127,"lineLyric":"自以为是地表演着"},{"time":131,"lineLyric":"伪装着 舞蹈着 疲惫着"},{"time":135,"lineLyric":"你拿起酒杯对自己说"},{"time":140,"lineLyric":"一杯敬朝阳 一杯敬月光"},{"time":144,"lineLyric":"唤醒我的向往 温柔了寒窗"},{"time":148,"lineLyric":"于是可以不回头地逆风飞翔"},{"time":153,"lineLyric":"不怕心头有雨 眼底有霜"},{"time":157,"lineLyric":"一杯敬故乡 一杯敬远方"},{"time":161,"lineLyric":"守着我的善良 催着我成长"},{"time":165,"lineLyric":"所以南北的路从此不再漫长"},{"time":170,"lineLyric":"灵魂不再无处安放"},{"time":180,"lineLyric":"一杯敬明天 一杯敬过往"},{"time":185,"lineLyric":"支撑我的身体 厚重了肩膀"},{"time":188,"lineLyric":"虽然从不相信所谓山高水长"},{"time":193,"lineLyric":"人生苦短何必念念不忘"},{"time":198,"lineLyric":"一杯敬自由 一杯敬死亡"},{"time":202,"lineLyric":"宽恕我的平凡 驱散了迷惘"},{"time":206,"lineLyric":"好吧天亮之后总是潦草离场"},{"time":210,"lineLyric":"清醒的人最荒唐"},{"time":217,"lineLyric":"清醒的人最荒唐"},{"time":226,"lineLyric":"制作人Producer : 李健 赵兆"},{"time":228,"lineLyric":"手风琴Accordion : 许笑男"},{"time":230,"lineLyric":"键盘Keyboard : 赵兆"},{"time":232,"lineLyric":"吉他Guitar : 薛峰"},{"time":233,"lineLyric":"贝斯Bass : 韩阳"},{"time":235,"lineLyric":"鼓Drum : 武勇恒"},{"time":237,"lineLyric":"合音Backing Vocal : 梁古驰"},{"time":238,"lineLyric":"弦乐Strings : 国际首席爱乐乐团International Master Philharmonic Orchestra"},{"time":240,"lineLyric":"混音Mixing : 李游"},{"time":242,"lineLyric":"母带Mastering : Joe LaPorta .（Sterling Sound. NY）"},{"time":243,"lineLyric":"录音棚Studio : 55TEC . Beijing"},{"time":245,"lineLyric":"录音Recording : 李游 李杨"},{"time":246,"lineLyric":"人声录音Vocal Recording : 李杨"},{"time":247,"lineLyric":"人声编辑Vocal Editing : 李杨"},{"time":248,"lineLyric":"录音助理Recording Assistants : 郭舒文 邢铜"},{"time":250,"lineLyric":"音乐制作发行produced and distributed : 哇唧唧哇×智慧大狗"},{"time":251,"lineLyric":""}],
	"像我这样的人 毛不易":[{"time":9,"lineLyric":"编曲Arranger : 赵兆 宋涛"},{"time":9,"lineLyric":""},{"time":15,"lineLyric":"像我这样优秀的人"},{"time":18,"lineLyric":"本该灿烂过一生"},{"time":22,"lineLyric":"怎么二十多年到头来"},{"time":26,"lineLyric":"还在人海里浮沉"},{"time":30,"lineLyric":""},{"time":30,"lineLyric":"像我这样聪明的人"},{"time":34,"lineLyric":"早就告别了单纯"},{"time":38,"lineLyric":"怎么还是用了一段情"},{"time":42,"lineLyric":"去换一身伤痕"},{"time":44,"lineLyric":""},{"time":46,"lineLyric":"像我这样迷茫的人"},{"time":49,"lineLyric":"像我这样寻找的人"},{"time":53,"lineLyric":"像我这样碌碌无为的人"},{"time":57,"lineLyric":"你还见过多少人"},{"time":66,"lineLyric":""},{"time":78,"lineLyric":"像我这样庸俗的人"},{"time":82,"lineLyric":"从不喜欢装深沉"},{"time":86,"lineLyric":"怎么偶尔听到老歌时"},{"time":90,"lineLyric":"忽然也晃了神"},{"time":94,"lineLyric":"像我这样懦弱的人"},{"time":98,"lineLyric":"凡事都要留几分"},{"time":102,"lineLyric":"怎么曾经也会为了谁"},{"time":105,"lineLyric":"想过奋不顾身"},{"time":107,"lineLyric":""},{"time":109,"lineLyric":"像我这样迷茫的人"},{"time":113,"lineLyric":"像我这样寻找的人"},{"time":117,"lineLyric":"像我这样碌碌无为的人"},{"time":121,"lineLyric":"你还见过多少人"},{"time":124,"lineLyric":""},{"time":125,"lineLyric":"像我这样孤单的人"},{"time":129,"lineLyric":"像我这样傻的人"},{"time":133,"lineLyric":"像我这样不甘平凡的人"},{"time":136,"lineLyric":"世界上有多少人"},{"time":141,"lineLyric":""},{"time":146,"lineLyric":"像我这样迷茫的人"},{"time":150,"lineLyric":"像我这样寻找的人"},{"time":154,"lineLyric":"像我这样碌碌无为的人"},{"time":158,"lineLyric":"你还见过多少人"},{"time":161,"lineLyric":""},{"time":162,"lineLyric":"像我这样孤单的人"},{"time":166,"lineLyric":"像我这样傻的人"},{"time":169,"lineLyric":"像我这样不甘平凡的人"},{"time":173,"lineLyric":"世界上有多少人"},{"time":176,"lineLyric":""},{"time":179,"lineLyric":"像我这样莫名其妙的人"},{"time":185,"lineLyric":"会不会有人心疼"},{"time":194,"lineLyric":""},{"time":194,"lineLyric":"制作人Producer : 李健 赵兆"},{"time":195,"lineLyric":"口琴Harmonica : 刘晓光"},{"time":195,"lineLyric":"键盘Keyboard : 赵兆"},{"time":196,"lineLyric":"吉他Guitar : 薛峰"},{"time":197,"lineLyric":"贝斯Bass : 韩阳"},{"time":198,"lineLyric":"鼓Drum : 武勇恒"},{"time":199,"lineLyric":"弦乐Strings : 国际首席爱乐乐团International Master Philharmonic Orchestra"},{"time":200,"lineLyric":"混音Mixing : 周天澈"},{"time":201,"lineLyric":"母带Mastering : Joe LaPorta .（Sterling Sound. NY）"},{"time":201,"lineLyric":"录音棚Studio : 55TEC . Beijing"},{"time":202,"lineLyric":"录音Recording : 李游 李杨"},{"time":203,"lineLyric":"人声录音Vocal Recording : 李杨"},{"time":204,"lineLyric":"人声编辑Vocal Editing : 李杨"},{"time":204,"lineLyric":"录音助理Recording Assistants : 郭舒文 邢铜"},{"time":205,"lineLyric":"音乐制作发行produced and distributed : 哇唧唧哇×智慧大狗"},{"time":205,"lineLyric":""}]
	};

musicname={"牧马城市 毛不易":{"id":"1331835608","zj":"老男孩 电视剧原声","music":"牧马城市","name":"毛不易","time":"04:18"},
	"消愁 毛不易":{"id":"569200213","zj":"平凡的一天","music":"消愁","name":"毛不易","time":"04:21"},
	"不染 毛不易":{"id":"536099160","zj":"香蜜沉沉烬如霜 电视剧原声","music":"不染","name":"毛不易","time":"05:19"},
	"像我这样的人 毛不易":{"id":"569213220","zj":"平凡的一天","music":"像我这样的人","name":"毛不易","time":"02:51"}
	}

msg={"牧马城市 毛不易":[
    {"megId":"压抑的附和着所谓的生活","megCon":"如果你也在听牧马城市这首歌，请告诉我你最难忘的城市。","date":"2018-08-01 14:36:02","userId":"4"},
    {"megId":"__何妨__","megCon":"所有不合时宜的相遇，都遗憾的让人心疼","date":"2018-08-11 08:10:05","userId":"11"}
    ],
	"消愁 毛不易":[
    {"megId":"_Colorful--","megCon":"希望我们冰释前嫌 再也不相见","date":"2018-08-01 14:36:02","userId":"5"},
    {"megId":"晓超_","megCon":"八杯消愁酒，山路步两程。人财非铜臭，故人恍如空。茅屋安心事，月光引清风。芬芳与人共，盛夏太匆匆。幸得一人守，平凡倒不同。","date":"2018-08-11 08:10:05","userId":"1"}
    ],
	"不染 毛不易":[
    {"megId":"是嘿嘿诶","megCon":"润玉:“你算错了开始，我算错了结局。”旭凤:“你并非算错，是我从未算过，我爱她。”","date":"2018-08-01 14:36:02","userId":"7"},
    {"megId":"广东-古诺卡布奇诺","megCon":"毛，愿你如出淤泥之莲，风尘而《不染》。毛！你是我的榜样。新的一年，要努力向你看齐。写出好歌给大家听。","date":"2018-08-11 08:10:05","userId":"6"}
    ],
	"像我这样的人 毛不易":[
    {"megId":"蓁若","megCon":"你我最后竟然也平凡到自命不凡。","date":"2018-08-01 14:36:02","userId":"9"},
    {"megId":"力先生的书店","megCon":"有朝一日会成为被喜欢的人觉得大吃一惊 被讨厌的人刮目相看的人","date":"2018-08-11 08:10:05","userId":"2"}
    ]
	}

var mouse=true;

function fn(sgname){
	getpl();
	var str=text[sgname];
	for(var i=0,p;i<str.length;i++){
		p=$("<p>"+str[i]["lineLyric"]+"</p>");
		$("#geci").append(p);
	}
	$("#all").text(musicname[sgname]["time"]);
	$("#mpeg")[0].ontimeupdate=function(){
		range();
		for(var i=0,l=str.length;i<l;i++){
			if($("#mpeg")[0].currentTime>str[i]["time"]){
				$("#geci").css("top",-i*40+200+"px");
				$("#geci p").removeClass("color");
				$("#geci p:nth-child("+(i+1)+")").addClass("color");
				$("#zmgc").text($(".color").text());
			}
		}
		var time=parseInt($("#mpeg")[0].currentTime);
		var fen=parseInt(time/60);
		(fen<10)&&(fen="0"+fen);
		var miao=time%60;
		(miao<10)&&(miao="0"+miao);
		$("#now").text(fen+":"+miao);
		var timeall=parseInt($("#mpeg")[0].duration);
		var allfen=parseInt(timeall/60);
		(allfen<10)&&(allfen="0"+allfen);
		if(this.ended){
			if($("#xunhuan").hasClass("fa-refresh")){
				repeat(sgname);
			}else if($("#xunhuan").hasClass("fa-random")){
				suiji();
			}else{
				next();
			}
			bofang();
		}
	}
	$("#zmgc").text("");
} fn($("#songs_list div:nth-child(1)").text());

function xiayishou(){
	$("#dingwei").val(0);
	if($("#xunhuan").hasClass("fa-random")){
		suiji();
	}else{
		next();
	}
	bofang();
}

function shangyishou(){
	$("#dingwei").val(0);
	if($("#xunhuan").hasClass("fa-random")){
		suiji();
	}else{
		last();
	}
	bofang();
}

function repeat(sgname){
	$("#dingwei").val("0");
	$("#geci").css("top","200px");
	$("#play").removeClass("fa-play");
	$("#play").addClass("fa-pause");
	$("#mpeg")[0].play();
}

function suiji(){
	var num=parseInt(Math.random()*3+1);
	var sgname=$("h1").text()+" "+$("#name").text();
	var songslen=$("#songs_list div").length;
	for(var i=0,val;i<songslen;i++){
		val=$("#songs_list div:nth-child("+(i+1)+")").text();
		(val==sgname)&&(num++);
		(num>4)&&(num-2);
	}
	sgname=$("#songs_list div:nth-child("+num+")").text();
	$("#geci").empty();
	$("#mpeg").attr("src","http://127.0.0.1/static/login/music/"+sgname+".mp3");
	$("#photo").css("background","url(http://127.0.0.1/static/login/img/"+sgname+".jpg)");
	$("#dingwei").val("0");
	$("#geci").css("top","200px");
	zanting();
	$("h1").text(musicname[sgname]["music"]);
	$("#name").text(musicname[sgname]["name"]);
	$("#zj").text(musicname[sgname]["zj"]);
	$("#all").text(musicname[sgname]["time"]);
	fn(sgname);
	return;
}

$("#lists").click(function(){
	if($("#list").css("display")=="none"){
		$("#list").show();
	}else{
		$("#list").hide();
	}
})

function next(){
	var sgname=$("h1").text()+" "+$("#name").text();
	var songslen=$("#songs_list div").length;
	for(var i=0,val;i<songslen;i++){
		val=$("#songs_list div:nth-child("+(i+1)+")").text();
		if(val==sgname){
			i=(i==(songslen-1))?1:i+2;
			sgname=$("#songs_list div:nth-child("+i+")").text();
			$("#geci").empty();
			$("#mpeg").attr("src","http://127.0.0.1/static/login/music/"+sgname+".mp3");
			$("#photo").css("background","url(http://127.0.0.1/static/login/img/"+sgname+".jpg)");
			$("#dingwei").val("0");
			$("#geci").css("top","200px");
			zanting();
			$("h1").text(musicname[sgname]["music"]);
			$("#name").text(musicname[sgname]["name"]);
			$("#zj").text(musicname[sgname]["zj"]);
			$("#all").text(musicname[sgname]["time"]);
			fn(sgname);
			return;
		}
	}
}

function last(){
	var sgname=$("h1").text()+" "+$("#name").text();
	var songslen=$("#songs_list div").length;
	for(var i=0,val,arr=[];i<songslen;i++){
		val=$("#songs_list div:nth-child("+(i+1)+")").text();
		if(val==sgname){
			i=(i==0)?(songslen):i;
			sgname=$("#songs_list div:nth-child("+i+")").text();
			$("#geci").empty();
			$("#mpeg").attr("src","http://127.0.0.1/static/login/music/"+sgname+".mp3");
			$("#photo").css("background","url(http://127.0.0.1/static/login/img/"+sgname+".jpg)");
			$("#dingwei").val("0");
			$("#geci").css("top","200px");
			zanting();
			$("h1").text(musicname[sgname]["music"]);
			$("#name").text(musicname[sgname]["name"]);
			$("#zj").text(musicname[sgname]["zj"]);
			$("#all").text(musicname[sgname]["time"]);
			fn(sgname);
			return;
		}
	}
	bofang();
}

function play(music){
	var sgname=$(music).text();
	$("#geci").empty();
	$("#mpeg").attr("src","http://127.0.0.1/static/login/music/"+sgname+".mp3");
	$("#photo").css("background","url(http://127.0.0.1/static/login/img/"+sgname+".jpg)");
	$("#dingwei").val("0");
	$("#geci").css("top","200px");
	arr=sgname.split(" ");
	$("h1").text(arr[0]);
	$("#name").text(arr[1]);
	fn(sgname);
	bofang();
}

function chengevloud(){
	$("#loud").attr("title",$("#loud").val());
	var val=$("#loud").val()/100;
	$("#mpeg")[0].volume=val;
}

var xmlhttp;
function createXMLHttpRequest(){
	if(window.ActiveXObject){
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		xmlhttp=new XMLHttpRequest();
	}
}

var u;

function startPost(){
	var name=$("#username").val();
	var pawd=$("#pswd").val();
	var str="name="+name+"&password="+pswd;
	createXMLHttpRequest();
	var url="http://www.coolneng.com/form/?sktime="+new Date().getTime();
	xmlhttp.open("post",url);
	xmlhttp.setRequestHeader("content-Type","application/x-www-form-urlencoded");
	xmlhttp.send(str);
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			if(xmlhttp.status==200){
				var content=xmlhttp.responseText;
				$("#load").text("欢迎您："+JSON.parse(content).content.name);
				u=parseInt(Math.random()*10);
				$("#loadin").hide();
				$("#loadout").css("display","inline-block");
				$("#wdl").hide();
				$("#ydl").show();
			}
		}
	}
}

$("#denglu").click(startPost);

$("#loadout").click(function(){
	$("#load").text(load);
	$("#loadout").hide();
	$("#wdl").show();
	$("#ydl").hide();
})

$("#xunhuan").click(function(){
	if($("#xunhuan").hasClass("fa-exchange")){
		$("#xunhuan").removeClass("fa-exchange");
		$("#xunhuan").addClass("fa-refresh");
		$("#xunhuan").attr("title","单曲循环");
	}else if($("#xunhuan").hasClass("fa-refresh")){
		$("#xunhuan").removeClass("fa-refresh");
		$("#xunhuan").addClass("fa-random");
		$("#xunhuan").attr("title","随机播放");
	}else{
		$("#xunhuan").removeClass("fa-random");
		$("#xunhuan").addClass("fa-exchange");
		$("#xunhuan").attr("title","列表循环");
	}
})

$("#dingwei").mouseup(function(){
	var val=$("#dingwei").val();
	var all=$("#all").text();
	var time1=all.split(":");
	var all=parseInt(time1[0])*60+parseInt(time1[1]);
	var time=val/300*all;
	$("#mpeg")[0].currentTime=time;
	mouse=true;
})

$("#dingwei").mousedown(function(){
	mouse=false;
})

$("#gc").click(function(){
	if($("#zmgc").css("display")=="none"){
		$("#gc").removeClass("fa-file");
		$("#gc").addClass("fa-file-text");
		$("#zmgc").show();
	}else{
		$("#gc").removeClass("fa-file-text");
		$("#gc").addClass("fa-file");
		$("#zmgc").hide();
	}
})

function getpl(){
	var sgname=$("h1").text()+" "+$("#name").text();
	var meg=msg[sgname];
	var tx=$(".touxiang");
	var name=$(".plname");
	var nr=$(".plnr");
	var time=$(".pltime");
	for (var i=0;i<meg.length;i++){
		var n=meg[i]["userId"];
		tx[i].src="http://pics.sc.chinaz.com/Files/pic/icons128/6287/s"+n+".png";
		nr[i].innerHTML="："+meg[i]["megCon"];
		time[i].innerHTML=meg[i]["date"];
		name[i].innerHTML=meg[i]["megId"];
	}
	for (i;i<name.length;i++){
		$($(".pl")[i]).remove();
	}
}

function closeit(){
	$("#inputpl").hide();
}

$("#pinglun").focus(function(){
	var sgname=$("h1").text();
	$("#mscnm").text(sgname);
	$("#inputpl").show();
})

$("#postpl").click(function(){
	pl=$(".pl")[0].cloneNode(true);
	$("#ydl")[0].insertBefore(pl,$("#first")[0]);
	$(".touxiang")[0].src="http://pics.sc.chinaz.com/Files/pic/icons128/6287/s"+u+".png";
	$(".plnr")[0].innerHTML="："+$("textarea").val();
	$(".pltime")[0].innerHTML=getNowFormatDate();
	$(".plname")[0].innerHTML=$("#load").text().slice(4);
})

function getNowFormatDate(){
	var day=new Date();
	var Year=0;
	var Month=0;
	var Day=0;
	var hour=0;
	var min=0;
	var snd=0;
	var CurrentDate = "";
	Year=day.getFullYear();
	Month=day.getMonth()+1;
	Day=day.getDate();
	hour=day.getHours();
	min=day.getMinutes();
	snd=day.getSeconds();
	CurrentDate+=Year+"-"; 
	if (Month>=10){
		CurrentDate+= Month+"-";
	}else{ 
		CurrentDate+="0"+Month+"-";
	}
	if (Day>=10){
		CurrentDate+=Day+" ";
	}else{
		CurrentDate+="0"+Day+" ";
	}
	if (hour>=10){
		CurrentDate+=hour+":";
	}else{
		CurrentDate+="0"+hour+":";
	}
	if (min>=10){
		CurrentDate+=min+":";
	}else{
		CurrentDate+="0"+min+":";
	}
	if (snd>=10){
		CurrentDate+=snd;
	}else{
		CurrentDate+="0"+snd;
	}
	return CurrentDate; 
}