build:
	denopack -c denopack.config.ts

serve:
	cd dist && python ../tools/serve.py

fmt:
	deno fmt --ignore=dist/