var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");


}
const sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.classList.add('show');
    document.body.classList.add('menu-open');
}
function closemenu(){
    sidemenu.classList.remove('show');
    document.body.classList.remove('menu-open');
}
    function showMoreProjects() {
        const extraWork = document.querySelector('.extra-work');
        extraWork.style.display = 'flex'; // Use flex/grid depending on layout
        document.querySelector('.btn').style.display = 'none'; // Hide the button after click
    }


let _lastProjectFocus = null;
function closeProjectModal(){
    const pm = document.getElementById('projectModal');
    if(!pm) return;
    pm.style.display = 'none';
    pm.setAttribute('aria-hidden', 'true');
    // restore focus
    if(_lastProjectFocus && typeof _lastProjectFocus.focus === 'function'){
        try{ _lastProjectFocus.focus(); } catch(e){}
    }
    _lastProjectFocus = null;
}

function showProjectDetails(key){
    const projects = {
        weather: {
            title: 'Weather Application',
            description: 'Real-time weather data using WeatherAPI with a clean UI and city search support.',
            list: ['Search by city', 'Real-time weather', 'Responsive UI'],
            github: 'https://github.com/shubhamkumar785/WeatherApp',
            live: 'https://shubhamkumar785.github.io/WeatherApp/'
        },
        portfolio: {
            title: 'Portfolio Website',
            description: 'Personal portfolio showcasing skills, projects, and contact info.',
            list: ['Responsive Layout', 'Project Showcase', 'Contact Form'],
            github: 'https://github.com/shubhamkumar785/Shubham-Portfolio',
            live: 'https://shubhamkumar785.github.io/Shubham-Portfolio/'
        },
        todo: {
            title: 'To-Do List',
            description: 'Responsive To-Do list with local storage to persist tasks across sessions.',
            list: ['Add/Edit/Delete Tasks', 'Local Storage', 'Filter/Sort'],
            github: 'https://github.com/shubhamkumar785/To-Do-List',
            live: 'https://shubhamkumar785.github.io/To-Do-List/'
        },
        calculator: {
            title: 'Calculator Application',
            description: 'Java Swing calculator app demonstrating core Java concepts and event handling.',
            list: ['Arithmetic operations', 'Java Swing GUI', 'Event-driven logic'],
            github: 'https://github.com/shubhamkumar785/CalculatorApp',
            live: 'https://shubhamkumar785.github.io/CalculatorApp/'
        }
    };
    const project = projects[key];
    if(!project) return;
    document.getElementById('projectModalTitle').innerText = project.title;
    document.getElementById('projectModalDesc').innerText = project.description;
    const listContainer = document.getElementById('projectModalList');
    listContainer.innerHTML = '';
    project.list.forEach(item=>{
        const li = document.createElement('li'); li.innerText = item;
        listContainer.appendChild(li);
    });
    const links = document.getElementById('projectModalLinks');
    links.innerHTML = '';
    if(project.github){
        const a = document.createElement('a');
        a.href = project.github; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.className = 'btn btn2'; a.innerText = 'View on GitHub';
        links.appendChild(a);
    }
    if(project.live){
        const a2 = document.createElement('a');
        a2.href = project.live; a2.target = '_blank'; a2.rel = 'noopener noreferrer'; a2.className = 'btn btn2'; a2.style.marginLeft = '8px'; a2.innerText = 'Open Live';
        links.appendChild(a2);
    }
    const pm = document.getElementById('projectModal');
    _lastProjectFocus = document.activeElement;
    pm.style.display = 'block';
    pm.setAttribute('aria-hidden', 'false');
    // focus modal content
    setTimeout(()=>{ try{ pm.querySelector('.modal-content').focus(); } catch(e){} }, 60);
}

