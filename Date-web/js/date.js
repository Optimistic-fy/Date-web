$(document).ready(function () {
	var m=0;/*月份 在现有月份上增加或者减少月份*/

	function Tag(n){
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth()+n);
		var year = oDate.getFullYear();
		var month = oDate.getMonth();
		var today = oDate.getDate();

		//计算本月有多少天
		var allDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];

		//判断闰年
		if(month == 1){
			if(year % 4 == 0 && year % 100 !=0 || year % 400 ==0){
				allDay=29;
			}
		}

		//判断本月第一天是星期几
		oDate.setDate(1);//时间调整到本月第一天
		var week=oDate.getDay();//读取本月第一天是星期几

		//每次清空
		$('.date-day ul').empty();

		//插入空白
		for (var i = 0; i < week; i++) {
			$('.date-day ul').append("<li></li>");
		}

		//将日期插入td中
		var k=1;
		for(var i=1; i<=allDay;i++){
			$('.date-day ul').append("<li>"+i+"</li>");
		}

		//标记颜色
		$('.date-day ul li').each(function(index,element){
			var value=$(this).text();

			if(n==0){
				if(value<today){
					$(this).addClass('day');
					$(this).addClass('day-digital');
				}else if(value==today){
					$(this).addClass('day');
					$(this).addClass('day-digital').css('background','rgb(255,255,204)');
				}else if(value>today){
					$(this).addClass('day');
					$(this).addClass('day-digital');
				}
			}
			else if(n!=0){
				$(this).addClass('day');
				$(this).addClass('day-digital');
			}
		});

		//定义标题日期
		$('.heade-left-title h2').text(year+'年'+(month+1)+'月');
	};
	Tag(0);

	$('.date-pre').click(function(){
		m--;
		Tag(m);
	});

	$('.date-next').click(function(){
		m++;
		Tag(m);
	});
})