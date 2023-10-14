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
