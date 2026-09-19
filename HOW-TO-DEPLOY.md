# How to save your website and put it online

You have three files that make up your whole website:

- `index.html` — the content and structure
- `style.css` — the colors, fonts, and layout
- `script.js` — the mobile menu and small interactive bits

They must all stay **in the same folder**, with those **exact names**, or the site will lose its styling.

---

## Part 1 — Save the files on your Windows laptop

1. On your Desktop (or wherever you like), right-click → **New → Folder**.
   Name it `laura-portfolio`.
2. Download the three files Claude gave you (`index.html`, `style.css`, `script.js`) into that folder. Do not rename them.
3. Double-click `index.html`. It should open in your browser (Chrome, Edge, etc.) and show your site running locally on your computer.
4. Later, when you have your photo:
   - Save the photo into the same `laura-portfolio` folder, e.g. `laura.jpg`.
   - Open `index.html` in Notepad (right-click → **Open with → Notepad**).
   - Find this section (near the top of the About section):
     ```html
     <div class="photo-placeholder">
       <span class="photo-initials">LA</span>
       <span class="photo-hint">Add your photo here</span>
     </div>
     ```
   - Replace it with:
     ```html
     <img src="laura.jpg" alt="Laura Efe Badua Abban" class="photo-real">
     ```
   - Save the file (Ctrl+S) and refresh your browser to see the change.

You can also edit the placeholder project text the same way — open `index.html` in Notepad, search for `Project title goes here`, and replace it with your real project names, descriptions, and links.

---

## Part 2 — Put it online with Vercel (free)

Vercel needs your files to live in a **GitHub repository** first, then it publishes them automatically. Here's the full path, step by step.

### Step 1: Create a free GitHub account
1. Go to https://github.com and sign up (skip if you already have an account).

### Step 2: Create a new repository
1. Once logged in, click the **+** icon top-right → **New repository**.
2. Name it `laura-portfolio`.
3. Keep it **Public**.
4. Do **not** tick "Add a README" (you'll upload your own files).
5. Click **Create repository**.

### Step 3: Upload your files to GitHub
1. On the new repository page, click **uploading an existing file** (a blue link in the middle of the page).
2. Drag in `index.html`, `style.css`, `script.js`, and your photo if you've added one.
3. Scroll down, write a short message like "First version of my site", and click **Commit changes**.

### Step 4: Create a free Vercel account
1. Go to https://vercel.com and click **Sign Up**.
2. Choose **Continue with GitHub** — this links Vercel to your GitHub account and is the smoothest option.

### Step 5: Import and deploy your project
1. On your Vercel dashboard, click **Add New... → Project**.
2. Find `laura-portfolio` in the list of your GitHub repositories and click **Import**.
3. Vercel will detect it's a plain HTML/CSS/JS site — you don't need to change any settings.
4. Click **Deploy**.
5. Wait about 30–60 seconds. Vercel will give you a live link, something like:
   `https://laura-portfolio.vercel.app`

That link is your real, live website — you can share it with anyone.

---

## Part 3 — Making changes later

Whenever you want to update the site (new project, new photo, edited text):

1. Edit the file on your computer (in Notepad or a free editor like [VS Code](https://code.visualstudio.com/)).
2. Go back to your repository on GitHub.
3. Click on the file you changed → the pencil (✏️) **Edit** icon → paste in your updated content → **Commit changes**.
4. Vercel automatically re-publishes your site within about a minute — no extra steps needed.

---

## Quick troubleshooting

- **Site looks unstyled (plain text, no colors)** — `style.css` isn't in the same folder as `index.html`, or its filename was changed. Check the spelling exactly.
- **Mobile menu button doesn't do anything** — `script.js` is missing or renamed.
- **Changes not showing on the live site** — give it a minute, then refresh with Ctrl+F5. Also confirm you clicked "Commit changes" on GitHub.
