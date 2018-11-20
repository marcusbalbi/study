<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My website</title>
   
</head>
<body>

	<nav>
		<li>Home</li>
		<li>About</li>
		@yield('nav')
	</nav>
	<hr>
	<nav>
		@section('nav2')
			<li>Home</li>
			<li>About</li>
		@show
	</nav>

	<div class="content">
  @yield('content')
  </div>
</body>
</html>
