## Getting Started

First you need to install dependecies of two applications,backend and frontend.

If you are in the root folder run below command
```
npm install
```

After installation of dependecies of ``frontend`` you need to install dependecies ``server``. <br />
if you are in the root folder run below command
```
cd server
npm install
```




Next you need to run ``server`` **FIRST**, to get the PORT of server and pass it to frontend to be able to communicate, because this application doesn't use Database or some external storages. Everything stores on the runtime memory of ``server`` aplication. And the code of ``server`` doesn't follow any programming principles, there is messy stuff. <br />

Server can be runned by this command.
```
npm start
``` 
It by default runs on ``8080`` PORT. Make sure that port is free. In case you want to run on another PORT run this command on the folder of ``server``.
```
PORT={FOUR_NUMBERS} node index.js
```


<br />

Instead ``FOUR_NUMBERS`` put the PORT which works for you.

After run command of ``server`` you need to run ``frontend`` application.

```
npm run dev
```

There aren't any custom commands. <br/>
In case ``server`` runned not on the default PORT which is ``8080`` you need to modify the file ``next.config.js`` there is a env variable called ``SERVER_PORT``.

```
const nextConfig = {
    env: {
        SERVER_PORT: {FOUR_NUMBERS},
    }
}
```

Default user credentials to login.

Email: a@a.com <br/>
Password: 123123

There is also possibility to register a new user.



## Some notes about charts

I couldn't find more details about the charts.
The main question for me what kind of data should be visualized by charts? I don't think that charts should be use todo's data and I decided to use the same libarary, the same charts and the same data that used in the example of this application.

Hope you will enjoy!