// Toggle for More Skills
document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.skills-grid-container');
    const toggleBtn = document.getElementById('toggleSkills');
    if(!container || !toggleBtn) return;
    // Compute dynamic collapsed height (two rows) and decide whether to show toggle
    const grid = container.querySelector('.skills-grid');
    const cards = grid ? grid.querySelectorAll('.skill-card') : [];
    function computeCollapsedState() {
        if(!grid || cards.length === 0){
            toggleBtn.style.display = 'none';
            return;
        }
        const gridRect = grid.getBoundingClientRect();
        // Unique row top offsets (rounded to avoid subpixel differences)
        const rowTops = Array.from(cards).map(c => Math.round(c.getBoundingClientRect().top));
        const uniqueRows = [...new Set(rowTops)].sort((a,b)=>a-b);
        // If there are 2 rows or fewer, hide toggle and ensure full height
        if(uniqueRows.length <= 2){
            toggleBtn.style.display = 'none';
            container.classList.remove('collapsed');
            container.style.maxHeight = container.scrollHeight + 'px';
            toggleBtn.setAttribute('aria-expanded', 'true');
            container.setAttribute('aria-hidden', 'false');
            return;
        }
        // There are more than 2 rows -> show the toggle
        toggleBtn.style.display = '';
        // Get top of second row and compute collapsed height to include second row
        const secondRowTop = uniqueRows[1];
        const firstCardHeight = cards[0].getBoundingClientRect().height || cards[0].offsetHeight;
        const styleGrid = window.getComputedStyle(grid);
        const rowGap = parseFloat(styleGrid.rowGap) || parseFloat(styleGrid.gap) || 0;
        const collapsedHeight = (secondRowTop - gridRect.top) + firstCardHeight + rowGap;
        // Apply collapsed or expanded height depending on state
        if(container.classList.contains('collapsed')){
            container.style.maxHeight = collapsedHeight + 'px';
            toggleBtn.innerText = 'More Skills';
            toggleBtn.setAttribute('aria-expanded', 'false');
            container.setAttribute('aria-hidden', 'true');
        } else {
            container.style.maxHeight = container.scrollHeight + 'px';
            toggleBtn.innerText = 'Show Less';
            toggleBtn.setAttribute('aria-expanded', 'true');
            container.setAttribute('aria-hidden', 'false');
        }
    }
    // Toggle handler
    toggleBtn.addEventListener('click', function(e){
        e.preventDefault();
        const wasCollapsed = container.classList.toggle('collapsed');
        if(wasCollapsed){
            // Now container has 'collapsed' class -> show More Skills
            // Recompute collapsed height and apply
            computeCollapsedState();
            toggleBtn.innerText = 'More Skills';
            toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
            // Now expanded
            container.style.maxHeight = container.scrollHeight + 'px';
            toggleBtn.innerText = 'Show Less';
            toggleBtn.setAttribute('aria-expanded', 'true');
        }
    });
    // Handle window resize: recompute collapsed/expanded heights
    function onResize() {
        computeCollapsedState();
    }
    window.addEventListener('resize', onResize);
    // Recompute after layout (fonts, images) have loaded
    window.addEventListener('load', function(){ setTimeout(computeCollapsedState, 120); });
    setTimeout(computeCollapsedState, 80);
    // Add keyboard accessibility for skill-cards: Enter/Space opens modal
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(function(card){
        card.addEventListener('keydown', function(e){
            if(e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar'){
                e.preventDefault();
                const skill = card.getAttribute('data-skill');
                if(skill) showSkillDetails(skill);
            }
        });
    });
    // Keyboard accessibility for project-cards: Enter/Space opens project modal
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(function(card){
        card.addEventListener('keydown', function(e){
            if(e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar'){
                e.preventDefault();
                const key = card.getAttribute('data-project');
                if(key) showProjectDetails(key);
            }
        });
    });
    // Intersection observer: keep only the visible section focusable and set aria-hidden
    (function(){
        const sections = document.querySelectorAll('.site-section');
        if(!sections || sections.length === 0) return;
        // Initially set aria-hidden for all except the first
        sections.forEach((s, idx) => {
            s.setAttribute('aria-hidden', idx===0? 'false' : 'true');
        });
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    sections.forEach(s => {
                        const isThis = (s === entry.target);
                        s.setAttribute('aria-hidden', isThis ? 'false' : 'true');
                        if(isThis){
                            s.classList.add('in-view');
                            // Focus section only when body is focused (avoid stealing focus from inputs)
                            if(document.activeElement === document.body){
                                try{ s.focus(); } catch(e){ }
                            }
                        } else { s.classList.remove('in-view'); }
                    });
                }
            });
        }, { threshold: 0.6 });
        sections.forEach(s => observer.observe(s));
        // Keyboard navigation for mobile: up/down/PageUp/PageDown/Home/End
        function onKeyNav(e){
            // ignore when focus is on form inputs
            const tag = document.activeElement && document.activeElement.tagName;
            if(tag && (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable)) return;
            const mm = window.matchMedia('(max-width: 900px)');
            if(!mm.matches) return;
            const inView = Array.from(sections).findIndex(s => s.classList.contains('in-view'));
            let nextIndex = inView;
            if(e.key === 'ArrowDown' || e.key === 'PageDown'){
                e.preventDefault();
                nextIndex = Math.min(sections.length - 1, (inView === -1 ? 0 : inView + 1));
            } else if(e.key === 'ArrowUp' || e.key === 'PageUp'){
                e.preventDefault();
                nextIndex = Math.max(0, (inView === -1 ? 0 : inView - 1));
            } else if(e.key === 'Home'){
                e.preventDefault(); nextIndex = 0;
            } else if(e.key === 'End'){
                e.preventDefault(); nextIndex = sections.length - 1;
            } else { return; }
            const section = sections[nextIndex];
            if(section){
                section.scrollIntoView({ behavior: 'smooth' });
                setTimeout(()=>{ try{ section.focus(); }catch(e){} }, 450);
            }
        }
        document.addEventListener('keydown', onKeyNav);
    })();
});

