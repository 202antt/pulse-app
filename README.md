Pulse Social Media App

This is a full-stack social media app I built using Next.js, Firebase, and Redux. 
This project started as a learning experience but turned into something real where I had to debug a LOT of issues and figure things out the hard way.

-----------------------------
PROJECT OVERVIEW
-----------------------------

Pulse allows users to:
- Create posts
- Like posts
- Comment on posts using a modal
- View posts in real-time

Everything updates using Firebase Firestore, so changes happen instantly.

-----------------------------
TECH STACK
-----------------------------

Frontend:
- Next.js (App Router)
- React
- Tailwind CSS

State Management:
- Redux Toolkit

Backend:
- Firebase (Firestore + Authentication)

Deployment:
- Vercel

-----------------------------
MY PROGRESS JOURNEY
-----------------------------

This project was not smooth at all. Here’s what I worked through:

- Learned how to structure a Next.js app using the App Router
- Built reusable components like Post, PostHeader, CommentModal
- Connected Firebase and learned how to read/write data
- Implemented real-time updates using onSnapshot
- Learned Redux for managing modals and global state
- Created a working comment system tied to posts
- Added likes functionality with arrayUnion / arrayRemove
- Built dynamic routes for individual post pages
- Deployed the app to Vercel

-----------------------------
BIGGEST ERRORS & WHAT I LEARNED
-----------------------------

1. Firebase Permissions Error
Error:
"Missing or insufficient permissions"

Cause:
Firestore rules were not allowing writes

Fix:
Updated rules to:
allow write: if request.auth != null;

Lesson:
Security rules control EVERYTHING in Firebase

-----------------------------

2. Redux State Issues
Problem:
Modal wouldn’t open or data wouldn’t pass correctly

Cause:
Wrong payload mapping in modalSlice:
I accidentally set everything to action.payload.name

Fix:
Corrected it to:
state.commentPostDetails.username = action.payload.username
state.commentPostDetails.id = action.payload.id
state.commentPostDetails.text = action.payload.text

Lesson:
One wrong property can break your whole app

-----------------------------

3. Comment Modal Showing "Guest" Instead of Real Data
Problem:
Every reply showed "Guest"

Cause:
Hardcoded values instead of using Redux state

Fix:
Used:
const commentDetails = useSelector(...)

Lesson:
Always check if you're using dynamic vs static data

-----------------------------

4. Dispatch Errors
Error:
dispatch not defined or not working

Cause:
Forgot to initialize dispatch

Fix:
const dispatch: AppDispatch = useDispatch()

Lesson:
Redux requires proper typing in TypeScript

-----------------------------

5. Multiple Posts Rendering Incorrectly
Problem:
Mock post showing multiple times

Cause:
Component logic + mapping issue

Fix:
Separated mock data from real database data

Lesson:
Be careful when mixing static and dynamic content

-----------------------------

6. Next.js Dynamic Route Error
Error:
Cannot read properties of undefined (reading 'indexOf')

Cause:
params was typed incorrectly as Promise

Fix:
Changed to:
params: { id: string }

Lesson:
Next.js expects params directly, not wrapped in Promise

-----------------------------

7. Unterminated RegExp Literal Error
Cause:
Missing JSX closing brackets

Lesson:
Sometimes errors look scary but are just syntax mistakes

-----------------------------

8. Firebase Comment System Not Updating
Problem:
Comments not saving correctly

Cause:
Missing imports:
doc, arrayUnion

Fix:
import { doc, arrayUnion } from 'firebase/firestore'

Lesson:
Firebase functions must be explicitly imported

-----------------------------

9. Vercel Image Not Rendering (BIG ONE)
Problem:
Images worked locally but not on Vercel

Cause:
File name casing mismatch:
Pulse.png vs pulse.png

Fix:
Renamed file properly and ensured it exists in:
/public/assets

Lesson:
Vercel is case-sensitive, local machines are not

-----------------------------

10. Git Not Tracking File Rename
Problem:
Renaming image didn’t update on GitHub

Cause:
Git ignores case-only changes

Fix:
Renamed to a different name temporarily (pulse-new.png), pushed, then fixed

Lesson:
Git can be tricky with filenames

-----------------------------

11. UI Layout Issues
Problem:
Content appearing in wrong divs

Fix:
Reorganized JSX structure and spacing

Lesson:
UI bugs are usually structure issues, not logic

-----------------------------

-----------------------------
DEPLOYMENT
-----------------------------

The app is deployed on Vercel.

Steps:
1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Deploy

-----------------------------
ENVIRONMENT VARIABLES
-----------------------------

Create a .env.local file:

NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

-----------------------------
FUTURE IMPROVEMENTS
-----------------------------

- User profile pages
- Image uploads
- Notifications system
- Better UI polish
- Dark mode

-----------------------------
AUTHOR
-----------------------------

Anthony Williams Jr.

This project taught me that debugging is a huge part of development.
Almost everything that broke forced me to actually understand what I was doing.
