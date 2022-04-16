cd a-library
npm install
npm run build
npm run test
npm link

cd ../b-binary
npm install
npm link a-library
npm run build 

echo "Expected output from next command includes 'a-word'"

node build/main.js aWord