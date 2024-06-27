#!/bin/bash
# $1 subcommand
display_command() {
    echo -e "\t{{ Bold (Color \"#00FF00\" \"npm $1\") }}" | gum format -t template
    echo ''
}

# $1 emoji, $2 text, $3 subcommand
display_command_and_comment() {
    echo "$1 {{ Italic \"$2\" }}" | gum format -t template | gum format -t emoji
    display_command "$3"
    echo ''
}

what_next() {
    echo ''
    display_command_and_comment ':rocket:' 'Run the project in development mode' 'run dev'
    display_command_and_comment ':wrench:' 'Build the project' 'run build'
    display_command_and_comment ':eyes:' 'Preview the built project' 'run preview'
    echo ''
}

setup() {
    gum spin --spinner dot --title 'Installing dependencies with npm' --show-output -- npm i
    echo ':wrench: All your dependencies are now installed! You can now use any of the following commands:' | gum format -t emoji
    what_next
}

just_info() {
    echo ''
    echo 'No problem, you can always run this command later do install them:'
    display_command 'install'
    echo ''
    echo 'You will then be able to execute the following commands:'
    what_next
}

echo ''
echo ':stars: Welcome to the {{ Bold "alys.phundrak.com" }} development environment!' | gum format -t template | gum format -t emoji
if [ -d "node_modules" ]; then
    echo ':star2: Your dependencies are already installed I see!' | gum format -t emoji
    echo ':wrench: You can now run the following commands to run the project:' | gum format -t emoji
    what_next
elif gum confirm 'Would you like to install the NPM dependencies of the project right now?'; then
    setup
else
    just_info
fi
