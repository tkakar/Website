element = document.getElementById("header");
element.innerHTML = 
    '<div class="wrapper"><nav class="clearfix" >' +
        '<div class="floatLeft"><li class="title"><a href="index.html"><i id="homeIcon" class="fas fa-home"></i> Tabassum Kakar</a></li></div>'+
        '<div class="floatRight"><li class="page"><a href="about.html">About</a></li>'+
        '<li class="label">|</li>'+
        '<li class="page"><a href="index.html">Projects</a></li>'+
        '<li class="label">|</li>'+
        '<li class="page"><a href="awards.html">Achievements</a></li> </div>'+
    '</nav></div>';

ftElement = document.getElementById("footer");
// ftElement.innerHTML = '<table id="social-accounts">' +
//                         '<tr><td>' +
//                         '<a href="https://github.com/tkakar"><i class="fab fa-github"></i> GitHub: @tkakar </a>'+
//                         '</td>'+
//                         '<td><a href="https://scholar.google.com/citations?user=yDwzxBcAAAAJ"> <i class="fab fa-google"></i> Google Scholar </a>'+
//                         '</td>' + 
//                         '<td><a href="https://www.linkedin.com/in/TabassumKakar"> <i class="fab fa-linkedin-square"></i> LinkedIn</a>'+
//                         '</td></tr>' +       
//                     '</table>';

ftElement.innerHTML = '<div id="social-accounts-mini">'+ 
                    '<span style="font-size:18px;margin-right:20px; "> Get in touch:</span>'+
                    '<span><a href="https://www.linkedin.com/in/TabassumKakar" target="_blank"><i class="fab fa-linkedin-square"></i> </a></span>'+
                    '<span><a href="mailto:kakartabassum@gmail.com" target="_blank"><i class="fa fa-envelope"></i> </a></span>'+
                    '<span><a href="https://github.com/tkakar" target="_blank"><i class="fab fa-github"></i> </a></span>'+
                    '<span><a href="https://scholar.google.com/citations?user=yDwzxBcAAAAJ" target="_blank"><i class="fab fa-google"></i> </a></span><div>'
                //     <span>
                //         <a href="mailto:kakartabassum@gmail.com">
                //         <i class="fa fa-envelope"></i>
                //       </a>
                //     </span>
                //     <span>
                //       <a href="https://github.com/tkakar" target="_blank">
                //         <i class="fab fa-github"></i>
                //       </a>
                //     </span>
                //     <span>
                //       <a href="https://scholar.google.com/citations?user=yDwzxBcAAAAJ" target="_blank">
                //         <i class="fab fa-google"></i>
                //       </a>
                //     </span>
                //   </div>

