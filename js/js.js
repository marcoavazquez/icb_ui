
var inputs_file = document.getElementsByClassName('btn-file');

for (input in inputs_file) {

    var file_name = document.getElementById('file_name');

    inputs_file[input].onchange = function() {

        document.getElementById('file_name').textContent = this.value;
    }
}
