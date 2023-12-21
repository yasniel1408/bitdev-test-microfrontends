## 1- Primero deberias tener instalado teambit

```
npm install -g @teambit/bvm
bvm install
```

## 2- Luego crear los microfrontend

```
mkdir <microfrontend-folder>
bit init -f
bit create react <microfrontend-name>
```

## 3- Luego recordar modificar los workspaces para tener configurados los microfrontends en la misma organizacion remota de bit.cloud y el space

## 4- Para el caso del microfrontend para el host deber correr los siguientes comandos y tambien corregis el workspace

```
bit fork learnbit-react.module-federation/apps/host-app
bit use apps/host-app
```

## 5- Para correr la app host

```
bit run mf-host
```

## 6- Para poder importar microforontend

```
bit fork learnbit-react.module-federation/webpack-transformers/mf-host-transformer
bit fork learnbit-react.module-federation/webpack-transformers/mf-remote-transformer
```

## 7- Para poder soportar preview de los microfrontends debes correr este comando

```
bit fork learnbit-react.module-federation/envs/mf-host-env
```
