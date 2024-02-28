<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
<body>
    
    <script type="text/javascript">

      let array = [1,2,3];
      let num = 3;
      for (let i = 0; i < array.length; i++) {
        num++;
        array.push(num)
        console.log(array[i])
        if (i == 100) 
        {
          break;
        }
      }
      
    </script>
</body>
</html>
