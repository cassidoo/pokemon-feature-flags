# Pokémon Feature Flags demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/9242ef3b-3f43-4153-8d3f-65054c333a43/deploy-status)](https://app.netlify.com/sites/pokemon-ld/deploys)

Here's a demo for integrating feature flags into a React project! Built with React, Vite, [the PokeAPI](https://pokeapi.co/), and [LaunchDarkly](https://launchdarkly.com/)!

When the feature flag is off, only Normal type Pokémon can be searched for in the app. When the flag is turned on, then any Pokémon can be queried!

## Deploy your own

### LaunchDarkly setup

Once you've signed up for [LaunchDarkly](https://launchdarkly.com/), create a feature flag. I call mine `testaroni`, and you should too if you want this to work out of the box. Otherwise, you can change it in the `isAllowed` function in `Pokemon.jsx`. Under **Flag variations**, make it a **String** type and add an "all" type, and any other Pokémon types you'd like to include:

![image](https://user-images.githubusercontent.com/1454517/118706538-143c0580-b7df-11eb-88ef-08db3391e17d.png)

After that, you're all set! You can toggle it on and off in the LaunchDarkly UI, set the default rules, segment which users get which types, and more.

### Netlify setup

Click this button to deploy your own version of this project to Netlify!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/pokemon-feature-flags&utm_source=github&utm_medium=ldstream-cs&utm_campaign=devex-cs)

You'll need to add your environment variables after cloning. Structure your `.env.local` file like so (you can find your client ID under [Account Settings => Projects](https://app.launchdarkly.com/settings/projects)):

```
VITE_LD_CLIENT_KEY=your_key
```

...and then plop it into Netlify, and you're done!
