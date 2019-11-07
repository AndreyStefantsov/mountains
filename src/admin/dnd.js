let dropArea=document.getElementById('form')
    dropArea.addEventListener('dragenter', handlerFunction, false)
    dropArea.addEventListener('dragleave', handlerFunction, false)
    dropArea.addEventListener('dragover', handlerFunction, false)
    dropArea.addEventListener('drop', handlerDrop, false)
    function handlerFunction(e) {
        e.preventDefault();
        e.stopPropagation()
    }
    function handlerDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        //let dt = e.dataTransfer
        let files = e.dataTransfer.files
        ([...files]).forEach(e.dataTransfer.files)
    }