Running it

All you'll need to do after cloning is open src/index.html or dist/index.html in the browser. The only difference is that the JS is bundled for dist.

There's also a demo hosted at https://mighty-escarpment-40045.herokuapp.com/



Design choices

Although I only spent 3 hours writing code, I purposely waited a few days to start so that I had time to mentally plan how I would use the 3 hours. Not sure if that's cheating or not.

Using a linked list for the snake body seemed like a clear choice-- this is a textbook use case for it. So it made sense to have a small LinkedList class to take care of that.

At first I thought I would need another data structure of some sort to manage the task of efficiently finding unoccupied cells to spawn food in, but it wasn't necessary since document.getElementsByClassList returns a live HTMLCollection whose performance was more than sufficient even with large grids.

There's an argument to be made that the table creation and cell access logic could be broken out into a separate re-usable utility module, but since in this case those method implementations are heavily imbued with the idea of directional movement as the game calls for, that didn't seem right to me. In my opinion, disentangling that would pollute other methods and ultimately result in a messier controller.



Overtime

At three hours I had a working game, but I hadn't commented the code very much, nor was there a way to adjust the gamespeed or start a new game after a loss. There was also no score counter. Naive me had hoped to get in a small server with a leaderboard within 3 hours, but that was a lost cause too. Lastly, there was an expected bug where if you tried going backwards you would lose. Most snake implementations ignore an input to go backwards. So my fix for that was done past the three hour mark.

I would say in total I spent 3 hours and 45 minutes on this to finish a couple of the things mentioned above. Deploying it to heroku was additional time, too.

Hopefully that's interpreted as "this applicant went above and beyond!" rather than "this applicant disobeyed instructions." :) I just couldn't leave it without a menu...


Next steps

First thing is tests. There are none, and there need to be a fair few. Each method needs to be robustly unit tested with mocked inputs, and then the whole thing ought to be functionally tested.

Second thing is documentation. I have explanatory comments and of course I would like to believe I wrote fairly clear and readable code, but I think it's always good to have proper documentation in the form of block comments explaining params, return values, intentions, and side effects above each method / class.

Third thing is expanded functionality. I have no score counter or leaderboard.

And lastly, of course, the styling could always use more polish, but that goes without saying for a 3 hour project.