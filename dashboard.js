var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
      },
    theme: 'snow',
    placeholder: 'Write Something...'
  });

 var userName = JSON.parse(localStorage.getItem("userData"))
 
  function createBlog(){
    var blog = document.getElementById('blog');
    var quillValue  = quill.root.innerHTML



    blog.innerHTML += `
    <div class="card mb-2 p-4">
  <div class="card-header">
    ${userName.userName}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${quillValue}</p>
     
    </blockquote>
  </div>
</div>
    ` 

  }