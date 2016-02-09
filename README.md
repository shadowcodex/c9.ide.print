# c9.ide.print
Adds local printing option to file menu in cloud9 ide

This is a plugin that encapsulates [harutyun's solution to local printing](https://community.c9.io/t/request-for-local-printing/1698) into a plugin that integrates it into the cloud9 ide interface.

# Commands

Print: Mac: `COMMAND-P` WIN: `CTRL-P`

# Installation

use command `c9 install c9.ide.print`

In order to use custom plugins during alpha you need to change some settings in your c9 workspace.

Go to `Cloud9>Preferences>Experimental>SDK` and enable the two toggles for `Load Plugins From Workspace` and `Load Custom Plugins`. That should do the trick!

# Screen Shot

![menu screen shot](https://raw.githubusercontent.com/shadowcodex/c9.ide.print/master/print_c9_ide.png)

![Chrome Screen Shot](https://raw.githubusercontent.com/shadowcodex/c9.ide.print/master/print_chrome.png)