function closeSkillModal() {
    document.getElementById("skillModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("skillModal")) {
        closeSkillModal();
    }
    if (event.target == document.getElementById("projectModal")) {
        closeProjectModal();
    }
    // close sidemenu if click outside while open
    const menu = document.getElementById('sidemenu');
    if(menu && menu.classList.contains('show') && !menu.contains(event.target) && !event.target.closest('.fa-bars')){
        closemenu();
    }
}    
// keyboard close for ESC key
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        closeSkillModal();
        closemenu();
        closeProjectModal();
    }
});

// extra safety: attach event listeners for menu buttons when DOM is ready
document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.menu-close');
    if(toggle){ toggle.addEventListener('click', openmenu); }
    if(closeBtn){ closeBtn.addEventListener('click', closemenu); }
    // Stop click propagation for card-action anchors so they don't open the modal
    const cardActions = document.querySelectorAll('.card-action');
    cardActions.forEach(function(el){
        el.addEventListener('click', function(e){
            e.stopPropagation();
            // Allow normal anchor behavior, so do not preventDefault
        });
    });
    // Scroll to contact from services and focus first form input
    const serviceContactAnchors = document.querySelectorAll('#services a[href="#contact"]');
    serviceContactAnchors.forEach(function(a){
        a.addEventListener('click', function(e){
            e.preventDefault();
            // close menu if open
            if(document.getElementById('sidemenu').classList.contains('show')){
                closemenu();
            }
            const contactSection = document.getElementById('contact');
            if(contactSection){
                contactSection.scrollIntoView({ behavior: 'smooth' });
                // focus first input after scroll
                setTimeout(function(){
                    const nameInput = document.querySelector('#contact input[name="Name"]');
                    if(nameInput){ nameInput.focus(); }
                }, 500);
            }
        });
    });
});

