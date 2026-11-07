---
title: Creating a Modern and Minimalist Blog/Portfolio with Jekyll
date: "2017-06-13"
kind: writing
dek: How this site was first put together with Jekyll, Almace Scaffolding, and Amazon S3.
---

I have recently been trying to find a way to congregate all my projects in one place as well as have a platform to add blogs posts as I feel necessary. Some things that I was looking for were a clean design as well as having it easy to maintain and update the site. At first I was drawn to using GitHub Pages which is based on Jekyll and I still think it’s a very good platform for this very purpose. Eventually though to get the look that I wanted I had to move my site to another Jekyll based system and having it hosted using Amazon S3.

GitHub pages is probably the simplest way to get a personal portfolio or project site up and running. It takes zero web development or networking knowledge. All you need to spin the site up is a GitHub account and to find a theme that suits your style. I’m not going to rehash the specific details to get the site running so the [official documentation](https://pages.github.com) has everything to get your site up and going. Essentially it all runs on Jekyll which is a platform to simplify blog development, all you need to do is create markdown files and specify the layout and it creates all the html and css for you. Github Pages takes this a step further by allowing you to create Jekyll repositories and it will automatically generate the files in the backend and host it for you. I still have a [site](https://lizzierajchel.com) running on GitHub pages that I am very happy with.

I personally didn’t find any of the Jekyll templates to have the full look and functionality that I wanted so I continued my hunt. I did finally find a framework called [Almace Scaffolding](https://sparanoid.com/lab/amsf/) that was perfect though. It has a very clean modern look as well as gives me more control over the heading images/backgrounds, twitter card support and more markup control. So I went ahead and forked the repo and started going in to the code and customize the layouts.

The files are essentially split into two parts, one called `_site` for the generated html and one called `_app` for all the templates, markdown files and other settings. The first thing I did was go into the index.html in the filepath:

```
_app/_pages/_themes
```

In there I could update everything I wanted on my homepage such as my name/title and tell It what content I want to feature on there. In this folder is where I could create html files for the categories I wanted, such as an about page and a page for all my projects. The key with these is to include the front matter at the top to indicate all the metadata associated with the categories. For example here is the front matter for my projects tab:

```
---
layout: page
title: Blog
permalink: /blog/
desc: A collection of thoughts, tips and advice that I have accumulated
---
```

Here I was able to add the title, description and how I wanted it displayed on the top bar of the site.

Now we go to this folder:

```
_app/data
```

In it will be a header.yml file where we can specify which of the pages we just created are going to be displayed on the top tab bar. This can be done simply by specifying the title and the url you set before as such:

```
title: About
url:   /about/
```

Now we have the home pages and all the categories set up we can go and start adding posts by creating markdown files in the filepath:

```
_app/_posts
```

These are just regular text files where you can use markup tags to change the formatting to how you want your post to look. The important thing for Jekyll is the inclusion of the front matter at the top, for example here is one for a previous post of mine.

```
---
heading-img: https://s3-us-west-1.amazonaws.com/www.jasonwiker.ca/assets/img/snipbooksLogoWhite.png
heading-img-local: true
heading-bg-color: "#8141b1"
heading-bg-text: "#fff"
layout: post
title: "Snipbooks"
category: projects
tags: projects
comments: true
---
```

Here I am able to set the background image source as well as the category and tags for the post to fall under the correct parts of the site. For more info on the specific additions that almace scaffolding has to the front matter you can go to the [Almace Scaffolding docs](https://sparanoid.com/lab/amsf/custom-html-markups.html). Notice I also have a setting to turn on comments, this is not native to Almace Scaffolding and I had to go though and add that myself. [This is a good guide](http://www.perfectlyrandom.org/2014/06/29/adding-disqus-to-your-jekyll-powered-github-pages/) on doing that yourself.

Now finally we have our whole site and we need a way to host it. I decided on using Amazon S3 because of its low cost and high reliability. Here is a good guide on getting all this set up on Amazons side. There is a great package called s3_website that allows us to push our site to our S3 Bucket with only one quick command in the terminal. All you need to do is edit the file called s3_website.yml. You just give it your ID secret and Bucket name as well as tell it what is the index file. Once you do that you just need to navigate to the directory in the terminal and type the command:

```
s3_website push
```

Then your site is pushed to your bucket and everyone can now see all that you have created.

Altogether I am happy with the performance of the framework and the ease of use. It takes the simplicity of a Jekyll blog and gives it a clean and modern look that isn’t seen with other more basic GitHub pages based Jekyll themes. Any questions you can either send to me in the comments or the creator directly from his [site](https://github.com/sparanoid/almace-scaffolding).
