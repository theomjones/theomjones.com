---
title: Horizontal Navigation on Mobile
date: 2017-08-29T22:28:49+01:00
type: post
feature: "https://www.socialmediaexaminer.com/wp-content/uploads/2017/08/medium-landing-page.png"
tags: [UI, design]
---

When we look at core navigation solutions for mobile we often think of the iconic hamburger menu which is ubiquitous in modern user interfaces. Perhaps we need to look no further than this when deciding on a solution for navigation. However, increasingly I've been seeing other solutions out in the wild. Specifically the simple horizontal sliding menu popularized by the likes of Medium and more recently found in Bootstrap 4.

##### Reasons to use the hamburger solution

- It's so pervasive that 95%[<sup>1</sup>](https://www.goodreads.com/quotes/70193-over-85-of-all-statistics-are-made-up-on-the) of users will know exactly what it does when they see it. It probably isn't quite as ingrained in our users' heads as the floppy disk icon – but it is surely on it's way. Anyone from your grandad to your dog knows what it does.
- It's practical. You can tuck away dozens of links in one place off screen.
- It's future proof. It doesn't matter how many items are added, there will be no effect on your design – it will always be in one tidy place.
- The big guys use it. From Facebook to Google, the hamburger icon is used by the giants - and we are after all, standing on the shoulders of giants<sup>[2]()</sup>.

##### Reasons to look for an alternative

There are plenty of alternatives out there, but when thinking of what to pick it's important to consider whether it's actually beneficial to user experience, or whether it's just a gimmick.

The scroll-able horizontal solution is both user friendly, concise, and practical. Take a look at what you're greeted with on [medium.com](https://medium.com):

![Medium screenshot](http://i.imgur.com/Z1EfWhL.png)
<em style="color: grey">Medium.com</em>

The navigation items are laid horizontally across a bar at the top of the page. They ensure the user knows it's scroll-able by making the last item overlap the edge of the screen. This is important, as users could just consider these the only links on the site – without thinking to look further.

## Implementation

Actually using this solution isn't too difficult but it does require a little CSS hack to make sure the scroll-bar doesn't show on any browser.

##### Here's what's what

- The **outer** container has a maximum height and has `overflow: hidden`.
- The **second** container (inside the first) has `overflow-x: scroll`.
- The **third** container, which will actually hold your links will have a height of half of the first container. This means that the scroll bar won't show.
- The last thing you might want is the non-standard [`-webkit-overflow-scrolling: touch`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling) rule. This makes the smooth scrolling effect you get on scroll-able elements in touch-based webkit browsers.

Below is a solution using an unordered list, typical of most navigation solutions. Check out the [codepen](https://codepen.io/theomjones/pen/XaxZMP?editors=1100).

##### HTML
{%- highlight html -%}
<nav>
  <!-- Outer container -->
  <div class="container">
    <!-- Inner container -->
     <ul class="container-2">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
    <li>Six</li>
    <li>Seven</li>
    <li>Eight</li>
    <li>Nine</li>
    <li>Ten</li>
    <li>Eleven</li>
    <li>Twelve</li>
  </ul>
  </div>
</nav>
{%- endhighlight -%}

##### CSS
{%- highlight css -%}
nav {
  background: #eee;
  height: 60px;
  max-width: 200px;
  overflow: hidden;
}

.container {
  overflow-x: scroll;
  max-width: 200px;
}

.container-2 {
  margin-left: 0;
  height: 30px;
  list-style: none;
  display: flex;
  align-items: center;
}

ul li {
  margin: 0 10px;
}

ul li:first-child {
  margin-left: 0;
}
{%- endhighlight -%}