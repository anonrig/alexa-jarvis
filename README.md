### Jarvis Mark 0

- A hopeful attempt to build Jarvis through Amazon Echo Plus that uses Alexa. Any pull requests and reviews are welcome!

#### Installation

- Install a port forwarding module like `localtunnel` to forward port 8080 a server where Alexa can access. (Even though it runs on localhost and it's will only be available to you, you need to have a test application)
- Run `npm install` on the root directory.
- Add necessary process environments.
  - PORT: 8080
  - LOCALTUNNEL_SUBDOMAIN: 'alexa-test-jarvis'
  - LGTV_URL: 'ws://192.168.1.31:3000'
  - ALEXA_APP: 'jarvis'
  - APSIYON_SESSION_ID: 'session-id'

#### Testing

- Access `http://localhost:8080/app/jarvis` from your browser.

#### Features

- LG WebOS integration to turn on and off tv.
  - "Alexa ask Jarvis to turn on tv"
  - "Alexa ask Jarvis to turn off tv"
- Learn maintenance fee (aidat) from Apsiyon.com
  - "Alexa ask Jarvis to learn my maintenance fee"

#### Todo

- Remotely change tv to the channel where Apple TV is active and turn on Apple TV.
- Hue integration (Examples include: "Alexa ask Jarvis to initiate party mode")
