#!/bin/bash

if [[ -z ${GIT_TAG} || ${GIT_TAG} == "" ]]; then
	echo "GIT_TAG can not be empty. Please set additional environment variable GIT_TAG to <${ENVIRONMENT}-#> that matches a git tag from https://github.com/traderjoe-xyz/joe-interface-v2"
	exit 1
fi
