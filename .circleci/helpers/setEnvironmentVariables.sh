#!/bin/bash
set -eu

cd ~/project/config

## DEV
# use jq for private keys (problem with inserting into file because they can contein sed escape caracters)
jq --arg pk "$MY_ENV_VAR_DEV" '.MY_ENV_VAR = $pk' config.dev.json > config.dev.json.tmp && mv config.dev.json.tmp config.dev.json

# use sed for normal env variables
sed -i "s~###MY_ENV_VAR_2###~${MY_ENV_VAR_2_DEV}~" config.dev.json

## IGR

jq --arg pk "$MY_ENV_VAR_IGR" '.MY_ENV_VAR = $pk' config.igr.json > config.igr.json.tmp && mv config.igr.json.tmp config.igr.json

sed -i "s~###MY_ENV_VAR_2###~${MY_ENV_VAR_2_IGR}~" config.prod.json

## PROD

jq --arg pk "$MY_ENV_VAR_PROD" '.MY_ENV_VAR = $pk' config.prod.json > config.prod.json.tmp && mv config.prod.json.tmp config.prod.json

sed -i "s~###MY_ENV_VAR_2###~${MY_ENV_VAR_2_PROD}~" config.prod.json