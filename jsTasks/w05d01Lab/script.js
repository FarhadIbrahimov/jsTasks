// Array of menu links with text and href values
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
  // Select the <main> element
  let mainEl = document.querySelector('main');
  
  // Set the background color of the <main> element using a CSS variable
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  // Set the content of the <main> element to a heading
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  
  // Add a CSS class to the <main> element to center its contents
  mainEl.classList.add('flex-ctr');
  
  // Select the element with id "top-menu"
  let topMenuEl = document.querySelector('#top-menu');
  
  // Set the height of the "top-menu" element to 100%
  topMenuEl.style.height = '100%';
  
  // Set the background color of the "top-menu" element using a CSS variable
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  // Add a CSS class to the "top-menu" element to arrange its contents with flex layout
  topMenuEl.classList.add('flex-around');
  
  // Iterate through the menuLinks array
  for (let i = 0; i < menuLinks.length; i++) {
    // Print the text of the current menu link
    console.log(menuLinks[i].text);
    
    // Create a new <a> element for the menu link
    let mlink = document.createElement('a');
    
    // Set the innerHTML of the <a> element to the text of the menu link
    mlink.innerHTML = menuLinks[i].text;
    
    // Set the "href" attribute of the <a> element to the href value of the menu link
    mlink.setAttribute('href', menuLinks[i].href);
    
    // Append the menu link to the "top-menu" element
    topMenuEl.appendChild(mlink);
  }
  