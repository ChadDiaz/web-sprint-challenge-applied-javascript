// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //creating the needed elements
const mainHeader = document.createElement('div');
    const span1 = document.createElement('span');
    const header1 = document.createElement('h1');
    const span2 = document.createElement('span');

    //making a tree structure of the created elemenets
    mainHeader.append(span1, header1, span2);

    //adding classes to the created elements for styling to take affect
    mainHeader.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    //hardcoding the text content
    span1.textContent = "March 28th, 2020";
    header1.textContent = "Lambda Times";
    span2.textContent = "98°";

return mainHeader;
}
// grabing the needed HTML to hook
const headerCont = document.querySelector('.header-container');
headerCont.append(Header());