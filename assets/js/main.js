/**
 * Main JavaScript File
 * Author: Sydwell & Dzel
 * Version: 1.0
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
  
    // DOM Elements
    const body = document.querySelector('body');
    const themeToggle = document.querySelector('.theme-toggle');
    const sideThemeToggle = document.getElementById('side-theme-toggle');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    const backToTop = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.nav-link');
    const searchToggle = document.querySelector('.search-toggle');
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    const moreServicesBtn = document.getElementById('more-services-btn');
    const hiddenServices = document.querySelectorAll('.hidden-service');
    
    // Theme toggle function
    function toggleTheme() {
      body.classList.toggle('light-mode');
      const isLightMode = body.classList.contains('light-mode');
      localStorage.setItem('light-mode', isLightMode);
      
      // Update theme icons
      const moonIcons = document.querySelectorAll('.fa-moon');
      const sunIcons = document.querySelectorAll('.fa-sun');
      
      moonIcons.forEach(icon => {
        icon.style.opacity = isLightMode ? '0' : '1';
      });
      
      sunIcons.forEach(icon => {
        icon.style.opacity = isLightMode ? '1' : '0';
      });
    }
  
    // Check for saved theme preference
    if (localStorage.getItem('light-mode') === 'true') {
      body.classList.add('light-mode');
      
      // Update initial icon states
      const moonIcons = document.querySelectorAll('.fa-moon');
      const sunIcons = document.querySelectorAll('.fa-sun');
      
      moonIcons.forEach(icon => {
        icon.style.opacity = '0';
      });
      
      sunIcons.forEach(icon => {
        icon.style.opacity = '1';
      });
    }
  
    // Event Listeners
    if (themeToggle) {
      themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleTheme();
      });
    }
  
    if (sideThemeToggle) {
      sideThemeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleTheme();
      });
    }
  
    // Search toggle functionality
    if (searchToggle) {
      searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        // Add your search functionality here
        alert('Search functionality to be implemented');
      });
    }
  
    // Mobile menu toggle
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }
  
    // Dropdown menu toggle for mobile
    dropdownItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      link.addEventListener('click', function(e) {
        // Only prevent default and toggle dropdown on mobile
        if (window.innerWidth < 992) {
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    });
  
    // Active nav links
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Don't apply active state to dropdown toggles on mobile
        if (!(this.parentNode.classList.contains('dropdown') && window.innerWidth < 992)) {
          navLinks.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
          
          // Close mobile menu when a link is clicked
          menuToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    });
  
    // Scroll functions
    window.addEventListener('scroll', () => {
      // Header scroll class
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
      
      // Back to top button
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
  
    // Back to top button click
    if (backToTop) {
      backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        // Skip for dropdown toggles on mobile
        if (this.parentNode.classList.contains('dropdown') && window.innerWidth < 992) {
          return;
        }
        
        if (this.getAttribute('href') !== '#') {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  
    // Preloader
    window.addEventListener('load', () => {
      const preloader = document.querySelector('.preloader');
      setTimeout(() => {
        preloader.classList.add('hide');
      }, 500);
    });
  
    // More Services Button Functionality
    if (moreServicesBtn) {
      moreServicesBtn.addEventListener('click', function() {
        // Toggle hidden services visibility
        hiddenServices.forEach(service => {
          service.classList.toggle('show');
        });
        
        // Toggle button active state and text
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
          this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
        } else {
          this.innerHTML = 'More Services <i class="fas fa-chevron-down"></i>';
        }
      });
    }
  });