When you run a command in the terminal, where does BASH look for that command?
$PATH

On a UNIX computer, how do you stop a running process?
first find the PID using pidof and then use kill -9 {PID}

What packages do you have installed via homebrew?
openssl, postgresql, readline, shellcheck, tree
and via caskroom: java, mono-mdk, openra, postico, postman

On a UNIX computer, how do you find the process id of a running process?
ps ax | grep <name of the thing you are looking for>

In a terminal, what does control-c do?
Exit or close the process that's running

In a terminal, what does control-a do?
Brings you back to the start of the line

In a terminal, what does control-e do?
Takes you to the end of the line

What keyboard shortcut do you use to split the screen in your editor?
Two finger tap on the trackpad, select split pane. Track pad counts as part of the keyboard on a laptop right? Answer you're probably looking for: Cmd+ K + direction key

What keyboard shortcut do you use to split the screen in your terminal?
CMD-D

When a terminal command completes, how can you tell if it was successful or not?
type 'echo $?' and if it says anything other than 0 it was not successful

What does your ~/.gitconfig have in it? (paste the whole file here)
[core]
        excludesFile = /Users/DangerMaus/.gitignore
        editor = nano
[user]
        email = hawk1138@gmail.com
        name = Ryan Greenberg

What is the difference between a relative and absolute path?
absolute paths give the full path from the base of the file tree.
relative paths are locations of the file in the system relative to where it's being specified

Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?
cd ../pinterest-for-dogs

What keyboard shortcut do you use, in your editor, when you want to open a specific file?
Cmd-O

What files or folders do you want all git repositories to ignore?
The dev dependencies and the files it downloads and installs when you first set up the files

What is the main difference between == and === in JavaScript?
=== not only compares the values of 2 things, but also the types. "3" == 3 returns true but '3' === 3 returns false
