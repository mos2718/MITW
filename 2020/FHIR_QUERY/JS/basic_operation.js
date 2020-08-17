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
    HTTPGetData(url, master);
}

function detail() {
    // alert(this.id);
    url = document.getElementById("server").value.trim() + "/" + this.id;

    HTTPGetData(url, detail_view);
}

function detail_view(response) {
    alert(response);
}

function clean_table(table) {
    // console.log(table.childElementCount);
    for (let c = table.childElementCount - 1; c >= 1; c--) {
        // console.log(table.children[c].innerHTML);
        table.removeChild(table.children[c]);
    }
}