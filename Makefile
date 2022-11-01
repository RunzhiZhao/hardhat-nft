PWD=$(shell pwd)

.PHONY: init
# init env
init:
	@if [ -e $(PWD)/.env ]; then echo "✅ .env file"; else cp $(PWD)/.env_example $(PWD)/.env ; fi;
	@npm install;

.PHONY: test
# run test
test:
	npx hardhat test

.PHONY: build
# compile the contracts
build:
	npx hardhat compile

.PHONY: deploy-local
# deploy a new contract in the localhost network
deploy-local:
	npx hardhat run scripts/deploy.ts --network localhost

.PHONY: upgrade-local
# upgrade the contract in the localhost network
upgrade-local:
	npx hardhat run scripts/upgrade.ts --network localhost

.PHONY: deploy-public
# deploy a new contract in the public network
deploy-public:
	npx hardhat run scripts/deploy.ts --network public

.PHONY: upgrade-public
# upgrade the contract in the public network
upgrade-public:
	npx hardhat run scripts/upgrade.ts --network public

.PHONY: clean
# clean
clean:
	npx hardhat clean

# show help
help:
	@echo ''
	@echo 'Usage:'
	@echo ' make [target]'
	@echo ''
	@echo 'Targets:'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
	helpMessage = match(lastLine, /^# (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 2, RLENGTH); \
			printf "\033[36m%-22s\033[0m %s\n", helpCommand,helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help
