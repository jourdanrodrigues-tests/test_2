# Full Front-End Test for Styling - Read Me

How to turn in the results after completion:

1. First, deposit all your code in a _public_ repository on BitBucket and share it with us so that we can see your
coding, organization, approach, standards, skills, etc. Please name the repository folder as your full name
(FirstN_LastN). You should email the link to your public repository to the email: ******

AND:

2. Second, provide a temporary server link to the live application so that we can see it working live and test it.
Please email the link to the same: ******

--Link your pages so that we can click through them. Without the live server link, we will not review your test results.
Also, please do not use the name company in the url or naming of any html file or folders

NOTE:

The UI design that is being provided to you is specifically designed for this test and is not the current or working
platform's design for confidentiality reasons. Please do not worry about the UI/UX issues and there is no need to make
recommendations for UI.

Summary:

This is a front-end styling test involving basic login and profile information pages (two pages but responsive) based
on the designs provided in "Design" folder.

Please follow the instructions very closely and check each for the following aspects:

1. The design for desktop and responsive mobile have been provided for each screen. Please follow it very closely and
replicate as closely as you can.
2. You have the option to use the PSD file (see "PSD File" folder) or also images of each page to replicate the designed
pages (see "JPG Files" folder). If you use the PSD file, you will see an additional page for settings tab which you
should ignore and not implement.
3. In the "Resources" folder you will find the background & the profile image
4. Notice that separate designs for desktop and mobile is provided for each screen
5. Tablet design is not provided, but it will be the same as desktop except less wide.
6. The mobile version of the login page should be fixed/fit to the screen & should not be scrollable & the button at the
bottom of it should also be fixed to the bottom of the mobile screen.
7. The desktop design for field editing popup and hover (for edit pen) elements are shown. The popup design for other
fields (such as website, name, etc) are not provided in design (only the popup for the city as an example is shown) but
you can use the same concept as shown for those fields in desktop version. Editing in mobile is shown in design and is
completely different as you can see.
8. The menu (about, settings, etc) for mobile version should operate by _swapping_ to the right or left as you can see
in the mobile design. Again, it must be swappable and we should not see a scroll bar when testing it! (see design look)
9. The header for the profile page both in desktop and mobile must be a shared component for all pages/tabs so that if
you make a change to the header once, it will change the header automatically for all other pages/tabs.
10. For icons (such as plus, star, pen, etc), use: http://ionicons.com/cheatsheet.html
11. All fields should follow the Google material design which has the title of the field in the text box by default;
once the user input is provided, the title moves above the field and becomes a small overhead title; see for example:
https://material.angularjs.org/latest/demo/input
--- however, please note that you should not use angular or other "js frameworks" for this test, only ES6 JS (which is
the only JS used on our platform along with Jquery). Again, the link to material design is for example purpose only.
12. Must use BEM (http://getbem.com/introduction/) to organize CSS (we use this technology in our platform)
13. Must use SASS for precompiler (we use this technology in our platform)
14. Must use Gulp for SASS and Webpack for ES6 part (we use these technologies in our platform).
15. Test your pages in Chrome, Safari, and IE (version 10 and above) to make sure the pages look the same as the design
and there are no issues with responsive pages. We will view your results in these three browsers on desktop and mobile.
If you don't have any of these browsers and can't download them (on mobile and desktop), you can test it using
www.browserstack.com with a free trial.
16. When you start coding this test, in the very beginning, setup BitBucket repo and commit as you code and make
progress until you're done & make the final commit. After you're done and you share the link for review (only after
completion), we will need to see your commit times/dates.
17. Link your pages so that we can click through them. Without the live server link which you should provide, we will
not review your test results.
18. Attention to details, the instructions, and how closely you can replicate the design, AND testing is VERY important
aspect of this part of the test.

## Technologies to be used in this test (ONLY):

* For javascript, ONLY implement ES6 javascript.
* HTML5
* CSS3 and SASS
* Note: Do NOT use Bootstrap; Do NOT use any other javascript technologies other than ES6 (make sure not to use Angular
or React or any other JS frameworks).
