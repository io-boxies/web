sh scripts/killPort.sh 9099
sh scripts/killPort.sh 5001
sh scripts/killPort.sh 8080
sh scripts/killPort.sh 5179
sh scripts/killPort.sh 8085
sh scripts/killPort.sh 9199
sh scripts/killPort.sh 4001

source ~/.nvm/nvm.sh
nvm use 16

# firebase emulators:start --import=test/fixture/savedData --export-on-exit
# firebase emulators:start --import=test/fixture/savedData --project=demo-io-box-develop
firebase use inoutbox-development
cd functions && npm install && npm run build && cd ..

npm run build:test
firebase emulators:start \
    --project=inoutbox-development \
    # --export-on-exit=$DATA_PATH 
