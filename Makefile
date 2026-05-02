# Earnflow AI — Makefile
# Targets delegate into frontend/ (created in step 1.2).
# Default target is `help` so running bare `make` lists what's available.

.DEFAULT_GOAL := help
.PHONY: help install dev lint typecheck build test clean

help: ## List available targets
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install frontend dependencies (pnpm)
	cd frontend && pnpm install

dev: ## Run frontend dev server
	cd frontend && pnpm dev

lint: ## Lint frontend
	cd frontend && pnpm lint

typecheck: ## Typecheck frontend
	cd frontend && pnpm typecheck

build: ## Production build of frontend
	cd frontend && pnpm build

test: ## Run frontend tests
	cd frontend && pnpm test

clean: ## Remove frontend build artifacts and node_modules
	cd frontend && rm -rf .next node_modules .turbo coverage
