$.fn.extend({ProgressBarWars: function(opciones) {
					var ProgressBarWars=this;
					var theidProgressBarWars=$(ProgressBarWars).attr("id");
					var styleUnique = Date.now();
                    var StringStyle="";
					
					defaults = {
					porcentaje:"100",
					tiempo:1000,
					color:"",
					estilo:"yoda",
					tamanio:"30%",
					alto:"6px"
					}
					
					var opciones = $.extend({}, defaults, opciones);
					if(opciones.color!='')
					{
						StringStyle="<style>.color"+styleUnique+"{ border-radius: 6px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
					$(ProgressBarWars).before(StringStyle);
	                if(opciones.flag){
					$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	                }
			        $("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


					this.mover = function(ntamanio) {
					$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
					};
	return this;			 
	}
});
$.fn.extend({ProgressBarWars1: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space1"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});
$.fn.extend({ProgressBarWars2: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space2"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});
$.fn.extend({ProgressBarWars3: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space3"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});
$.fn.extend({ProgressBarWars4: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space4"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});

$.fn.extend({ProgressBarWars5: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space5"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});
$.fn.extend({ProgressBarWars6: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space6"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});
$.fn.extend({ProgressBarWars7: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space7"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});
$.fn.extend({ProgressBarWars8: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space8"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});
$.fn.extend({ProgressBarWars9: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space9"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});
$.fn.extend({ProgressBarWars10: function(opciones) {
	var ProgressBarWars=this;
	var theidProgressBarWars=$(ProgressBarWars).attr("id");
	var styleUnique = Date.now();
	var StringStyle="";

	defaults = {
		porcentaje:"100",
		tiempo:1000,
		color:"",
		estilo:"yoda",
		tamanio:"30%",
		alto:"6px"
	}

	var opciones = $.extend({}, defaults, opciones);
	if(opciones.color!='')
	{
		StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
	$(ProgressBarWars).before(StringStyle);
	if(opciones.flag){
		$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space10"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
	}
	$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);


	this.mover = function(ntamanio) {
		$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
	};
	return this;
}
});
(function($){
	$.fn.extend({
		Scroll:function(opt,callback){
			//参数初始化
			if(!opt) var opt={};
			var _btnUp = $("#"+ opt.up);//Shawphy:向上按钮
			var _btnDown = $("#"+ opt.down);//Shawphy:向下按钮
			var timerID;
			var _this=this.eq(0).find("ul:first");
			var     lineH=_this.find("li:first").height(), //获取行高
				line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
				speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
			timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
			if(line==0) line=1;
			var upHeight=0-line*lineH;
			//滚动函数
			var scrollUp=function(){
				_btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定
				_this.animate({
					marginTop:upHeight
				},speed,function(){
					for(i=1;i<=line;i++){
						_this.find("li:first").appendTo(_this);
					}
					_this.css({marginTop:0});
					_btnUp.bind("click",scrollUp); //Shawphy:绑定向上按钮的点击事件
				});

			}
			//Shawphy:向下翻页函数
			//var scrollDown=function(){
			//        _btnDown.unbind("click",scrollDown);
			//        for(i=1;i<=line;i++){
			//                _this.find("li:last").show().prependTo(_this);
			//        }
			//        _this.css({marginTop:upHeight});
			//        _this.animate({
			//                marginTop:0
			//        },speed,function(){
			//                _btnDown.bind("click",scrollDown);
			//        });
			//}
			//Shawphy:自动播放
			var autoPlay = function(){
				if(timer)timerID = window.setInterval(scrollUp,timer);
			};
			var autoStop = function(){
				if(timer)window.clearInterval(timerID);
			};
			//鼠标事件绑定
			_this.hover(autoStop,autoPlay).mouseout();
			_btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);//Shawphy:向上向下鼠标事件绑定
			_btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);

		}
	})
})(jQuery);