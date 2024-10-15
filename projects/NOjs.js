document.addEventListener('DOMContentLoaded', () => {
 


 const imageMap = new Map();

 function addProjectToMap(projectKey, imageName, text1, text2,link, depart) {
    if (!imageMap.has(projectKey)) {
        imageMap.set(projectKey, { image: imageName, text1, text2,link, depart });
    } else {
        console.log(`Project ${projectKey} already exists in the map.`);
    }

    displayUIProjects();
    displayWebProjects();
    displayGraphicProjects();
    displayAppProjects();
    displayAllProjects();
}

 function generateHtmlFromMap(department) {
    var imageContainer = document.getElementById(department+'-projects-container');
    const imageFolder = 'projects/';
    let htmlContent = ''; // Initialize an empty string to hold HTML content

    if(department == 'all'){
        for (const [project, { image, text1, text2, depart,link }] of imageMap) {
                const imageSrc = `${imageFolder}${image}`; // Create the image source
    
                // Create HTML string using template literals
                htmlContent += `
                    <div class="col-md-4 project-main-box">
                        <div class="project-box">
                            <img class="img-fluid" src="${imageSrc}" alt="${project} Image" onerror="this.onerror=null; this.src='images/no user/project.jpg';">
                        </div>
                        <div class="project-content">
                        <a href="${link}" target="_blank" ><h4>${text1}</h4></a>
                            <p>${text2}</p>
                        </div>
                    </div>
                `;
            
        }
    }
    // Iterate over the entries in the Map
  else{
    for (const [project, { image, text1, text2, depart,link }] of imageMap) {
        if (depart === department) {
            const imageSrc = `${imageFolder}${image}`; // Create the image source

            // Create HTML string using template literals
            htmlContent += `
                <div class="col-md-4 project-main-box">
                    <div class="project-box">
                        <img class="img-fluid" src="${imageSrc}" alt="${project} Image" onerror="this.onerror=null; this.src='images/no user/project.jpg';">
                    </div>
                    <div class="project-content">
                        <a href="${link}" target="_blank" ><h4>${text1}</h4></a>
                        <p>${text2}</p>
                    </div>
                </div>
            `;
        }
    }
  }

    // Insert the generated HTML into the main container
    imageContainer.innerHTML = htmlContent;
   
}



// Functions to display projects for each department
function displayUIProjects() {
    generateHtmlFromMap('ui');
}

function displayAppProjects() {
    generateHtmlFromMap('app');
}

function displayWebProjects() {
    generateHtmlFromMap('web');
}

function displayGraphicProjects() {
    generateHtmlFromMap('graphic');
}

function displayAllProjects() {
    generateHtmlFromMap('all');
}












//                          ADD new project


//      allowed types:       ui           -          app           -          web           -              graphic


//                              ( key , iamge , name , describtion , link , type  )



addProjectToMap('1', 'image1.png', 'UI Project 1', 'Description for UI Project 1','#', 'ui');
addProjectToMap('2', 'app3.jfif', 'App Project 1', 'Description for App Project 1','#', 'app');
addProjectToMap('3', 'image3.png', 'Web Project 1', 'Description for Web Project 1','#', 'web');
addProjectToMap('4', 'image4.png', 'Graphic Project 1', 'Description for Graphic Project 1','#', 'graphic');
addProjectToMap('5', 'image5.png', 'UI Project 2', 'Description for UI Project 2','#', 'ui');

 });
