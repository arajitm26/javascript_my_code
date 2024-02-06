<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
<body>
    
    <script type="text/javascript">

      let myObject = {
                        key1: "value1",
                        key2: null,
                        key3: "",
                        key4: false,
                        key5: "someValue"
                      };
       console.log(checkKey(myObject,'key6'))
       console.log(checkKey(myObject,'key1'))
       console.log(checkKey(myObject,'key2'))
       console.log(checkKey(myObject,'key3'))
       console.log(checkKey(myObject,'key4'))
       console.log(checkKey(myObject,'key5'))
       

      function checkKey(obj, key) {
        return obj[key] ?? false;
      }
      
    </script>
</body>
</html>
