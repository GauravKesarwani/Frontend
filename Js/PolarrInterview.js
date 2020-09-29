// group by domain

[www.google.com,
    google.com,
    mail.google.com,
    facebook.com,
    nix.facebook.com,
    so.io,
    james.edu,
    www.sjsu.edu,
]

Output:

{
    'google.com': 3,
        'mail.google.com': 1,
        'com': 5,
        facebook.com: 2,
        nix.facebook.com: 1,
        so.io: 1,
        edu: 2,
        'www.sjsu.edu':1
        
}