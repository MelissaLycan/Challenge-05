GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

I was able to research and build a calendar using jquery and moment.js

First I built my time blocks set inside and unordered list.

I wrapped an li around the label, input and button of each hour desired on my tracker.

Functionally this allowed me to build multiple layers of dynamics into the calendar.

I did use a mix of js and jquery to build the java script, but it works.

Here is the link to the jpeg. ./Screen-Shot.jpg
