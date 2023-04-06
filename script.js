var dropZone = document.getElementById('drop-zone');
var fileInput = document.getElementById('file_input');

dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.classList.add('dragover');
});

dropZone.addEventListener('dragleave', function(e) {
    this.classList.remove('dragover');
});

dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    this.classList.remove('dragover');
    fileInput.files = e.dataTransfer.files;
    uploadFile(fileInput.files[0]);
});

fileInput.addEventListener('change', function() {
    uploadFile(fileInput.files[0]);
});