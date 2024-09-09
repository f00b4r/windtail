install:
	npm ci

build: _build-tailwind _build-arcgis

_build-%: FLAVOR=$*
_build-%:
	npx tailwindcss-cli build src/${FLAVOR}/tailwind.css -c src/${FLAVOR}/tailwind.config.js -o dist/${FLAVOR}.css
	npx clean-css-cli -o dist/${FLAVOR}.min.css dist/${FLAVOR}.css

production: export NODE_ENV=production
production: build

docker:
	docker run -it --rm -v ${CURDIR}:/srv dockette/ci:node16 bash
