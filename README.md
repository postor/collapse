collapse
========

a collapse jquery plugin

usage
========

### html
    <ul class="brands">
      <li class="brand">
				<h3>三星</h3>
				<ul class="devices">
				  <li class="device">
						<p>Captivate</p>
					</li>
				  <li class="device">
						<p>Captivate</p>
					</li>
				<ul>
			</li>
			<li class="brand">
				<h3>HTC</h3>
				<ul class="devices">
					<li class="device">
						<p>Amaze 4G</p>
					</li>
				<ul>
			</li>
			<li class="brand">
				<h3>more...</h3>
				<ul class="devices">
					<li class="device">
						<p>more...</p>
					</li>
				<ul>
			</li>
					
### js  
	<script src="jquery.min.js"></script>
	<script src="collapse.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$('.brands').collapse({section:'.brand',title:'h3',content:'ul'});
		});
	</script>


params
========

### section
    filter of sections which would add a "actived" class when active

### title
    filter of title which you can click and expand or collapse the section

### content
    hide it when collapsed and show it when expanded, by default slideDown or slideUp

### openFirst
    expand the first section by default

### openOnlyOne
    when expand a new section collapse others

more
========

### you can get the collapse object and use or modify it
    var o = $('.brands').data('jun_collapse');
    o.openOnlyOne = false;
    o.select(3);
