element = document.getElementById("header");
element.innerHTML = 
    '<nav class="clearfix">' +
        '<li class="title"><a href="index.html"><i id="homeIcon" class="fas fa-home"></i> Tabassum Kakar</a></li>'+
        '<div><li class="page"><a href="about.html">About Me</a></li>'+
        '<li class="label">|</li>'+
        '<li class="page"><a href="publications.html">Publications</a></li>'+
        '<li class="label">|</li>'+
        '<li class="page"><a href="awards.html">Awards</a></li> </div>'+
    '</nav>';

ftElement = document.getElementById("footer");
ftElement.innerHTML = '<table id="social-accounts">' +
                        '<tr><td>' +
                        '<a href="https://github.com/tkakar"><i class="fab fa-github"></i> GitHub: @tkakar </a>'+
                        '</td>'+
                        '<td><a href="https://scholar.google.com/citations?user=yDwzxBcAAAAJ"> <i class="fab fa-google"></i> Google Scholar </a>'+
                        '</td>' + 
                        '<td><a href="https://www.linkedin.com/in/TabassumKakar"> <i class="fab fa-linkedin-square"></i> LinkedIn</a>'+
                        '</td></tr>' +       
                    '</table>';

