// Filename: index.controller.server.js
// Student Name: Siddharth Verma
// Student ID: 301207026
// Date: Sep 19, 2022


// Rendering home page
export function homePage(req, res, next) {
    res.render('template', { title: 'Welcome to my portfolio!', page: 'home'});
};

// Rendering About Me page
export function aboutPage(req, res, next) {
    res.render('template', { title: 'About Me', page: 'about'});
};

// Rendering My Services page
export function servicesPage(req, res, next) {
    res.render('template', { title: 'My Services', page: 'services'});
};

// Rendering Contact Me page
export function contactPage(req, res, next) {
    res.render('template', { title: 'Contact Me!', page: 'contact'});
};

// Rendering Projects page
export function projectsPage(req, res, next) {
    res.render('template', { title: 'My Projects', page: 'projects'});
};
