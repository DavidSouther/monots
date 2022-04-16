cd a-library
npm run clean
npm install
npm run build
npm run test
npm pack

cd ../b-binary
npm run clean
npm install ../a-library/a-library-1.0.0.tgz
npm install
npm run build 

echo "Expected output from next command includes 'a-word'"

node build/main.js aWord