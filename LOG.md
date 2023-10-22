# reacttutorial

I haven't done anything with React in years, so I'm doing their [tutorial](https://react.dev/learn/tutorial-tic-tac-toe) as a refresher and pushing that here. I'm also going to maintain a sort of blog about my experience with it in this README. I've been working with Angular for the past few years, so I'll try to include some impressions about the differences within this blog.

## Log

#### 10/13 8:15pm

I took a little extra time in setup to do some things I'd probably want to do in a real project. This included setting up to use Typescript and pnpm. I also took a little time investigating some deprecated package warnings, but didn't end up resolving them. Based on some comments on git issues, it looks like these deprecated packages within React have been resolved. Indeed, if I create a new project with CRA, I don't see the same issues. But my package-management-fu is apparently not up to snuff to resolve this for the tuturial project. I might look into it some more later.

#### 10/13 9:41pm

Just got started on the tutorial and it's having me put together the tic-tac-toe game board in a way that doesn't seem very DRY. Maybe it'll move that direction in a bit. However, the nesting is requiring a lot of manual indentation management, so I'm looking into using Prettier for .tsx files now.

#### 10/13 11:41pm

I've gotten Prettier and ESLint where I think I want them for right now. I've also gone a couple more steps on the tic-tac-toe tutorial. They have fixed some of the repetitive code, but I'm wondering if there's something like an NgFor that will help clean that up more. Also, I'm noting that everything is a function. Coming from Angular where everything is very object-oriented, it's definitely a style adjustment, but not necessarily unwelcome.

#### 10/14 1:02pm

As instructed, I've now moved state into the Board component. There are 2 things on my mind at this stage. (1) I'm still wondering how we can clean up the 9 lines in Board that only differ by index. And (2) I'm wondering what I could do to move business logic and internal state out of the view layer. For now I'll just stay tuned and see where it takes me.

#### 10/14 3:00pm

I've added turn taking and win state checking. I took some liberties to solve this a little differently than the tutorial. Rather than a boolean for whose turn it is, I've added a binary turn state, which feels better since there is an arbitrary choice to keep track of otherwise (whose turn does `true` mean?). I also refactored the internal game state to depend on the turn values rather than the display values. For win state, I was able to slightly optimize things on the assumption that we only need to check win state when the game state changes. Now instead of checking win state globally on all the possible lines (8), we're only checking lines affected by the most recent move (2-4, depending on move). More significantly, this calculation only happens when a move is made, not every time the Board is rendered (if I'm understanding the React life cycle correctly).

#### 10/14 8:04pm

The tutorial is now having me create a Game component to wrap the Board and also provide a view of Game history. It this stage, it's also having me hoist certain parts of the game state from the Board to the Game. In so doing, I've also been forced to pass state down to the Board from the Game and pass a callback to Board for handling the current move. This type of inter-component communication is a huge code smell in Angular, a strong indication that too much business logic is being handled at the view layer. It seems like it should be a similar concern for React. If this component structure got any deeper, we'd be passing tons of state around, potentially across several tiers that don't even use it. I'm really hoping there's a good way to mitigate this. I peeked ahead in the tutorial and it doesn't seem to be covered here. It looks like pulling hooks out into separate files may help, but I don't quite understand yet how that works with multiple components calling a hook. It's obvious there are side effects to that call, but I don't understand the life cycle yet.

I want to add that I'm concerned about young React engineers that learn React from this tutorial. In my experience, this type of lack of separation is a leading source of technical debt that can be painful to remedy. I do understand the desire to limit the scope of an entry-level tutorial (as written the entire application could be contained in one file), but hopefully people recognize the scalability issues with it fairly early on.

#### 10/14 9:34pm

I've implemented their time travel (look back at previous game snapshots). I still don't like how much business logic is done by the components at the moment. However, I did like my bitwise solution to player order. It came out even cleaner with the modulo on move number they did in the last step. I'm still finding myself partial to Angular at this point, though I can't deny the statistics, so I need to learn more. This concludes the tic-tac-toe tutorial, though I still intend to go through the larger tutorial. There are some loose ends to tie up though. I noticed there's a bug with my implementation of win state - if the game has been won, I can't rewind and keep playing from a previous point. It'll be easy to fix that bug, but the easy fix will expose another where the win state can't be detected when returning to the winning move. So, I'll have to come up with a solution to that too. I also want to play around with my hooks and see if I can come up with a structure I like more, though it's mostly a theoretical/philosophical problem on a project this small and I'm not sure I'll understand all the implications at scale.

#### 10/15 1:05 am

I spent way too much time refactoring things and didn't even solve my bug. I'm a bit sad at how poorly React supports what I'm trying to do, but it might be a symptom of bad expectations. I'm coming from an environment with a clear delineation, but what you could argue is global state (monolith Injector). Still, I'm starting to understand why things like Redux exist. The fact that the square click handling stack is as messy as it is, and still living within the view, is an indicator to me that an improvement is needed either to my approach or my tooling. I've separated all my hooks from my components, but given the fact that the functionality is all that is reused, and not the state, it was kind of pointless. I'm neve going to reuse `useWinner` for anything outside my game board. I changed the history logic to undo/redo moves rather than take snapshots of the entire board. There was a hope that that would lead to a cleaner solution to the winner state bug, but that evaporated with my hopes of state reuse between components. Now it looks like I'll have no other choice but to lift my winner state up to the Game level along with everything else, which is just so frustrating.

### Conclusion

The tic tac toe tutorial was pretty fun. I did things a slightly different way, some of which was good, some of which was fueled by a misunderstanding of the library. I'm realizing now that hooks actually are inherently tied to components, so the separation I was looking for couldn't be achieved in the way I was looking for it. I'm guessing what you would do is represent your game state in a separate form and use hooks as an "implementation layer" to expose that data to the view. Looks like I have some homework to understand how that works. All in all, though, I'm pretty happy with the implementation and structure I've superimposed here.
