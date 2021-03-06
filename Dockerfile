FROM node:10-alpine as builder
COPY . /home/app
WORKDIR /home/app
# the following dependencies are needed to build native modules via node-gyp
RUN apk add --no-cache \
        python \
        make \
        g++
RUN npm install
RUN source local-startup.sh && npm test || echo "Unit Tests Failed"
RUN npm install --production

FROM node:10-alpine
COPY --from=builder /home/app /home/app
WORKDIR /home/app
RUN npm install --production
ENTRYPOINT NODE_ENV=production node src/index.js
EXPOSE 7700
