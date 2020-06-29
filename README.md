# Inicjatywy Otwarte

## Description
🚀 [Have a look](https://inicjatywyotwarte.pl/) 🚀

The application is an aggregator of initiatives useful during COVID-19 times and not only. Guests can propose new initiatives from the website, which will then be reviewed by moderators. A user can also upvote initiatives with 'Pomocne' if it was helpful.

- This aplication is the frontend for a backend [Ruby application](https://github.com/netguru/quarantine-helper-be)


## Tech 
This project uses React and builds with yarn.

- Husky with lint-staged
- Stylelint and eslint
- Commitizen
- Prettier

## How to install the application

`yarn install` and `yarn start`

We're fetching JSONs from AWS s3 bucket. In development environment we're using `localstack` that emulates AWS services.

You need to have docker-compose installed, then run:

`docker-compose -f localstack-docker-compose.yml up`

or

`docker-compose -f localstack-docker-compose.yml up -d` to run in background.

Then you need to create bucket `local-bucket`

`aws --endpoint-url=http://localhost:4572 s3 mb s3://local-bucket`

`aws --endpoint-url=http://localhost:4572 s3api put-bucket-acl --bucket local-bucket --acl public-read`

If service is running, application should properly fetch JSONs from faked s3.

You can use localstack with AWS CLI or SDK. You just need to add `--endpoint-url=http://localhost:4572` option.

Example:
`aws --endpoint-url=http://localhost:4572  s3 ls s3://local-bucket/` 

## Code of conduct
- [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md)

## Contributing
How to contribute to inicjatywyotwarte?

- [Contributing guide](CONTRIBUTING.md)

## [License](LICENSE)
We use the GPLv3 Licence
