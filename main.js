let resourcesArray = [
  {
    name: "resource1",
    link: "resource1link",
    type: "Video"
  },
  {
    name: "resource2",
    link: "resource2link",
    type: "Article"
  },
  {
    name: "resource3",
    link: "resource3link",
    type: "Video"
  },
  {
    name: "resource4",
    link: "resource4link",
    type: "Video"
  },
  {
    name: "resource5",
    link: "resource5link",
    type: "Article"
  },
  {
    name: "resource6",
    link: "resource6link",
    type: "Video"
  }
]

let createDomElement = (elementType, content, cssClass) => {
  const element = document.createElement(elementType);
  element.textContent = content;
  if(cssClass) {
    element.classList.add(cssClass);
  }
  return element;
}


let divContainer = document.querySelector("#container");

// const videosContainer = document.createElement('article');
// videosContainer.classList.add("resource-container");
// divContainer.appendChild(videosContainer);
divContainer.appendChild(createDomElement("h3", "Video Resources", null))
const videosContainer = createDomElement("article", null, "resource-container")
divContainer.appendChild(videosContainer);

// const articlesContainer = document.createElement('article');
// articlesContainer.classList.add("resource-container");
// divContainer.appendChild(articlesContainer);
divContainer.appendChild(createDomElement("h3", "Article Resources", null))
const articlesContainer = createDomElement("article", null, "resource-container")
divContainer.appendChild(articlesContainer);

let createAppendResources = (resourcesArray) => {
  
  const articlesFragment = document.createDocumentFragment();
  const videosFragment = document.createDocumentFragment();
  
  resourcesArray.forEach(resourceObj => {
    // const resourceSection = document.createElement('section');
    const resourceSection = createDomElement("section", null, null);
    
    // const linkElement = document.createElement("a");
    // linkElement.textContent = resourceObj.name;
    const linkElement = createDomElement("a", resourceObj.name, null);
    linkElement.setAttribute('href', resourceObj.link);
    resourceSection.appendChild(linkElement);
    
    if(resourceObj.type === "Video") {
      videosFragment.appendChild(resourceSection);
    } else if(resourceObj.type === "Article"){
      articlesFragment.appendChild(resourceSection);
    }
  });
  
  articlesContainer.innerHTML = "";
  videosContainer.innerHTML = "";
  
  articlesContainer.appendChild(articlesFragment);
  videosContainer.appendChild(videosFragment);
}

createAppendResources(resourcesArray);


let addButton = document.querySelector("#add-button");

addButton.addEventListener("click", function() {
  let resourceName = document.querySelector('input[name="resourcename"]').value;
  let resourceLink = document.querySelector('input[name="resourcelink"]').value;
  let resourceType = document.querySelector('input[name="resourcetype"]:checked').value;
  
  let resource = {
    name: resourceName,
    link: resourceLink,
    type: resourceType
  }

  resourcesArray.push(resource);

  createAppendResources(resourcesArray);

})
