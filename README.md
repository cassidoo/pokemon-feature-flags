# Pokémon Feature Flags demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/9242ef3b-3f43-4153-8d3f-65054c333a43/deploy-status)](https://app.netlify.com/sites/pokemon-ld/deploys)

Here's a demo for integrating feature flags into a React project! Built with React, Vite, and [the PokeAPI](https://pokeapi.co/)!

When the feature flag is off, only Normal type Pokémon can be searched for in the app. When the flag is turned on, then any Pokémon can be queried!

## Deploy your own

Click this button to deploy your own version of this project to Netlify!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/pokemon-feature-flags&utm_source=github&utm_medium=ldstream-cs&utm_campaign=devex-cs)

You'll need to add your environment variables after cloning. Structure your `.env.local` file like so:

```
VITE_LD_CLIENT_KEY=your_key
```

...and then plop it into Netlify and you're done!
