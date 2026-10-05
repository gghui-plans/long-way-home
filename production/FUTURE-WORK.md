# Future work

Ideas and to-dos for later. Nothing here is scheduled; pick one and say "build".

## Hosting

**Custom address: longwayhome.itsgordonhui.com**
Both this game and itsgordonhui.com are on GitHub Pages under `gghui-plans`. The domain's DNS is on Google nameservers (likely managed in Squarespace Domains).
1. Gordon adds the DNS record: host `longwayhome`, type `CNAME`, value `gghui-plans.github.io`. The `www` record already points the same way.
2. Once it resolves, Claude:
   - sets the custom domain on the long-way-home repo and adds `docs/CNAME`;
   - rebuilds with `-SiteUrl https://longwayhome.itsgordonhui.com/` (share card, postcard link, social preview tags);
   - turns on HTTPS after GitHub issues the certificate.
- Do it in that order. Setting the domain before DNS works breaks the current link until DNS catches up.
- The old gghui-plans.github.io/long-way-home link redirects automatically.
- Saved settings and records start fresh on the new address, because browsers store them per site.
- Optional: verify itsgordonhui.com in GitHub (Settings → Pages → Add a domain) so no one else can claim a subdomain.

## Radio
- **Fast Lane Facts jingle**: a short sting from a remaining Suno credit.
- **Dana's Traffic-scopes**: written and skipped for now; the script is in RADIO-SCRIPTS-DRAFT.md (about 950 credits).
- **A second station**: a Toronto hip hop station on the SEEK knob, with its own hosts and Toronto traffic jokes.
- **Cancel the ElevenLabs and Suno subscriptions** once retakes are done (about 5,500 ElevenLabs credits left).

## Game
- **Night drives**.
- **Installable app (PWA)**: home-screen icon, offline play.
- **Postcards in the Claude artifact**: Save and Share need the artifact `downloads` capability. They already work on the GitHub Pages site.
- **Feedback form**: `FEEDBACK_URL` in index.html is still empty.
- **Real-phone performance test**: a town frame is about 318k triangles. Check frame rate and battery on an actual phone.
