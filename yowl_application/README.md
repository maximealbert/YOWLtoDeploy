# yowl_application

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## How to start Docker 

- Go to the directory where the Dockerfile is located 
- Then run : `docker build -t yowl-docker-app .`
- Then in the Terminal : `docker run -p 8081:8081 yowl-docker-app`
- Access to the Vue app with : http://localhost:8081


Only available on my branch
