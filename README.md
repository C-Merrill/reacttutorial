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
