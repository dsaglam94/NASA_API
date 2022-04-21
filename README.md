[Click here for live site](https://dsaglam94.github.io/NASA_API/)

# NASA_API

## It is a simple-test project from #100devs to play with APIs and see the possibilties.

### 21.04.2022 updated

- Added a map function to show ISS satellite's position
- Every 2s a new request is made to get the most recent position
- The longitude and the latitude attached the map cords
- added a ISS Satellite's icon

> You can reach the API link from [this link](https://api.nasa.gov/)
> Here is the Leaflet map [CDN](https://leafletjs.com/)
> Grab the ISS Satellite API from [this link](https://wheretheiss.at/w/developer)

Since the whole idea is to show beautiful pictures taken from NASA, I left UI very simple looking.
But the functionality is not that simple.

> Disclamer: The very first picture taken goes back to 1995-06-16. So keep that in mind if you enter earlier dates it won't work.

- User can input a date
- get a random image
- localStorage

> if it's the first time that user opens the website on their browser, the very first picture that gets uploaded will be the picture according to today's date. If not, the user's input date or random image date will be saved and relative picture will be shown the next time they open the site.
