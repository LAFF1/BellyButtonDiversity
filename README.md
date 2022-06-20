# BellyButtonDiversity
Dashboard Exploring Belly Button Diversity
Visit the webpage https://tinyurl.com/3w3rwwkk


This project is one of many that endevours to create an interactive dashboard around the belly button biodiversity project. The orginal project may be found here:http://robdunnlab.com/projects/belly-button-biodiversity/. A breif discription from the website: The belly button is one of the habitats closest to us, and yet it remains relatively unexplored. In January 2011, we launched Belly Button Biodiversity to investigate the microbes inhabiting our navels and the factors that might influence the microscopic life calling this protected, moist patch of skin home. In addition to inspiring scientific curiosity, Belly Button Biodiversity inspired conversations about the beneficial roles microbes play in our daily lives. If you are interested in additional information please vist their site. Our project was created using JavaScript and Ploty, see additional information at the bottom of this readme. 

## Dashboard

Interactive and responsive web page displaying charts and information about the above study.

## Example of Full Dashboard
![FullDashboard](https://user-images.githubusercontent.com/98897041/174480551-fcbf77ac-8e34-4da5-8eba-153ccbf777e5.PNG)

## Dashboard Breakdown
### Test Subject Dropdown 

Dropdown for interactive selection of test subjects from the study. Once a new test subjects is selected all elements are updated to reflect the selected test subject. 
  
![Selector](https://user-images.githubusercontent.com/98897041/174480728-9ee1d763-2bbc-4be0-ad44-006bc6f11484.PNG)![Info946](https://user-images.githubusercontent.com/98897041/174480777-60a09c72-55f7-412b-aaac-57f8f20c8949.PNG)![TopTen946](https://user-images.githubusercontent.com/98897041/174480834-62265e62-e3f3-4378-918e-e0f1841cf621.PNG)

In addition to the demographic card and top 10 bacteria chart shown above there is also a gauge graphic demonstrating the washing habits of each test subject, and a bubble chart showing bacteria found and their volumn. Here are the gauge and bubble charts for subject 946. 

![Gauge946](https://user-images.githubusercontent.com/98897041/174481031-12be8162-6691-42e9-9e71-7a91ebcbf622.PNG)![Bubble946](https://user-images.githubusercontent.com/98897041/174481162-e58ad4b3-95c2-4012-a752-6ca973767638.PNG)

### Hover Text

More information about each test subject can been found by hovering over chart elements. 

![BubbleHover](https://user-images.githubusercontent.com/98897041/174481232-cd821dfc-c13b-42f6-b0af-7ac875ba529e.PNG)![TopTenHover](https://user-images.githubusercontent.com/98897041/174481237-a3c706d7-da0b-404a-97e7-9ccca88a910e.PNG)![GaugeHover](https://user-images.githubusercontent.com/98897041/174481242-067dff95-2258-4371-96c8-889cc7931ed5.PNG)

### Ploty Features 

Each chart also has the inherited plotly features including downloading an image of each chart, zoom capabilities and panning. 

![Bubble946](https://user-images.githubusercontent.com/98897041/174481690-ce32cc72-074a-48b8-835f-aad1857b03b0.PNG)  

![BubblePanLeft](https://user-images.githubusercontent.com/98897041/174481697-9d7d7cc8-dd96-412f-aef4-afcbe160c8a6.PNG)

## Summary
A super fun dashboard - for a super fun study. 

## Dependencies
HTML5 | CSS | Bootstrap | d3js | plotly  
https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css  
https://tinyurl.com/6v7rkdxw  
https://d3js.org/d3.v5.min.js  
https://cdn.plot.ly/plotly-latest.min.js  
Image : theconversation.com https://tinyurl.com/6v7rkdxw  
Study: NC State The Public Science Lab http://robdunnlab.com/projects/belly-button-biodiversity
