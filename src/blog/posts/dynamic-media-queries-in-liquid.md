---
title: Dynamic Media Queries in Liquid
date: "2017-08-27"
type: post
feature: "https://cdn.tipe.io/5aeb9b4a73460c00137fea14/fa9ca76d-4ae1-4ec1-bc5b-92720ff46208/liquid-snippet.png"
subtitle: Dynamic CSS with Liquid templating
---

For [Fundamental](https://github.com/theomjones/fundamental), the theme I'm actively maintaining, I needed a way to dynamically change a break point based on how many menu items were in the top navigation.

![Image](https://dsc.cloud/theomjones/2017-08-27-12.31.57/2017-08-27-12.31.57.gif)
<em>What we're looking to achieve</em>

I hadn't known this until recently, but Jekyll can process liquid inside `.scss` files as long as they have a front matter block, and are placed in the `/assets/` directory. Prior to this any css processing I did was inline.

With that knowledge I began thinking about how I would achieve this.

### Breaking it down:

1.  For every page in the navigation, increment a variable by 1.
2.  Multiply this variable by the width the navigation item takes up.
3.  Add it to a base width, so that the breakpoint hits the correct width no matter how many menu items there are.
4.  Interpolate it in the media query.

#### The loop

This is the core of the whole thing. We need to loop over the site pages, filter out which are in the navigation and increment a variable. We first need to assign the variable a default value so that we can use it both in the scope of the for loop – and outside it.

```liquid
    <!-- Assign variable first  -->
    {% assign i = 0 %}

    {% for pg in site.pages %}
        {% if pg.menu == true %}
            {% assign i = i | plus: 1 %}
        {% endif %}
    {% endfor %}
```

Here we iterate over the site pages array; and with a simple `if` statement we increment the `i` variable by 1. The next step is to multiply the `i` variable by the width of the menu item (which is `70px` in my case). Then we just add this value (`nav pages * nav item width`) to a default base width.

```liquid
{% assign i = i | times: 70 | plus: 420 %}
```

I knew the base width could be flexible, all it does is determine how much space is going to be left of the navigation before breaking down and dropping below the title. This logic will create a variable that I can give to a media query to break exactly when it needs to. Based on how many items are in the menu.

With this in place, I can interpolate the variable easily.

```liquid
@media screen and (max-width: {%raw%}{{ i }}{%endraw%}px) {
	 //Styles here
}
```

This is definitely a useful feature for a theme. It means that no matter how many items a user has in the navigation, it will never break. I'm sure there's probably a few reasons to have a dynamic media query, so this logic is ready for that. This could have been solved with css only, but I wanted to see how achievable this was in liquid – it's now bulletproof. Plus: it doesn't add any weight to my css file as I was doing it anyway, just without a dynamic query.

![Final Product](https://dsc.cloud/theomjones/2017-08-27-12.57.00/2017-08-27-12.57.00.gif)
<em>The finished piece</em>
