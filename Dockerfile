FROM node:21.7.2

WORKDIR /root/bem-web
COPY . /root/bem-web
RUN cd /root/bem-web
RUN npm i

EXPOSE 3000

CMD ["npm", "start"]