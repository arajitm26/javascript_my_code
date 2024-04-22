<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
<body>

<script type="text/javascript">

  
  //https://www.youtube.com/watch?v=RN5FRD-yrz4


  function* foo(index) {
    while (index < 2) {
      yield index;
      index++;
    }
  }

  const iterator = foo(0);

  console.log(iterator.next());
  // Expected output: 0

  console.log(iterator.next());
  // Expected output: 1
</script>

</body>
</html>
