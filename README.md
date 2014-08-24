collapse
========

a collapse jquery plugin

usage
========
html
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
					
js  
  <script src="jquery.min.js"></script>
	<script src="collapse.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$('.brands').collapse({openOnlyOne:true});
		});
	</script>


params
========


more
========
