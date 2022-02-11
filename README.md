# README

MOXIE

- Designed and coded by Hung Le
- Artwork from various magazines and illustrations from 1940s - 1960s magazines

This is a capstone project for Flatiron bootcamp.

This application is designed to be a concept for a different type of e-commerce business. While most e-commerce business work as a store, this app takes the concept of loot boxes and gacha mechanics in video games and tries to implement it into an e-commerce application. Users can buy tickets using points charged on their accounts in hopes of winning an item. Currently only the winner will receive an item, and others will not receive anything at all, but for future development, all users who buy tickets will win something (digital goods?).

====================================================================

Tools and libraries used:

- GreenSock (GSAP) for animation
- FUSE.JS for fuzzy search functionality

Working functionalities of this build for the Front-end:

- Basic CRUD functionality
- Landing page animation using GSAP
- Search bar will perform a fuzzy search from products' title, category, and keywords all at the same time and return filtered items dynamically using FUSE.JS
- Category selector which will work with the search bar for further filtering
- Products on browse page will expand for more information when clicked
- You can only buy tickets if you are logged in and you have enough points and if you are not the seller of said item
- Using table association to show seller information and rating on products
- Sell form and login form uses front-end validation along with the back-end validation for increased security
- Accounts stay logged in even if page is refreshed through localStorage (need to get sessions and cookies working instead)
- Buying tickets and charging points on account will persist and update on all pages
- Users selling an item will refund points back to all buyers who hold tickets if seller deletes item
- Once all tickets are sold for an item, seller will then receive points (seller should receive points once item is delivered)
- Once all tickets are sold, a random generator will choose 1 ticket as the winner of the product (the more tickets one user holds, the higher the chance of winning)

Things to be added:

- Verified sellers title should only be held if seller rating is over 4.5
- Profile page will show if user has won the item or not
