# Overview

Yearbook is an interactive Spotify Wrapped-inspired experience that aggregates
data for participants.

# Design Philosophy

Yearbook is meant to be a yearbook first. This means that it should provide
a common set of information that allows users to share a common set of lived
experiences and memories.

Furthermore, Yearbook is meant to be personalized. A user should be able to make
Yearbook their own. This means collecting information from the user

Something different from Spotify Wrapped (et al.): Yearbook supports progressive
enhancement. For each data source that a user provides, Yearbook will provide a
slightly more personalized experience.

## User Experience

Yearbook is deployed by an **site admin** for a set of **users** over a
**period of time** and aggregates information from **user data sources**. The
**site admin** (e.g. a club) may see basic analytics on **users**
(e.g. members), but only the user may see the full experience powered by their
data sources (e.g. Spotify, Google Photos).

# Integrations

## Non-personalized Data Sources

- Reddit
  - Culture-defining moments

## Personalized Data Sources

These are the integrations targeted for launch:

- Spotify/Apple Music
- Reddit
  - See how active a user was on Reddit relative to other students

Yearbook also supports a custom data source called Surveyor [WIP]. Surveyor is
an [Everyone Votes][everyone-votes]-style app that asks users questions
curated by a site admin and automatically aggregates the responses for inclusion
in a user's Yearbook experience.

It's partially designed to be viral, but like superlatives in actual yearbooks,
this feature is designed really to be funny and amusing.

# The UTD Experience

A student will be able to:

- See how their experiences have differed from students in other schools
- See how high they rank along certain metrics, including:
  - Clubs involved
  - Events attended
  - etc.

[everyone-votes]: https://en.wikipedia.org/wiki/Everybody_Votes_Channel
