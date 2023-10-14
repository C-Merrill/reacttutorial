# reacttutorial
I haven't done anything with React in years, so I'm doing their [tutorial](https://react.dev/learn/tutorial-tic-tac-toe) as a refresher and pushing that here. I'm also going to maintain a sort of blog about my experience with it in this README. I've been working with Angular for the past few years, so I'll try to include some impressions about the differences within this blog.

## Log

#### 10/13 8:15pm
I took a little extra time in setup to do some things I'd probably want to do in a real project. This included setting up to use Typescript and pnpm. I also took a little time investigating some deprecated package warnings, but didn't end up resolving them. Based on some comments on git issues, it looks like these deprecated packages within React have been resolved. Indeed, if I create a new project with CRA, I don't see the same issues. But my package-management-fu is apparently not up to snuff to resolve this for the tuturial project. I might look into it some more later.

#### 10/13 9:41pm
Just got started on the tutorial and it's having me put together the tic-tac-toe game board in a way that doesn't seem very DRY. Maybe it'll move that direction in a bit. However, the nesting is requiring a lot of manual indentation management, so I'm looking into using Prettier for .tsx files now.