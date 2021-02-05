let arraysOfGit = 
{"Definition": "Putting your existing work on GitHub can let you share and collaborate in lots of great ways. in mac",
"Steps":
[
{"step":"Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.<img src='image/repo-create.png'>"},
{"step":"Open Terminal."},
{"step":"Change the current working directory to your local project.", },
{"step":"Initialize the local directory as a Git repository.", "code":"$ git init -b main"},
{"step":"Add the files in your new local repository. This stages them for the first commit.", "code":"$ git add ."},
{"step":"Commit the files that you've staged in your local repository.", "code":"$ git commit -m 'First commit'"},
{"step":"At the top of your GitHub repository's Quick Setup page, click  to copy the remote repository URL.<img src='image/copy-remote-repository-url-quick-setup.png'>",},
{"step":"In Terminal, add the URL for the remote repository where your local repository will be pushed.", "code":"$ git remote add origin  <REMOTE_URL> "},
{"step":"Push the changes in your local repository to GitHub.", "code":"$ git push -u origin main'"}
],
"Source":"<h3>Source</h3><a href='https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line'>https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line</a>"
};