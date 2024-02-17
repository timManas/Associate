# Project: Associate

Backend: Node/Express JS <br />
FrontEnd: React, Chakra UI <br />
DB: MongoDB <br />

## Purpose

Create Template Project to use for other projects <br />

## MileStones

1. <s>Design Pages Hierachy <br />

2. Design DB Model<br />
   a. Create MongoDB Collection and Database<br />
   b. Entered Data to DB using seeder <br />

3. Create BackEnd API Routes </s> <br />
4. Create HTTPS Server functionality <br />
5. Create SubscriberList <br />
6. Create Proxy Server <br />
7. Create FrontEnd Functionality <br />
8. Host on Netlify <br />
9. Launch to Production <br />
10. Customize for UseCase <br />

## Key Lessons

1. Use morgan to log the http request to the server <br />
2. Use https.createServer to create a HTTPS server <br />
3. How to create certifictes: <br />

- Run These commands: <br />
- Create certificate folder and run these commands: <br />
  openssl genrsa -out localhost.key 2048 <br />
  openssl req -new -key localhost.key -out localhost.csr <br />
  openssl x509 -req -in localhost.csr -signkey localhost.key -out localhost.crt <br />
  -> Follow prompts <br />

You should see three files: <br />
localhost.crt - This is the SSL Certificate <br />
localhost.csr - This is the Certificate signing request <br />
localhost.key - This is the private key <br />

4. Doing the above format will now have HTTPS BUT will still show "Not Secure" connection

## Pages

0. Landing Page <br />
1. Editors Picks - Budget, Regular, HighEnd <br />
2. Products Page <br />
3. Blog Page <br />

Future Enhancements <br />

1. Kit Builder - Enter Budget $$$ <br />
2. Result Page <br />
3. Comparison Page <br />

## Model

1. Product <br />

- Model
- Brand
- Price
- URL
- Description
- CustomSpecs
- Category (Bike, Swim, Run, Etc...)

## Questions

**General**

1. Kit Builder
   Q. How will we scour the internet for cheap parts ?
   A. We wont. We will have a DB of parts of different price ranges

   Q. Then how do build a kit ?  
   A. Randomize it. Pick one from each category starting from the priority list

2. Editors Pick
   Q. This is basically a blog isnt it ?
   A. Yes
