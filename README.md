# react-template
Use this project as a base for any react projects. Keep existing project structure and follow example files logic and principles while extending it. For more info check [Notion page](https://www.notion.so/React-project-initialisation-e309c26c0d8149a2be00e04be03cc7bb)

## Install and run
```
yarn
yarn start
yarn build
yarn test
```
## Husky setup

After installing dependencies run 
```
yarn husky install && echo 'PATH=$PATH:'$PATH >> .husky/_/husky.sh
```
## CI/CD Slack integration
To enable slack notifications on automatic deployments, please, follow the instructions in corresponding section of ./.github/workflows/deploy.yml file
