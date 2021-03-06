# chrome-ext-poc

Basic working example to show that online voting is highly susceptible to in-browser attacks via extensions.

- can be hidden in popular extensions, targeted to local users by providing locality usefulness (bus route app, local savings coupons, vote info etc)
- can be buried deep inside legit functionality, difficult to see despite lack of obfuscation.
- Since voting closed, we populate existing sites with buttons. If this were real world, it would simply modify the real buttons onclick events or links. (actually a lot simpler that way)
- can change labels on buttons, or change actions (can report that the user did what they expected while voting for someone completely different)
- can exfiltrate voting data easily using Ajax post, or even a crafty remote image call with the data as parameter

# test sites

We're using real world sites to show this works despite their security steps.

- https://sarnia.evote2018.ca
- https://ajax.simplyvoting.com/
- https://www.intvoting.com/Cambridge2018/Default.aspx

UPDATE: Most of the online voting systems are no longer available to test against.
