<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
<body>
    
    <script type="text/javascript">

      const a = { duration: 50 };

      a.duration ??= 10;
      console.log(a.duration);
      // Expected output: 50

      a.speed ??= 25;
      console.log(a.speed);
      // Expected output: 25
      
    </script>
</body>
</html>
