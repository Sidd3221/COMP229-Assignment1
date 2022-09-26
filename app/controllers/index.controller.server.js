// Filename: index.controller.server.js
// Student Name: Siddharth Verma
// Student ID: 301207026
// Date: Sep 19, 2022

// Assigning values each EJS variable and Rendering all website pages using EJS

export function homePage(req, res, next) {
    res.render('template', { title: 'Welcome to my portfolio!', page: 'home'});
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
