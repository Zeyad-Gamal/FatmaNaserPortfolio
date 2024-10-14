document.addEventListener('DOMContentLoaded', () => {
    // Your existing code here...



// Create a Map to hold project details (image and texts)
const imageMap = new Map();

// Function to add project details to the map
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

// Function to generate HTML from the Map for a specific department
function generateHtmlFromMap(department) {
    var imageContainer = document.getElementById(department+'-projects-container');
    const imageFolder = 'images/';
    let htmlContent = ''; // Initialize an empty string to hold HTML content

    if(department == 'all'){
        for (const [project, { image, text1, text2, depart,link }] of imageMap) {
                const imageSrc = `${imageFolder}${image}`; // Create the image source
    
                // Create HTML string using template literals
                htmlContent += `
                    <div class="col-md-4 project-main-box">
                        <div class="project-box">
                            <img class="img-fluid" src="${imageSrc}" alt="${project} Image" onerror="this.onerror=null; this.src='images/noimg.jpg';">
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
                        <img class="img-fluid" src="${imageSrc}" alt="${project} Image" onerror="this.onerror=null; this.src='images/noimg.jpg';">
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


// Adding projects with images, texts, and departments
addProjectToMap('project1', 'image1.png', 'UI Project 1', 'Description for UI Project 1','#', 'ui');
addProjectToMap('project2', 'app3.jfif', 'App Project 1', 'Description for App Project 1','#', 'app');
addProjectToMap('project3', 'image3.png', 'Web Project 1', 'Description for Web Project 1','#', 'web');
addProjectToMap('project4', 'image4.png', 'Graphic Project 1', 'Description for Graphic Project 1','#', 'graphic');
addProjectToMap('project5', 'image5.png', 'UI Project 2', 'Description for UI Project 2','#', 'ui');

// Call one of the functions to display projects for a specific department
});
