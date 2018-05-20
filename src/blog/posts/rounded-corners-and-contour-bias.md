---
title: Rounded Corners & Contour Bias
date: "2017-08-04"
type: post
subtitle: Looking into the history of rounded corners in UI design.
feature: "https://cdn.tipe.io/5aeb9b4a73460c00137fea14/bc4d236a-33a1-44ae-9f3c-95d343f6fcd7/steve-jobs-original-iphone-apple-sign.jpg"
---

Designers have been rounding their corners for decades. It’s a practice that quickly became standard in user interfaces both on the web and in system applications. I was recently involved in a debate about them at work, so I thought I’d do a bit of research.

Naturally, I’m an advocate 🙄

### Peeking at some of the history.

Weirdly, I found it fairly difficult to find any work on the history of rounded corners in design prior to our digital world. However, the story of how rounded corners came about in the digital realm indicates that they were physically _’everywhere’._ It seems to be widely accepted that rounded corners, in respect to user interface design, were born out of Steve Job’s obsession with them, starting in the 80s.

As [folklore states](https://www.folklore.org/StoryView.py?story=Round_Rects_Are_Everywhere.txt), this began when [Bill Atkinson](https://en.wikipedia.org/wiki/Bill_Atkinson) eagerly presented Apple with his code that allowed Apple’s OS to draw ovals extremely quickly. Jobs responded: _’Well, circles and ovals are good, but how about drawing rectangles with rounded corners? Can we do that now, too?’_ The response was no, but after a quick walk and some persuading Atkinson went about making this possible.

So it wasn't until Apple's [Aqua UI](http://youtu.be/uGMQLfi0kGc?t=1h13m40s) in the year 2000, that we start to see rounded rectangles in operating systems. But you can see (in MacOS) today that those rounded corners remain present.

![Aqua UI](https://upload.wikimedia.org/wikipedia/en/c/c0/Leopard_Desktop.png)

### Semiotics & Psychology 🤓

##### Contour Bias

In [Universal Principles of Desgin](https://books.google.co.uk/books/about/Universal_Principles_of_Design_Revised_a.html?id=l0QPECGQySYC&redir_esc=y), there's a great section on contour bias. In summary it talks about how our brains associate sharp angles and pointed features with fear and potential threat. It discusses experiments where real human brains were monitored when interacting with smooth, curved edges like that on a round watch-face. These people were happy people. It's worth a read as it delves a bit further into how humans have other perceived biases that may shift our perception. For instance, a knife is inherently dangerous so it wouldn't be fair to evaluate the effectiveness of contours in changing a human's perception of the object.

> "When presented with objects that possess sharp or pointed features, a region in the human brain involved with fear processing, the amygdala, is activated."

### The Microsoft Factor

Microsoft is without a doubt a proponent of the hard edge, boxy design. We see it first and foremost in [Metro](<https://en.wikipedia.org/wiki/Metro_(design_language)>) in Windows 8. There are very few soft edges, neither in desktop applications, layouts or actionable objects. It's a hard old world in Windows.

![Metro UI](https://social.microsoft.com/Forums/getfile/12344/)

Microsoft's new design language [Fluent](http://fluent.microsoft.com/) maintains the decision to have hard edges, and admittedly it does look gorgeous in the concept videos and imagery.

### The Google Factor

The Material design [guidelines](https://material.io/guidelines/components/buttons.html#buttons-style) state that buttons and cards should have a corner radius of `2dp` or `2px` on the web. Make of that what you will, but this design language has been heavily adopted in both Android and the web.

![Material Design Example](https://speckycdn-sdm.netdna-ssl.com/wp-content/uploads/2016/04/material-design-motion.gif)

### Thoughts

There's a good argument for rounded corners in design. Firstly the sheer amount of them we see. When was the last time you saw a hard edge in iOS? Those icons are almost circles. Secondly, it seems to be well documented that rounded corners are friendlier both aesthetically and psychologically. They invoke both fluidity and a sense of comfortability that you just don't get in hard fitting sharp edges. With Metro for Windows Phone I always thought everything looked too harsh – like it all fits together a bit too well.

_I must soften all the edges of this blog..._

##### Further Reading

* [Rounded Corners and Why They Are Here to Stay](https://designmodo.com/rounded-corners/)
* [On the Past, Present and Future of Apple’s Aqua User Interface](https://512pixels.net/2014/04/aqua-past-future/)
* [Introducing border-radius](http://www.standardista.com/introducing-border-radius/)
* [CSS border-radius](https://www.w3.org/TR/css3-background/#the-border-radius)
* [Round Rects Are Everywhere!](https://www.folklore.org/StoryView.py?story=Round_Rects_Are_Everywhere.txt)
