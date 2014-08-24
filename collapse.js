(function($){
	$.fn.collapse = function(conf){
		conf = $.extend({section:'.brand',title:'h3',content:'ul',
			openFirst:true,
			openOnlyOne:true,
			onOpen:function(i,sec){
				$(this.contents[i]).stop(1,1).slideDown();
			},
			onClose:function(i,sec){
				$(this.contents[i]).stop(1,1).slideUp();
			}
		},conf);
		$(this).each(function(){
			var $that = $(this);
			var o = {
				sections:$that.find(conf.section),
				titles:$that.find(conf.title),
				contents:$that.find(conf.content),
				lastIndex:-1,
				init:function(){
					var that = this;
					this.titles.each(function(i,a){
						$(a).click(function(){
							that.select(i);
						});
					});
					this.contents.hide();
					if(this.openFirst){
						this.select(0);
					}
				},
				select:function(i){
					//如果是激活的则关闭
					if($(this.sections[i]).is('.active')){
						$(this.sections[i]).removeClass('active');
						this.onClose(i,this.sections[i]);
						return;
					}
					
					//如果限制最多展开1个，则关闭上一个
					if(this.openOnlyOne && this.lastIndex>=0 && $(this.sections[this.lastIndex]).is('.active')){
						$(this.sections[this.lastIndex]).removeClass('active');
						this.onClose(this.lastIndex,this.sections[this.lastIndex]);	
					}
					
					//记录上一个
					this.lastIndex = i;
					$(this.sections[i]).addClass('active');
					this.onOpen(this.lastIndex,this.sections[this.lastIndex]);	
				}
			};
			
			o = $.extend(o,conf);
			o.init();
			$that.data('jun_collapse',o);
		});
		
	};
})(jQuery);
