export function homePage(req, res, next) {
    res.render('template', { title: 'Welcome!', page: 'home'});
}

export function aboutPage(req, res, next) {
    res.render('template', { title: 'About Me', page: 'about'});
};

export function servicesPage(req, res, next) {
    res.render('template', { title: 'My Services', page: 'services'});
};

export function contactPage(req, res, next) {
    res.render('template', { title: 'Contact Me!', page: 'contact'});
};

export function projectsPage(req, res, next) {
    res.render('template', { title: 'My Projects', page: 'projects'});
};
