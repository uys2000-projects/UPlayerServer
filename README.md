# Express TypeScript

## DotEnv

Acording to `ENV` value in `.env` file `.env.{ENV}` will be loaded.  
Basic template of .env files:  

.env
```properties
ENV = "dev"
PORT = 3000
```

.env.dev
```properties
ENV_FILE = ".ENV.DEV"

DEBUG_MODE = "TRUE"
DEBUG_STRING_MODE = "FALSE"


UPLAYER_FIREBASE_TYPE= ""
UPLAYER_FIREBASE_PROJECT_ID = ""
UPLAYER_FIREBASE_PRIVATE_KEY_ID = ""
UPLAYER_FIREBASE_PRIVATE_KEY = ""
UPLAYER_FIREBASE_CLIENT_EMAIL = ""
UPLAYER_FIREBASE_CLIENT_ID = ""
UPLAYER_FIREBASE_AUTH_URI = ""
UPLAYER_FIREBASE_TOKEN_URI = ""
UPLAYER_FIREBASE_AUTH_PROVIDER_X509_CERT_URL = ""
UPLAYER_FIREBASE_CLIENT_X509_CERT_URL = ""
UPLAYER_FIREBASE_UNIVERSE_DOMAIN = ""
```

.env.prod
```properties
ENV_FILE = ".ENV.PROD"

DEBUG_MODE = "FALSE"
DEBUG_STRING_MODE = "FALSE"


UPLAYER_FIREBASE_TYPE= ""
UPLAYER_FIREBASE_PROJECT_ID = ""
UPLAYER_FIREBASE_PRIVATE_KEY_ID = ""
UPLAYER_FIREBASE_PRIVATE_KEY = ""
UPLAYER_FIREBASE_CLIENT_EMAIL = ""
UPLAYER_FIREBASE_CLIENT_ID = ""
UPLAYER_FIREBASE_AUTH_URI = ""
UPLAYER_FIREBASE_TOKEN_URI = ""
UPLAYER_FIREBASE_AUTH_PROVIDER_X509_CERT_URL = ""
UPLAYER_FIREBASE_CLIENT_X509_CERT_URL = ""
UPLAYER_FIREBASE_UNIVERSE_DOMAIN = ""
```

## U-Logger

U-Logger can run with two mode. Live Logger and Default Logger.  
- Default mode should be setted at the beginning of the application with `setDebugMode`.
- Live mode runs acording to `window.isDebugModeActive` or `global.isDebugModeActive` it can be changed any time.

More information about ULogeer can be found [here](https://github.com/uys2000-projects/ULogger)
