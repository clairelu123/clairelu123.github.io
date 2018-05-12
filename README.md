# Personal Website

## Why build this repo

This is a Hexo based personal website (http://wenshuailu.me/) I created for myself. 

At the beginning I just wanted to build this as a way to understand the whole process of deploying a website.

Later I might switch to building my website from scratch to host dynamic pages, which I'm very excited about 
since I'll get to learn more about backend stuff :)

But for now I'll stick with it as a portfolio site and use it to blog about notes/thoughts of coding as well.

The reason why I choose Hexo instead of Jekyll (or others) is that it's
based on Node.js, which is something I'm learning right now, so I can easily understand and customize the files, and 
also save me the trouble of learning new syntax of other languages and frameworks.

## Set Up

+ Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [node.js](https://nodejs.org/en/) first 

+ Install [hexo](https://hexo.io/)

`$ npm install -g hexo-cli`

+ Initialization

`$ hexo init <folder>`

`$ cd <folder>`

`$ npm install`

+ Switch Themes

  Hexo has quite a few [themes](https://hexo.io/themes/) to choose from.

  I use [this one](https://github.com/carlos-algms/hexo-theme-materialize) as a starting point.

  Installation steps on how to switch themes can be found from above links
  
+ Customization
  + Customized the header and footer a little bit (changed personal info/menus etx.)
  + Created a new home page section as it's not included in the theme
  + Added an new 'about me' page with embed resume.

## Acknowledgment

Theme is from [hexo-theme-materialize](https://github.com/carlos-algms/hexo-theme-materialize). I made slight modifications but the overall
structure is the same. Wouldn't be able to finish it so quickly without this wonderful theme, so I really appreciate it.
