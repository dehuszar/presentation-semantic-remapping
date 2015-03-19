import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

    // ATOMS
    this.route("atoms", function() {

        // Global Atoms
        this.route("global", function() {
            this.route("colors");
            this.route("fonts");
            this.route("animations");
            this.route("visibility");
        });

        // Text Atoms
        this.route("text", function() {
            this.route("headings");
            this.route("paragraph");
            this.route("blockquote");
            this.route("inline-elements");
            this.route("time");
            this.route("preformatted-text");
            this.route("hr");
        });

        // List Atoms
        this.route("lists", function() {
            this.route("unordered");
            this.route("ordered");
            this.route("definition");
        });

        // Image Atoms
        this.route("images", function() {
            this.route("logo");
            this.route("landscape4x3");
            this.route("landscape16x9");
            this.route("square");
            this.route("avatar");
            this.route("icons");
            this.route("loading-icon");
            this.route("favicon");
        });
        
        // Form Atoms
        this.route("forms", function() {
            this.route("text-fields");
            this.route("select-menu");
            this.route("checkbox");
            this.route("radio-buttons");
            this.route("html5-inputs");
        });

        // Button Atoms
        this.route("buttons", function() {
            this.route("buttons");
        });

        // Table Atoms
        this.route("tables", function() {
            this.route("table");
        });
    });

    // MOLECULES
    this.route("molecules", function() {

        // Text Molecules
        this.route("text", function() {
            this.route("byline");
            this.route("address");
            this.route("heading-group");
            this.route("blockquote-with-citation");
            this.route("intro-text");
        });

        // Layout Molecules
        this.route("layout", function() {
            this.route("one-up");
            this.route("two-up");
            this.route("three-up");
            this.route("four-up");
        });

        // Block Molecules
        this.route("blocks", function() {
            this.route("media");
            this.route("headline-byline");
            this.route("hero");
            this.route("thumb-headline");
            this.route("headline");
            this.route("inset");
        });

        // Media Molecules
        this.route("media", function() {
            this.route("figure-with-caption");
        });

        // Form Molecules
        this.route("forms", function() {
            this.route("search");
            this.route("comment-form");
            this.route("newsletter");
        });

        // Navigation Molecules
        this.route("navigation", function() {
            this.route("primary");
            this.route("footer");
            this.route("breadcrumbs");
            this.route("pagination");
            this.route("tabs");
        });

        // Components Molecules
        this.route("components", function() {
            this.route("social-share");
            this.route("accordion");
            this.route("single-comment");
        });

        // Messaging Molecules
        this.route("messaging", function() {
            this.route("alert");
        });
    });

    // ORGANISMS
    this.route("organisms", function() {
        // Global Organisms
        this.route("global", function() {
            this.route("header");
            this.route("footer");
        });

        // Article Organisms
        this.route("article", function() {
            this.route("full");
            this.route("body");
        });

        // Comment Organisms
        this.route("comments", function() {
            this.route("thread");
        });

        // Section Organisms
        this.route("sections", function() {
            this.route("latest-posts"); 
            this.route("recent-tweets"); 
            this.route("related-posts"); 
        });
    });

    // TEMPLATES
    this.route("templates", function() {
        this.route("homepage");
        this.route("blog");
        this.route("article");
    });

    // PAGES
    this.route("pages", function() {
        this.route("homepage");
        this.route("homepage-emergency");
        this.route("blog");
        this.route("article");
    });
});

export default Router;
