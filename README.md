# Clarkbot
*A Slack chatbot for the 2019 Clark Summer Research Program*

## Usage

### Commands

#### motivate
```
/clarkbot motivate
```

This will generate a response with a random motivational message.

### First-time installation
**Only for those installing this in a Slack workspace; end users don't have to do this.**
To authorize Clarkbot to do Clarkbot's work, first create a new Slack app for
your workspace.

Next, create a Slash Command, and use the following URL as the request URL:
https://us-central1-willie-personal-projects.cloudfunctions.net/clarkbot

TODO: Finish installation instructions

## Project Structure
This chatbot uses various online APIs and services, including:
 - [Google Cloud Functions](https://cloud.google.com/functions/docs/)
 - [Slack Slash Command API](https://api.slack.com/slash-commands)
 - [Slack Bot User API](https://api.slack.com/bot-users)
 - [Google Natural Language API](https://cloud.google.com/natural-language/docs)
 - [They Said So Quotes API](https://theysaidso.com/api/)
 - [Google Maps Places API](https://developers.google.com/places/web-service/intro)

In addition, this project uses [GitHub Pages](https://github.com/) for usage documentation.

## Development
This project uses the following Python packages:
 - [flask](flask.pocoo.org), a micro web framework

To install all at once, use pip:
```pip3 install -r requirements.txt
```

Optionally, use a Python virtual environment to isolate your dependencies.

In a bash terminal:
```bash
python3 -m venv env/ # Install Python virtual environment creator
source env/bin/activate # Activate the virtual environment
pip3 install -r requirements.txt
```

For developers:
When adding a new package, make sure to add it and freeze the dependencies:
```bash
pip3 freeze > requirements.txt
```


## License
This project uses the MIT license.

TL;DR: Do what you want, but just keep the copyright notice unless you create a derivative.
