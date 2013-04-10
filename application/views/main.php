<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to Fiesta</title>
    <link rel="stylesheet" type="text/css" href="/media/js/ext/resources/css/ext-all-neptune.css" />
    <link rel="stylesheet" type="text/css" href="/media/js/ext/ux/form/field/BoxSelect.css" />
    <link rel="stylesheet" type="text/css" href="/media/css/fiesta.css" />

    <script type="text/javascript">
        CONFIG = {
            disqus_shortname    : '<?php echo $disqus_shortname?>',
            userId              : '<?php echo $userId?>',
            userName            : '<?php echo isset($account) ? $account->username : 'Guest';?>'
        };
    </script>

    <script type="text/javascript" src="/media/js/ext/ext-all-debug.js"></script>
    <script type="text/javascript" src="/media/js/siesta/siesta-all.js"></script>
    <script type="text/javascript" src="/media/js/fiesta/app.js"></script>
    <script>
    /*
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + Config.disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    */
    </script>
</head>
<body>
<div id="disqus_thread" style="height: 100%; padding: 5px; position: relative; top: -10000px;"></div>
</body>
</html>