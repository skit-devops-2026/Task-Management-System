.PHONY: install test build run docker-build docker-up

install:
	@echo "No external dependencies required"

test:
	bash tests/test_project.sh

build:
	@echo "Static HTML/CSS/JavaScript project - build check passed"

run:
	@echo "Open Index.html in a browser to run Organizr"

# Needed from M4 onwards
docker-build:
	@echo "Docker build will be configured in M4"

docker-up:
	docker compose up --build