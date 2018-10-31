# chrome-ext-poc

Basic working example to show that online voting is highly susceptible to in-browser attacks via extensions.

- can be hidden in popular extensions, targeted to local users by providing locality usefulness (bus route app, local savings coupons, vote info etc)
- can be buried deep inside legit functionality, difficult to see despite lack of obfuscation.
- Since voting closed, we populate existing sites with buttons. If this were real world, it would simply modify the real buttons onclick events or links. (actually a lot simpler that way)