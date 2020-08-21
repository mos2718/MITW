        //取得網路上的資源
        function HTTPGetData(urlStr, callback_fn) {
            // console.log(urlStr); // debugger
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", urlStr, true);
            rawFile.setRequestHeader("Content-type", "application/json+fhir");
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4) {
                    let ret = rawFile.responseText;
                    // console.log(ret); // debugger
                    callback_fn(ret);
                }
            }
            rawFile.send();
        }