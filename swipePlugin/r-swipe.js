/**
 * r-swipe-plugin，模仿swip插件
 * 1：实现能自动翻图的功能 ok
 *   1.1：使用相对定位来控制显示隐藏一个元素（设置一个类）	
 * 2：加上动画效果 ok
 *   2.1：将position的值使用计时器来控制,也可以调用jQuery
 * 3：将这个功能封装成一个插件 ok
 * 4：添加一些可变参数
 * 		滚动的速度，小圆点的背景
 * 5：用两种不同的方式来实现
 */
		function r_swip(container,options){

			//quite if no root element
			if (!container) return;
			options = options || {};
			var speed = options.speed || 1000;

			var silders = $(container).children();
			$(container).after('</div><div id="wrap_bullet">');
			var num = silders.length;

			//添加小圆点
			var bullets = addBullets(num);
			var j = -1;
			//所有图片默认为隐藏
			$(silders).each(function(index,el){
				$(el).addClass("hid");
			});
			//为每个小圆点添加点击事件
			$(bullets).each(function(index, el) {
				$(el).click(function(event) {
					j = index;
					showDiv(bullets,"active",index);
					showDiv(silders,"show",index);
					stopRun(timmer);
				});
			});
			
			/**
			 * 开始自动滚动
			 */
			
			var timmer = setInterval(function(){
					j++;
					if(j > bullets.length - 1) j = 0;
					showDiv(bullets,"active",j);
					showDiv(silders,"show",j);
			},speed);



			/**
		 * @param  {[Jquery]} wraps    父元素
		 * @param  {[type]} class_name 激活状态的css样式
		 * @param  {[type]} index      子元素的index
		 * @return {[type]}            Jquery
		 */
			function showDiv(wraps,class_name,index){
					var i = index;
					var ele = wraps[i];
					var c = $(ele).slideDown("slow");
					console.log(c);
					// console.log(ele+"*****");
					$(wraps).each(function(index, el) {
						if(index !== i){
							$(el).removeClass(class_name);
						}
					});
					$(ele).addClass(class_name);
				}


		/**
		 * 添加小圆点
		 * @param {[type]} num [个数]
		 */
			function addBullets (num) {
				var a_bullet = "<a href='javascript:;' class='bullet'>&nbsp;</a>";
				for(i = 0; i < num; ++i){
					$("#wrap_bullet").append(a_bullet);
				}
				var bullets = $("#wrap_bullet").children();
				return bullets;
			}

			function startRun (speed) {
				
			}

			function stopRun(timmer){
				clearInterval(timmer);
			}

	}
	

		
