# 05 Third-Party APIs: Work Day Scheduler

# Work_day_scheduler

## Description: This site is a modified version of a starter code given for instructional purposes. It is a scheduler that can help those needing to keep track of their work day. Users will notice the current hour is highlighted red, while past and future hour blocks are different colors. In each hour block is space for input to be written which will stay on the screen despite refreshing attempts due to the wizardry with the local storage.
The starter code consisted of 3 files: html, css, and javascript; which only contributing the file to have the structure but no functionality. I will go into what I changed in each file:

## HTML:
The starter code only consisted of the first three hours of the day, I add 6 more hour blocks to account for the entire work day, then changed the id of div to correspond with the hour they represented, and added id’s to the textareas.

## CSS
Just added some random CSS to make the header look a little less shabby.

## JS
First I added a loop to add a querySelector to each save button, then within the same loop allowed linked the value of the text area to the button it was saved with to local storage. In addition added a feature for the loop to check for adjustments, and if so added that to local storage as well or just keeping it in the text area.
I then created an if statement to check with the current hour so the hour blocks could be highlighted with a specific color depending upon the current hour.
Lastly added a welcome message in the header, using day.js to display the current time and day.

## Link to github repo: https://github.com/imdawizard/work_day_scheduler

## Screenshot:

#Link to deployed application: 

