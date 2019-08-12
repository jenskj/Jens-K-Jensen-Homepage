function toggleOpen() {

    let title = this.children[1];
    const hiddenTitle = this.children[2];
    const hiddenLetter = this.children[3]
    let href = document.createAttribute('href')
    let target = document.createAttribute('target')
    let p = document.createElement('p')
    let link = document.createElement('a')
    const parentPanel = hiddenTitle.parentNode;
    this.classList.toggle('open');
    

      if (title.innerHTML.length <= 1) {
        title.innerHTML = hiddenTitle.innerHTML;
        if (this.children[1].innerHTML === 'Openness') {
          href.value = 'https://en.wikipedia.org/wiki/Openness_to_experience'
        } else {
        href.value = 'https://en.wikipedia.org/wiki/' + hiddenTitle.innerHTML;
        }
        target.value = '_blank'
        link.setAttributeNode(href)
        link.setAttributeNode(target)
        link.appendChild(title)
        link.style.textDecoration = 'none';
        link.style.color = 'white';
        parentPanel.appendChild(link)
        parentPanel.insertBefore(link, this.children[1])
            } else {
              parentPanel.removeChild(parentPanel.children[1])
              parentPanel.appendChild(p)
              parentPanel.insertBefore(p, this.children[1])
              title = p;
              title.innerHTML = hiddenLetter.innerHTML;
            }
    }   
    
        function toggleActive(e) {
          if (e.propertyName.includes('flex')) {
            
            this.classList.toggle('open-active');
          }
        }
    const panels = document.querySelectorAll('.panel')
    
        panels.forEach(panel => panel.addEventListener('click', toggleOpen));
        panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));