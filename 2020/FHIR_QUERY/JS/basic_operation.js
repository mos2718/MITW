function prev_page() {
    if (backward != "") {
        url = backward;
        backward = "";
        HTTPGetData(url, master);
    } else {
        alert("at the tip");
    }
}

function next_page() {
    if (url == "") {
        alert("End Of Records");
    } else
        HTTPGetData(url, master);
}

function detail() {
    // alert(this.id);
    var detail_url = document.getElementById("server").value.trim() + "/" + this.id;

    HTTPGetData(detail_url, detail_view);
}

function detail_view(response) {
    document.getElementById("detail_area").value = response;
    document.getElementById("detail").style.display = "block";
}

function clean_table(table) {
    // console.log(table.childElementCount);
    for (let c = table.childElementCount - 1; c >= 1; c--) {
        // console.log(table.children[c].innerHTML);
        table.removeChild(table.children[c]);
    }
}

function load_list_file(response) {
    var list = response.split("\n");
    const tag_id = list[0].trim() + "_list";
    var dropdown_list = document.getElementById(tag_id);
    for (i = 1; i < list.length; i++) {
        var tuple = list[i].split(",");
        var option = document.createElement("option");
        option.text = tuple[1];
        option.value = tuple[0];
        dropdown_list.add(option);
    }
}